import { Reveal } from "@/components/reveal"

type PageHeroProps = {
  eyebrow: string
  title: string
  intro?: string
}

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden px-6 pb-6 pt-20 md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 50% 0%, rgba(166,107,61,0.16), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
          <h1 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-tone-1 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-tone-2/85">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
