"use client"

import { Reveal } from "@/components/reveal"
import { ToneDivider } from "@/components/tone-divider"
import { author } from "@/data/content"
import { Mail } from "lucide-react"
import Image from "next/image"

export function AboutAuthor() {
  return (
    <section
      id="about"
      className="relative scroll-mt-4 border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <ToneDivider className="mb-14" />

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            About the Founder
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16">
          {/* Left: photo placeholder + name + role */}
          <Reveal className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="aspect-square w-44 overflow-hidden rounded-full border border-tone-4/30 bg-tone-3 sm:w-52">
              <Image
                src="/headshot-asmi.jpg"
                alt="Asmi Agarwal"
                width={416}
                height={416}
                className="h-full w-full object-cover object-[center_20%]"
                priority
              />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-medium text-tone-1">
              {author.name}
            </h3>
            <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-tone-2/70">
              {author.role}
            </p>
            <a
              href={`mailto:${author.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-tone-1 transition-colors hover:border-tone-4/40 hover:text-tone-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {author.email}
            </a>
          </Reveal>

          {/* Right: bio */}
          <Reveal delay={0.1} className="flex flex-col">
            <p className="text-balance font-serif text-xl font-light leading-snug text-tone-1 sm:text-2xl">
              {author.intro}
            </p>
            <div className="mt-6 flex flex-col gap-5">
              {author.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty text-base leading-relaxed text-tone-2/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
