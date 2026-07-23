import { skinTones } from "@/data/content"

type ToneDividerProps = {
  label?: string
  className?: string
}

// The skin-tone spectrum used as a literal recurring section divider.
export function ToneDivider({ label, className = "" }: ToneDividerProps) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className="flex h-2 w-full max-w-3xl overflow-hidden rounded-full"
        role="img"
        aria-label="A spectrum of eight human skin tones, from light to deep"
      >
        {skinTones.map((tone) => (
          <div
            key={tone.token}
            className="h-full flex-1"
            style={{ backgroundColor: tone.hex }}
          />
        ))}
      </div>
      {label && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  )
}
