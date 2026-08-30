import { PageHero } from "@/components/page-hero"
import { Efforts } from "@/components/sections/efforts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Efforts ; Unfair",
  description:
    "How we're working to expose the true cost of the global skin-lightening industry through research, technology, and public education.",
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Efforts"
        title="Science and awareness against an unfair industry."
        intro="This initiative pairs rigorous research with public education ; because no one should be told that their skin tone is a problem to be fixed."
      />
      <Efforts />
    </main>
  )
}
