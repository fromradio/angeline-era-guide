export type Lang = 'en' | 'zh'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      world: 'World & Lore',
      abilities: 'Abilities',
      bosses: 'Bosses',
      collectibles: 'Collectibles',
      walkthrough: 'Walkthrough',
      guide: "Beginner's Guide",
      about: 'About',
    },
    common: {
      siteName: 'Angeline Era Guide',
      siteTagline: 'A fan-made bilingual guide',
      unlock: 'How to get',
      location: 'Where',
      effect: 'Effect',
      usage: 'Best used for',
      rating: 'Rating',
      weakness: 'How to counter',
      attacks: 'What to expect',
      strategy: 'Strategy',
      recommended: 'Recommended tools',
      requirement: 'Requirement',
      chapter: 'Chapter',
      inferredNote:
        '[Based on the official Steam page and published reviews. Angeline Era is non-linear by design — details may vary between playthroughs.]',
      communitySource: '[Source: Steam Community Discussion]',
      unverified: '[Unverified - community report]',
      exploring: 'Exploring…',
      faq: 'FAQ',
      backToTop: 'Back to top',
      footer:
        'Unofficial fan guide. Angeline Era © Analgesic Productions. Not affiliated with the developers.',
      menu: 'Menu',
      close: 'Close',
      privacy: 'Privacy Policy',
    },
    home: {
      title: 'Angeline Era Guide',
      subtitle:
        'A bilingual companion for Analgesic Productions’ 3D action-adventure — master Bumpslash combat, hunt the nine Bicones, and breach the storm around Throne.',
      igfBadge: 'IGF 2026 · Multiple award nominations',
      release: 'Released December 8, 2025',
      developer: 'Analgesic Productions',
      quickNav: 'Quick Navigation',
      quickNavSub: 'Jump straight into the section you need.',
      cards: {
        world: { title: 'World & Lore', desc: 'The land of Era, its regions and its secrets.' },
        abilities: { title: 'Abilities', desc: 'Bumpslash, subweapons and artifacts — rated.' },
        bosses: { title: 'Bosses', desc: 'Boss archetypes and how to counter them.' },
        collectibles: { title: 'Collectibles', desc: 'Bicones, Scales, artifacts and supplies.' },
        walkthrough: { title: 'Walkthrough', desc: 'A flexible route through a non-linear game.' },
        guide: { title: "Beginner's Guide", desc: 'First hours, stuck points and priorities.' },
      },
    },
    world: {
      title: 'World & Lore',
      subtitle:
        'The country of Era — a vast, unmarked overworld where every map square can hide a level. Search, fight, and carve your own path toward the storm.',
      unlockLabel: 'How to reach',
      keyLocations: 'Key features',
    },
    abilities: {
      title: 'Abilities',
      subtitle:
        'Tets’ full kit: the Bumpslash, movement tech, subweapons and dungeon artifacts. Ratings reflect how much each one carries a playthrough.',
      orderTitle: 'Suggested priority',
    },
    bosses: {
      title: 'Bosses',
      subtitle:
        'Boss fights in Angeline Era love to change the rules mid-fight. Here are the archetypes you will face and how to answer them.',
    },
    collectibles: {
      title: 'Collectibles',
      subtitle:
        'What to hunt for: the nine Bicones, level-up Scales, hidden artifacts and the supplies that keep you alive.',
      type: 'Type',
    },
    walkthrough: {
      title: 'Walkthrough',
      subtitle:
        'Angeline Era has no fixed route — this is a flexible progression framework, from your first search of the overworld to the gates of Throne.',
    },
    guide: {
      title: "Beginner's Guide",
      subtitle:
        'Everything worth knowing in your first hours, common stuck points, and what to prioritise.',
      firstHours: 'First hours — must know',
      stuckPoints: 'Common stuck points',
      priority: 'Priority list',
    },
    about: {
      title: 'About',
      subtitle: 'Game information, the developers, the IGF recognition, and site notices.',
      gameInfo: 'Game information',
      devInfo: 'Developer',
      igfInfo: 'IGF 2026 recognition',
      disclaimer: 'Site notice & disclaimer',
      disclaimerBody:
        'This is an unofficial, fan-made guide. All game names, artwork and trademarks belong to Analgesic Productions. Screenshots on this site are official images from the Steam store page, © Analgesic Productions, used for non-commercial reference. Guide content is based on the official Steam page and published reviews, rewritten in our own words; because the game is non-linear, individual experiences may differ.',
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How this site handles data — short version: we collect almost nothing.',
      sections: [
        {
          heading: 'What we store',
          body: 'This site stores your language preference (English or 中文) in your browser’s localStorage so the site opens in your chosen language on your next visit. This data never leaves your device and is never transmitted to us.',
        },
        {
          heading: 'Cookies and third-party advertising',
          body: 'We use Google AdSense to display ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this or other websites. Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. You may opt out of personalised advertising by visiting Google Ads Settings (https://adssettings.google.com). You can also opt out of third-party vendors’ use of cookies for personalised advertising at https://www.aboutads.info/choices.',
        },
        {
          heading: 'Analytics',
          body: 'We use Vercel Web Analytics to understand aggregate traffic (page views and referrers). Vercel Analytics is privacy-friendly: it does not use cookies and does not collect personally identifiable information.',
        },
        {
          heading: 'Third-party links',
          body: 'This site links to third-party websites such as Steam. We are not responsible for the content or privacy practices of those sites.',
        },
        {
          heading: 'Changes to this policy',
          body: 'If this policy changes, the updated version will be posted on this page with a revised date.',
        },
        {
          heading: 'Contact',
          body: 'Questions about this policy? Open an issue on our GitHub repository: github.com/fromradio/angeline-era-guide.',
        },
      ],
    },
  },
  zh: {
    nav: {
      home: '首页',
      world: '世界与设定',
      abilities: '能力',
      bosses: 'Boss',
      collectibles: '收集品',
      walkthrough: '流程攻略',
      guide: '新手指南',
      about: '关于',
    },
    common: {
      siteName: 'Angeline Era 攻略站',
      siteTagline: '玩家自制中英双语攻略',
      unlock: '获取方式',
      location: '位置',
      effect: '效果',
      usage: '适用场景',
      rating: '评级',
      weakness: '应对要点',
      attacks: '战斗特点',
      strategy: '战斗策略',
      recommended: '推荐装备',
      requirement: '获取条件',
      chapter: '章节',
      inferredNote: '[内容基于 Steam 官方页面与已发布评测整理。本作采用非线性设计——不同玩家的流程细节可能不同。]',
      communitySource: '[来源：Steam 社区讨论]',
      unverified: '[未经验证——社区传闻]',
      exploring: '探索中…',
      faq: '常见问题',
      backToTop: '回到顶部',
      footer: '非官方玩家攻略。《Angeline Era》版权归 Analgesic Productions 所有，本站与开发商无关联。',
      menu: '菜单',
      close: '关闭',
      privacy: '隐私政策',
    },
    home: {
      title: 'Angeline Era 攻略站',
      subtitle: 'Analgesic Productions 3D 动作冒险游戏的双语攻略伴侣——掌握碰撞斩，集齐九枚双锥，突破王座号周围的风暴。',
      igfBadge: 'IGF 2026 · 多项提名',
      release: '2025 年 12 月 8 日发售',
      developer: 'Analgesic Productions',
      quickNav: '快速导航',
      quickNavSub: '直接跳转到你需要的板块。',
      cards: {
        world: { title: '世界与设定', desc: '纪元国的各大区域与它的秘密。' },
        abilities: { title: '能力', desc: '碰撞斩、副武器与秘宝——附评级。' },
        bosses: { title: 'Boss', desc: 'Boss 原型分类与应对方法。' },
        collectibles: { title: '收集品', desc: '双锥、鳞片、秘宝与补给。' },
        walkthrough: { title: '流程攻略', desc: '非线性游戏的弹性推进路线。' },
        guide: { title: '新手指南', desc: '开局必知、卡关点与优先级。' },
      },
    },
    world: {
      title: '世界与设定',
      subtitle: '纪元国——一张广袤无标记的大世界地图，每个格子都可能藏着关卡。搜索、战斗，开辟属于你自己的道路。',
      unlockLabel: '进入方式',
      keyLocations: '关键要素',
    },
    abilities: {
      title: '能力',
      subtitle: '特茨的全部本领：碰撞斩、移动技巧、副武器与迷宫秘宝。评级反映每项能力对通关的贡献。',
      orderTitle: '建议优先级',
    },
    bosses: {
      title: 'Boss',
      subtitle: '本作的 Boss 战最喜欢在战斗中途改变规则。这里整理了你会遇到的 Boss 原型及应对之道。',
    },
    collectibles: {
      title: '收集品',
      subtitle: '值得收集的一切：九枚双锥、升级鳞片、隐藏秘宝，以及维系生存的补给品。',
      type: '类型',
    },
    walkthrough: {
      title: '流程攻略',
      subtitle: '本作没有固定路线——这是一套弹性推进框架，从第一次搜索大世界到王座号之门。',
    },
    guide: {
      title: '新手指南',
      subtitle: '开局必知事项、常见卡关点，以及优先级建议。',
      firstHours: '开局必知',
      stuckPoints: '常见卡关点',
      priority: '优先级',
    },
    about: {
      title: '关于',
      subtitle: '游戏信息、开发商、IGF 获奖提名说明与本站声明。',
      gameInfo: '游戏信息',
      devInfo: '开发商',
      igfInfo: 'IGF 2026 提名',
      disclaimer: '本站声明',
      disclaimerBody:
        '本站为非官方玩家自制攻略。所有游戏名称、美术素材与商标均归 Analgesic Productions 所有。本站截图来自 Steam 商店页官方图片，版权归 Analgesic Productions 所有，仅作非商业参考用途。攻略内容基于 Steam 官方页面与已发布评测，以我们自己的语言重新组织；由于游戏采用非线性设计，不同玩家的体验可能有所差异。',
    },
    privacy: {
      title: '隐私政策',
      subtitle: '本站如何处理数据——简短版：我们几乎不收集任何数据。',
      sections: [
        {
          heading: '我们存储什么',
          body: '本站仅将您的语言偏好（中文或 English）保存在浏览器的 localStorage 中，以便下次访问时自动使用您选择的语言。该数据不会离开您的设备，也不会传输给我们。',
        },
        {
          heading: 'Cookie 与第三方广告',
          body: '本站使用 Google AdSense 展示广告。包括 Google 在内的第三方供应商会使用 Cookie，根据您此前对本网站或其他网站的访问记录来投放广告。Google 对广告 Cookie 的使用使其及其合作伙伴能够根据您对本站和/或互联网上其他网站的访问情况向您投放广告。您可以访问 Google 广告设置（https://adssettings.google.com）停用个性化广告，也可以访问 https://www.aboutads.info/choices 停用第三方供应商用于个性化广告的 Cookie。',
        },
        {
          heading: '统计分析',
          body: '本站使用 Vercel Web Analytics 了解汇总的访问情况（页面浏览量与来源）。Vercel Analytics 注重隐私：不使用 Cookie，也不收集任何可识别个人身份的信息。',
        },
        {
          heading: '第三方链接',
          body: '本站包含指向 Steam 等第三方网站的链接。我们不对这些网站的内容或隐私政策负责。',
        },
        {
          heading: '政策变更',
          body: '如本政策发生变更，更新后的版本将发布在本页面。',
        },
        {
          heading: '联系我们',
          body: '如对本政策有任何疑问，欢迎在我们的 GitHub 仓库提交 Issue：github.com/fromradio/angeline-era-guide。',
        },
      ],
    },
  },
}

export type Translations = (typeof translations)['en']
