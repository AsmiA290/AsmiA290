import { ToneDivider } from "@/components/tone-divider"
import { AtSign, Mail } from "lucide-react"
import Link from "next/link"

const PROJECT_EMAIL = "theunfairproject@gmail.com"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <ToneDivider className="mb-12" />

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl font-medium text-tone-1">
              <span className="italic font-light text-tone-3">Un</span>fair
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An evidence-based public-health project exposing the true cost of
              the global skin-lightening industry.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col gap-3 text-sm"
          >
            <a
              href={`mailto:${PROJECT_EMAIL}`}
              className="inline-flex items-center gap-2 text-tone-1 transition-colors hover:text-tone-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {PROJECT_EMAIL}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-tone-1 transition-colors hover:text-tone-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <AtSign className="h-4 w-4" aria-hidden="true" />
              @theunfairproject
            </a>
            <Link
              href="/sources"
              className="text-muted-foreground transition-colors hover:text-tone-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Sources
            </Link>
          </nav>
        </div>

        <p className="mt-12 max-w-3xl text-pretty text-xs leading-relaxed text-muted-foreground">
          This is an educational and advocacy resource. It does not provide
          medical advice. The harm described here belongs to a global industry,
          to colorism, and to the regulatory gaps that allow unsafe products to
          circulate — never to the people those products harm.
        </p>
      </div>
    </footer>
  )
}
