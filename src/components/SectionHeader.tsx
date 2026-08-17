import { useLanguage } from '@/i18n/LanguageContext'

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  const { lang } = useLanguage()
  return (
    <header className="mb-8">
      <h1 className="section-title">{title}</h1>
      {subtitle && (
        <p className="mt-3 max-w-3xl leading-relaxed text-dream-muted" lang={lang}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-dream-purple/60 via-dream-pink/30 to-transparent" />
    </header>
  )
}
