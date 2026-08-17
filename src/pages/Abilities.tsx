import { KeyRound, Zap, Crosshair } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { abilities } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import Screenshot from '@/components/Screenshot'
import BilingualText, { DualName } from '@/components/BilingualText'
import RatingBadge from '@/components/RatingBadge'
import InferredNote from '@/components/InferredNote'

export default function AbilitiesPage() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <SectionHeader title={t.abilities.title} subtitle={t.abilities.subtitle} />

      {/* Suggested unlock order */}
      <section className="glow-card mb-8 p-5">
        <h2 className="font-heading text-lg font-bold text-dream-pink">{t.abilities.orderTitle}</h2>
        <ol className="mt-4 flex flex-wrap items-center gap-2">
          {abilities.map((a, i) => (
            <li key={a.id} className="flex items-center gap-2">
              <span className="label-chip">
                {i + 1}. {lang === 'zh' ? a.name.zh : a.name.en}
              </span>
              {i < abilities.length - 1 && <span className="text-dream-purple/50">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {abilities.map((ability) => (
          <article key={ability.id} className="glow-card scanline flex flex-col p-5">
            <Screenshot
              src={ability.screenshot}
              alt={`${ability.name.en} screenshot placeholder`}
              className="aspect-video"
            />
            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="font-heading text-lg font-bold text-dream-text">
                <DualName name={ability.name} />
              </h3>
              <RatingBadge rank={ability.rating} label={t.common.rating} />
            </div>

            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex gap-2">
                <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-dream-pink" aria-hidden />
                <div>
                  <dt className="font-semibold text-dream-pink">{t.common.unlock}</dt>
                  <dd>
                    <BilingualText text={ability.unlock} className="text-dream-text/85" />
                  </dd>
                </div>
              </div>
              <div className="flex gap-2">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-dream-purple" aria-hidden />
                <div>
                  <dt className="font-semibold text-dream-purple">{t.common.effect}</dt>
                  <dd>
                    <BilingualText text={ability.effect} className="text-dream-text/85" />
                  </dd>
                </div>
              </div>
              <div className="flex gap-2">
                <Crosshair className="mt-0.5 h-4 w-4 shrink-0 text-dream-teal" aria-hidden />
                <div>
                  <dt className="font-semibold text-dream-teal">{t.common.usage}</dt>
                  <dd>
                    <BilingualText text={ability.usage} className="text-dream-text/85" />
                  </dd>
                </div>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <InferredNote />
    </div>
  )
}
