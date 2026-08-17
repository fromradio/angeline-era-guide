import { Lightbulb, AlertTriangle, ListOrdered } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import { firstHourTips, stuckPoints, abilityPriority } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import BilingualText from '@/components/BilingualText'
import InferredNote from '@/components/InferredNote'
import JsonLd from '@/components/JsonLd'

export default function GuidePage() {
  const { t, lang } = useLanguage()
  usePageTitle(t.guide.title)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: stuckPoints.map((sp) => ({
      '@type': 'Question',
      name: lang === 'zh' ? sp.problem.zh : sp.problem.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: lang === 'zh' ? sp.solution.zh : sp.solution.en,
      },
    })),
  }

  return (
    <div>
      <JsonLd data={faqJsonLd} />
      <SectionHeader title={t.guide.title} subtitle={t.guide.subtitle} />

      {/* First 5 hours */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 font-heading text-xl font-bold tracking-dream text-dream-pink">
          <Lightbulb className="h-5 w-5" aria-hidden />
          {t.guide.firstHours}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {firstHourTips.map((tip, i) => (
            <div key={i} className="glow-card scanline p-5">
              <h3 className="font-heading text-base font-bold text-dream-text">
                {lang === 'zh' ? tip.title.zh : tip.title.en}
              </h3>
              <BilingualText text={tip.body} className="mt-2 text-sm leading-relaxed text-dream-text/85" />
            </div>
          ))}
        </div>
      </section>

      {/* Stuck points */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 font-heading text-xl font-bold tracking-dream text-dream-pink">
          <AlertTriangle className="h-5 w-5" aria-hidden />
          {t.guide.stuckPoints}
        </h2>
        <div className="mt-4 space-y-4">
          {stuckPoints.map((sp, i) => (
            <div key={i} className="glow-card p-5">
              <p className="font-semibold text-dream-text">
                {lang === 'zh' ? sp.problem.zh : sp.problem.en}
              </p>
              <div className="mt-2 border-l-2 border-dream-teal/50 pl-3">
                <BilingualText text={sp.solution} className="text-sm leading-relaxed text-dream-text/85" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ability priority */}
      <section>
        <h2 className="flex items-center gap-2 font-heading text-xl font-bold tracking-dream text-dream-pink">
          <ListOrdered className="h-5 w-5" aria-hidden />
          {t.guide.priority}
        </h2>
        <div className="mt-4 space-y-4">
          {abilityPriority.map((ap, i) => (
            <div key={i} className="glow-card scanline flex gap-4 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-dream-purple to-dream-pink font-heading text-sm font-extrabold text-dream-bg2">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-dream-text">
                  {lang === 'zh' ? ap.title.zh : ap.title.en}
                </h3>
                <BilingualText text={ap.body} className="mt-1 text-sm leading-relaxed text-dream-text/85" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <InferredNote />
    </div>
  )
}
