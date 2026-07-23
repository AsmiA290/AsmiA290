"use client"

import { Reveal } from "@/components/reveal"
import { ToneDivider } from "@/components/tone-divider"
import { efforts } from "@/data/content"

export function Efforts() {
  return (
    <section
      id="efforts"
      className="relative scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <ToneDivider className="mb-14" />

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Our Efforts
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            Turning evidence into a movement against{" "}
            <span className="italic text-tone-3">an unfair industry.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-tone-2/80">
            Awareness alone is not enough. This initiative pairs rigorous
            science with public education to make skin health safer and more
            equitable — and to dismantle the idea that any complexion needs
            fixing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {efforts.map((effort, i) => (
            <Reveal key={effort.title} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-tone-4/40">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-medium text-tone-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-tone-1">
                    {effort.title}
                  </h3>
                </div>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-tone-2/80">
                  {effort.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
