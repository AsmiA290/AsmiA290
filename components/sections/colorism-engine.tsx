"use client"

import { Citation } from "@/components/citation"
import { Reveal } from "@/components/reveal"
import { colorismBeats } from "@/data/content"
import { motion, useReducedMotion } from "framer-motion"

export function ColorismEngine() {
  const reduce = useReducedMotion()

  return (
    <section
      id="colorism"
      className="relative snap-start scroll-mt-4 overflow-hidden border-t border-border px-6 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 10%, rgba(123,75,42,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            The colorism engine
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            The demand was manufactured.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No one is born believing their skin is too dark. That belief was
            built, advertised, and sold — generation after generation.
          </p>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-0">
          {colorismBeats.map((beat, i) => (
            <Reveal as="li" key={beat.year} delay={i * 0.1} className="relative">
              <div className="flex gap-6 pb-10">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <motion.span
                    initial={{ scale: reduce ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-tone-3"
                  />
                  {i < colorismBeats.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-border" />
                  )}
                </div>

                <div className="pb-2">
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-tone-3">
                    {beat.year}
                  </p>
                  <p className="mt-3 text-pretty text-lg leading-relaxed text-tone-1/90">
                    {beat.text}
                    <Citation ids={beat.sourceIds} />
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <figure className="mt-6 rounded-2xl border border-border bg-card p-8">
            <blockquote className="text-pretty font-serif text-2xl font-light italic leading-snug text-tone-2 sm:text-3xl">
              &ldquo;Renaming a product is not the same as undoing what it
              taught.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              The 2020 shift from <span className="text-tone-2">Fair &amp; Lovely</span>{" "}
              to <span className="text-tone-2">Glow &amp; Lovely</span> dropped
              the language — but the market it created remains.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
