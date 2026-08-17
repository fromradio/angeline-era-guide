import { Info } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

/** Required disclaimer label for content inferred from the developer's previous works. */
export default function InferredNote() {
  const { t } = useLanguage()
  return (
    <p className="mt-6 flex items-start gap-2 rounded-lg border border-dream-teal/25 bg-dream-teal/5 px-3 py-2 text-xs leading-relaxed text-dream-teal/90">
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{t.common.inferredNote}</span>
    </p>
  )
}
