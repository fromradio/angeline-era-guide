# Angeline Era Guide · 攻略站

An unofficial bilingual (English / 简体中文) fan guide site for **Angeline Era** by Analgesic Productions — IGF 2026 Seumas McNally Grand Prize finalist, released December 8, 2025.

非官方中英双语玩家攻略站，覆盖世界区域、能力、Boss、收集品、流程攻略与新手指南。

## Tech Stack 技术栈

- Vite 5 + React 18 (TypeScript)
- Tailwind CSS 3.4
- React Router DOM 6 (`BrowserRouter`)
- Lucide React icons
- Deployed on Vercel (see `vercel.json`)

## Local Development 本地运行

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & Deploy 构建与部署

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

Deploy to Vercel: import this repository, keep the default Vite preset, and deploy. `vercel.json` rewrites all routes to `index.html`, so the `BrowserRouter` deep links (`/world`, `/bosses`, …) work on Vercel. Vercel Analytics is wired in via `@vercel/analytics`.

## SEO

- `public/sitemap.xml` lists all 8 routes; `public/robots.txt` points crawlers to it.
- `index.html` carries description / keywords / canonical / Open Graph / Twitter Card meta plus the Google Search Console verification tag.
- Each page sets its own `document.title` (per language) through `src/hooks/usePageTitle.ts`.

## 中英双语切换说明

- 页面右上角有固定的胶囊形语言切换按钮（**EN | 中**），任何页面都可见。
- 默认语言为英文；点击「中」切换为简体中文，URL 不变。
- 切换后导航、按钮、标题等界面文本整页同步更新；攻略正文始终以双语呈现——当前语言在上，另一语言以灰色小字紧跟其下。
- 游戏内专有名词（角色、地点、技能名）首次出现时双语标注，如 *Lumina Grove（明光林地）*。
- 语言选择会保存在浏览器 `localStorage`，下次访问自动恢复。

## Language Switching

- A fixed pill toggle (**EN | 中**) sits at the top-right of every page.
- English is the default; the URL never changes when switching.
- UI text (nav, buttons, headings) updates instantly; guide body text is always shown bilingually — the active language first, the other directly beneath in muted smaller text.
- Proper nouns are annotated bilingually on first mention, e.g. *Lumina Grove（明光林地）*.
- Your choice persists in `localStorage`.

## 游戏截图说明

本站已内置来自 Steam 商店页（APPID 2393920）的 12 张官方截图与 1 张官方主视觉图，存放于 `/public/screenshots/`（`ss-01.jpg` ~ `ss-12.jpg`、`header.jpg`），版权归 Analgesic Productions 所有，仅用于本非商业玩家攻略站。

如需替换为自己游玩的截图：

1. 将自己的截图（建议 1920×1080）放入 `/public/screenshots/` 目录。
2. 在 `src/data/gameData.ts` 顶部的 `SHOTS` 表中，把对应 key 的路径改为你的文件名。
3. 如需引用其他攻略站图片，请确保获得授权或符合合理使用原则。

## Screenshots

This site bundles 12 official screenshots and 1 official key-art image from the Steam store page (app ID 2393920), stored in `/public/screenshots/` (`ss-01.jpg` ~ `ss-12.jpg`, `header.jpg`). They are © Analgesic Productions and used here only for this non-commercial fan guide.

To use your own gameplay screenshots instead:

1. Drop your captures (1920×1080 recommended) into `/public/screenshots/`.
2. In `src/data/gameData.ts`, update the paths in the `SHOTS` table at the top of the file.
3. Only reuse images from other guide sites with permission or under fair use.

## Content Sourcing 内容来源说明

- Guide content is based on the **official Steam store page** (app ID 2393920) and **published reviews** (RPGFan, SideQuesting, Gamers With Glasses, etc.), rewritten in our own words.
- Confirmed facts: Bumpslash combat, the nine Bicones, Scales & level-ups, subweapons and artifacts, the food/healing economy, non-linear overworld search, difficulty settings and boss rush mode.
- Because the game is deliberately non-linear, individual playthrough details may differ; community-sourced tips are tagged `[Source: Steam Community Discussion]` or `[Unverified - community report]`.

- 攻略内容基于 **Steam 官方商店页**（APPID 2393920）与**已发布评测**（RPGFan、SideQuesting、Gamers With Glasses 等），以我们自己的语言重新组织。
- 已确认事实：碰撞斩战斗、九枚双锥、鳞片升级、副武器与秘宝、食物/治疗经济、非线性大世界搜索、难度设置与 Boss 连战模式。
- 由于游戏采用非线性设计，不同玩家的流程细节可能不同；社区来源技巧会标注 `[来源：Steam 社区讨论]` 或 `[未经验证——社区传闻]`。

## Project Structure 项目结构

```
src/
  i18n/            Language context + EN/ZH translation dictionary
  data/            Bilingual game content (regions, abilities, bosses, …)
  components/      Layout, nav, language toggle, pixel stars, cards
  pages/           Home / World / Abilities / Bosses / Collectibles /
                   Walkthrough / Guide / About
```

## License 许可

Unofficial fan project. Angeline Era © Analgesic Productions. Site code is free to reuse; game names and artwork belong to their owners.
