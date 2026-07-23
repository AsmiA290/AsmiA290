import { PageHero } from "@/components/page-hero"
import { ScanLine, ShieldAlert } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scanner — Unfair",
  description:
    "An AI tool in development that will read a product's label and flag danger signals in skin-lightening products. It will only ever flag concern or insufficient information — never call a product safe.",
}

export default function ScanPage() {
  return (
    <main>
      <PageHero
        eyebrow="Scanner"
        title="Read the label. Flag the danger."
        intro="An AI tool, in development, that will read a product's label and flag danger signals — mercury indicators, missing or handwritten labels, dangerous actives, and aggressive whitening claims."
      />

      <section className="px-6 pb-28 pt-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4 rounded-2xl border border-clay/40 bg-card p-6 sm:p-8">
            <ShieldAlert
              className="mt-0.5 h-6 w-6 shrink-0 text-clay"
              aria-hidden="true"
            />
            <p className="text-pretty text-sm leading-relaxed text-tone-1/90">
              To be clear about its limits: this scanner will only ever flag
              concern or note that there is insufficient information. It will
              never call a product safe. Absence of a warning is not a
              guarantee — regulation and enforcement vary enormously between
              countries, and unsafe products routinely reach open shelves.
            </p>
          </div>

          {/* Coming soon state */}
          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-tone-3">
              <ScanLine className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Coming soon
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              The scanner is being built and tested. Check back soon, or follow
              along for updates as it becomes available.
            </p>

            {/* AI SCANNER COMPONENT MOUNTS HERE — do not remove */}
          </div>
        </div>
      </section>
    </main>
  )
}
