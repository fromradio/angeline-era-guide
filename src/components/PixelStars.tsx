import { useMemo } from 'react'

interface Star {
  left: string
  top: string
  delay: string
  size: number
  color: string
}

const COLORS = ['#e2e8f0', '#a78bfa', '#f472b6', '#34d399']

/** CSS-drawn pixel stars twinkling across the top of the page. */
export default function PixelStars({ count = 28 }: { count?: number }) {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 37 + 13) % 100}%`,
        top: `${((i * 23 + 7) % 90) + 5}px`,
        delay: `${((i * 7) % 24) / 10}s`,
        size: 2 + (i % 3),
        color: COLORS[i % COLORS.length],
      })),
    [count],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="pixel-star"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            width: s.size,
            height: s.size,
            background: s.color,
          }}
        />
      ))}
    </div>
  )
}
