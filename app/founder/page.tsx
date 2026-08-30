import { PageHero } from "@/components/page-hero"
import { AboutAuthor } from "@/components/sections/about-author"
import { Collaborators } from "@/components/sections/collaborators"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founder ; Unfair",
  description:
    "Meet Asmi Agarwal, founder of Unfair and researcher working at the intersection of dermatology, immunology, and deep learning to make skin health safer and more equitable.",
}

export default function FounderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Founder"
        title="Meet Asmi Agarwal."
        intro="A high school researcher working where deep learning, mathematics, dermatology, and public health intersect."
      />
      <AboutAuthor />
      <Collaborators />
    </main>
  )
}
