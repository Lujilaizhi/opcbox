/* ============================================
   workbench.js — OPC AI Workbench (SVG icons)
   ============================================ */

const Workbench = {
  // ============ 8 个场景（按 4 维分组）============
  // C 创作: script, xiaohongshu, quote
  // O 效率: sop, workflow
  // V 洞察: industry, competitor
  // H 连接: intro
  // 混合: maker/commander 用对应主场景
  scenarios: [
    // === 创作类 (C) ===
    {
      id: 'script', icon: 'video', dim: 'create',
      name: '短视频口播脚本',
      hint: '钩子 + 正文 + 转化引导',
      fields: [
        { key: 'platform', label: '发布平台', placeholder: '抖音 / 小红书 / 视频号', required: true },
        { key: 'duration', label: '目标时长', placeholder: '30 秒 / 60 秒 / 90 秒', required: true },
        { key: 'topic',    label: '本期主题', placeholder: 'AI 时代普通人最该学什么', required: true },
        { key: 'hook',     label: '想要的钩子方向（选填）', placeholder: '反常识 / 共鸣 / 痛点 / 悬念', required: false },
      ],
    },
    {
      id: 'xiaohongshu', icon: 'palette', dim: 'create',
      name: '小红书爆款笔记',
      hint: '标题 + 封面 + 干货正文',
      fields: [
        { key: 'topic',     label: '笔记主题', placeholder: '我用了 3 个月的 AI 提效工具', required: true },
        { key: 'tone',      label: '内容调性', placeholder: '干货 / 种草 / 测评 / 故事', required: true },
        { key: 'audience',  label: '目标读者', placeholder: '职场新人 / 宝妈 / 大学生', required: true },
        { key: 'count',     label: '想要几个版本（选填）', placeholder: '3 个', required: false },
      ],
    },
    {
      id: 'quote', icon: 'sparkle', dim: 'create',
      name: '金句卡片系列',
      hint: '金句 + 海报文案',
      fields: [
        { key: 'theme',  label: '主题方向', placeholder: '关于「不被定义」的女性力量', required: true },
        { key: 'count',  label: '想要几句', placeholder: '5 句', required: true },
        { key: 'mood',   label: '情绪调性', placeholder: '燃 / 治愈 / 锋利 / 浪漫', required: true },
        { key: 'usage',  label: '使用场景', placeholder: '朋友圈封面 / 小红书九宫格 / 视频字幕', required: false },
      ],
    },
    // === 效率类 (O) ===
    {
      id: 'sop', icon: 'checklist', dim: 'optimize',
      name: '一人公司创业 SOP',
      hint: '从 0 到 1 的 5 步实战',
      fields: [
        { key: 'stage',      label: '当前阶段', placeholder: '想法验证 / 搭建 MVP / 获客测试 / 标准化交付', required: true },
        { key: 'industry',   label: '行业 / 赛道', placeholder: '独立开发 / 知识付费 / 内容创作', required: true },
        { key: 'product',    label: '核心产品', placeholder: 'AI 写作工具', required: true },
        { key: 'timeBudget', label: '每周可投入时间', placeholder: '10 小时 / 20 小时 / 全职', required: false },
      ],
    },
    {
      id: 'workflow', icon: 'bolt', dim: 'optimize',
      name: '工作流自动化',
      hint: '把重复任务交给 AI',
      fields: [
        { key: 'pain',     label: '当前最痛的重复任务', placeholder: '每天整理 50 份客户反馈', required: true },
        { key: 'task',     label: '想要自动化的具体流程', placeholder: '收集 → 分类 → 生成回复草稿', required: true },
        { key: 'toolchain',label: '你现在在用什么工具', placeholder: '飞书 / Notion / 微信', required: true },
        { key: 'goal',     label: '想达到的效果', placeholder: '节省 2 小时/天', required: false },
      ],
    },
    // === 洞察类 (V) ===
    {
      id: 'industry', icon: 'chart', dim: 'vision',
      name: '行业分析报告',
      hint: '趋势 + 机会 + 风险',
      fields: [
        { key: 'industry', label: '想分析的行业', placeholder: 'AI 教育 / 出海电商 / 银发经济', required: true },
        { key: 'focus',    label: '你最关心的问题', placeholder: '未来 3 年的增长点 / 头部玩家 / 潜在风险', required: true },
        { key: 'depth',    label: '想要多深', placeholder: '概览 / 中等 / 深度', required: true },
        { key: 'format',   label: '输出形式', placeholder: '文字报告 / 表格对比 / 分点结论', required: false },
      ],
    },
    {
      id: 'competitor', icon: 'chip', dim: 'vision',
      name: '竞品拆解',
      hint: '拆结构 + 找差异化',
      fields: [
        { key: 'competitor', label: '竞品名（1-3 个）', placeholder: 'Notion AI / 飞书智能伙伴', required: true },
        { key: 'product',    label: '你自己的产品', placeholder: '你的 AI 写作助手', required: true },
        { key: 'dimensions', label: '对比维度', placeholder: '功能 / 定价 / 用户体验 / 商业模式', required: true },
        { key: 'goal',       label: '拆解目的', placeholder: '找差异化 / 找可借鉴点 / 评估威胁', required: false },
      ],
    },
    // === 连接类 (H) ===
    {
      id: 'intro', icon: 'user', dim: 'hub',
      name: '自我介绍 / 电梯演讲',
      hint: '30 秒讲清「你是谁」',
      fields: [
        { key: 'scene',    label: '使用场景', placeholder: '社群自我介绍 / 商务洽谈 / 直播暖场', required: true },
        { key: 'duration', label: '目标时长', placeholder: '30 秒 / 60 秒 / 1 分钟', required: true },
        { key: 'role',     label: '你的身份 / 行业', placeholder: 'AI 产品经理 / 独立开发者', required: true },
        { key: 'goal',     label: '讲完后想让对方做什么', placeholder: '加微信 / 关注公众号 / 了解产品', required: true },
      ],
    },
  ],

  // 角色推荐映射（quiz 结果 → 默认场景）
  personaRecommend: {
    creator:   'script',
    optimizer: 'sop',
    visionary:  'industry',
    hub:        'intro',
    maker:      'xiaohongshu',
    commander:  'workflow',
  },

  enter() {
    const list = document.getElementById('scenario-list');
    const recommended = this.personaRecommend[App.state.quiz.currentPersonality?.code?.toLowerCase?.()] || null;
    // 收集 quiz 结果
    const p = Quiz.currentPersonality;
    const recommendedId = p ? this.personaRecommend[p.id] || null : null;

    list.innerHTML = this.scenarios.map(s => `
      <div class="scenario-card ${s.id === recommendedId ? 'is-recommended' : ''}" onclick="Workbench.selectScenario('${s.id}')">
        <div class="scenario-icon-box">${renderIcon(s.icon, 28, '#fff')}</div>
        <div class="scenario-body">
          <div class="scenario-name">${s.name}</div>
          <div class="scenario-desc">${s.hint}</div>
          ${s.id === recommendedId ? '<div class="scenario-recommend">✦ 为你推荐</div>' : ''}
        </div>
        <div class="scenario-arrow">${renderIcon('arrowRight', 16, '#fff')}</div>
      </div>
    `).join('');

    // 顶部加角色感言（如果 quiz 已完成）
    const introEl = document.getElementById('workbench-intro');
    if (introEl) {
      if (p) {
        introEl.innerHTML = `
          <div class="persona-badge" style="background:${p.bg};color:${p.color}">
            <span class="persona-badge-icon">${renderIcon(p.icon, 20, p.color)}</span>
            <span>你是 <strong>${p.name}</strong> · ${p.code} 型</span>
          </div>
          <p class="persona-tip">已根据你的 AI 原型推荐下方场景</p>
        `;
        introEl.style.display = 'block';
      } else {
        introEl.style.display = 'none';
      }
    }
  },

  selectScenario(id) {
    App.state.workbench.scenario = id;
    App.state.workbench.result = null;
    App.navigate('/generate');
  },

  // 动态渲染输入字段
  enterGenerate() {
    const s = this.scenarios.find(sc => sc.id === App.state.workbench.scenario);
    if (!s) return App.navigate('/workbench');

    document.getElementById('gen-scenario-badge').innerHTML = `
      ${renderIcon(s.icon, 16, '#fff')}
      <span>${s.name}</span>
    `;

    // 动态渲染字段
    const container = document.getElementById('dynamic-fields');
    container.innerHTML = s.fields.map((f, i) => `
      <div class="input-group">
        <label class="input-label">
          <span class="input-num">${i + 1}</span>
          <span>${f.label}${f.required ? '' : ' <span class="optional-tag">选填</span>'}</span>
        </label>
        <input type="text" data-field="${f.key}" class="input-field"
               placeholder="${f.placeholder}" autocomplete="off">
      </div>
    `).join('');
  },

  async generate() {
    const s = this.scenarios.find(sc => sc.id === App.state.workbench.scenario);
    if (!s) return;

    // 收集所有字段
    const inputs = {};
    const missing = [];
    s.fields.forEach(f => {
      const el = document.querySelector(`[data-field="${f.key}"]`);
      const val = (el?.value || '').trim();
      inputs[f.key] = val;
      if (f.required && !val) missing.push(f);
    });

    if (missing.length > 0) {
      App.showToast('请填写完整必填项');
      const first = document.querySelector(`[data-field="${missing[0].key}"]`);
      if (first) first.focus();
      return;
    }

    App.state.workbench.inputs = inputs;

    const btn = document.getElementById('btn-generate');
    btn.disabled = true;
    btn.innerHTML = `${renderIcon('sparkle', 16)} GENERATING…`;
    btn.style.opacity = '0.6';

    try {
      const data = await App.apiCall('/api/generate', {
        scenario: App.state.workbench.scenario,
        fields: inputs,
      });
      App.state.workbench.result = data.content || this.getFallbackContent();
      App.navigate('/output');
    } catch (err) {
      App.state.workbench.result = this.getFallbackContent();
      App.navigate('/output');
    } finally {
      btn.disabled = false;
      btn.innerHTML = `${renderIcon('sparkle', 16)} GENERATE`;
      btn.style.opacity = '1';
    }
  },

  enterOutput() {
    const scenarioId = App.state.workbench.scenario;
    const s = this.scenarios.find(sc => sc.id === scenarioId);
    const badge = document.getElementById('output-scenario-badge');
    if (s) badge.innerHTML = `${renderIcon(s.icon, 16, '#fff')} <span>${s.name}</span>`;

    const content = App.state.workbench.result || this.getFallbackContent();
    document.getElementById('output-content').textContent = content;
  },

  copyResult() {
    const content = App.state.workbench.result || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content).then(() => App.showToast('COPIED ✓'));
    } else {
      const el = document.getElementById('output-content');
      const range = document.createRange();
      range.selectNodeContents(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      App.showToast('SELECT & COPY');
    }
  },

  shareResult() {
    const content = App.state.workbench.result || '';
    const s = this.scenarios.find(sc => sc.id === App.state.workbench.scenario);
    const title = s ? s.name : 'AI 工作台方案';
    const shareData = { title: 'WaytoAGI · ' + title, text: content, url: location.href };

    if (navigator.canShare && navigator.canShare(shareData) && navigator.share) {
      navigator.share(shareData).catch((err) => {
        if (err && err.name !== 'AbortError') this.copyResult();
      });
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content).then(() => App.showToast('已复制到剪贴板 ✦'));
    } else {
      App.showToast('当前设备不支持分享');
    }
  },

  getFallbackContent() {
    const s = App.state.workbench.scenario;
    const inputs = App.state.workbench.inputs;
    const fallbackInputs = { industry: '你的行业', product: '你的产品', audience: '你的用户' };
    const ind = inputs.industry || inputs.topic || inputs.product || fallbackInputs.industry;
    const prod = inputs.product || inputs.theme || inputs.topic || fallbackInputs.product;
    const aud = inputs.audience || inputs.goal || fallbackInputs.audience;

    const fallbacks = {
      script: `[ HOOK · 0-3s ]\n你是不是也觉得——${aud}想提升自己，但市面上的资源要么太贵要么太水？\n\n[ BODY ]\n我花了 3 个月，用 AI 搭了一套 ${prod} 系统。\n1. 自动生成 ${ind} 专业内容\n2. 批量产出营销文案\n3. 搭建你自己的知识库\n\n[ CTA ]\n关注我，每天分享一个 AI 实操。\n#AI #${ind} #OPC`,
      xiaohongshu: `【标题候选】\n1. 我用 3 个月把 ${prod} 跑通了\n2. ${aud}必看｜AI 时代最该会的 3 件事\n3. 救！${ind} 真的可以这样用 AI 啊\n\n【封面文案】\n大字：${prod} 真的强\n小字：亲测 3 个月的复盘\n\n【正文】\n姐妹们，${aud}真的可以试一下 ${ind} 这个赛道。\n\n我做了 3 件事：\n1. 选定方向：${ind}\n2. 找到产品：${prod}\n3. 持续输出\n\n【话题标签】\n#AI #${ind} #OPC #成长`,
      quote: `【关于「${ind || prod}」的 5 句金句】\n\n1. ${prod} 不是天赋，是练习的复利。\n\n2. 你不是不够好，是没找到对的方式。\n\n3. 真正的自由，是不被定义的可能。\n\n4. 别问「我能不能」，问「我为什么不去」。\n\n5. ${aud} 的人生，从不设限开始。\n\n【使用建议】\n配深色背景 + 手写字体 + 单色滤镜，9 宫格排版`,
      sop: `[ Step 1 ] 验证想法 (1-3 天)\nAI 分析竞品 · 用户访谈 × 5-10\n\n[ Step 2 ] 搭建 MVP (1-2 周)\n工具: Cursor / Notion / Canva\n\n[ Step 3 ] 获客测试\n小红书 / 抖音 AI 日产 3 条\n\n[ Step 4 ] 标准化交付\n交付 SOP 化，单人产能 × 3\n\n[ Step 5 ] 放大\nAI 内容矩阵铺量 · 加入 WaytoAGI\n\n[ Pitfalls ]\n不要先做平台，先做服务验证`,
      workflow: `[ 现状 ]\n${ind || prod}：当前每天 2 小时花在重复任务上\n\n[ 自动化方案 ]\n1. 触发器：每天 9:00 自动启动\n2. 数据收集：API 拉取 → AI 分类\n3. AI 处理：GPT 批量生成回复草稿\n4. 人机协作：你只需 review + send\n\n[ 工具栈 ]\n- 飞书多维表格（数据源）\n- Coze / Dify（AI 流程编排）\n- 飞书机器人（通知 + 触发）\n\n[ 效果 ]\n- 节省：2 小时/天 = 60 小时/月\n- 准确率：90% 草稿可直接发\n- 可复制：换场景改 prompt 即可`,
      industry: `[ ${ind} 行业 5 点速读 ]\n\n▸ 市场规模\n预计 2026 年达 XXX 亿，CAGR 25%\n\n▸ 头部玩家\nA 公司（份额 30%）、B 公司（25%）、C 公司（15%）\n\n▸ 关键趋势\n1. AI 渗透率从 12% → 35%\n2. 出海成为第二增长曲线\n3. 政策监管趋紧\n\n▸ 机会点\n- 垂直场景：${prod}\n- 用户群：${aud}\n- 差异化：找到「巨头没做的」那 1%\n\n▸ 主要风险\n- 巨头入场\n- 监管不确定性\n- 获客成本上升`,
      competitor: `[ 竞品拆解：${ind || prod} vs 你 ]\n\n▸ 功能对比\n| 维度 | ${ind} | 你 |\n|---|---|---|\n| 核心功能 | ✅ 完整 | ⚡ 差异化切入 |\n| 接入门槛 | 高 | 低 |\n| 定价 | 高 | 灵活 |\n\n▸ 它们做对的事\n- 抓住了 X 场景的红利期\n- 团队配置完整（产品+市场+销售）\n- 持续教育市场\n\n▸ 它们没做的事\n- 没覆盖 ${aud} 这个细分群\n- 没解决 Y 痛点\n- 工具链不互通\n\n▸ 你的差异化机会\n${prod} · ${aud} 专属解决方案`,
      intro: `[ 30 秒自我介绍 · 适用：${ind || prod} 场景 ]\n\n你好，我是 ____。\n我在 ____（行业/领域）做了 ____ 年。\n\n最近用 AI 帮 ____（目标用户）解决了 ____（具体问题）。\n\n我擅长的是 ____，想找 ____（合作/资源/客户）。\n\n我的微信是 ____，欢迎链接。\n\n【备选：60 秒版本】\n展开讲一个具体的 case：\n「我之前帮一个 ${aud} 做了 ____，用 AI 把 ____ 效率提升了 3 倍……」`,
    };

    return fallbacks[s] || fallbacks.script;
  },
};