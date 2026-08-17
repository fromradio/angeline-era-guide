export type Rank = 'S' | 'A' | 'B' | 'C'

export interface Bilingual {
  en: string
  zh: string
}

export interface Region {
  id: string
  name: Bilingual
  desc: Bilingual
  unlock: Bilingual
  keyLocations: Bilingual[]
  screenshot: string
}

export interface Ability {
  id: string
  name: Bilingual
  unlock: Bilingual
  effect: Bilingual
  usage: Bilingual
  rating: Rank
  screenshot: string
}

export interface Boss {
  id: string
  name: Bilingual
  location: Bilingual
  attacks: Bilingual[]
  weakness: Bilingual
  recommended: Bilingual[]
  strategy: Bilingual
  screenshot: string
}

export interface Collectible {
  id: string
  name: Bilingual
  type: Bilingual
  location: Bilingual
  requirement: Bilingual
  note?: Bilingual
  screenshot: string
}

export interface Chapter {
  id: string
  title: Bilingual
  region: Bilingual
  steps: Bilingual[]
}

export interface GuideTip {
  title: Bilingual
  body: Bilingual
}

export interface StuckPoint {
  problem: Bilingual
  solution: Bilingual
}

/**
 * Official screenshots downloaded from the Steam store page
 * (https://store.steampowered.com/app/2393920/Angeline_Era/).
 * © Analgesic Productions — used here for a non-commercial fan guide.
 */
export const SHOTS = {
  ruins: '/screenshots/ss-01.jpg', // rainy stone ruins, flame hazards
  town: '/screenshots/ss-02.jpg', // canal town with NPCs and shops
  castle: '/screenshots/ss-03.jpg', // dusk castle walls and mountains
  shop: '/screenshots/ss-04.jpg', // item shop interior
  forestCombat: '/screenshots/ss-05.jpg', // forest waterfall combat, large creature
  overworld: '/screenshots/ss-06.jpg', // overworld vista at sunset
  shipBattle: '/screenshots/ss-07.jpg', // ship deck battle vs fish swarm
  birdBoss: '/screenshots/ss-08.jpg', // dungeon fight vs giant bird-like boss
  rooftops: '/screenshots/ss-09.jpg', // rooftop running in the village
  forest: '/screenshots/ss-10.jpg', // dark forest, fairy encounter
  crypt: '/screenshots/ss-11.jpg', // torch-lit corridor, ghost and rider
  cliffs: '/screenshots/ss-12.jpg', // canyon cliffs and rope bridges
  keyArt: '/screenshots/header.jpg', // official key art with logo
} as const

export const HOME_BANNER = SHOTS.keyArt

export const ABOUT_IMAGE = SHOTS.overworld

