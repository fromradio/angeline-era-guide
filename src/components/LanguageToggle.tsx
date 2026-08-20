import { Languages } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '@/i18n/LanguageContext'
import type { Lang } from '@/i18n/translations'

/** Pill-shaped EN | 中 toggle. 语言切换 = 跳转到对应语言的 URL（/bosses ⇄ /zh/bosses） */
export default function LanguageToggle() {
  const { lang } = useLanguage()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const go = (target: Lang) => {
    const bare = pathname.replace(/^\/zh/, '') || '/'
    navigate(target === 'zh' ? (bare === '/' ? '/zh' : `/zh${bare}`) : bare)
  }

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-dream-purple/40 bg-dream-bg/80 p-1 shadow-glow backdrop-blur-md">
      <Languages className="ml-1.5 h-4 w-4 text-dream-purple" aria-hidden />
      <button
        type="button"
        onClick={() => go('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
          lang === 'en'
            ? 'bg-dream-purple text-dream-bg2'
            : 'text-dream-muted hover:text-dream-text'
        }`}
      >
        EN
      </button>
      <span className="text-dream-purple/40" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => go('zh')}
        aria-pressed={lang === 'zh'}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
          lang === 'zh'
            ? 'bg-dream-pink text-dream-bg2'
            : 'text-dream-muted hover:text-dream-text'
        }`}
      >
        中
      </button>
    </div>
  )
}
