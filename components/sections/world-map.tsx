"use client"

import { Citation } from "@/components/citation"
import { Reveal } from "@/components/reveal"
import { countryInterest, regions } from "@/data/content"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"

// Public world topojson (ISO numeric ids) used by react-simple-maps.
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Map a 0–100 interest score onto the skin-tone spectrum (deeper = higher).
function toneFor(interest: number): string {
  if (interest >= 90) return "var(--tone-8)"
  if (interest >= 75) return "var(--tone-7)"
  if (interest >= 60) return "var(--tone-6)"
  if (interest >= 45) return "var(--tone-5)"
  if (interest >= 30) return "var(--tone-4)"
  if (interest >= 15) return "var(--tone-3)"
  return "var(--tone-2)"
}

const legendStops = [
  { label: "Low", tone: "var(--tone-2)" },
  { tone: "var(--tone-3)" },
  { tone: "var(--tone-4)" },
  { tone: "var(--tone-5)" },
  { tone: "var(--tone-6)" },
  { tone: "var(--tone-7)" },
  { label: "High", tone: "var(--tone-8)" },
]

export function WorldMap() {
  const interestByIso = useMemo(() => {
    const m = new Map<string, (typeof countryInterest)[number]>()
    for (const c of countryInterest) m.set(c.iso, c)
    return m
  }, [])

  const [hovered, setHovered] = useState<
    (typeof countryInterest)[number] | null
  >(null)

  // Default readout: the single highest-interest country.
  const topCountry = useMemo(
    () =>
      [...countryInterest].sort((a, b) => b.interest - a.interest)[0],
    [],
  )
  const readout = hovered ?? topCountry

  return (
    <section
      id="map"
      className="relative snap-start scroll-mt-4 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Where it lives
          </p>
          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl md:text-5xl">
            The world&apos;s search for lighter skin
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Relative Google search interest in &ldquo;skin whitening,&rdquo;
            shaded across the human skin-tone spectrum. Demand is concentrated
            in South Asia, Southeast Asia, and Africa.
            <Citation ids={[7]} />
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 165 }}
                width={980}
                height={500}
                style={{ width: "100%", height: "auto" }}
                aria-label="World map shaded by search interest in skin whitening"
                role="img"
              >
                <ZoomableGroup center={[20, 10]} zoom={1} minZoom={1} maxZoom={4}>
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const id = String(geo.id).padStart(3, "0")
                        const data = interestByIso.get(id)
                        const fill = data
                          ? toneFor(data.interest)
                          : "var(--secondary)"
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fill}
                            stroke="var(--background)"
                            strokeWidth={0.4}
                            onMouseEnter={() => data && setHovered(data)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                              default: { outline: "none" },
                              hover: {
                                outline: "none",
                                fill: data ? "var(--gold)" : "var(--secondary)",
                                cursor: data ? "pointer" : "default",
                              },
                              pressed: { outline: "none" },
                            }}
                          />
                        )
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* Spectrum legend */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Low
              </span>
              <div className="flex h-2.5 w-48 overflow-hidden rounded-full">
                {legendStops.map((s, i) => (
                  <span
                    key={i}
                    className="h-full flex-1"
                    style={{ backgroundColor: s.tone }}
                  />
                ))}
              </div>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                High
              </span>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Hover a country to read its search interest. Drag and scroll to
              explore. Grey countries have no comparable data.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <motion.div
              key={readout.iso}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {readout.name}
              </p>
              <p className="mt-3 font-serif text-6xl font-medium text-tone-3">
                {readout.interest}
                <span className="ml-1 align-top font-sans text-xl text-muted-foreground">
                  /100
                </span>
                <Citation ids={[7]} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                relative search interest in &ldquo;skin whitening&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                  Documented prevalence
                </p>
                <ul className="mt-3 space-y-3">
                  {regions.map((r) => (
                    <li key={r.id} className="flex items-baseline gap-3">
                      <span className="min-w-[7.5rem] font-serif text-lg text-tone-2">
                        {r.range}
                      </span>
                      <span className="text-sm leading-snug text-muted-foreground">
                        {r.name}
                        <Citation ids={r.sourceIds} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                Behind every search and every percentage are people navigating
                pressure they did not create ; at work, in marriage markets, on
                screens.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