export const regions: Region[] = [
  {
    id: 'overworld',
    name: { en: 'The Overworld of Era', zh: '纪元国大世界' },
    desc: {
      en: 'A vast, unmarked world map where every square can hide a level. Walk onto a square, search it, and a fight, a story scene or a whole dungeon may reveal itself — every level is hidden in plain sight.',
      zh: '一张广袤且无标记的世界地图，每个格子都可能藏着关卡。走上格子进行搜索，一场战斗、一段剧情或一整个迷宫都可能现身——每个关卡都藏在明处。',
    },
    unlock: { en: 'Available from the start.', zh: '游戏开始时即可进入。' },
    keyLocations: [
      { en: 'Searchable map squares — levels hidden in plain sight', zh: '可搜索的地图格子——藏于明处的关卡' },
      { en: 'Unlock paths — beating levels opens routes to nearby squares', zh: '解锁路径——通关关卡会打通邻近格子的路线' },
    ],
    screenshot: SHOTS.overworld,
  },
  {
    id: 'fae-forests',
    name: { en: 'Fae Forests', zh: '妖精森林' },
    desc: {
      en: 'Primordial forests ruled by the Fae, thick with ambushes and fairy encounters. Expect dense enemy waves and some of the game’s most unsettling lore scenes.',
      zh: '妖精统治的原始森林，伏兵密布，还有与妖精的奇遇。敌人波次密集，也藏着游戏中最令人不安的一些剧情片段。',
    },
    unlock: {
      en: 'Search forest squares on the overworld; deeper woods open as you clear nearby levels.',
      zh: '在大世界上搜索森林格子；通关附近关卡后可深入密林。',
    },
    keyLocations: [
      { en: 'Fairy encounters — story-rich dialogue scenes', zh: '妖精奇遇——信息量很大的对话场景' },
      { en: 'Waterfall arenas — wave-based combat levels', zh: '瀑布竞技场——波次战斗关卡' },
    ],
    screenshot: SHOTS.forest,
  },
  {
    id: 'towns',
    name: { en: 'Towns & Condemned Buildings', zh: '城镇与废弃建筑' },
    desc: {
      en: 'Canal towns and condemned buildings where Humans, Fae and Angels live side by side. Towns are your lifeline: shops sell food and items, and there is no healing at save points.',
      zh: '人类、妖精与天使比邻而居的运河城镇与废弃建筑。城镇是你的生命线：商店出售食物与道具——存档点可不能回血。',
    },
    unlock: {
      en: 'Found while exploring the overworld; some towns appear only after nearby levels are cleared.',
      zh: '探索大世界时发现；部分城镇需通关附近关卡后才会出现。',
    },
    keyLocations: [
      { en: 'Shops — buy food (your only reliable healing) and items', zh: '商店——购买食物（唯一可靠的回血手段）与道具' },
      { en: 'Rooftop routes — platforming hidden above the streets', zh: '屋顶路线——藏在街道上方的平台跳跃内容' },
    ],
    screenshot: SHOTS.town,
  },
  {
    id: 'farms-ruins',
    name: { en: 'Farms & Trap-filled Ruins', zh: '农场与机关遗迹' },
    desc: {
      en: 'Trap-filled farms and rain-soaked ruins where the environment is as dangerous as the enemies. Flame jets, collapsing floors and spike traps guard ancient secrets.',
      zh: '机关密布的农场与阴雨笼罩的遗迹，环境和敌人一样危险。火焰喷射、塌陷地板与尖刺陷阱守护着古老的秘密。',
    },
    unlock: {
      en: 'Search ruin and farm squares; harder traps appear further from the starting area.',
      zh: '搜索遗迹与农场格子；离起点越远，机关越凶险。',
    },
    keyLocations: [
      { en: 'Trap corridors — timing and double-jump checks', zh: '机关回廊——考验时机与二段跳' },
      { en: 'Hidden chambers — artifact chests behind hazard gauntlets', zh: '隐藏密室——机关试炼后的秘宝宝箱' },
    ],
    screenshot: SHOTS.ruins,
  },
  {
    id: 'mountains-mines',
    name: { en: 'Spiritual Mountains & Mines', zh: '圣山与矿坑' },
    desc: {
      en: 'Treacherous spiritual mountain sites and deep mines. Vertical level design rules here: rope bridges, cliff ledges and elevated enemy weak spots demand full use of the double jump.',
      zh: '险峻的圣山与深邃的矿坑。垂直关卡设计是这里的主角：吊桥、悬崖平台与高处的敌人弱点，逼你用尽二段跳。',
    },
    unlock: {
      en: 'Mid-game overworld squares; many routes open only after clearing surrounding levels.',
      zh: '游戏中期的大世界格子；许多路线需通关周边关卡后才会开启。',
    },
    keyLocations: [
      { en: 'Cliff crossings — rope bridges over long drops', zh: '悬崖通道——深谷上的吊桥' },
      { en: 'Mine shafts — cramped arenas with buried treasure', zh: '矿道——埋着宝藏的狭窄竞技场' },
    ],
    screenshot: SHOTS.cliffs,
  },
  {
    id: 'throne-storm',
    name: { en: 'The Storm & Throne', zh: '风暴与王座号' },
    desc: {
      en: 'The Angels’ crashed mothership, Throne, lies dormant behind a fierce storm. Collect the nine Bicones to breach it — the final stretch trades open exploration for a surreal, story-driven ascent.',
      zh: '天使坠毁的母舰王座号，蛰伏在猛烈的风暴之后。集齐九枚双锥才能突破风暴——最终阶段会从开放探索转为超现实的剧情驱动攀登。',
    },
    unlock: {
      en: 'Gather the nine Bicones scattered across Era, then approach the storm.',
      zh: '集齐散布在纪元国各地的九枚双锥，然后走向风暴。',
    },
    keyLocations: [
      { en: 'The storm wall — the game’s final gate', zh: '风暴之墙——游戏的最终关卡门' },
      { en: 'Throne — the Angels’ crashed mothership and the story’s end', zh: '王座号——天使坠毁的母舰，故事的终点' },
    ],
    screenshot: SHOTS.shipBattle,
  },
]

