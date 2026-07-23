import { sources } from "@/data/content"
import { ExternalLink } from "lucide-react"

export function Sources() {
  return (
    <section
      id="sources"
      className="scroll-mt-24 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Sources
        </p>
        <h2 className="mt-3 font-serif text-3xl font-light text-tone-1">
          Every figure, cited.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Credibility is the point. Each statistic on this page links to one of
          the primary sources below.
        </p>

        <ol className="mt-10 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {sources.map((source) => (
            <li
              key={source.id}
              id={`source-${source.id}`}
              className="flex scroll-mt-20 gap-4 bg-card p-5 sm:p-6"
            >
              <span className="font-serif text-xl font-medium text-tone-3">
                {source.id}
              </span>
              <div className="flex flex-col gap-1">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 text-sm font-medium leading-snug text-tone-1 underline decoration-tone-1/20 underline-offset-2 transition-colors hover:text-tone-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  {source.label}
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
                <span className="text-xs text-muted-foreground">
                  {source.publisher} · {source.year}
                </span>
                <span className="break-all font-mono text-[0.7rem] text-muted-foreground/70">
                  {source.url}
                </span>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
