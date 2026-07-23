"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  duration?: number
}

function format(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

// Animates from 0 up to `value` the first time it scrolls into view.
// - Uses IntersectionObserver (fires once).
// - Respects prefers-reduced-motion: renders the final value immediately.
// - Always settles on the exact target, so it never rests at 0.
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  duration = 1800,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || hasRun.current) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const run = () => {
      if (hasRun.current) return
      hasRun.current = true

      if (prefersReduced) {
        setDisplay(value)
        return
      }

      const start = performance.now()
      let frame = 0
      const tick = (now: number) => {
        const elapsed = now - start
        const t = Math.min(elapsed / duration, 1)
        // easeOutExpo for a warm, decelerating count.
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        setDisplay(value * eased)
        if (t < 1) {
          frame = requestAnimationFrame(tick)
        } else {
          setDisplay(value) // guarantee exact target
        }
      }
      frame = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(display, decimals)}
      {suffix}
    </span>
  )
}
