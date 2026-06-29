/* ============================================
   quiz.js — AI超能力鉴定 · 病毒式传播版
   6 道题 · 6 种 AI 原型 · 稀有度 + 战力值
   ============================================ */

const Quiz = {
  // ============ 4 维底层 ============
  // Create 创造 · Optimize 效率 · Hub 连接 · Vision 洞察
  // 每题 4 选项严格对应 1 个维度，6 题 6 个独立侧面（目的/本能/渴望/诱惑/愿景/行动）
  DIMS: [
    { key: 'create',   zh: '创造', en: 'CREATE',   color: '#ff5b3a' },
    { key: 'optimize', zh: '效率', en: 'OPTIMIZE', color: '#ffd500' },
    { key: 'hub',      zh: '连接', en: 'HUB',      color: '#06b6d4' },
    { key: 'vision',   zh: '洞察', en: 'VISION',   color: '#3a3aff' },
  ],

  questions: [
    {
      id: 'q1',
      text: '你最近一次打开 AI 是为了？',
      tag: '使用目的',
      options: [
        { icon: 'palette', label: '写文案、做图、做内容', hint: '创作派', dim: 'create' },
        { icon: 'bolt',    label: '整理资料、做表格、跑流程', hint: '效率派', dim: 'optimize' },
        { icon: 'network', label: '帮人回消息、查信息、做协调', hint: '连接派', dim: 'hub' },
        { icon: 'chart',   label: '分析数据、查趋势、找规律', hint: '洞察派', dim: 'vision' },
      ],
    },
    {
      id: 'q2',
      text: '朋友找你帮忙时，你第一反应？',
      tag: '本能模式',
      options: [
        { icon: 'pencil',  label: '直接上手帮他做', hint: '动手派', dim: 'create' },
        { icon: 'checklist', label: '先拆解成步骤再分工', hint: '结构派', dim: 'optimize' },
        { icon: 'network', label: '介绍能给 TA 帮上忙的人', hint: '连接派', dim: 'hub' },
        { icon: 'chip',    label: '帮他看清根本问题', hint: '洞察派', dim: 'vision' },
      ],
    },
    {
      id: 'q3',
      text: '你最想要的 AI 超能力是？',
      tag: '价值渴望',
      options: [
        { icon: 'flame',   label: '让我写/做的作品一稿封神', hint: '影响力', dim: 'create' },
        { icon: 'clock',   label: '3 倍速完成所有重复工作', hint: '高效', dim: 'optimize' },
        { icon: 'network', label: '一键连到对的人和对的资源', hint: '连接力', dim: 'hub' },
        { icon: 'chart',   label: '预判行业未来 3-5 年走向', hint: '洞察力', dim: 'vision' },
      ],
    },
    {
      id: 'q4',
      text: 'AI 对你的最大诱惑是？',
      tag: '核心动机',
      options: [
        { icon: 'sparkle2', label: '让我能 0 → 1 创造新东西', hint: '从无到有', dim: 'create' },
        { icon: 'bolt',     label: '让我能 1 → 100 复制成功', hint: '从一到百', dim: 'optimize' },
        { icon: 'rocket',   label: '让我 1 个人的力量 ×100', hint: '杠杆倍增', dim: 'hub' },
        { icon: 'chip',     label: '让我看穿事物本质', hint: '本质穿透', dim: 'vision' },
      ],
    },
    {
      id: 'q5',
      text: '你觉得一年后你会变成？',
      tag: '未来自我',
      options: [
        { icon: 'flame', label: 'AI 内容创作者 / IP', hint: '内容创业', dim: 'create' },
        { icon: 'bolt',  label: '用 AI 把工作/生活彻底重构', hint: '效率革命', dim: 'optimize' },
        { icon: 'network', label: 'AI 时代的超级节点 / 资源枢纽', hint: '人脉即资产', dim: 'hub' },
        { icon: 'chip',  label: 'AI 战略顾问 / 数据分析专家', hint: '判断力变现', dim: 'vision' },
      ],
    },
    {
      id: 'q6',
      text: '给你一个周末 + AI，你会？',
      tag: '行为偏好',
      options: [
        { icon: 'palette', label: '写/拍/做一组作品', hint: '创作', dim: 'create' },
        { icon: 'checklist', label: '搭一个自动化工作流', hint: '工程', dim: 'optimize' },
        { icon: 'user',   label: '约一群人聊 AI 怎么用', hint: '社交', dim: 'hub' },
        { icon: 'book',   label: '深度研究一个 AI 工具/趋势', hint: '评测', dim: 'vision' },
      ],
    },
  ],

  // ============ 6 角色表层 ============
  // 4 纯型（C/O/H/V 单维度主导） + 2 混合型（C+O = Maker, O+H = Commander）
  // 判定规则：最高维度得分 >= 12 → 纯型；前 2 维度都 >= 9 且 < 12 → 混合型；其他 → Commander
  personalities: {
    creator: {
      icon: 'creator',
      color: '#ff5b3a',
      bg: '#ffe5dd',
      name: 'AI 创造者',
      enName: 'CREATOR',
      code: 'C',
      rarity: 12,
      power: 92,
      slogan: '你的脑子里永远有一团火，\nAI 只是你的助燃剂。',
      desc: '你不是"用 AI 的人"，你是被 AI 放大的那种人——有表达欲、有想法、有故事。AI 对你来说不是工具，是画笔、麦克风、放大镜。别人还在想"AI 能做什么"，你已经用 AI 做出了作品。',
      traits: [
        { icon: 'flame', text: '灵感永不枯竭的永动机' },
        { icon: 'palette', text: '内容嗅觉极其敏锐' },
        { icon: 'rocket', text: '一个人就是一支内容团队' },
      ],
      warning: '【创造者忠告】小心成为"输出机器"——重要的不是产出量，是作品的不可替代性。',
      suggestScenario: 'script',
    },
    optimizer: {
      icon: 'optimizer',
      color: '#ffd500',
      bg: '#fff7c2',
      name: 'AI 优化者',
      enName: 'OPTIMIZER',
      code: 'O',
      rarity: 16,
      power: 95,
      slogan: '你眼里没有"麻烦"，\n只有"还能自动化"。',
      desc: '你是 AI 时代的"效率原住民"。别人花 3 小时做的事，你花 10 分钟还能做得更好。你的武器不是某个 AI 工具，而是"把一切流程化"的思维。在你眼里，重复劳动就是 bug，AI 就是 debug 工具。',
      traits: [
        { icon: 'bolt', text: '流程化思维的极致玩家' },
        { icon: 'checklist', text: '把每件事变成 SOP' },
        { icon: 'chart', text: '时间就是你的硬通货' },
      ],
      warning: '【优化者忠告】别只盯着省时间——效率的终点是让你有时间做"更重要的事"。',
      suggestScenario: 'sop',
    },
    visionary: {
      icon: 'visionary',
      color: '#3a3aff',
      bg: '#e8e8ff',
      name: 'AI 远见者',
      enName: 'VISIONARY',
      code: 'V',
      rarity: 8,
      power: 90,
      slogan: '你的大脑是第二台 GPU，\n跑得比 AI 还快。',
      desc: '你是 AI 时代的"清醒派"——不信直觉，信数据；不追热点，追规律。当别人还在拍脑袋决策的时候，你已经把模型跑完了。冷静、精准、永远在寻找"最优解"。',
      traits: [
        { icon: 'chip', text: '策略思维 + AI 加持' },
        { icon: 'chart', text: '数据驱动的决策者' },
        { icon: 'network', text: '把复杂问题拆解到底' },
      ],
      warning: '【远见者忠告】别只盯着模型——AI 时代的胜负手是"判断力"，不是"计算力"。',
      suggestScenario: 'sop',
    },
    hub: {
      icon: 'hub',
      color: '#06b6d4',
      bg: '#cffafe',
      name: 'AI 超级节点',
      enName: 'HUB',
      code: 'H',
      rarity: 10,
      power: 86,
      slogan: '你是网络里最重要的那个节点——\n链接一切价值。',
      desc: '你是 AI 时代的"人形路由器"——不生产内容，但知道谁的内容最好；不写代码，但知道哪些工具值得用。你的超能力是"链接"，把对的人、对的资源、对的信息捏到一起。',
      traits: [
        { icon: 'network', text: '社群 + 资源整合的终极玩家' },
        { icon: 'user', text: '人脉即护城河' },
        { icon: 'chart', text: '把信息差变成生意' },
      ],
      warning: '【节点忠告】链接是起点，不是终点——别囤积资源，让它们真正流动起来。',
      suggestScenario: 'ip',
    },
    maker: {
      icon: 'maker',
      color: '#a855f7',
      bg: '#f3e8ff',
      name: 'AI 建造者',
      enName: 'MAKER',
      code: 'C+O',
      rarity: 24,
      power: 94,
      slogan: '你不是只想一想，\n你是真的做出来。',
      desc: '你是 AI 时代最稀缺的物种——"会做"的人。你既有创造的灵光，又有效率的执行。别人还在开脑暴会，你已经用 AI 搭出第一版原型了。你的产出率是普通人的 5 倍。',
      traits: [
        { icon: 'palette', text: '把想法变作品的高速通道' },
        { icon: 'bolt', text: '创意 + 执行的双核驱动' },
        { icon: 'rocket', text: '从 0 到 1 到 100 全链路' },
      ],
      warning: '【建造者忠告】别什么都自己造——学会在 80 分的节点上交付，剩下的 20 分交给合作者。',
      suggestScenario: 'poster',
    },
    commander: {
      icon: 'commander',
      color: '#10b981',
      bg: '#d1fae5',
      name: 'AI 指挥官',
      enName: 'COMMANDER',
      code: 'O+H',
      rarity: 30,
      power: 96,
      slogan: '一个人 = 一支 AI 军队，\n你就是那个将军。',
      desc: '你是 AI 时代的"统帅型"——调度 AI 像调度一支军队。你不需要会每个工具，但你清楚地知道什么场景该用什么。你把人和 AI 串成一个系统，让所有资源为你所用。',
      traits: [
        { icon: 'rocket', text: '把 AI 当军队来调度' },
        { icon: 'network', text: '效率 + 人脉的双重杠杆' },
        { icon: 'flame', text: '不给自己设限' },
      ],
      warning: '【指挥官忠告】能力越大，越要专注——AI 让你什么都能做，但只能选一件事做透。',
      suggestScenario: 'script',
    },
  },

  // ============ 评分矩阵 ============
  // 每题 4 选项严格对应 1 个维度（+3 主维度，0 其他）
  scoringMatrix: [
    // Q1
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
    // Q2
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
    // Q3
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
    // Q4
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
    // Q5
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
    // Q6
    { create: 3, optimize: 0, hub: 0, vision: 0 },
    { create: 0, optimize: 3, hub: 0, vision: 0 },
    { create: 0, optimize: 0, hub: 3, vision: 0 },
    { create: 0, optimize: 0, hub: 0, vision: 3 },
  ],

  // ============ 判定 + 归一化 ============
  calculatePersonality(answers) {
    const scores = { create: 0, optimize: 0, hub: 0, vision: 0 };
    answers.forEach((answerIdx, qIdx) => {
      if (answerIdx < 0) return;
      const w = this.scoringMatrix[qIdx * 4 + answerIdx];
      if (!w) return;
      for (const [k, v] of Object.entries(w)) scores[k] += v;
    });

    // 0-100 归一化（满分 18）
    const max = 18;
    const dim = {
      create:   Math.round(scores.create   / max * 100),
      optimize: Math.round(scores.optimize / max * 100),
      hub:      Math.round(scores.hub      / max * 100),
      vision:   Math.round(scores.vision   / max * 100),
    };

    // 排序
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const [d1, d2] = sorted;
    const [k1, s1] = d1;
    const [k2, s2] = d2;

    let key;
    if (s1 >= 12) {
      // 纯型（单维度主导 ≥ 12/18）
      const map = { create: 'creator', optimize: 'optimizer', hub: 'hub', vision: 'visionary' };
      key = map[k1];
    } else if (s1 >= 9 && s2 >= 7) {
      // 混合型（前 2 维都较高）
      const pair = [k1, k2].sort().join('+');
      if (pair === 'create+optimize') key = 'maker';
      else if (pair === 'optimize+hub') key = 'commander';
      else if (pair === 'create+hub') key = 'hub';
      else if (pair === 'create+vision') key = 'visionary';
      else if (pair === 'hub+vision') key = 'visionary';
      else if (pair === 'optimize+vision') key = 'visionary';
      else key = 'commander';
    } else {
      // 兜底：4 维均衡
      key = 'commander';
    }

    // 战力值：4 维均值 + 主导维度加成
    const avg = (dim.create + dim.optimize + dim.hub + dim.vision) / 4;
    const power = Math.round(avg * 0.7 + Math.max(dim.create, dim.optimize, dim.hub, dim.vision) * 0.3);

    return { personality: key, scores, dim, power };
  },

  enter() {
    App.state.quiz.currentQuestion = 0;
    App.state.quiz.answers = new Array(6).fill(-1);
    this.renderQuestion();
  },

  renderQuestion() {
    const idx = App.state.quiz.currentQuestion;
    const q = this.questions[idx];
    const progress = ((idx + 1) / 6) * 100;

    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = (idx + 1) + ' / 6';

    const numEl = document.getElementById('question-num');
    if (numEl) numEl.textContent = 'Q' + (idx + 1);

    document.getElementById('question-text').textContent = q.text;

    const tagEl = document.getElementById('question-tag');
    if (tagEl && q.tag) tagEl.textContent = q.tag;

    const container = document.getElementById('options-container');
    const selected = App.state.quiz.answers[idx];
    container.innerHTML = q.options.map((opt, i) => `
      <button class="option-btn ${i === selected ? 'selected' : ''}"
              onclick="Quiz.select(${i})">
        <span class="option-icon">${renderIcon(opt.icon, 22)}</span>
        <span class="option-text">
          <span class="option-label">${opt.label}</span>
          <span class="option-hint">${opt.hint}</span>
        </span>
      </button>
    `).join('');

    document.getElementById('quiz-back').style.visibility = idx > 0 ? 'visible' : 'hidden';
    document.getElementById('quiz-skip').style.visibility = idx < 5 ? 'visible' : 'hidden';
  },

  select(optionIndex) {
    App.state.quiz.answers[App.state.quiz.currentQuestion] = optionIndex;
    const idx = App.state.quiz.currentQuestion;
    const q = this.questions[idx];
    const container = document.getElementById('options-container');
    container.innerHTML = q.options.map((opt, i) => `
      <button class="option-btn ${i === optionIndex ? 'selected' : ''}"
              onclick="Quiz.select(${i})">
        <span class="option-icon">${renderIcon(opt.icon, 22)}</span>
        <span class="option-text">
          <span class="option-label">${opt.label}</span>
          <span class="option-hint">${opt.hint}</span>
        </span>
      </button>
    `).join('');

    if (idx < 5) {
      setTimeout(() => this.next(), 380);
    } else {
      setTimeout(() => { App.navigate('/result'); }, 550);
    }
  },

  prev() {
    if (App.state.quiz.currentQuestion > 0) {
      App.state.quiz.currentQuestion--;
      this.renderQuestion();
    }
  },

  next() {
    if (App.state.quiz.currentQuestion < 5) {
      App.state.quiz.currentQuestion++;
      this.renderQuestion();
    }
  },

  currentPersonality: null,
  currentDim: null,

  showResult() {
    const answers = App.state.quiz.answers;
    const { personality, scores, dim, power } = this.calculatePersonality(answers);
    const p = this.personalities[personality];
    this.currentPersonality = p;
    this.currentDim = dim;

    document.documentElement.style.setProperty('--result-accent', p.color);
    document.documentElement.style.setProperty('--result-bg', p.bg);
    document.getElementById('page-result').style.setProperty('--p-color', p.color);
    document.getElementById('page-result').style.setProperty('--p-bg', p.bg);

    document.getElementById('result-icon').innerHTML = renderIcon(p.icon, 96, p.color);
    document.getElementById('result-icon-wrap').style.background = p.bg;

    document.getElementById('result-en-name').textContent = p.enName + ' · ' + p.code;
    document.getElementById('result-title').textContent = p.name;

    document.getElementById('result-rarity-num').textContent = p.rarity + '%';
    document.getElementById('result-power-num').textContent = power;

    document.getElementById('result-slogan').textContent = p.slogan;
    document.getElementById('result-desc').textContent = p.desc;

    document.getElementById('result-traits').innerHTML = p.traits.map(t => `
      <div class="trait-item">
        <span class="trait-icon">${renderIcon(t.icon, 18, p.color)}</span>
        <span class="trait-text">${t.text}</span>
      </div>
    `).join('');

    document.getElementById('result-warning').innerHTML = p.warning.replace(/【(.*?)】/, '<strong>$1</strong>');

    // 渲染 4 维雷达图
    this.renderRadar(dim);

    document.getElementById('cta-workbench').onclick = () => {
      App.navigate('/workbench');
    };
  },

  // ============ 4 维雷达图 (SVG) ============
  renderRadar(dim) {
    const svg = document.getElementById('result-radar');
    if (!svg) return;
    const cx = 110, cy = 110, R = 85;
    const dims = this.DIMS;
    // 4 个顶点：上、右、下、左
    const points = dims.map((d, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / 4;
      const score = dim[d.key] / 100;
      return {
        x: cx + Math.cos(angle) * R * score,
        y: cy + Math.sin(angle) * R * score,
        labelX: cx + Math.cos(angle) * (R + 22),
        labelY: cy + Math.sin(angle) * (R + 22),
        color: d.color,
        name: d.zh,
        score: dim[d.key],
      };
    });
    const polygon = points.map(p => `${p.x},${p.y}`).join(' ');

    // 4 圈参考环
    const rings = [0.25, 0.5, 0.75, 1].map(t => {
      const r = R * t;
      const pts = dims.map((_, i) => {
        const a = -Math.PI / 2 + (Math.PI * 2 * i) / 4;
        return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
      }).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>`;
    }).join('');

    // 轴线
    const axes = dims.map((_, i) => {
      const a = -Math.PI / 2 + (Math.PI * 2 * i) / 4;
      return `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(a) * R}" y2="${cy + Math.sin(a) * R}" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>`;
    }).join('');

    // 标签 + 分数
    const labels = points.map(p => `
      <g>
        <text x="${p.labelX}" y="${p.labelY - 4}" text-anchor="middle" font-size="11" font-weight="800" fill="${p.color}">${p.name}</text>
        <text x="${p.labelX}" y="${p.labelY + 10}" text-anchor="middle" font-size="13" font-weight="900" fill="#0a0a0a">${p.score}</text>
      </g>
    `).join('');

    // 顶点圆点
    const dots = points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${p.color}" stroke="#fff" stroke-width="2"/>`).join('');

    svg.innerHTML = `
      ${rings}
      ${axes}
      <polygon points="${polygon}" fill="${points[0].color}" fill-opacity="0.25" stroke="${points[0].color}" stroke-width="2.5" stroke-linejoin="round"/>
      ${dots}
      ${labels}
    `;
  },
};