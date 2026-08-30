import { Sources } from "@/components/sections/sources"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sources ; Unfair",
  description:
    "Every figure on the Unfair project, cited. The thirteen primary sources behind the data, from the WHO and FDA to peer-reviewed meta-analyses.",
}

export default function SourcesPage() {
  return (
    <main>
      <Sources />
    </main>
  )
}
