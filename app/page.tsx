import { GetInvolved } from "@/components/sections/get-involved"
import { Hero } from "@/components/sections/hero"
import { IngredientExplorer } from "@/components/sections/ingredient-explorer"
import { StatCounters } from "@/components/sections/stat-counters"
import { TeaserCards } from "@/components/sections/teaser-cards"
import { WorldMap } from "@/components/sections/world-map"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatCounters />
      <WorldMap />
      <IngredientExplorer />
      <TeaserCards />
      <GetInvolved />
    </main>
  )
}
