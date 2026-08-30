"use client"

import { Citation } from "@/components/citation"
import { Reveal } from "@/components/reveal"
import { ingredients } from "@/data/content"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown, TriangleAlert } from "lucide-react"
import { useState } from "react"

export function IngredientExplorer() {
  const [open, setOpen] = useState<string | null>("mercury")

  return (
    <section
      id="ingredients"
      className="relative snap-start scroll-mt-4 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-clay">
            What&apos;s inside
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            Three ingredients. Lasting harm.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The most common active agents in unsafe lightening products are
            regulated ; or banned ; for good reason. Open each to see the gap
            between what the law allows and what is actually found.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          {ingredients.map((ing, i) => {
            const isOpen = open === ing.id
            return (
              <Reveal key={ing.id} delay={i * 0.08}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                    isOpen ? "border-clay/50" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${ing.id}`}
                    onClick={() => setOpen(isOpen ? null : ing.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:px-8"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="font-serif text-2xl font-medium text-tone-1 sm:text-3xl">
                        {ing.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {ing.tagline}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-tone-3 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${ing.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 px-6 pb-8 sm:px-8 md:grid-cols-2">
                          <div className="flex flex-col gap-4">
                            <div>
                              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-tone-3">
                                What it does to skin
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed text-tone-1/90">
                                {ing.whatItDoes}
                              </p>
                            </div>
                            <div>
                              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-clay">
                                <TriangleAlert className="h-3.5 w-3.5" />
                                What it does to the body
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed text-tone-1/90">
                                {ing.whatItDoesToBody}
                                <Citation ids={ing.sourceIds} />
                              </p>
                            </div>
                          </div>

                          <ContrastMeter ingredient={ing} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContrastMeter({
  ingredient,
}: {
  ingredient: (typeof ingredients)[number]
}) {
  const reduce = useReducedMotion()
  return (
    <div className="flex flex-col justify-center gap-4 rounded-xl border border-border bg-secondary/40 p-5">
      {/* Legal limit bar */}
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">
            {ingredient.limitLabel}
          </span>
          <span className="font-mono text-sm font-medium text-tone-2">
            {ingredient.limitValue}
          </span>
        </div>
        <motion.div
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-2 rounded-full bg-tone-3"
        />
      </div>

      {/* Reality bar */}
      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">
            {ingredient.realityLabel}
          </span>
          <span className="font-mono text-sm font-medium text-clay">
            {ingredient.realityValue}
          </span>
        </div>
        <motion.div
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-2 rounded-full bg-clay"
        />
      </div>

      <p className="mt-1 text-pretty text-center text-xs font-medium leading-relaxed text-clay">
        {ingredient.multiplier}
      </p>
    </div>
  )
}