export const abilities: Ability[] = [
  {
    id: 'bumpslash',
    name: { en: 'Bumpslash', zh: '碰撞斩' },
    unlock: { en: 'Core combat — available from the start.', zh: '核心战斗方式——开局即可使用。' },
    effect: {
      en: 'Walk into enemies to attack automatically — no attack button. Your approach angle and contact point decide whether you deal damage or take it.',
      zh: '走向敌人即可自动攻击——没有攻击键。你的接近角度与接触点决定了是你伤敌，还是敌伤你。',
    },
    usage: {
      en: 'All combat. Bump enemies into walls for critical hits and stuns — many encounters are built around this.',
      zh: '一切战斗。把敌人撞向墙壁可造成暴击并眩晕——许多遭遇战都围绕这一点设计。',
    },
    rating: 'S',
    screenshot: SHOTS.forestCombat,
  },
  {
    id: 'double-jump',
    name: { en: 'Double Jump', zh: '二段跳' },
    unlock: { en: 'Core movement — available early.', zh: '核心移动能力——前期即可使用。' },
    effect: {
      en: 'A second jump in mid-air. Jumping avoids many ground attacks and projectiles.',
      zh: '空中的第二段跳跃。跳跃可以躲开许多地面攻击与弹幕。',
    },
    usage: {
      en: 'Dodging bullet-hell moments, reaching elevated enemy weak spots, and platforming in mountains and mines.',
      zh: '闪避弹幕时刻、攻击高处的敌人弱点，以及在圣山与矿坑中跑图。',
    },
    rating: 'S',
    screenshot: SHOTS.rooftops,
  },
  {
    id: 'dodge-parry',
    name: { en: 'Dodge & Parry', zh: '闪避与格挡' },
    unlock: { en: 'Core combat techniques.', zh: '核心战斗技巧。' },
    effect: {
      en: 'Evade or deflect enemy attacks — essential when arenas flood with projectiles.',
      zh: '闪开或弹开敌人的攻击——当竞技场被弹幕淹没时至关重要。',
    },
    usage: {
      en: 'Tight arena fights and bosses that mix melee pressure with projectile patterns.',
      zh: '狭小的竞技场战斗，以及近战压迫与弹幕混合的 Boss 战。',
    },
    rating: 'A',
    screenshot: SHOTS.shipBattle,
  },
  {
    id: 'gun',
    name: { en: 'Gun', zh: '手枪' },
    unlock: { en: 'Found as a subweapon during exploration.', zh: '探索过程中获得的副武器。' },
    effect: {
      en: 'Rapid ranged shots — but it only fires toward the top of the screen, and ammo must be replenished through melee attacks.',
      zh: '快速远程射击——但只能朝屏幕上方开火，弹药必须靠近战攻击补充。',
    },
    usage: {
      en: 'Poking dangerous enemies from range, then diving back into melee to reload.',
      zh: '远距离消耗危险的敌人，然后冲回近战范围补充弹药。',
    },
    rating: 'A',
    screenshot: SHOTS.ruins,
  },
  {
    id: 'grenades',
    name: { en: 'Grenades', zh: '手雷' },
    unlock: { en: 'Found as a subweapon during exploration.', zh: '探索过程中获得的副武器。' },
    effect: {
      en: 'Explosive area damage for clustered enemies and destructible obstacles.',
      zh: '范围爆炸伤害，适合密集的敌群与可破坏的障碍物。',
    },
    usage: {
      en: 'Wave arenas where enemies swarm in packs.',
      zh: '敌人成群涌上的波次竞技场。',
    },
    rating: 'B',
    screenshot: SHOTS.birdBoss,
  },
  {
    id: 'landmines',
    name: { en: 'Landmines', zh: '地雷' },
    unlock: { en: 'Found as a subweapon during exploration.', zh: '探索过程中获得的副武器。' },
    effect: {
      en: 'Placed explosives that punish pursuing enemies.',
      zh: '放置型爆炸物，惩罚追击你的敌人。',
    },
    usage: {
      en: 'Kiting: drop a line of mines and lure the pack across it.',
      zh: '放风筝打法：铺一串地雷，把敌群引过去。',
    },
    rating: 'B',
    screenshot: SHOTS.crypt,
  },
  {
    id: 'block-device',
    name: { en: 'Block-Summoning Device', zh: '方块召唤装置' },
    unlock: { en: 'An artifact hidden in a dungeon.', zh: '藏在迷宫中的秘宝。' },
    effect: {
      en: 'Summons blocks that serve as platforms, opening new routes through vertical levels.',
      zh: '召唤可作为平台的方块，为垂直关卡开辟新路线。',
    },
    usage: {
      en: 'Traversal puzzles in mountains, mines and ruins.',
      zh: '圣山、矿坑与遗迹中的通行解谜。',
    },
    rating: 'A',
    screenshot: SHOTS.cliffs,
  },
  {
    id: 'water-bubble',
    name: { en: 'Water Bubble', zh: '渡水气泡' },
    unlock: { en: 'An artifact hidden in a dungeon.', zh: '藏在迷宫中的秘宝。' },
    effect: {
      en: 'Lets you travel across bodies of water for a limited time, at the cost of some maneuverability.',
      zh: '限时在水面上行动，代价是灵活性下降。',
    },
    usage: {
      en: 'Crossing canals and flooded ruins to reach hidden squares.',
      zh: '渡过运河与被淹的遗迹，抵达隐藏格子。',
    },
    rating: 'A',
    screenshot: SHOTS.town,
  },
]

