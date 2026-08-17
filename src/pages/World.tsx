import { MapPin, KeyRound, Radar } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import { regions } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import Screenshot from '@/components/Screenshot'
import BilingualText, { DualName } from '@/components/BilingualText'
import InferredNote from '@/components/InferredNote'

export default function WorldPage() {
  const { t, lang } = useLanguage()
  usePageTitle(t.world.title)

  return (
    <div>
      <SectionHeader title={t.world.title} subtitle={t.world.subtitle} />

      <div className="space-y-6">
        {regions.map((region, index) => (
          <article key={region.id} className="glow-card scanline group p-5 sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="md:w-2/5">
                <Screenshot
                  src={region.screenshot}
                  alt={`${region.name.en} screenshot placeholder`}
                  className="aspect-video"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-dream-teal">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 font-heading text-xl font-bold text-dream-text">
                  <DualName name={region.name} />
                </h2>
                <BilingualText text={region.desc} className="mt-3 text-sm leading-relaxed text-dream-text/90" />

                <div className="mt-4 flex items-start gap-2 text-sm">
                  <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-dream-pink" aria-hidden />
                  <div>
                    <span className="font-semibold text-dream-pink">{t.world.unlockLabel}</span>
                    <BilingualText text={region.unlock} className="text-dream-text/85" />
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dream-teal" aria-hidden />
                  <div>
                    <span className="font-semibold text-dream-teal">{t.world.keyLocations}</span>
                    <ul className="mt-1 space-y-1">
                      {region.keyLocations.map((loc, i) => (
                        <li key={i} className="text-dream-text/85">
                          · {lang === 'zh' ? loc.zh : loc.en}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-3 flex items-center gap-1.5 text-xs text-dream-purple/0 transition-colors group-hover:text-dream-purple">
                  <Radar className="h-3.5 w-3.5" aria-hidden />
                  {t.common.exploring}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <InferredNote />
    </div>
  )
}
