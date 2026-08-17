import { MapPin, CheckCircle2, Tag } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import { collectibles } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import Screenshot from '@/components/Screenshot'
import BilingualText, { DualName } from '@/components/BilingualText'
import InferredNote from '@/components/InferredNote'

export default function CollectiblesPage() {
  const { t, lang } = useLanguage()
  usePageTitle(t.collectibles.title)

  return (
    <div>
      <SectionHeader title={t.collectibles.title} subtitle={t.collectibles.subtitle} />

      <div className="grid gap-5 md:grid-cols-2">
        {collectibles.map((item) => (
          <article key={item.id} className="glow-card scanline flex flex-col p-5">
            <Screenshot
              src={item.screenshot}
              alt={`${item.name.en} screenshot placeholder`}
              className="aspect-video"
            />
            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="font-heading text-base font-bold leading-snug text-dream-text">
                <DualName name={item.name} />
              </h3>
              <span className="label-chip shrink-0">
                <Tag className="h-3 w-3" aria-hidden />
                {lang === 'zh' ? item.type.zh : item.type.en}
              </span>
            </div>

            <div className="mt-3 space-y-2.5 text-sm">
              <p className="flex items-start gap-2 text-dream-text/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dream-pink" aria-hidden />
                <span>
                  <span className="font-semibold text-dream-pink">{t.common.location}: </span>
                  {lang === 'zh' ? item.location.zh : item.location.en}
                </span>
              </p>
              <p className="flex items-start gap-2 text-dream-text/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-dream-teal" aria-hidden />
                <span>
                  <span className="font-semibold text-dream-teal">{t.common.requirement}: </span>
                  {lang === 'zh' ? item.requirement.zh : item.requirement.en}
                </span>
              </p>
              {item.note && (
                <p className="text-xs italic text-dream-muted">
                  {lang === 'zh' ? item.note.zh : item.note.en}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <InferredNote />
    </div>
  )
}
