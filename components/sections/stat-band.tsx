import { Citation } from "@/components/citation"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"
import { stats } from "@/data/content"

// Home page: three headline figures. Uses the first three verified stats.
const keyStats = stats.slice(0, 3)

export function StatBand() {
  return (
    <section
      id="key-figures"
      className="scroll-mt-24 border-t border-border px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            The scale
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            Three numbers that tell the story.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {keyStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.1}
              className="flex flex-col gap-3 bg-card p-8"
            >
              <div className="font-serif text-5xl font-medium text-tone-3 md:text-6xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-sm font-medium leading-snug text-tone-1">
                {stat.label}
                <Citation ids={stat.sourceIds} />
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.context}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
