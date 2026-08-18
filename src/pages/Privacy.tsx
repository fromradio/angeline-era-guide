import { Database, Cookie, BarChart3, Link2, FileEdit, Mail } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import SectionHeader from '@/components/SectionHeader'

const SECTION_ICONS = [Database, Cookie, BarChart3, Link2, FileEdit, Mail] as const

export default function PrivacyPage() {
  const { t } = useLanguage()
  usePageTitle(t.privacy.title)

  return (
    <div>
      <SectionHeader title={t.privacy.title} subtitle={t.privacy.subtitle} />

      <div className="space-y-6">
        {t.privacy.sections.map((section, i) => {
          const Icon = SECTION_ICONS[i % SECTION_ICONS.length]
          return (
            <section key={section.heading} className="glow-card p-6">
              <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-dream-pink">
                <Icon className="h-5 w-5" aria-hidden />
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-dream-text/85">{section.body}</p>
            </section>
          )
        })}
      </div>
    </div>
  )
}
