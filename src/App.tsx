import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import type { Lang } from '@/i18n/translations'
import Layout from '@/components/Layout'
import HomePage from '@/pages/Home'
import WorldPage from '@/pages/World'
import AbilitiesPage from '@/pages/Abilities'
import BossesPage from '@/pages/Bosses'
import CollectiblesPage from '@/pages/Collectibles'
import WalkthroughPage from '@/pages/Walkthrough'
import GuidePage from '@/pages/Guide'
import AboutPage from '@/pages/About'
import PrivacyPage from '@/pages/Privacy'

const PAGES = [
  ['', HomePage],
  ['world', WorldPage],
  ['abilities', AbilitiesPage],
  ['bosses', BossesPage],
  ['collectibles', CollectiblesPage],
  ['walkthrough', WalkthroughPage],
  ['guide', GuidePage],
  ['about', AboutPage],
  ['privacy', PrivacyPage],
] as const

/** 语言由 URL 前缀决定：/ = en，/zh = 中文（写入 LanguageContext） */
function LangShell({ lang }: { lang: Lang }) {
  const { setLang } = useLanguage()
  useEffect(() => {
    setLang(lang)
  }, [lang, setLang])
  return <Layout />
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LangShell lang="en" />}>
            {PAGES.map(([p, El]) =>
              p === '' ? (
                <Route key="en-home" index element={<El />} />
              ) : (
                <Route key={'en-' + p} path={p} element={<El />} />
              ),
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          <Route path="/zh" element={<LangShell lang="zh" />}>
            {PAGES.map(([p, El]) =>
              p === '' ? (
                <Route key="zh-home" index element={<El />} />
              ) : (
                <Route key={'zh-' + p} path={p} element={<El />} />
              ),
            )}
            <Route path="*" element={<Navigate to="/zh" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
