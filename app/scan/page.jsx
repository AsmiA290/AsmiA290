import React, { useState, useRef } from "react";

// ── Brand tokens ──────────────────────────────────────────────
const C = {
  bg: "#1a120b",
  panel: "#241a10",
  panelHi: "#2c2013",
  border: "#3a2a1a",
  ink: "#f3e9da",
  muted: "#b6a288",
  faint: "#806f59",
  ochre: "#d4912f",
  caution: "#e0a23c",
  concern: "#cc5333",
  info: "#7e94a0",
};

const LANGS = [
  { label: "English", name: "English" },
  { label: "हिन्दी", name: "Hindi" },
  { label: "اردو", name: "Urdu" },
  { label: "বাংলা", name: "Bengali" },
  { label: "Kiswahili", name: "Swahili" },
  { label: "Yorùbá", name: "Yoruba" },
  { label: "Français", name: "French" },
  { label: "Español", name: "Spanish" },
  { label: "Filipino", name: "Filipino" },
  { label: "العربية", name: "Arabic" },
];

const RTL = new Set(["Urdu", "Arabic"]);

// ── UI translations ───────────────────────────────────────────
// Every visible interface string. Machine-assisted translations — have a
// native speaker review before production, especially lower-resourced langs.
const STRINGS = {
  English: {
    sub: "Scanner",
    tagline: "Point your camera at the back of a lightening product. This tool looks for the danger signs the label tries to hide.",
    dropTitle: "Scan or upload a photo",
    dropHint: "Use the back panel, where ingredients and warnings sit",
    check: "Check this product",
    retake: "Retake",
    loading: "Reading the label and the warning signs…",
    error: "The scan could not be read. Try again with a clear, well-lit photo of the back panel.",
    neverSafe: "This tool can flag danger. It can never confirm a product is safe — a camera cannot see mercury.",
    flagsHead: "What raised a flag",
    plainHead: "In plain words",
    doHead: "What you can do",
    again: "Scan another product",
    footer: "Educational tool, not medical advice. It raises informed suspicion — it does not diagnose, and it does not clear any product.",
    riskHigh: "High concern",
    riskCaution: "Use caution",
    riskInfo: "Not enough to tell",
  },
  Hindi: {
    sub: "स्कैनर",
    tagline: "अपने कैमरे को गोरा करने वाले उत्पाद के पीछे की ओर रखें। यह टूल उन ख़तरों को ढूँढता है जिन्हें लेबल छिपाने की कोशिश करता है।",
    dropTitle: "फ़ोटो स्कैन करें या अपलोड करें",
    dropHint: "पीछे का पैनल इस्तेमाल करें, जहाँ सामग्री और चेतावनियाँ होती हैं",
    check: "इस उत्पाद की जाँच करें",
    retake: "फिर से लें",
    loading: "लेबल और चेतावनी के संकेत पढ़े जा रहे हैं…",
    error: "स्कैन पढ़ा नहीं जा सका। पीछे के पैनल की साफ़, अच्छी रोशनी वाली फ़ोटो के साथ दोबारा कोशिश करें।",
    neverSafe: "यह टूल ख़तरे की चेतावनी दे सकता है। यह कभी पुष्टि नहीं कर सकता कि उत्पाद सुरक्षित है — कैमरा पारा नहीं देख सकता।",
    flagsHead: "क्या चेतावनी मिली",
    plainHead: "आसान शब्दों में",
    doHead: "आप क्या कर सकते हैं",
    again: "दूसरा उत्पाद स्कैन करें",
    footer: "यह शैक्षिक टूल है, चिकित्सा सलाह नहीं। यह सोच-समझकर संदेह जगाता है — यह निदान नहीं करता, और किसी उत्पाद को सुरक्षित घोषित नहीं करता।",
    riskHigh: "गंभीर चिंता",
    riskCaution: "सावधानी बरतें",
    riskInfo: "बता पाना कठिन",
  },
  Urdu: {
    sub: "اسکینر",
    tagline: "اپنے کیمرے کو رنگ گورا کرنے والی مصنوعات کی پشت کی طرف رکھیں۔ یہ ٹول اُن خطرات کو تلاش کرتا ہے جنہیں لیبل چھپانے کی کوشش کرتا ہے۔",
    dropTitle: "تصویر اسکین کریں یا اپ لوڈ کریں",
    dropHint: "پچھلا حصہ استعمال کریں، جہاں اجزاء اور انتباہات ہوتے ہیں",
    check: "اس پروڈکٹ کو چیک کریں",
    retake: "دوبارہ لیں",
    loading: "لیبل اور انتباہی نشانیاں پڑھی جا رہی ہیں…",
    error: "اسکین پڑھا نہیں جا سکا۔ پچھلے حصے کی صاف اور روشن تصویر کے ساتھ دوبارہ کوشش کریں۔",
    neverSafe: "یہ ٹول خطرے کی نشاندہی کر سکتا ہے۔ یہ کبھی اس بات کی تصدیق نہیں کر سکتا کہ پروڈکٹ محفوظ ہے — کیمرہ پارہ نہیں دیکھ سکتا۔",
    flagsHead: "کس چیز نے خبردار کیا",
    plainHead: "آسان الفاظ میں",
    doHead: "آپ کیا کر سکتے ہیں",
    again: "دوسری پروڈکٹ اسکین کریں",
    footer: "یہ تعلیمی ٹول ہے، طبی مشورہ نہیں۔ یہ سوچ سمجھ کر شک پیدا کرتا ہے — یہ تشخیص نہیں کرتا، اور کسی پروڈکٹ کو محفوظ قرار نہیں دیتا۔",
    riskHigh: "سنگین تشویش",
    riskCaution: "احتیاط کریں",
    riskInfo: "بتانا مشکل",
  },
  Bengali: {
    sub: "স্ক্যানার",
    tagline: "আপনার ক্যামেরা ফর্সাকারী পণ্যের পেছনের দিকে ধরুন। এই টুল সেই বিপদগুলো খোঁজে যা লেবেল লুকাতে চায়।",
    dropTitle: "ছবি স্ক্যান করুন বা আপলোড করুন",
    dropHint: "পেছনের প্যানেল ব্যবহার করুন, যেখানে উপাদান ও সতর্কতা থাকে",
    check: "এই পণ্যটি পরীক্ষা করুন",
    retake: "আবার তুলুন",
    loading: "লেবেল ও সতর্কতার চিহ্ন পড়া হচ্ছে…",
    error: "স্ক্যানটি পড়া যায়নি। পেছনের প্যানেলের পরিষ্কার, ভালো আলোর ছবি দিয়ে আবার চেষ্টা করুন।",
    neverSafe: "এই টুল বিপদ চিহ্নিত করতে পারে। এটি কখনও নিশ্চিত করতে পারে না যে পণ্যটি নিরাপদ — ক্যামেরা পারদ দেখতে পায় না।",
    flagsHead: "কী সতর্ক করল",
    plainHead: "সহজ ভাষায়",
    doHead: "আপনি কী করতে পারেন",
    again: "আরেকটি পণ্য স্ক্যান করুন",
    footer: "এটি শিক্ষামূলক টুল, চিকিৎসা পরামর্শ নয়। এটি ভেবে সন্দেহ জাগায় — রোগ নির্ণয় করে না, এবং কোনো পণ্যকে নিরাপদ ঘোষণা করে না।",
    riskHigh: "গুরুতর উদ্বেগ",
    riskCaution: "সতর্ক থাকুন",
    riskInfo: "বলা কঠিন",
  },
  Swahili: {
    sub: "Skana",
    tagline: "Elekeza kamera yako nyuma ya bidhaa ya kung'arisha ngozi. Zana hii hutafuta dalili za hatari ambazo lebo hujaribu kuficha.",
    dropTitle: "Changanua au pakia picha",
    dropHint: "Tumia upande wa nyuma, ambapo viungo na maonyo huwekwa",
    check: "Kagua bidhaa hii",
    retake: "Piga tena",
    loading: "Inasoma lebo na dalili za hatari…",
    error: "Picha haikusomeka. Jaribu tena kwa picha iliyo wazi na yenye mwanga ya upande wa nyuma.",
    neverSafe: "Zana hii inaweza kuonya hatari. Haiwezi kamwe kuthibitisha kuwa bidhaa ni salama — kamera haiwezi kuona zebaki.",
    flagsHead: "Kilichoonya",
    plainHead: "Kwa lugha rahisi",
    doHead: "Unachoweza kufanya",
    again: "Changanua bidhaa nyingine",
    footer: "Hii ni zana ya kielimu, si ushauri wa kitiba. Inaamsha shaka kwa busara — haitambui ugonjwa, wala haithibitishi bidhaa yoyote kuwa salama.",
    riskHigh: "Wasiwasi mkubwa",
    riskCaution: "Kuwa mwangalifu",
    riskInfo: "Vigumu kusema",
  },
  Yoruba: {
    sub: "Ẹ̀rọ Àyẹ̀wò",
    tagline: "Tọ́ kamẹra rẹ sí ẹ̀yìn ọjà tí ń mú awọ funfun. Irinṣẹ́ yìí ń wá àwọn àmì ewu tí àpèjúwe ń gbìyànjú láti fi pamọ́.",
    dropTitle: "Ya àwòrán tàbí gbé e sókè",
    dropHint: "Lo ẹ̀yìn ìgò, níbi tí àwọn ohun ìṣiṣẹ́ àti ìkìlọ̀ wà",
    check: "Ṣàyẹ̀wò ọjà yìí",
    retake: "Tún ya",
    loading: "Ń ka àpèjúwe àti àwọn àmì ìkìlọ̀…",
    error: "A kò lè ka àwòrán náà. Tún gbìyànjú pẹ̀lú àwòrán tó mọ́, tó ní ìmọ́lẹ̀ ti ẹ̀yìn ìgò.",
    neverSafe: "Irinṣẹ́ yìí lè kìlọ̀ ewu. Kò lè jẹ́rìí rí pé ọjà kan ní ààbò — kamẹra kò lè rí mercury.",
    flagsHead: "Ohun tó kìlọ̀",
    plainHead: "Ní èdè tó rọrùn",
    doHead: "Ohun tí o lè ṣe",
    again: "Ṣàyẹ̀wò ọjà mìíràn",
    footer: "Irinṣẹ́ ẹ̀kọ́ ni èyí, kì í ṣe ìmọ̀ràn ìṣègùn. Ó ń ru ìfura ọlọ́gbọ́n sókè — kò ṣe àyẹ̀wò àìsàn, kò sì fi ọjà kankan hàn pé ó ní ààbò.",
    riskHigh: "Àníyàn ńlá",
    riskCaution: "Ṣọ́ra",
    riskInfo: "Ó ṣòro láti sọ",
  },
  French: {
    sub: "Scanner",
    tagline: "Pointez votre caméra vers le dos d'un produit éclaircissant. Cet outil cherche les signes de danger que l'étiquette tente de cacher.",
    dropTitle: "Scanner ou importer une photo",
    dropHint: "Utilisez le dos de l'emballage, où figurent les ingrédients et les avertissements",
    check: "Vérifier ce produit",
    retake: "Reprendre",
    loading: "Lecture de l'étiquette et des signes d'alerte…",
    error: "Le scan n'a pas pu être lu. Réessayez avec une photo nette et bien éclairée du dos de l'emballage.",
    neverSafe: "Cet outil peut signaler un danger. Il ne peut jamais confirmer qu'un produit est sûr — une caméra ne voit pas le mercure.",
    flagsHead: "Ce qui a alerté",
    plainHead: "En mots simples",
    doHead: "Ce que vous pouvez faire",
    again: "Scanner un autre produit",
    footer: "Outil éducatif, pas un avis médical. Il éveille un soupçon éclairé — il ne diagnostique pas et ne déclare aucun produit sûr.",
    riskHigh: "Préoccupation élevée",
    riskCaution: "Prudence",
    riskInfo: "Impossible à dire",
  },
  Spanish: {
    sub: "Escáner",
    tagline: "Apunta tu cámara a la parte trasera de un producto aclarante. Esta herramienta busca las señales de peligro que la etiqueta intenta ocultar.",
    dropTitle: "Escanear o subir una foto",
    dropHint: "Usa la parte trasera, donde están los ingredientes y las advertencias",
    check: "Revisar este producto",
    retake: "Repetir",
    loading: "Leyendo la etiqueta y las señales de advertencia…",
    error: "No se pudo leer el escaneo. Inténtalo de nuevo con una foto clara y bien iluminada de la parte trasera.",
    neverSafe: "Esta herramienta puede señalar peligro. Nunca puede confirmar que un producto es seguro — una cámara no puede ver el mercurio.",
    flagsHead: "Qué generó una alerta",
    plainHead: "En palabras sencillas",
    doHead: "Qué puedes hacer",
    again: "Escanear otro producto",
    footer: "Herramienta educativa, no es consejo médico. Despierta una sospecha informada — no diagnostica ni declara seguro ningún producto.",
    riskHigh: "Gran preocupación",
    riskCaution: "Precaución",
    riskInfo: "No se puede determinar",
  },
  Filipino: {
    sub: "Scanner",
    tagline: "Itutok ang iyong camera sa likod ng pampaputing produkto. Hinahanap ng tool na ito ang mga senyales ng panganib na itinatago ng label.",
    dropTitle: "Mag-scan o mag-upload ng larawan",
    dropHint: "Gamitin ang likod na bahagi, kung saan nakalagay ang sangkap at babala",
    check: "Suriin ang produktong ito",
    retake: "Ulitin",
    loading: "Binabasa ang label at mga babala…",
    error: "Hindi nabasa ang scan. Subukan muli gamit ang malinaw at maliwanag na larawan ng likod na bahagi.",
    neverSafe: "Maaaring magbabala ang tool na ito ng panganib. Hindi nito kailanman makukumpirma na ligtas ang isang produkto — hindi nakikita ng camera ang mercury.",
    flagsHead: "Ano ang nagbigay-babala",
    plainHead: "Sa simpleng salita",
    doHead: "Ano ang magagawa mo",
    again: "Mag-scan ng ibang produkto",
    footer: "Pang-edukasyong tool ito, hindi medikal na payo. Nagdudulot ito ng matalinong pag-aalinlangan — hindi ito nagdya-diagnose, at hindi nito sinasabing ligtas ang anumang produkto.",
    riskHigh: "Mataas na alalahanin",
    riskCaution: "Mag-ingat",
    riskInfo: "Mahirap masabi",
  },
  Arabic: {
    sub: "الماسح",
    tagline: "وجّه الكاميرا نحو الجهة الخلفية لمنتج تفتيح البشرة. تبحث هذه الأداة عن علامات الخطر التي يحاول الملصق إخفاءها.",
    dropTitle: "امسح أو ارفع صورة",
    dropHint: "استخدم الجهة الخلفية، حيث توجد المكوّنات والتحذيرات",
    check: "افحص هذا المنتج",
    retake: "إعادة الالتقاط",
    loading: "تجري قراءة الملصق وعلامات التحذير…",
    error: "تعذّرت قراءة الصورة. حاول مرة أخرى بصورة واضحة وجيدة الإضاءة للجهة الخلفية.",
    neverSafe: "يمكن لهذه الأداة أن تنبّه إلى الخطر. لا يمكنها أبداً تأكيد أن المنتج آمن — لا ترى الكاميرا الزئبق.",
    flagsHead: "ما الذي أثار التنبيه",
    plainHead: "بكلمات بسيطة",
    doHead: "ما الذي يمكنك فعله",
    again: "افحص منتجاً آخر",
    footer: "أداة تعليمية، وليست نصيحة طبية. تثير شكاً واعياً — لا تُشخّص، ولا تؤكّد سلامة أي منتج.",
    riskHigh: "قلق شديد",
    riskCaution: "توخَّ الحذر",
    riskInfo: "يصعب الجزم",
  },
};

