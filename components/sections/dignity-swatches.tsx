"use client"

import { Reveal } from "@/components/reveal"
import { skinTones } from "@/data/content"
import { motion } from "framer-motion"

export function DignitySwatches() {
  return (
    <section
      id="every-shade"
      className="grain relative overflow-hidden border-t border-border px-6 py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 50%, rgba(198,139,89,0.15), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Every shade is whole
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-tone-1 sm:text-5xl md:text-6xl">
            There was never anything to fix.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tone-2/85">
            The full range of human complexion is not a problem to be solved or
            a scale to be climbed. It is simply the beautiful, ordinary truth of
            what people look like.
          </p>
        </Reveal>

        {/* All 8 tones as equal, beautiful swatches — no hierarchy */}
        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-4 gap-3 sm:grid-cols-8 sm:gap-4">
            {skinTones.map((tone, i) => (
              <motion.div
                key={tone.token}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="aspect-square w-full rounded-2xl shadow-lg ring-1 ring-tone-1/10"
                style={{ backgroundColor: tone.hex }}
                role="img"
                aria-label={`${tone.name} skin tone`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
