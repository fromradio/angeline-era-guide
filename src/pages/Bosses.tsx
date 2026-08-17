import { MapPin, Target, ShieldAlert, Swords, Sparkles } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import { bosses } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import Screenshot from '@/components/Screenshot'
import BilingualText, { DualName } from '@/components/BilingualText'
import InferredNote from '@/components/InferredNote'

export default function BossesPage() {
  const { t, lang } = useLanguage()
  usePageTitle(t.bosses.title)

  return (
    <div>
      <SectionHeader title={t.bosses.title} subtitle={t.bosses.subtitle} />

      <div className="space-y-6">
        {bosses.map((boss) => (
          <article key={boss.id} className="glow-card scanline p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="lg:w-1/3">
                <Screenshot
                  src={boss.screenshot}
                  alt={`${boss.name.en} screenshot placeholder`}
                  className="aspect-video"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-bold text-dream-text">
                  <DualName name={boss.name} />
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-dream-muted">
                  <MapPin className="h-4 w-4 text-dream-pink" aria-hidden />
                  {lang === 'zh' ? boss.location.zh : boss.location.en}
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="flex items-center gap-1.5 text-sm font-semibold text-dream-purple">
                      <Swords className="h-4 w-4" aria-hidden />
                      {t.common.attacks}
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-dream-text/85">
                      {boss.attacks.map((atk, i) => (
                        <li key={i}>· {lang === 'zh' ? atk.zh : atk.en}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold text-dream-pink">
                        <Target className="h-4 w-4" aria-hidden />
                        {t.common.weakness}
                      </h3>
                      <BilingualText text={boss.weakness} className="mt-1.5 text-sm text-dream-text/85" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold text-dream-teal">
                        <Sparkles className="h-4 w-4" aria-hidden />
                        {t.common.recommended}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {boss.recommended.map((rec, i) => (
                          <span key={i} className="label-chip">
                            {lang === 'zh' ? rec.zh : rec.en}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-dream-purple/20 bg-dream-bg2/50 p-3">
                  <h3 className="flex items-center gap-1.5 text-sm font-semibold text-dream-text">
                    <ShieldAlert className="h-4 w-4 text-dream-purple" aria-hidden />
                    {t.common.strategy}
                  </h3>
                  <BilingualText text={boss.strategy} className="mt-1.5 text-sm leading-relaxed text-dream-text/85" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <InferredNote />
    </div>
  )
}