const RISK_COLOR = {
  high_concern: C.concern,
  caution: C.caution,
  insufficient_info: C.info,
};
const RISK_KEY = {
  high_concern: "riskHigh",
  caution: "riskCaution",
  insufficient_info: "riskInfo",
};

function buildPrompt(language) {
  return `You are a risk-screening assistant for skin-lightening and skin-whitening cosmetic products. You are looking at a photo of a product (usually the back of a bottle, tube, jar, or its packaging).

Your job is NOT to decode an ingredient list and pronounce a product clean. The dangerous products are dangerous precisely because they HIDE what is in them. So you ASSUME THE LABEL MAY BE LYING OR INCOMPLETE and you screen for risk using every available signal.

NEVER tell the user a product is "safe", "clean", "fine", or "low risk". A phone camera cannot detect mercury or hidden steroids. The most you may ever conclude is "use caution" or "not enough to tell". There is no safe verdict in your output set.

READING THE LABEL: The label may be printed in ANY language or script — Hindi, Urdu, Bengali, Arabic, Thai, Chinese, Swahili, French, and so on. Read it directly, whatever the script. A label being in a non-English or local language is NOT a red flag on its own; most safe products in these markets are labelled in local languages. The danger signal is MISSING information, never the choice of language.

Apply these red flags:
- A warning to avoid contact with gold, silver, aluminium, or jewellery → classic sign of MERCURY (it reacts with metals). Treat as HIGH severity even if mercury is not listed.
- No ingredient list and no manufacturer/origin anywhere on the pack, OR a handwritten/handmade label, OR clearly repackaged or photocopied packaging → HIGH severity: the contents are unknowable, and this pattern correlates with contamination. (Note: a printed ingredient list in a local language is fine — only its ABSENCE counts.)
- Named dangerous actives in ANY language or transliteration: mercury, mercurous chloride, calomel, mercuric/ammoniated mercury, hydroquinone, clobetasol, betamethasone, or other potent topical steroids sold as a cosmetic → HIGH severity.
- Rapid-results or aggressive whitening/bleaching claims ("whitens in 7 days", "removes melanin", "instant fairness"), in any language → MEDIUM severity.
- Repackaged no-name product, missing manufacturer, suspicious import → MEDIUM severity.

If the image is not a product label, or is too blurry to read, return risk_level "insufficient_info" and ask for a clearer photo of the back panel.

LANGUAGE OF YOUR REPLY: Write all human-readable text in ${language}, in simple wording for a reader who may have low literacy. BUT keep the JSON structure in English: the keys, and the enum values (risk_level must be exactly high_concern, caution, or insufficient_info; severity must be exactly high, medium, or info; booleans stay true/false). Translate ONLY the values of headline, title, detail, name, explanation, what_to_do, and honesty_note.

OUTPUT FORMAT: Your entire reply must be the JSON object alone — the first character is { and the last character is }. No markdown, no code fences, no text before or after, in any language. Use exactly this shape:
{
  "risk_level": "high_concern" | "caution" | "insufficient_info",
  "headline": "one short plain sentence",
  "label_readable": true or false,
  "flags": [ { "severity": "high" | "medium" | "info", "title": "short", "detail": "one plain sentence on why it matters" } ],
  "concerns": [ { "name": "ingredient or signal", "severity": "high" | "medium", "explanation": "what it is and what it does, in plain words" } ],
  "what_to_do": [ "short action", "short action" ],
  "honesty_note": "a reminder that this tool can flag danger but can never confirm a product is safe, and that a camera cannot see mercury"
}`;
}