export const bosses: Boss[] = [
  {
    id: 'duel-bosses',
    name: { en: 'Duel Bosses', zh: '对决型 Boss' },
    location: { en: 'Dungeons across Era', zh: '纪元国各地的迷宫' },
    attacks: [
      { en: 'A moveset that mirrors your own: bumps, jumps and projectile pressure', zh: '与你相似的招式：碰撞、跳跃与弹幕压制' },
      { en: 'Punishes reckless charges head-on', zh: '正面硬冲会被狠狠惩罚' },
    ],
    weakness: {
      en: 'Fight like a fencer: attack from off-angles, and bump them into walls for critical stuns.',
      zh: '像击剑一样打：斜向切入攻击，并把他们撞向墙壁造成暴击眩晕。',
    },
    recommended: [
      { en: 'Bumpslash (wall crits)', zh: '碰撞斩（撞墙暴击）' },
      { en: 'Double Jump', zh: '二段跳' },
    ],
    strategy: {
      en: 'Treat duels as a mirror match. Circle rather than charge, strike from the side or back, and use the arena walls — a wall-bump crit plus stun is your biggest damage window.',
      zh: '把对决当成镜像战。绕圈而不是直冲，从侧面或背后出手，利用好场地墙壁——撞墙暴击加眩晕是你最大的输出窗口。',
    },
    screenshot: SHOTS.crypt,
  },
  {
    id: 'swarm-bosses',
    name: { en: 'Swarm & Arena Bosses', zh: '群战型 Boss' },
    location: { en: 'Action levels and ship decks', zh: '动作关卡与舰船甲板' },
    attacks: [
      { en: 'Summons waves of minions while attacking you directly', zh: '一边召唤成波的小怪，一边直接攻击你' },
      { en: 'Projectile patterns that fill the arena', zh: '铺满整个竞技场的弹幕' },
    ],
    weakness: {
      en: 'Thin the swarm first; a crowded arena hides the boss’s real threat.',
      zh: '先削减小怪；拥挤的竞技场会掩盖 Boss 真正的威胁。',
    },
    recommended: [
      { en: 'Grenades', zh: '手雷' },
      { en: 'Landmines', zh: '地雷' },
    ],
    strategy: {
      en: 'Control the crowd before committing to the boss. Kite minions through landmines, clear packs with grenades, and use the double jump to sail over the worst bullet patterns.',
      zh: '先控场再输出 Boss。用地雷放风筝清小怪，用手雷炸成群敌人，并用二段跳越过最密集的弹幕。',
    },
    screenshot: SHOTS.shipBattle,
  },
  {
    id: 'pong-fae',
    name: { en: 'The Gun-wielding Fae', zh: '持枪妖精' },
    location: { en: 'A Fae dungeon', zh: '某座妖精迷宫' },
    attacks: [
      { en: 'Shoots at you while summoning minions', zh: '一边开枪射击，一边召唤小怪' },
      { en: 'His arena plays like Pong: a paddle bounces bombs between you and him', zh: '他的场地像一场弹球游戏：球拍在你和他之间来回反弹炸弹' },
    ],
    weakness: {
      en: 'Bump the paddle so the bombs explode on his side, not yours.',
      zh: '撞击球拍，让炸弹在他那一侧爆炸，而不是你这侧。',
    },
    recommended: [
      { en: 'Bumpslash (to hit the paddle)', zh: '碰撞斩（用来击球拍）' },
      { en: 'Dodge & Parry', zh: '闪避与格挡' },
    ],
    strategy: {
      en: 'This fight changes the rules: it is a game of Pong inside a boss fight. Dodge his gunfire, manage the minions, and time your bumps on the paddle to return every bomb to his half of the arena.',
      zh: '这场战斗会改变规则：Boss 战里套了一场弹球游戏。躲开枪击、处理小怪，并把握撞击球拍的时机，把每一颗炸弹送回他的半场。',
    },
    screenshot: SHOTS.ruins,
  },
  {
    id: 'beast-bosses',
    name: { en: 'Massive Beasts', zh: '巨兽型 Boss' },
    location: { en: 'Deep dungeons', zh: '深层迷宫' },
    attacks: [
      { en: 'Huge bodies with elevated or constantly moving weak spots', zh: '庞大的身躯，弱点位于高处或不断移动' },
      { en: 'Arena-wide slams and hazard zones', zh: '全场的重击与危险区域' },
    ],
    weakness: {
      en: 'Specialised tactics per beast: watch the telegraphs, then double-jump to the weak spot.',
      zh: '每只巨兽都有专门的解法：看好前摇，然后二段跳攻向弱点。',
    },
    recommended: [
      { en: 'Double Jump', zh: '二段跳' },
      { en: 'Gun (for airborne weak spots)', zh: '手枪（攻击空中弱点）' },
    ],
    strategy: {
      en: 'Survive first, damage second. Learn each beast’s telegraphs, use terrain and high ground, and only commit when the weak spot is exposed — these fights reward patience over aggression.',
      zh: '先求生，再输出。熟悉每只巨兽的前摇动作，利用地形与高地，只在弱点暴露时全力进攻——这类战斗奖励耐心而非莽撞。',
    },
    screenshot: SHOTS.birdBoss,
  },
  {
    id: 'throne-gauntlet',
    name: { en: 'The Throne Gauntlet', zh: '王座号试炼' },
    location: { en: 'Beyond the storm', zh: '风暴之后' },
    attacks: [
      { en: 'The final stretch turns surreal and story-driven, re-testing everything you have learned', zh: '最终阶段转向超现实的剧情驱动，重新考验你学会的一切' },
    ],
    weakness: {
      en: 'Arrive prepared: food stocked, artifacts equipped, levels banked.',
      zh: '有备而来：备足食物、装好秘宝、升好等级。',
    },
    recommended: [
      { en: 'Your full kit', zh: '你的全部装备' },
      { en: 'Food supplies', zh: '食物补给' },
    ],
    strategy: {
      en: 'The last quarter of the game becomes more linear and narrative-focused. Before breaching the storm, finish your artifact collection and stock up in town — there is no better time to tie up loose ends.',
      zh: '游戏的最后四分之一会变得更线性、更重叙事。突破风暴之前，请完成秘宝收集并在城镇备足补给——再也没有更好的收尾时机了。',
    },
    screenshot: SHOTS.castle,
  },
]

