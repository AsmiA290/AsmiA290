"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="grain relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Warm radial glow, skin-adjacent, not pure black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(166,107,61,0.18), transparent 55%), radial-gradient(100% 90% at 50% 110%, rgba(158,74,56,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-gold"
        >
          The True Cost of Skin Lightening
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-7xl font-light leading-none tracking-tight text-tone-1 text-shadow-warm sm:text-8xl md:text-9xl"
        >
          <span className="italic font-light text-tone-3">Un</span>
          <span className="font-medium">fair</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-3xl text-balance font-serif text-2xl font-light leading-[1.25] text-tone-1/90 sm:text-3xl md:text-4xl"
        >
          A{" "}
          <span className="font-medium italic text-tone-3">
            $10 billion industry
          </span>{" "}
          is built on telling people their skin is a problem.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-tone-2/80 sm:text-lg"
        >
          This is not a story about the people who use these products. It is a
          story about an industry, a centuries-old prejudice, and a regulatory
          gap that lets toxic creams reach millions of hands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#stats"
            className="inline-flex items-center gap-2 rounded-full bg-tone-3 px-8 py-3 text-sm font-medium text-tone-8 transition-colors hover:bg-tone-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            See the evidence
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/colorism"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-tone-1 transition-colors hover:border-tone-4/50 hover:text-tone-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Why the demand exists
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll to the key figures"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-tone-2/70 transition-colors hover:text-tone-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          The figures
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
