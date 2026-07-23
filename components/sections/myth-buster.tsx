"use client"

import { Reveal } from "@/components/reveal"
import { quiz } from "@/data/content"
import { AnimatePresence, motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { useState } from "react"

type AnswerState = Record<string, boolean> // questionId -> the boolean the user chose

export function MythBuster() {
  const [answers, setAnswers] = useState<AnswerState>({})

  const answeredCount = Object.keys(answers).length

  return (
    <section
      id="quiz"
      className="relative snap-start scroll-mt-4 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Myth-buster
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            What do you actually believe?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Decide whether each statement is true or false. There&apos;s no
            score and no judgment — just a chance to check what the industry has
            taught us.
          </p>
          <p className="mt-3 text-sm text-tone-3" aria-live="polite">
            {answeredCount} of {quiz.length} explored
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {quiz.map((q, i) => {
            const chosen = answers[q.id]
            const hasAnswered = chosen !== undefined
            const isCorrect = hasAnswered && chosen === q.isTrue

            return (
              <Reveal key={q.id} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <p className="text-pretty font-serif text-xl font-light leading-snug text-tone-1 sm:text-2xl">
                    {q.question}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[true, false].map((option) => {
                      const selected = chosen === option
                      return (
                        <button
                          key={String(option)}
                          type="button"
                          aria-pressed={selected}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: option }))
                          }
                          className={`min-w-24 rounded-full border px-6 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                            selected
                              ? "border-tone-3 bg-tone-3 text-tone-8"
                              : "border-border text-muted-foreground hover:border-tone-5 hover:text-tone-2"
                          }`}
                        >
                          {option ? "True" : "False"}
                        </button>
                      )
                    })}
                  </div>

                  <AnimatePresence initial={false}>
                    {hasAnswered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 flex gap-3 rounded-xl border border-border bg-secondary/40 p-4">
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                              isCorrect
                                ? "bg-tone-5 text-tone-1"
                                : "bg-clay text-tone-1"
                            }`}
                          >
                            {isCorrect ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <X className="h-4 w-4" />
                            )}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-tone-2">
                              {isCorrect
                                ? "Exactly."
                                : "A common belief — but no."}{" "}
                              This statement is {q.isTrue ? "true" : "false"}.
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {q.explanation}
                            </p>
                          </div>
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
