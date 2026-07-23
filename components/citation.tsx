import Link from "next/link"

type CitationProps = {
  ids: number[]
}

// Renders superscript citation markers that link to the matching entries
// in the SOURCES section (#source-{id}).
export function Citation({ ids }: CitationProps) {
  return (
    <sup className="ml-0.5 inline-flex gap-0.5 align-super text-[0.6em] font-medium">
      {ids.map((id, i) => (
        <span key={id} className="inline-flex">
          <Link
            href={`/sources#source-${id}`}
            className="rounded-sm text-gold underline decoration-gold/40 underline-offset-2 transition-colors hover:text-tone-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={`See source ${id}`}
          >
            {id}
          </Link>
          {i < ids.length - 1 && <span className="text-gold/60">,</span>}
        </span>
      ))}
    </sup>
  )
}
