// app/api/scan/route.js
// Server-side route: holds your Gemini key and calls Google's free tier.
// The key stays on the server and is never exposed to the browser.

// Free-tier models (no cost): "gemini-2.5-flash" is the default.
// Swap to "gemini-2.5-flash-lite" for a higher daily request limit.
// Check the current free-tier list at https://ai.google.dev/gemini-api/docs/rate-limits
const MODEL = "gemini-2.5-flash";

export async function POST(req) {
  try {
    const { imageData, mediaType, prompt } = await req.json();

    if (!imageData || !prompt) {
      return Response.json({ error: "Missing image or prompt." }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return Response.json({ error: "Server is missing GEMINI_API_KEY." }, { status: 500 });
    }

    const gres = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { inline_data: { mime_type: mediaType || "image/jpeg", data: imageData } },
                { text: prompt },
              ],
            },
          ],
          // Ask Gemini for clean JSON so the verdict parses reliably.
          generationConfig: { responseMimeType: "application/json", maxOutputTokens: 1024 },
        }),
      }
    );

    const data = await gres.json();
    console.log("[v0-scan] Gemini response status:", gres.status, "data keys:", Object.keys(data || {}));

    if (!gres.ok || data?.error) {
      // Common free-tier case: 429 = daily/RPM quota hit. Surface it plainly.
      const msg = data?.error?.message || data?.error || "Gemini request failed.";
      console.error("[v0-scan] Gemini error:", msg);
      return Response.json({ error: msg }, { status: gres.status || 500 });
    }

    const candidate = data?.candidates?.[0];
    console.log("[v0-scan] Candidate finishReason:", candidate?.finishReason);
    
    // Check if Gemini blocked the request due to safety filters
    if (candidate?.finishReason === "SAFETY") {
      console.error("[v0-scan] Gemini blocked due to safety filters");
      return Response.json(
        { error: "Gemini safety filters blocked this image. Try a clearer product photo." },
        { status: 400 }
      );
    }

    const text = (candidate?.content?.parts || [])
      .map((p) => p.text || "")
      .join("\n");

    if (!text) {
      return Response.json(
        { error: "Gemini returned empty response. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ text });
  } catch (e) {
    console.error("[v0-scan] Route error:", e.message, e.stack);
    return Response.json({ error: "Server error: " + e.message }, { status: 500 });
  }
}
