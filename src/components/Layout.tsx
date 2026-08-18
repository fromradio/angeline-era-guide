import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import {
  Home,
  Map,
  Sparkles,
  Swords,
  Gem,
  Footprints,
  Compass,
  Info,
  Menu,
  X,
  Sparkle,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'
import PixelStars from './PixelStars'

const NAV_ITEMS = [
  { to: '/', icon: Home, key: 'home' },
  { to: '/world', icon: Map, key: 'world' },
  { to: '/abilities', icon: Sparkles, key: 'abilities' },
  { to: '/bosses', icon: Swords, key: 'bosses' },
  { to: '/collectibles', icon: Gem, key: 'collectibles' },
  { to: '/walkthrough', icon: Footprints, key: 'walkthrough' },
  { to: '/guide', icon: Compass, key: 'guide' },
  { to: '/about', icon: Info, key: 'about' },
] as const

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage()
  return (
    <nav className="flex flex-col gap-1" aria-label="Main">
      {NAV_ITEMS.map(({ to, icon: Icon, key }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all ${
              isActive
                ? 'bg-dream-purple/20 text-dream-purple shadow-glow'
                : 'text-dream-muted hover:bg-dream-purple/10 hover:text-dream-text'
            }`
          }
        >
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {t.nav[key]}
        </NavLink>
      ))}
    </nav>
  )
}

function Brand() {
  const { t } = useLanguage()
  return (
    <div className="mb-6 flex items-center gap-2.5 px-1">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-dream-purple to-dream-pink shadow-glow">
        <Sparkle className="h-5 w-5 text-dream-bg2" aria-hidden />
      </span>
      <div>
        <p className="font-heading text-sm font-extrabold tracking-dream text-dream-text">
          {t.common.siteName}
        </p>
        <p className="text-[11px] text-dream-muted">{t.common.siteTagline}</p>
      </div>
    </div>
  )
}

export default function Layout() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile drawer on every route change and scroll back to top.
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen">
      <PixelStars />
      <LanguageToggle />

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-dream-purple/15 bg-dream-bg/60 p-5 backdrop-blur-md lg:flex">
        <Brand />
        <NavLinks />
        <div className="mt-auto px-1 pt-6">
          <p className="text-[11px] leading-relaxed text-dream-muted/70">{t.common.footer}</p>
          <Link
            to="/privacy"
            className="mt-2 inline-block text-[11px] text-dream-muted/70 underline-offset-2 transition-colors hover:text-dream-purple hover:underline"
          >
            {t.common.privacy}
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-dream-purple/15 bg-dream-bg/80 px-4 py-3 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label={t.common.menu}
          className="rounded-lg border border-dream-purple/30 p-2 text-dream-purple"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
        <p className="font-heading text-sm font-extrabold tracking-dream text-dream-text">
          {t.common.siteName}
        </p>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-dream-bg2/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 border-r border-dream-purple/20 bg-dream-bg p-5 shadow-glow-lg">
            <div className="mb-4 flex items-center justify-between">
              <Brand />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.common.close}
                className="rounded-lg border border-dream-purple/30 p-2 text-dream-purple"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <NavLinks onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Content */}
      <main className="relative z-10 px-4 pb-16 pt-8 sm:px-8 lg:ml-60 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Outlet />
          <footer className="mt-16 border-t border-dream-purple/15 pt-6 text-center text-xs text-dream-muted/70 lg:hidden">
            <p>{t.common.footer}</p>
            <Link
              to="/privacy"
              className="mt-2 inline-block underline-offset-2 transition-colors hover:text-dream-purple hover:underline"
            >
              {t.common.privacy}
            </Link>
          </footer>
        </div>
      </main>
    </div>
  )
}
