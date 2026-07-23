import { Citation } from "@/components/citation"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"
import { ToneDivider } from "@/components/tone-divider"
import { stats } from "@/data/content"

export function StatCounters() {
  return (
    <section
      id="stats"
      className="relative snap-start scroll-mt-4 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            The scale is staggering.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            These are not fringe numbers. Skin lightening is one of the
            fastest-growing segments of the global beauty market.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
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

        <Reveal delay={0.2} className="mt-16">
          <ToneDivider label="Every tone the industry tells people to erase" />
        </Reveal>
      </div>
    </section>
  )
}
