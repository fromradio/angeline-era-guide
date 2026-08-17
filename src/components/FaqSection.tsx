import { HelpCircle } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { Faq } from '@/data/gameData'
import JsonLd from './JsonLd'

/**
 * Renders an FAQ section with question-style H3 headings (long-tail SEO)
 * plus matching FAQPage structured data.
 */
export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const { t, lang } = useLanguage()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: lang === 'zh' ? f.q.zh : f.q.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: lang === 'zh' ? f.a.zh : f.a.en,
      },
    })),
  }

  return (
    <section className="mt-10">
      <JsonLd data={faqJsonLd} />
      <h2 className="flex items-center gap-2 font-heading text-xl font-bold tracking-dream text-dream-pink">
        <HelpCircle className="h-5 w-5" aria-hidden />
        {t.common.faq}
      </h2>
      <div className="mt-4 space-y-4">
        {faqs.map((faq, i) => (
          <article key={i} className="glow-card scanline p-5">
            <h3 className="font-heading text-base font-bold text-dream-text">
              {lang === 'zh' ? faq.q.zh : faq.q.en}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-dream-text/85">
              {lang === 'zh' ? faq.a.zh : faq.a.en}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
