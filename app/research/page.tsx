import { PageHero } from "@/components/page-hero"
import { FlaskConical } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research — Unfair",
  description:
    "Research initiatives from the Unfair project, pairing analytical chemistry, mathematics, and medical AI. Coming soon.",
}

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Research"
        title="Research initiatives."
        intro="Pairing analytical chemistry, mathematics, and medical AI to map how unregulated lightening products move through markets and bodies."
      />

      <section className="px-6 pb-28 pt-8">
        <div className="mx-auto max-w-3xl">
          {/* Coming soon state */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-24 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-tone-3">
              <FlaskConical className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Coming soon
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Research initiatives will be published here.
            </p>

            {/* RESEARCH INITIATIVES CONTENT MOUNTS HERE — do not remove */}
          </div>
        </div>
      </section>
    </main>
  )
}