export default function App() {
  const [lang, setLang] = useState(LANGS[0]);
  const [preview, setPreview] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileRef = useRef(null);

  const t = STRINGS[lang.name] || STRINGS.English;
  const rtl = RTL.has(lang.name);

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setResult(null);
    setError(null);
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      setPreview(url);
      setImgData(String(url).split(",")[1]);
      setMediaType(file.type || "image/jpeg");
    };
    reader.readAsDataURL(file);
  }

  async function analyze() {
    if (!imgData) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: [
                { type: "image", source: { type: "base64", media_type: mediaType, data: imgData } },
                { type: "text", text: buildPrompt(lang.name) },
              ],
            },
          ],
        }),
      });
      const data = await res.json();
      const text = (data.content || [])
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n");
      // Tolerate code fences or stray text around the JSON (common with
      // non-Latin replies): pull out the first {...last } and parse that.
      let clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      const start = clean.indexOf("{");
      const end = clean.lastIndexOf("}");
      if (start !== -1 && end !== -1 && end > start) {
        clean = clean.slice(start, end + 1);
      }
      const parsed = JSON.parse(clean);
      if (!RISK_COLOR[parsed.risk_level]) parsed.risk_level = "insufficient_info";
      setResult(parsed);
    } catch (err) {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setPreview(null);
    setImgData(null);
    setResult(null);
    setError(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  const riskColor = result ? RISK_COLOR[result.risk_level] : null;
  const riskLabel = result ? t[RISK_KEY[result.risk_level]] : "";

  return (
    <div style={s.root} dir={rtl ? "rtl" : "ltr"}>
      <style>{css}</style>
      <div style={s.wrap}>
        <header style={s.head}>
          <div style={s.brand}>
            <span style={s.brandMark}>Unfair</span>
            <span style={s.brandSub}>{t.sub}</span>
          </div>
          <p style={s.tagline}>{t.tagline}</p>
        </header>

        <div style={s.langRow}>
          {LANGS.map((l) => (
            <button
              key={l.name}
              onClick={() => setLang(l)}
              style={{ ...s.langChip, ...(lang.name === l.name ? s.langChipOn : {}) }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {!preview && (
          <label style={s.drop}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={onFile}
              style={{ display: "none" }}
            />
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={C.ochre} strokeWidth="1.4">
              <path d="M3 9a2 2 0 0 1 2-2h2l1.5-2h7L19 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <circle cx="13" cy="13.5" r="3.5" />
            </svg>
            <span style={s.dropTitle}>{t.dropTitle}</span>
            <span style={s.dropHint}>{t.dropHint}</span>
          </label>
        )}

        {preview && (
          <div style={s.previewBox}>
            <img src={preview} alt="" style={s.previewImg} />
            {!result && !loading && (
              <div style={s.actions}>
                <button style={s.primary} onClick={analyze}>
                  {t.check}
                </button>
                <button style={s.ghost} onClick={reset}>
                  {t.retake}
                </button>
              </div>
            )}
          </div>
        )}

        {loading && (
          <div style={s.loading}>
            <div className="scanbar" />
            <span style={s.loadingText}>{t.loading}</span>
          </div>
        )}

        {error && <div style={s.error}>{error}</div>}

        {result && riskColor && (
          <div style={s.result}>
            <div style={{ ...s.verdict, borderColor: riskColor }}>
              <div style={{ ...s.verdictTag, background: riskColor }}>{riskLabel}</div>
              <p style={s.headline}>{result.headline}</p>
            </div>

            <div style={s.neverSafe}>{t.neverSafe}</div>

            {Array.isArray(result.flags) && result.flags.length > 0 && (
              <section style={s.section}>
                <h3 style={s.h3}>{t.flagsHead}</h3>
                {result.flags.map((f, i) => (
                  <div key={i} style={s.flag}>
                    <Sev severity={f.severity} />
                    <div>
                      <div style={s.flagTitle}>{f.title}</div>
                      <div style={s.flagDetail}>{f.detail}</div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {Array.isArray(result.concerns) && result.concerns.length > 0 && (
              <section style={s.section}>
                <h3 style={s.h3}>{t.plainHead}</h3>
                {result.concerns.map((c, i) => (
                  <div key={i} style={s.concern}>
                    <div style={s.concernHead}>
                      <span style={s.concernName}>{c.name}</span>
                      <Sev severity={c.severity} small />
                    </div>
                    <div style={s.flagDetail}>{c.explanation}</div>
                  </div>
                ))}
              </section>
            )}

            {Array.isArray(result.what_to_do) && result.what_to_do.length > 0 && (
              <section style={s.section}>
                <h3 style={s.h3}>{t.doHead}</h3>
                <ul style={s.todo}>
                  {result.what_to_do.map((x, i) => (
                    <li key={i} style={s.todoItem}>
                      {x}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {result.honesty_note && <p style={s.honesty}>{result.honesty_note}</p>}

            <button style={{ ...s.ghost, width: "100%", marginTop: 14 }} onClick={reset}>
              {t.again}
            </button>
          </div>
        )}

        <footer style={s.foot}>{t.footer}</footer>
      </div>
    </div>
  );
}

function Sev({ severity, small }) {
  const map = {
    high: { c: C.concern, g: "▲" },
    medium: { c: C.caution, g: "●" },
    info: { c: C.info, g: "ⓘ" },
  };
  const m = map[severity] || map.info;
  return (
    <span
      style={{
        color: m.c,
        border: `1px solid ${m.c}`,
        borderRadius: 999,
        width: small ? 18 : 22,
        height: small ? 18 : 22,
        minWidth: small ? 18 : 22,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: small ? 10 : 12,
        marginTop: small ? 0 : 1,
      }}
    >
      {m.g}
    </span>
  );
}

// ── Styles ────────────────────────────────────────────────────
const s = {
  root: { background: C.bg, minHeight: "100vh", color: C.ink, fontFamily: "system-ui, -apple-system, sans-serif" },
  wrap: { maxWidth: 460, margin: "0 auto", padding: "28px 18px 40px" },
  head: { marginBottom: 18 },
  brand: { display: "flex", alignItems: "baseline", gap: 8 },
  brandMark: { fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 700, letterSpacing: "-0.5px" },
  brandSub: { fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", color: C.ochre },
  tagline: { color: C.muted, fontSize: 14, lineHeight: 1.5, marginTop: 8 },
  langRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 },
  langChip: {
    background: "transparent", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 999,
    padding: "5px 11px", fontSize: 13, cursor: "pointer",
  },
  langChipOn: { background: C.panelHi, color: C.ink, borderColor: C.ochre },
  drop: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center",
    border: `1.5px dashed ${C.border}`, borderRadius: 16, padding: "38px 20px", cursor: "pointer",
    background: C.panel,
  },
  dropTitle: { fontSize: 16, fontWeight: 600, marginTop: 4 },
  dropHint: { fontSize: 13, color: C.faint },
  previewBox: { borderRadius: 16, overflow: "hidden", background: C.panel, border: `1px solid ${C.border}` },
  previewImg: { width: "100%", display: "block", maxHeight: 280, objectFit: "cover" },
  actions: { display: "flex", gap: 10, padding: 14 },
  primary: {
    flex: 1, background: C.ochre, color: "#231603", border: "none", borderRadius: 10, padding: "13px",
    fontSize: 15, fontWeight: 700, cursor: "pointer",
  },
  ghost: {
    background: "transparent", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 10,
    padding: "13px 16px", fontSize: 14, cursor: "pointer",
  },
  loading: { marginTop: 18, padding: "20px 4px" },
  loadingText: { color: C.muted, fontSize: 14, display: "block", marginTop: 12 },
  error: {
    marginTop: 16, background: "#2a1712", border: `1px solid ${C.concern}`, color: "#f0c4b4",
    borderRadius: 12, padding: 14, fontSize: 14, lineHeight: 1.5,
  },
  result: { marginTop: 18 },
  verdict: { border: "2px solid", borderRadius: 14, padding: 16, background: C.panel },
  verdictTag: {
    display: "inline-block", color: "#1a120b", fontWeight: 800, fontSize: 12, letterSpacing: "0.5px",
    textTransform: "uppercase", borderRadius: 6, padding: "4px 9px",
  },
  headline: { fontSize: 18, lineHeight: 1.4, marginTop: 10, marginBottom: 0, fontFamily: "Georgia, serif" },
  neverSafe: {
    marginTop: 12, fontSize: 13, lineHeight: 1.5, color: C.ink, background: C.panelHi,
    borderInlineStart: `3px solid ${C.ochre}`, padding: "11px 13px",
    borderStartEndRadius: 8, borderEndEndRadius: 8,
  },
  section: { marginTop: 20 },
  h3: { fontSize: 13, textTransform: "uppercase", letterSpacing: "1.2px", color: C.faint, margin: "0 0 10px" },
  flag: { display: "flex", gap: 11, padding: "10px 0", borderTop: `1px solid ${C.border}` },
  flagTitle: { fontSize: 15, fontWeight: 600 },
  flagDetail: { fontSize: 14, color: C.muted, lineHeight: 1.5, marginTop: 2 },
  concern: { padding: "11px 0", borderTop: `1px solid ${C.border}` },
  concernHead: { display: "flex", alignItems: "center", gap: 8, marginBottom: 3 },
  concernName: { fontSize: 15, fontWeight: 600, fontFamily: "Georgia, serif" },
  todo: { margin: 0, paddingInlineStart: 18 },
  todoItem: { fontSize: 14, color: C.ink, lineHeight: 1.6, marginBottom: 4 },
  honesty: { marginTop: 18, fontSize: 13, color: C.faint, lineHeight: 1.6, fontStyle: "italic" },
  foot: { marginTop: 26, fontSize: 12, color: C.faint, lineHeight: 1.6, textAlign: "center" },
};

const css = `
  .scanbar {
    height: 4px; width: 100%; border-radius: 4px;
    background: linear-gradient(90deg, ${C.border} 0%, ${C.ochre} 50%, ${C.border} 100%);
    background-size: 200% 100%; animation: slide 1.2s linear infinite;
  }
  @keyframes slide { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
  * { box-sizing: border-box; }
  button:focus-visible { outline: 2px solid ${C.ochre}; outline-offset: 2px; }
`;