export const collectibles: Collectible[] = [
  {
    id: 'bicones',
    name: { en: 'Bicones (×9)', zh: '双锥（共 9 枚）' },
    type: { en: 'Story artifact', zh: '剧情秘宝' },
    location: {
      en: 'Scattered across Era — hidden in levels all over the overworld',
      zh: '散布在纪元国各地——藏在大世界各处的关卡中',
    },
    requirement: {
      en: 'Search overworld squares and clear the levels that hold them',
      zh: '搜索大世界格子，通关藏有双锥的关卡',
    },
    note: {
      en: 'Collecting all nine is required to breach the storm around Throne.',
      zh: '集齐九枚是突破王座号风暴的必要条件。',
    },
    screenshot: SHOTS.castle,
  },
  {
    id: 'scales',
    name: { en: 'Scales', zh: '鳞片' },
    type: { en: 'Level-up item', zh: '升级道具' },
    location: {
      en: 'Awarded for beating levels',
      zh: '通关关卡后获得',
    },
    requirement: {
      en: 'Clear any level; every clear grants a Scale',
      zh: '通关任意关卡；每次通关都会获得一枚鳞片',
    },
    note: {
      en: 'Scales level Tets up. Returns diminish after level 11 — grinding cannot brute-force the game.',
      zh: '鳞片用于提升特茨的等级。11 级之后收益递减——靠刷级无法碾压游戏。',
    },
    screenshot: SHOTS.forestCombat,
  },
  {
    id: 'artifacts',
    name: { en: 'Artifacts', zh: '秘宝' },
    type: { en: 'Hidden equipment', zh: '隐藏装备' },
    location: {
      en: 'Tucked away in dungeons — block device, water bubble, healing converter and more',
      zh: '藏在迷宫深处——方块装置、渡水气泡、伤害转化回血器等',
    },
    requirement: {
      en: 'Explore dungeon side paths and hazard gauntlets',
      zh: '探索迷宫的支线与机关试炼',
    },
    note: {
      en: 'Each artifact is powerful but has a drawback — builds stay balanced by design.',
      zh: '每件秘宝都很强，但也有代价——设计上不会让你变得无敌。',
    },
    screenshot: SHOTS.crypt,
  },
  {
    id: 'food',
    name: { en: 'Food & Supplies', zh: '食物与补给' },
    type: { en: 'Consumable', zh: '消耗品' },
    location: {
      en: 'Town shops',
      zh: '城镇商店',
    },
    requirement: {
      en: 'Buy with money earned from levels',
      zh: '用通关关卡赚来的钱购买',
    },
    note: {
      en: 'Your only reliable healing — save points do not heal. Unused food expires into compost, so carry what you need and use it.',
      zh: '唯一可靠的回血手段——存档点不回血。食物放久了会变质成堆肥，按需携带、及时使用。',
    },
    screenshot: SHOTS.shop,
  },
  {
    id: 'healing-orbs',
    name: { en: 'Healing Orbs', zh: '治疗光球' },
    type: { en: 'Drop', zh: '掉落物' },
    location: {
      en: 'Dropped by enemies on lower difficulty settings',
      zh: '较低难度下由敌人掉落',
    },
    requirement: {
      en: 'Play on a lower difficulty; higher settings remove healing drops entirely',
      zh: '选择较低难度；高难度下完全不掉落治疗',
    },
    note: { en: '[Source: published reviews]', zh: '[来源：已发布评测]' },
    screenshot: SHOTS.forest,
  },
  {
    id: 'achievements',
    name: { en: 'Steam Achievements (×18)', zh: 'Steam 成就（共 18 个）' },
    type: { en: 'Meta collectible', zh: '平台收集' },
    location: {
      en: 'Earned across the whole game, including post-game challenges',
      zh: '遍布整个游戏，含通关后的挑战内容',
    },
    requirement: {
      en: 'Varies — beating the game also unlocks a boss rush mode',
      zh: '条件各异——通关后还会解锁 Boss 连战模式',
    },
    screenshot: SHOTS.keyArt,
  },
]

