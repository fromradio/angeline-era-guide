import { Gamepad2, Users, Trophy, ScrollText, CalendarDays, Star, Clock, ThumbsUp } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { ABOUT_IMAGE } from '@/data/gameData'
import SectionHeader from '@/components/SectionHeader'

export default function AboutPage() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

      <div className="space-y-6">
        {/* Game info */}
        <section className="glow-card p-6">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-dream-pink">
            <Gamepad2 className="h-5 w-5" aria-hidden />
            {t.about.gameInfo}
          </h2>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row">
            <img
              src={ABOUT_IMAGE}
              alt="Angeline Era overworld vista (official screenshot)"
              className="w-full rounded-lg border border-dream-purple/15 object-cover sm:w-64"
              loading="lazy"
            />
            <dl className="flex-1 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-dream-purple" aria-hidden />
                <p className="text-dream-text/85">
                  <span className="font-semibold text-dream-text">Angeline Era</span>
                  {lang === 'zh'
                    ? ' —— 一款非线性 3D 动作冒险游戏。流浪老兵特茨·木下与天使阿尔卡斯·杰米尼结伴，收集九枚双锥，突破风暴，抵达天使坠毁的母舰王座号。核心战斗为“碰撞斩”：撞向敌人即可自动攻击。'
                    : ' — a non-linear 3D action-adventure. Wandering ex-soldier Tets Kinoshta and the Angel Arkas Gemini hunt the nine Bicones to breach the storm around Throne, the Angels’ crashed mothership. Combat is “Bumpslash”: bump into enemies to attack.'}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-dream-purple" aria-hidden />
                <p className="text-dream-text/85">
                  {lang === 'zh'
                    ? '2025 年 12 月 8 日登陆 Steam（Windows / Mac）；2026 年 9 月 2 日登陆 PS5、PS4、Xbox 与 Switch。'
                    : 'Released December 8, 2025 on Steam (Windows / Mac); coming to PS5, PS4, Xbox and Switch on September 2, 2026.'}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-dream-purple" aria-hidden />
                <p className="text-dream-text/85">
                  {lang === 'zh'
                    ? '通关时长约 20–30 小时；通关后解锁 Boss 连战模式。'
                    : 'A first playthrough takes around 20–30 hours; a boss rush mode unlocks after the credits.'}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <ThumbsUp className="mt-0.5 h-4 w-4 shrink-0 text-dream-purple" aria-hidden />
                <p className="text-dream-text/85">
                  {lang === 'zh'
                    ? 'Steam 好评如潮（95% 好评），Metacritic 88 分，18 项 Steam 成就。'
                    : 'Overwhelmingly Positive on Steam (95%), Metacritic 88, 18 Steam achievements.'}
                </p>
              </div>
            </dl>
          </div>
        </section>

        {/* Developer */}
        <section className="glow-card p-6">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-dream-pink">
            <Users className="h-5 w-5" aria-hidden />
            {t.about.devInfo}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-dream-text/85">
            {lang === 'zh'
              ? 'Analgesic Productions 是 Melos Han-Tani 与 Marina Kittaka 组成的独立游戏二人组，以剧情驱动的动作冒险游戏闻名。'
              : 'Analgesic Productions is the independent duo of Melos Han-Tani and Marina Kittaka, known for story-driven action-adventure games.'}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-dream-text/85">
            <li>
              <span className="font-semibold text-dream-purple">Anodyne</span>
              {lang === 'zh'
                ? ' —— 塞尔达式探索与像素画风。'
                : ' — Zelda-like exploration in pixel art.'}
            </li>
            <li>
              <span className="font-semibold text-dream-purple">Anodyne 2: Return to Dust</span>
              {lang === 'zh'
                ? ' —— 3D 与 2D 交织的超现实冒险。'
                : ' — a surreal adventure blending 3D and 2D.'}
            </li>
            <li>
              <span className="font-semibold text-dream-purple">Sephonie</span>
              {lang === 'zh'
                ? ' —— 3D 平台跳跃与能力组合。'
                : ' — 3D platforming with ability combos.'}
            </li>
          </ul>
        </section>

        {/* IGF */}
        <section className="glow-card p-6">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-dream-pink">
            <Trophy className="h-5 w-5" aria-hidden />
            {t.about.igfInfo}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-dream-text/85">
            {lang === 'zh'
              ? '《Angeline Era》获得 IGF 2026（独立游戏节）多项提名，其中包括最高荣誉 Seumas McNally 大奖提名。'
              : 'Angeline Era received multiple nominations for the 2026 Independent Games Festival, including the Seumas McNally Grand Prize — one of the highest honours in independent games.'}
          </p>
        </section>

        {/* Disclaimer */}
        <section className="glow-card p-6">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-dream-pink">
            <ScrollText className="h-5 w-5" aria-hidden />
            {t.about.disclaimer}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-dream-text/85">{t.about.disclaimerBody}</p>
        </section>
      </div>
    </div>
  )
}
