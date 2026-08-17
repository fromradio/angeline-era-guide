import { useEffect } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'

/** Sets the browser tab title to "<page> · <site name>", updating on language switch. */
export function usePageTitle(title: string) {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = title ? `${title} · ${t.common.siteName}` : t.common.siteName
  }, [title, t])
}