export const chapters: Chapter[] = [
  {
    id: 'ch1',
    title: { en: 'Learning to Bump', zh: '学会碰撞' },
    region: { en: 'Starting area of the overworld', zh: '大世界起始区域' },
    steps: [
      {
        en: 'Walk into enemies to attack — then learn the real lesson: your approach angle decides who takes damage.',
        zh: '走向敌人即可攻击——然后学会真正的一课：接近角度决定谁受伤。',
      },
      {
        en: 'Practice wall crits: bump an enemy into a wall for a critical hit and stun.',
        zh: '练习撞墙暴击：把敌人撞向墙壁，造成暴击并眩晕。',
      },
      {
        en: 'Search every nearby map square — levels are hidden in plain sight.',
        zh: '搜索附近的每一个地图格子——关卡就藏在明处。',
      },
    ],
  },
  {
    id: 'ch2',
    title: { en: 'Carving Your Path', zh: '开辟道路' },
    region: { en: 'The open overworld', zh: '开放的大世界' },
    steps: [
      {
        en: 'Beat levels to earn Scales and level up; each clear also unlocks routes to nearby squares.',
        zh: '通关关卡获得鳞片并升级；每次通关还会打通邻近格子的路线。',
      },
      {
        en: 'Mix action levels with exploration-and-lore levels — both push you forward.',
        zh: '动作关卡与探索剧情关卡交替推进——两者都是前进。',
      },
      {
        en: 'There is no set route: if one direction feels too hard, explore another.',
        zh: '没有固定路线：某个方向太难，就换个方向探索。',
      },
    ],
  },
  {
    id: 'ch3',
    title: { en: 'Towns & the Food Economy', zh: '城镇与食物经济' },
    region: { en: 'Towns of Era', zh: '纪元国的城镇' },
    steps: [
      {
        en: 'Find a town and learn the rule: save points do not heal — food does.',
        zh: '找到城镇并记住规则：存档点不回血——食物才行。',
      },
      {
        en: 'Stock up before long trips, but do not hoard: unused food expires into compost.',
        zh: '长途探索前备足食物，但别囤积：不吃的会变质成堆肥。',
      },
      {
        en: 'Spend level money on supplies; check rooftops and back streets for hidden content.',
        zh: '把通关赚的钱花在补给上；留意屋顶与后街的隐藏内容。',
      },
    ],
  },
  {
    id: 'ch4',
    title: { en: 'Artifact Hunting', zh: '秘宝狩猎' },
    region: { en: 'Dungeons, mountains and mines', zh: '迷宫、圣山与矿坑' },
    steps: [
      {
        en: 'Clear trap-filled ruins and mines to find artifacts: the block device, water bubble and more.',
        zh: '攻略机关遗迹与矿坑，寻找秘宝：方块装置、渡水气泡等等。',
      },
      {
        en: 'Pick up subweapons — gun, grenades, landmines — and learn their drawbacks.',
        zh: '收集副武器——手枪、手雷、地雷——并熟悉它们各自的代价。',
      },
      {
        en: 'Revisit old squares with new traversal tools; many secrets need an artifact to reach.',
        zh: '带着新的通行工具重访旧格子；许多秘密需要秘宝才能到达。',
      },
    ],
  },
  {
    id: 'ch5',
    title: { en: 'The Nine Bicones', zh: '九枚双锥' },
    region: { en: 'All of Era', zh: '整个纪元国' },
    steps: [
      {
        en: 'Track down the nine Bicones hidden in levels across the overworld.',
        zh: '寻找藏在大世界各关卡中的九枚双锥。',
      },
      {
        en: 'Fight the bosses guarding your path — expect duels, swarms and rule-breaking arenas.',
        zh: '击败挡路的 Boss——对决、群战与打破规则的竞技场都会出现。',
      },
      {
        en: 'Remember: level 11 is the soft cap. Skill and artifacts matter more than grinding.',
        zh: '记住：11 级是软上限。技巧与秘宝比刷级更重要。',
      },
    ],
  },
  {
    id: 'ch6',
    title: { en: 'Breaching the Storm', zh: '突破风暴' },
    region: { en: 'The storm & Throne', zh: '风暴与王座号' },
    steps: [
      {
        en: 'With nine Bicones in hand, stock up on food and approach the storm.',
        zh: '集齐九枚双锥后，备足食物，走向风暴。',
      },
      {
        en: 'The final stretch becomes linear and surreal — follow the story to Throne.',
        zh: '最终阶段会变得线性而超现实——跟随剧情前往王座号。',
      },
      {
        en: 'After the credits, boss rush mode unlocks for those who want to master Bumpslash.',
        zh: '通关后将解锁 Boss 连战模式，供想精通碰撞斩的玩家挑战。',
      },
    ],
  },
]

