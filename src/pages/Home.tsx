import { Link } from 'react-router-dom'
import {
  Map,
  Sparkles,
  Swords,
  Gem,
  Footprints,
  Compass,
  Trophy,
  CalendarDays,
  ArrowRight,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { usePageTitle } from '@/hooks/usePageTitle'
import { HOME_BANNER, homeFaqs } from '@/data/gameData'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'

const QUICK_CARDS = [
  { to: '/world', icon: Map, key: 'world' },
  { to: '/abilities', icon: Sparkles, key: 'abilities' },
  { to: '/bosses', icon: Swords, key: 'bosses' },
  { to: '/collectibles', icon: Gem, key: 'collectibles' },
  { to: '/walkthrough', icon: Footprints, key: 'walkthrough' },
  { to: '/guide', icon: Compass, key: 'guide' },
] as const

export default function HomePage() {
  const { t } = useLanguage()
  usePageTitle('')

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Angeline Era Guide',
    alternateName: 'Angeline Era 攻略站',
    url: 'https://angeline-era.gameresearch.top/',
    inLanguage: ['en', 'zh-CN'],
    description:
      'Unofficial bilingual fan guide for Angeline Era — world, abilities, bosses, collectibles and walkthrough.',
  }

  return (
    <div>
      <JsonLd data={siteJsonLd} />
      {/* Banner */}
      <section className="glow-card relative mb-10 overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <img
            src={HOME_BANNER}
            alt="Angeline Era official key art"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dream-bg via-dream-bg/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="label-chip mb-3">
              <Trophy className="h-3.5 w-3.5" aria-hidden />
              {t.home.igfBadge}
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-dream text-dream-text sm:text-5xl">
              {t.home.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dream-text/85 sm:text-base">
              {t.home.subtitle}
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-dream-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-dream-pink" aria-hidden />
                {t.home.release}
              </span>
              <span className="text-dream-purple">{t.home.developer}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold tracking-dream text-dream-pink">
          {t.home.quickNav}
        </h2>
        <p className="mt-1 text-sm text-dream-muted">{t.home.quickNavSub}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_CARDS.map(({ to, icon: Icon, key }) => (
            <Link key={to} to={to} className="glow-card scanline group p-5">
              <Icon className="h-6 w-6 text-dream-purple transition-colors group-hover:text-dream-pink" aria-hidden />
              <h3 className="mt-3 font-heading text-base font-bold text-dream-text">
                {t.home.cards[key].title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-dream-muted">
                {t.home.cards[key].desc}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-dream-purple">
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection faqs={homeFaqs} />
    </div>
  )
}
