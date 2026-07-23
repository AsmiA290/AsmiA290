import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
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
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-16">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                Mercury Contamination Study
              </p>
              <h2 className="text-balance font-serif text-2xl font-light leading-tight text-tone-1 sm:text-3xl">
                The persistence of mercury in skin-lightening products.
              </h2>
              <p className="max-w-2xl text-pretty leading-relaxed text-tone-2/80">
                A longitudinal analysis of 1,143 products tested by the Zero Mercury Working Group reveals that mercury contamination remains endemic in the global supply. Despite targeted enforcement campaigns, over 80% of tested products continue to exceed safe thresholds.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mb-8">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/50 p-6">
              <Image
                src="/mercury-trend-chart.png"
                alt="Percent of tested products exceeding the 1ppm mercury threshold, by year. Broad market survey (2017-19) shows 4.7%, 24.2%, and 56.0%. Targeted re-monitoring campaign (2021-25) shows 47.6%, 93.8%, 89.5%, 85.1%, and 80.6%."
                width={1200}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-6">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-tone-1">Key findings:</span> Between 2017 and 2019, the broad market survey documented a troubling upward trend in mercury presence, rising from 4.7% to 56.0%. When targeted re-monitoring resumed in 2021, the crisis deepened: 93.8% of sampled products exceeded safe mercury thresholds, revealing that enforcement gaps and market deregulation have allowed dangerous contamination to proliferate.
              </p>
              <p>
                Even as re-monitoring efforts continued (2022-25), contamination remained stubbornly high at 80.6–93.8%, indicating that surface-level interventions are insufficient. A structural solution—one that combines supply-chain transparency, rigorous testing, and regulatory coordination—is essential.
              </p>
              <p className="pt-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                Source: Zero Mercury Working Group product-level database (1,143 samples)
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
