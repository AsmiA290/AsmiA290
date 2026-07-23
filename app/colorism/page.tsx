import { PageHero } from "@/components/page-hero"
import { ColorismEngine } from "@/components/sections/colorism-engine"
import { DignitySwatches } from "@/components/sections/dignity-swatches"
import { MythBuster } from "@/components/sections/myth-buster"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colorism — Unfair",
  description:
    "How the preference for lighter skin was manufactured and sold — from decades of advertising to the 2020 renaming of Fair & Lovely — and a myth-buster to check what the industry taught us.",
}

export default function ColorismPage() {
  return (
    <main>
      <PageHero
        eyebrow="Colorism"
        title="Beauty had to be taught."
        intro="No one is born believing their skin is too dark. The preference for lighter skin was built, advertised, and sold — generation after generation."
      />
      <ColorismEngine />
      <MythBuster />
      <DignitySwatches />
    </main>
  )
}
