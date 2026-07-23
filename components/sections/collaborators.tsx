import { Reveal } from "@/components/reveal"
import { ToneDivider } from "@/components/tone-divider"
import Image from "next/image"

export function Collaborators() {
  const institutions = [
    {
      name: "Illinois Mathematics and Science Academy",
      logo: "/imsa-logo.png",
      alt: "IMSA logo",
    },
    {
      name: "SIU School of Medicine",
      logo: "/siu-medicine-logo.png",
      alt: "SIU Medicine logo",
    },
    {
      name: "University of Illinois Springfield",
      logo: "/uis-logo.png",
      alt: "UIS logo",
    },
  ]

  return (
    <section
      id="collaborators"
      className="relative scroll-mt-24 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <ToneDivider className="mb-14" />

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            My Collaborators
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-balance font-serif text-3xl font-light leading-tight text-tone-1 sm:text-4xl">
            Supported by institutions working toward more equitable science and
            medicine.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {institutions.map((institution, i) => (
            <Reveal key={institution.name} delay={0.15 + i * 0.08}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-24 w-full">
                  <Image
                    src={institution.logo}
                    alt={institution.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm leading-relaxed text-tone-2/80">
                  {institution.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
