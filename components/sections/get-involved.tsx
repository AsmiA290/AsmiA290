"use client"

import { Reveal } from "@/components/reveal"
import { BookOpen, Megaphone, ShieldCheck } from "lucide-react"
import { useState } from "react"

const actions = [
  {
    icon: BookOpen,
    title: "Learn",
    text: "Understand the difference between marketing and dermatology. Knowledge is the first protection.",
  },
  {
    icon: Megaphone,
    title: "Share",
    text: "Talk about colorism openly. Naming the pressure loosens its grip on the next generation.",
  },
  {
    icon: ShieldCheck,
    title: "Support regulation",
    text: "Back enforcement of mercury limits and the WHO Minamata Convention efforts to phase out toxic cosmetics.",
  },
]

export function GetInvolved() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="get-involved"
      className="grain relative overflow-hidden border-t border-border px-6 py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 40%, rgba(198,139,89,0.15), transparent 65%)",
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
            a scale to be climbed. Join the effort to make skin health safer and
            more equitable.
          </p>
        </Reveal>

        {/* Email signup stub — non-functional placeholder */}
        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="signup-email" className="sr-only">
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm text-tone-1 placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-tone-3 px-6 py-3 text-sm font-medium text-tone-8 transition-colors hover:bg-tone-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Keep me posted
            </button>
          </form>
          <p
            className="mt-3 min-h-5 text-sm text-tone-3"
            aria-live="polite"
          >
            {submitted
              ? "Thank you — you're on the list."
              : ""}
          </p>
        </Reveal>

        {/* What you can do */}
        <Reveal delay={0.15}>
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-light text-tone-1">
              What you can do
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
              {actions.map((action) => (
                <div
                  key={action.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <action.icon
                    className="h-6 w-6 text-tone-3"
                    aria-hidden="true"
                  />
                  <p className="mt-4 font-medium text-tone-1">{action.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {action.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
