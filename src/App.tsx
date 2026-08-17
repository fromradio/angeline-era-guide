import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/i18n/LanguageContext'
import Layout from '@/components/Layout'
import HomePage from '@/pages/Home'
import WorldPage from '@/pages/World'
import AbilitiesPage from '@/pages/Abilities'
import BossesPage from '@/pages/Bosses'
import CollectiblesPage from '@/pages/Collectibles'
import WalkthroughPage from '@/pages/Walkthrough'
import GuidePage from '@/pages/Guide'
import AboutPage from '@/pages/About'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="world" element={<WorldPage />} />
            <Route path="abilities" element={<AbilitiesPage />} />
            <Route path="bosses" element={<BossesPage />} />
            <Route path="collectibles" element={<CollectiblesPage />} />
            <Route path="walkthrough" element={<WalkthroughPage />} />
            <Route path="guide" element={<GuidePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
