import { Footprints } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { chapters } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'
import BilingualText from '@/components/BilingualText'
import InferredNote from '@/components/InferredNote'

export default function WalkthroughPage() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <SectionHeader title={t.walkthrough.title} subtitle={t.walkthrough.subtitle} />

      <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-dream-purple/60 before:via-dream-pink/40 before:to-dream-teal/40">
        {chapters.map((chapter, index) => (
          <article key={chapter.id} className="relative pl-12">
            <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-dream-purple/40 bg-dream-card font-heading text-sm font-extrabold text-dream-purple shadow-glow">
              {index + 1}
            </span>
            <div className="glow-card scanline p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-dream-teal">
                {t.common.chapter} {index + 1}
              </p>
              <h2 className="mt-1 font-heading text-lg font-bold text-dream-text">
                {lang === 'zh' ? chapter.title.zh : chapter.title.en}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-dream-pink">
                <Footprints className="h-4 w-4" aria-hidden />
                {lang === 'zh' ? chapter.region.zh : chapter.region.en}
              </p>
              <ol className="mt-4 space-y-3">
                {chapter.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-dream-purple/15 text-[11px] font-bold text-dream-purple">
                      {i + 1}
                    </span>
                    <BilingualText text={step} className="leading-relaxed text-dream-text/85" />
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      <InferredNote />
    </div>
  )
}