export const firstHourTips: GuideTip[] = [
  {
    title: { en: 'Positioning is everything', zh: '站位就是一切' },
    body: {
      en: 'The direction you approach from and where you make contact decide whether you deal damage or take it. Never charge straight in — attack from off-angles.',
      zh: '接近的方向与接触的位置决定了是你伤敌还是敌伤你。不要直线硬冲——从斜向切入。',
    },
  },
  {
    title: { en: 'Wall crits win fights', zh: '撞墙暴击是制胜关键' },
    body: {
      en: 'Bumping an enemy into a wall causes a critical hit and stuns them. Many arenas are designed around this — fight near walls, not in the open centre.',
      zh: '把敌人撞向墙壁会造成暴击并眩晕。许多竞技场都围绕这一点设计——贴着墙打，别站在空旷的中央。',
    },
  },
  {
    title: { en: 'Save points do not heal', zh: '存档点不回血' },
    body: {
      en: 'Food is your healing. Buy it in towns, carry it on long trips, and eat it before it expires into compost.',
      zh: '食物就是回血手段。在城镇购买，长途探索随身携带，并在变质成堆肥之前吃掉。',
    },
  },
  {
    title: { en: 'Search every square', zh: '搜索每一个格子' },
    body: {
      en: 'The overworld never marks its secrets. Walk onto a square and search it — levels, towns and lore scenes are all hidden in plain sight.',
      zh: '大世界从不标记秘密。走上格子并搜索——关卡、城镇与剧情场景全都藏在明处。',
    },
  },
  {
    title: { en: 'Pick the right difficulty', zh: '选择合适的难度' },
    body: {
      en: 'There is a low-difficulty setting for beginner Bumpslashers — and nightmarish settings with extra modifiers for veterans. Normal is already a real challenge.',
      zh: '游戏为碰撞斩新手提供了低难度选项，也为老玩家准备了附加词缀的噩梦难度。普通难度本身就已经很有挑战。',
    },
  },
]

