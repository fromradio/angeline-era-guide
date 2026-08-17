import { Languages } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

/** Pill-shaped EN | 中 toggle, always visible at the top-right. */
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-dream-purple/40 bg-dream-bg/80 p-1 shadow-glow backdrop-blur-md">
      <Languages className="ml-1.5 h-4 w-4 text-dream-purple" aria-hidden />
      <button
        type="button"
        onClick={() => setLang('en')}
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
        onClick={() => setLang('zh')}
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
