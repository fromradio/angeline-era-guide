import type { Rank } from '@/data/gameData'

const RANK_CLASSES: Record<Rank, string> = {
  S: 'border-rank-s/60 bg-rank-s/15 text-rank-s',
  A: 'border-rank-a/60 bg-rank-a/15 text-rank-a',
  B: 'border-rank-b/60 bg-rank-b/15 text-rank-b',
  C: 'border-rank-c/60 bg-rank-c/15 text-rank-c',
}

export default function RatingBadge({ rank, label }: { rank: Rank; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm font-extrabold ${RANK_CLASSES[rank]}`}
      title={label}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{label}</span>
      {rank}
    </span>
  )
}
