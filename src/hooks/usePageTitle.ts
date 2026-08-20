import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/i18n/LanguageContext'

const BASE = 'https://angeline-era.gameresearch.top'

function upsertLink(rel: string, hreflang: string | null, href: string) {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.href = href
}

/** Sets the tab title + canonical/hreflang, updating on language switch. */
export function usePageTitle(title: string) {
  const { t, lang } = useLanguage()
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title ? `${title} · ${t.common.siteName}` : t.common.siteName

    const bare = pathname.replace(/^\/zh/, '') || '/'
    const enUrl = BASE + (bare === '/' ? '/' : bare)
    const zhUrl = BASE + (bare === '/' ? '/zh' : `/zh${bare}`)
    upsertLink('canonical', null, lang === 'zh' ? zhUrl : enUrl)
    upsertLink('alternate', 'en', enUrl)
    upsertLink('alternate', 'zh-CN', zhUrl)
    upsertLink('alternate', 'x-default', enUrl)
  }, [title, t, lang, pathname])
}