export const stuckPoints: StuckPoint[] = [
  {
    problem: {
      en: '“I can’t find the next level — the map gives me nothing.”',
      zh: '“我找不到下一关——地图什么提示都没有。”',
    },
    solution: {
      en: 'That is the design: walk onto unmarked squares and search them. Beating a level unlocks routes to nearby squares, so any clear opens new ground.',
      zh: '这正是游戏的设计：走上无标记的格子并搜索。通关任意关卡都会打通邻近格子的路线，所以任何一次通关都会开辟新区域。',
    },
  },
  {
    problem: {
      en: '“I keep dying and there is no way to heal.”',
      zh: '“我一直在死，而且没办法回血。”',
    },
    solution: {
      en: 'Buy food in towns and eat it between fights. On lower difficulties enemies also drop healing orbs; an optional artifact can convert damage into healing for a few seconds.',
      zh: '在城镇购买食物，在战斗间隙使用。较低难度下敌人会掉落治疗光球；还有一件可选秘宝能短暂把受到的伤害转化为治疗。',
    },
  },
  {
    problem: {
      en: '“Bosses keep overwhelming me with projectiles.”',
      zh: '“Boss 的弹幕总是把我淹没。”',
    },
    solution: {
      en: 'Jump — the third dimension is your dodge. Weave between projectiles, use high ground, and answer pressure with wall crits during openings.',
      zh: '跳起来——第三个维度就是你的闪避。在弹幕缝隙中穿行、利用高地，并在敌人露出破绽时用撞墙暴击还击。',
    },
  },
  {
    problem: {
      en: '“I feel directionless — am I even making progress?”',
      zh: '“我感觉没有方向——我这算在推进游戏吗？”',
    },
    solution: {
      en: 'Yes. The game is deliberately “flagless”: exploration itself is progression. As long as you are clearing levels and finding Bicones, you are moving toward Throne.',
      zh: '算。游戏刻意采用“无任务旗标”设计：探索本身就是进度。只要你在通关关卡、收集双锥，你就在向王座号迈进。',
    },
  },
]

export const abilityPriority: GuideTip[] = [
  {
    title: { en: 'Priority 1 — Master wall crits', zh: '优先级 1——精通撞墙暴击' },
    body: {
      en: 'Crit + stun on wall bumps is the single strongest tool you own, and it costs nothing.',
      zh: '撞墙带来的暴击加眩晕是你手中最强的手段，而且零成本。',
    },
  },
  {
    title: { en: 'Priority 2 — Double-jump discipline', zh: '优先级 2——用好二段跳' },
    body: {
      en: 'Most projectile patterns and ground slams are meant to be jumped. Stay mobile.',
      zh: '大多数弹幕与地面重击就是要你跳起来躲。保持移动。',
    },
  },
  {
    title: { en: 'Priority 3 — Food over grinding', zh: '优先级 3——食物优于刷级' },
    body: {
      en: 'Levels taper off after 11; a stocked food bag wins more fights than two extra levels.',
      zh: '11 级后升级收益锐减；一袋充足的食物比多升两级更能赢。',
    },
  },
  {
    title: { en: 'Priority 4 — Collect artifacts early', zh: '优先级 4——尽早收集秘宝' },
    body: {
      en: 'Traversal artifacts retroactively open half the map. The earlier you own them, the more every square is worth.',
      zh: '通行类秘宝会回头解锁半张地图。越早拿到，每个格子的价值就越高。',
    },
  },
]

