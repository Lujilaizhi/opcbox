/* ============================================
   icons.js — SVG图标库
   24x24 viewBox · stroke-based · currentColor
   替换所有emoji，提供更高质感的视觉语言
   ============================================ */
const Icons = {
  // ============ 装饰 ============
  sparkle: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L13.5 9L20 10.5L13.5 12L12 19L10.5 12L4 10.5L10.5 9L12 2Z" fill="currentColor"/><circle cx="19" cy="5" r="1.2" fill="currentColor"/><circle cx="5" cy="19" r="1.2" fill="currentColor"/></svg>`,
  arrowRight: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
  arrowLeft: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 5l-7 7 7 7"/></svg>`,
  check: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>`,
  copy: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  share: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  close: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  exit: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  // ============ 6种AI人格人形图标 (SBTI风格) ============
  // Creator - 创作燃烧者: 举手欢呼+头顶火花
  flame: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 4 L34 10 L40 10 L35 14 L37 20 L32 16 L27 20 L29 14 L24 10 L30 10 Z" fill="currentColor"/>
    <circle cx="32" cy="28" r="7" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="32" cy="28" r="7"/>
    <circle cx="30" cy="28" r="1" fill="currentColor"/>
    <circle cx="34" cy="28" r="1" fill="currentColor"/>
    <path d="M30 31 Q32 33 34 31"/>
    <path d="M32 35 L32 50"/>
    <path d="M32 38 L22 28 M32 38 L42 28"/>
    <path d="M32 50 L26 60 M32 50 L38 60"/>
  </svg>`,
  // Efficiency - 效率闪电侠: 跑步姿势+闪电
  bolt: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 18 L20 24 L14 28 L20 34" stroke-width="3" fill="currentColor" fill-opacity="0.2"/>
    <circle cx="34" cy="22" r="6" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="34" cy="22" r="6"/>
    <circle cx="32" cy="22" r="0.8" fill="currentColor"/>
    <circle cx="36" cy="22" r="0.8" fill="currentColor"/>
    <path d="M33 25 L36 25"/>
    <path d="M34 28 L40 38"/>
    <path d="M34 32 L44 28 M37 35 L46 38"/>
    <path d="M40 38 L48 36 M40 38 L36 50"/>
    <path d="M10 38 L18 38 M8 44 L20 44" stroke-width="2"/>
  </svg>`,
  // Visual - 视觉炼金师: 拿画笔+颜料溅
  palette: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="32" cy="26" rx="7" ry="6" fill="currentColor" fill-opacity="0.15"/>
    <ellipse cx="32" cy="26" rx="7" ry="6"/>
    <path d="M22 22 Q32 14 42 22 L40 24 Q32 20 24 24 Z" fill="currentColor"/>
    <circle cx="30" cy="27" r="1" fill="currentColor"/>
    <circle cx="34" cy="27" r="1" fill="currentColor"/>
    <path d="M30 30 Q32 31 34 30"/>
    <path d="M32 32 L32 48"/>
    <path d="M32 36 L20 40"/>
    <ellipse cx="14" cy="42" rx="6" ry="4" fill="currentColor" fill-opacity="0.2"/>
    <circle cx="11" cy="42" r="1.2" fill="currentColor"/>
    <circle cx="14" cy="40" r="1.2" fill="currentColor"/>
    <circle cx="17" cy="42" r="1.2" fill="currentColor"/>
    <path d="M32 36 L46 28"/>
    <path d="M46 28 L54 16" stroke-width="3"/>
    <path d="M50 22 L58 14 L54 10 L46 18 Z" fill="currentColor"/>
    <path d="M32 48 L26 60 M32 48 L38 60"/>
  </svg>`,
  // Logic - 逻辑架构师: 戴眼镜+看屏幕+脑波
  chip: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="24" r="7" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="32" cy="24" r="7"/>
    <circle cx="29" cy="24" r="2.5"/>
    <circle cx="35" cy="24" r="2.5"/>
    <line x1="31.5" y1="24" x2="32.5" y2="24"/>
    <line x1="30" y1="29" x2="34" y2="29"/>
    <path d="M32 31 L32 46"/>
    <path d="M32 36 L24 42 M32 36 L40 42"/>
    <rect x="22" y="42" width="20" height="10" rx="1" fill="currentColor" fill-opacity="0.2"/>
    <line x1="22" y1="46" x2="42" y2="46"/>
    <path d="M26 49 L30 49 M32 49 L36 49 M28 44 L34 44" stroke-width="1.5"/>
    <path d="M26 12 Q32 8 38 12" stroke-width="1.5"/>
    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
  </svg>`,
  // Connector - 超级节点: 中心人物+周围小节点
  network: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="30" r="6" fill="currentColor" fill-opacity="0.2"/>
    <circle cx="32" cy="30" r="6"/>
    <path d="M32 36 L32 46"/>
    <path d="M32 40 L22 36 M32 40 L42 36"/>
    <path d="M32 46 L26 56 M32 46 L38 56"/>
    <circle cx="10" cy="14" r="2.5" fill="currentColor"/>
    <path d="M10 16.5 L10 22 M7 19 L10 22 L13 19" stroke-width="1.8"/>
    <circle cx="54" cy="14" r="2.5" fill="currentColor"/>
    <path d="M54 16.5 L54 22 M51 19 L54 22 L57 19" stroke-width="1.8"/>
    <circle cx="8" cy="42" r="2.5" fill="currentColor"/>
    <path d="M8 44.5 L8 50 M5 47 L8 50 L11 47" stroke-width="1.8"/>
    <circle cx="56" cy="42" r="2.5" fill="currentColor"/>
    <path d="M56 44.5 L56 50 M53 47 L56 50 L59 47" stroke-width="1.8"/>
    <line x1="13" y1="16" x2="27" y2="26" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="51" y1="16" x2="37" y2="26" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="11" y1="42" x2="26" y2="36" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="53" y1="42" x2="38" y2="36" stroke-width="1.5" stroke-dasharray="2 2"/>
  </svg>`,
  // Commander - 全能指挥官: 戴皇冠+披风+指挥手势
  rocket: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 14 L24 8 L28 12 L32 6 L36 12 L40 8 L42 14 Z" fill="currentColor"/>
    <line x1="22" y1="14" x2="42" y2="14"/>
    <circle cx="32" cy="24" r="6" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="32" cy="24" r="6"/>
    <path d="M29 24 L31 24 M33 24 L35 24"/>
    <path d="M29 27 Q32 29 35 27"/>
    <path d="M32 30 L32 48"/>
    <path d="M32 36 L20 30 M32 36 L44 30"/>
    <circle cx="18" cy="30" r="1.5" fill="currentColor"/>
    <circle cx="46" cy="30" r="1.5" fill="currentColor"/>
    <path d="M24 32 L22 50 L26 48 L28 52 L32 50 L36 52 L38 48 L42 50 L40 32" fill="currentColor" fill-opacity="0.2"/>
    <path d="M32 48 L26 60 M32 48 L38 60"/>
  </svg>`,
    // ============ 场景图标 ============
  video: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" fill="currentColor" fill-opacity="0.12"/><polygon points="22 8 16 12 22 16 22 8" fill="currentColor"/><circle cx="6" cy="9" r="1" fill="currentColor"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/></svg>`,
  poster: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.12"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="11" y2="16"/><circle cx="17" cy="16" r="2" fill="currentColor"/></svg>`,
  checklist: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.12"/><polyline points="8 9 11 12 16 7"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="8" y1="18" x2="13" y2="18"/></svg>`,
  user: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" fill="currentColor" fill-opacity="0.12"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6" fill="currentColor" fill-opacity="0.12"/><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  // ============ 测评选项图标 ============
  pencil: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="currentColor" fill-opacity="0.15"/></svg>`,
  code: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  clipboard: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="18" rx="2" fill="currentColor" fill-opacity="0.12"/><rect x="9" y="2" width="6" height="4" rx="1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  message: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="currentColor" fill-opacity="0.15"/></svg>`,
  coin: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.15"/><path d="M9 9h4.5a2 2 0 0 1 0 4H9m0 0h5a2 2 0 0 1 0 4H9m0-12v14"/></svg>`,
  clock: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.15"/><polyline points="12 7 12 12 15 14"/></svg>`,
  book: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="currentColor" fill-opacity="0.15"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fill-opacity="0.15"/></svg>`,
  brush: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21c0-2.5 2-4 5-4s5 1.5 5 4" fill="currentColor" fill-opacity="0.15"/><path d="M15 9l-6 6-3-1 1-3 6-6 3 1-1 3z" fill="currentColor" fill-opacity="0.15"/><path d="M14 10l4 4 5-5-4-4z"/></svg>`,
  sparkle2: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3m0 12v3M5 12H2m20 0h-3M6.3 6.3L4.2 4.2m15.6 15.6l-2.1-2.1M6.3 17.7l-2.1 2.1m15.6-15.6l-2.1 2.1"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`,
  // ============ 统计/数据图标 ============
  chart: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  trophy: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4a2 2 0 0 1-2-2V4h4" fill="currentColor" fill-opacity="0.15"/><path d="M18 9h2a2 2 0 0 0 2-2V4h-4" fill="currentColor" fill-opacity="0.15"/><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2"/></svg>`,
  // ============ 摄像头/截图 ============
  camera: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="currentColor" fill-opacity="0.15"/><circle cx="12" cy="13" r="4" fill="currentColor"/></svg>`,
  // ============ Hero 大图标 ============
  brain: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 0 0 12 18Z" fill="currentColor" fill-opacity="0.15"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 0 1 12 18Z" fill="currentColor" fill-opacity="0.15"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4M17.599 6.5a3 3 0 0 0 .399-1.375M6.003 5.125A3 3 0 0 0 6.401 6.5M3.477 10.896a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M19.967 17.484A4 4 0 0 1 18 18M21.523 10.5a4 4 0 0 0-.585-.396"/></svg>`,
  // ============ 6 种 AI 原型 · 人物图标（4 维底层） ============
  // Creator 创造者 - 双手欢呼+头顶火焰+灵感星
  creator: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28 6 Q30 2 32 6 Q34 2 36 6 Q38 10 32 16 Q26 10 28 6Z" fill="currentColor"/>
    <circle cx="32" cy="24" r="7" fill="currentColor" fill-opacity="0.18"/>
    <path d="M28 23 Q30 22 32 23" stroke-width="2.2"/>
    <path d="M32 23 Q34 22 36 23" stroke-width="2.2"/>
    <path d="M28 27 Q32 30 36 27"/>
    <path d="M26 32 L18 16"/>
    <path d="M38 32 L46 16"/>
    <circle cx="17" cy="15" r="1.6" fill="currentColor"/>
    <circle cx="47" cy="15" r="1.6" fill="currentColor"/>
    <path d="M24 32 L24 50 L40 50 L40 32 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M28 50 L26 60"/>
    <path d="M36 50 L38 60"/>
    <path d="M8 8 L9 11 L12 12 L9 13 L8 16 L7 13 L4 12 L7 11 Z" fill="currentColor"/>
    <path d="M56 30 L57 32 L59 33 L57 34 L56 36 L55 34 L53 33 L55 32 Z" fill="currentColor"/>
    <path d="M4 40 L5 42 L7 43 L5 44 L4 46 L3 44 L1 43 L3 42 Z" fill="currentColor"/>
  </svg>`,
  optimizer: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 6 L20 6 L16 14 L22 14 L8 28 L13 18 L6 18 Z" fill="currentColor" fill-opacity="0.25"/>
    <circle cx="36" cy="20" r="6" fill="currentColor" fill-opacity="0.2"/>
    <line x1="33" y1="20" x2="35" y2="20" stroke-width="2.4"/>
    <line x1="37" y1="20" x2="39" y2="20" stroke-width="2.4"/>
    <path d="M33 23 Q36 24 39 23"/>
    <path d="M30 28 L42 32 L44 44 L32 42 L20 44 L22 32 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M44 32 L54 28 L58 24"/>
    <circle cx="58" cy="24" r="1.6" fill="currentColor"/>
    <path d="M22 36 L12 40"/>
    <path d="M32 42 L26 56"/>
    <path d="M40 42 L50 50 L54 56"/>
    <line x1="2" y1="28" x2="14" y2="28" stroke-width="2"/>
    <line x1="2" y1="34" x2="12" y2="34" stroke-width="2"/>
    <line x1="4" y1="40" x2="14" y2="40" stroke-width="2"/>
  </svg>`,
  visionary: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="8" r="2.5" fill="currentColor"/>
    <circle cx="32" cy="8" r="5" stroke-dasharray="2 2" stroke-width="1.4"/>
    <circle cx="32" cy="8" r="8" stroke-dasharray="2 3" stroke-width="1.2"/>
    <circle cx="32" cy="24" r="7" fill="currentColor" fill-opacity="0.18"/>
    <circle cx="29" cy="24" r="2.5" fill="currentColor" fill-opacity="0.45"/>
    <circle cx="35" cy="24" r="2.5" fill="currentColor" fill-opacity="0.45"/>
    <line x1="31.5" y1="24" x2="32.5" y2="24"/>
    <line x1="27" y1="28" x2="37" y2="28"/>
    <path d="M29 30 L34 30" stroke-width="2"/>
    <path d="M25 34 L25 50 L39 50 L39 34 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M25 38 L39 34"/>
    <path d="M25 34 L39 38"/>
    <path d="M28 50 L26 60"/>
    <path d="M36 50 L38 60"/>
    <path d="M6 36 L10 36 M8 34 L8 38" stroke-width="2"/>
    <path d="M54 32 L58 32 M56 30 L56 34" stroke-width="2"/>
    <path d="M10 50 L14 50" stroke-width="2"/>
    <path d="M50 48 L54 48" stroke-width="2"/>
  </svg>`,
  hub: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="26" r="6" fill="currentColor" fill-opacity="0.22"/>
    <path d="M28 24 Q30 23 32 24" stroke-width="2"/>
    <path d="M32 24 Q34 23 36 24" stroke-width="2"/>
    <path d="M29 27 Q32 28 35 27"/>
    <path d="M26 32 L26 48 L38 48 L38 32 Z" fill="currentColor" fill-opacity="0.16"/>
    <path d="M26 38 L12 30"/>
    <path d="M38 38 L52 30"/>
    <circle cx="11" cy="29" r="1.8" fill="currentColor"/>
    <circle cx="53" cy="29" r="1.8" fill="currentColor"/>
    <path d="M29 48 L27 60"/>
    <path d="M35 48 L37 60"/>
    <circle cx="10" cy="12" r="2.5" fill="currentColor"/>
    <path d="M8 16 L8 22 M6 19 L8 21 L10 19" stroke-width="1.8"/>
    <circle cx="54" cy="12" r="2.5" fill="currentColor"/>
    <path d="M52 16 L52 22 M50 19 L52 21 L54 19" stroke-width="1.8"/>
    <circle cx="6" cy="48" r="2.5" fill="currentColor"/>
    <path d="M4 52 L4 58 M2 55 L4 57 L6 55" stroke-width="1.8"/>
    <circle cx="58" cy="48" r="2.5" fill="currentColor"/>
    <path d="M56 52 L56 58 M54 55 L56 57 L58 55" stroke-width="1.8"/>
    <line x1="13" y1="13" x2="26" y2="22" stroke-dasharray="2 2" stroke-width="1.5"/>
    <line x1="51" y1="13" x2="38" y2="22" stroke-dasharray="2 2" stroke-width="1.5"/>
    <line x1="9" y1="48" x2="26" y2="34" stroke-dasharray="2 2" stroke-width="1.5"/>
    <line x1="55" y1="48" x2="38" y2="34" stroke-dasharray="2 2" stroke-width="1.5"/>
  </svg>`,
  maker: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 18 Q32 4 42 18 L42 20 L22 20 Z" fill="currentColor" fill-opacity="0.35"/>
    <circle cx="42" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="32" cy="24" r="7" fill="currentColor" fill-opacity="0.2"/>
    <path d="M28 24 L31 24" stroke-width="2.4"/>
    <path d="M33 24 L36 24" stroke-width="2.4"/>
    <path d="M29 27 Q32 28 35 27"/>
    <path d="M25 32 L25 50 L39 50 L39 32 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M39 36 L48 22 L52 26 L44 38"/>
    <path d="M50 20 L56 14" stroke-width="3"/>
    <path d="M54 16 L60 10 L56 6 L50 12 Z" fill="currentColor"/>
    <circle cx="10" cy="12" r="2" fill="currentColor"/>
    <circle cx="6" cy="20" r="1.4" fill="currentColor"/>
    <circle cx="14" cy="6" r="1.2" fill="currentColor"/>
    <circle cx="58" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="60" cy="22" r="1" fill="currentColor"/>
    <path d="M25 38 L18 42"/>
    <circle cx="16" cy="42" r="2.5"/>
    <path d="M14 42 L18 42" stroke-width="1.8"/>
    <path d="M28 50 L26 60"/>
    <path d="M36 50 L38 60"/>
  </svg>`,
  commander: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 12 L26 6 L30 10 L32 4 L34 10 L38 6 L42 12 Z" fill="currentColor"/>
    <line x1="22" y1="14" x2="42" y2="14"/>
    <circle cx="32" cy="22" r="6.5" fill="currentColor" fill-opacity="0.2"/>
    <line x1="29" y1="22" x2="31" y2="22" stroke-width="2.4"/>
    <line x1="33" y1="22" x2="35" y2="22" stroke-width="2.4"/>
    <path d="M28 25 Q32 28 36 25" stroke-width="2.2"/>
    <path d="M22 30 L16 50 L24 48 L28 54 L32 50 L36 54 L40 48 L48 50 L42 30" fill="currentColor" fill-opacity="0.15"/>
    <path d="M26 32 L26 50 L38 50 L38 32 Z" fill="currentColor" fill-opacity="0.18"/>
    <path d="M32 38 L33 41 L36 41 L33.5 43 L34.5 46 L32 44.5 L29.5 46 L30.5 43 L28 41 L31 41 Z" fill="currentColor"/>
    <path d="M38 36 L50 28 L54 22"/>
    <circle cx="54" cy="22" r="1.6" fill="currentColor"/>
    <path d="M26 36 L18 38 L20 42"/>
    <path d="M29 50 L27 60"/>
    <path d="M35 50 L37 60"/>
  </svg>`,
};
// Helper: 渲染图标到指定尺寸
function renderIcon(name, size = 24, color = '') {
  const svg = Icons[name];
  if (!svg) return '';
  const sized = svg.replace('width="100%"', `width="${size}"`).replace('height="100%"', `height="${size}"`);
  if (color) {
    return sized.replace('<svg ', `<svg style="color:${color}" `);
  }
  return sized;
}
