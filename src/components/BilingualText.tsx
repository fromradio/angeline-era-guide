import { useLanguage } from '@/i18n/LanguageContext'
import type { Bilingual } from '@/data/gameData'

/** Renders guide body text in the active language only. */
export default function BilingualText({
  text,
  className = '',
}: {
  text: Bilingual
  className?: string
}) {
  const { lang } = useLanguage()
  return <span className={`block ${className}`}>{lang === 'zh' ? text.zh : text.en}</span>
}

/** Renders a proper noun in the active language only. */
export function DualName({ name }: { name: Bilingual }) {
  const { lang } = useLanguage()
  return <>{lang === 'zh' ? name.zh : name.en}</>
}
