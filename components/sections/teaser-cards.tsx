import { Reveal } from "@/components/reveal"
import { ArrowUpRight, FlaskConical, Globe, ScanLine } from "lucide-react"
import Link from "next/link"

const teasers = [
  {
    href: "/colorism",
    icon: Globe,
    label: "Colorism",
    text: "How the demand was manufactured, from decades of advertising to the 2020 renaming of Fair & Lovely.",
  },
  {
    href: "/scan",
    icon: ScanLine,
    label: "Scanner",
    text: "An AI tool in development to read a product label and flag danger signals. It will never call a product safe.",
  },
  {
    href: "/research",
    icon: FlaskConical,
    label: "Research",
    text: "Initiatives pairing analytical chemistry, mathematics, and medical AI. Coming soon.",
  },
]

export function TeaserCards() {
  return (
    <section className="border-t border-border px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Explore
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl">
            Go deeper into the reasons behind it.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {teasers.map((teaser, i) => (
            <Reveal key={teaser.href} delay={i * 0.08}>
              <Link
                href={teaser.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-tone-4/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="flex items-center justify-between">
                  <teaser.icon
                    className="h-6 w-6 text-tone-3"
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-tone-3"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium text-tone-1">
                  {teaser.label}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {teaser.text}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
