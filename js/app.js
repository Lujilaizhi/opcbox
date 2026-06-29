/* ============================================
   app.js — SPA 路由 & 全局状态 & SVG渲染
   ============================================ */

const App = {
  state: {
    route: "/",
    quiz: {
      currentQuestion: 0,
      answers: new Array(6).fill(-1),
    },
    workbench: {
      scenario: null,
      inputs: {},
      result: null,
      entryFrom: 'home',
    },
  },

  routes: {
    "/":          "page-home",
    "/quiz":      "page-quiz",
    "/result":    "page-result",
    "/workbench": "page-workbench",
    "/generate":  "page-generate",
    "/output":    "page-output",
  },

  navigate(route) {
    // 记录工作台入口来源：仅在跳到 /workbench 时记录
    if (route === "/workbench") {
      this.state.workbench.entryFrom = (this.state.route === "/result") ? "result" : "home";
    }

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const pageId = this.routes[route];
    if (pageId) {
      const page = document.getElementById(pageId);
      if (page) page.classList.add("active");
    }
    this.state.route = route;

    if (route === "/quiz")      Quiz.enter();
    if (route === "/result")    Quiz.showResult();
    if (route === "/workbench") Workbench.enter();
    if (route === "/generate")  Workbench.enterGenerate();
    if (route === "/output")    Workbench.enterOutput();

    window.scrollTo(0, 0);
  },

  workbenchBack() {
    const from = this.state.workbench.entryFrom || 'home';
    this.navigate(from === 'result' ? '/result' : '/');
  },

  toastTimer: null,
  showToast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
  },

  async apiCall(endpoint, body) {
    const resp = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || "请求失败");
    return data;
  },

  init() {
    this.initSparkles();
    this.initPreviewCarousel();
  },

  // 装饰星花
  initSparkles() {
    const s1 = document.getElementById("sparkle-1");
    const s2 = document.getElementById("sparkle-2");
    if (s1) s1.innerHTML = renderIcon("sparkle", 32, "#3a3aff");
    if (s2) s2.innerHTML = renderIcon("sparkle", 22, "#c5f53d");

    const rs = document.getElementById("result-sparkle");
    if (rs) rs.innerHTML = renderIcon("sparkle", 24, "#c5f53d");

    const hot = document.getElementById("hot-icon");
    if (hot) {
      hot.innerHTML = renderIcon("flame", 16, "#ff5b3a");
      hot.style.width = "20px";
      hot.style.height = "20px";
      hot.style.display = "inline-flex";
    }

    const exit = document.getElementById("exit-icon");
    if (exit) exit.innerHTML = renderIcon("close", 14, "#0a0a0a");

    const ok = document.getElementById("success-check-icon");
    if (ok) ok.innerHTML = renderIcon("check", 18, "#0a0a0a");
  },

  // 首页人格轮播 - 6个SVG图标
  previewPersonalities: [
    { icon: "creator",   color: "#ff5b3a", name: "AI 创造者",   desc: "脑子里永远有一团火" },
    { icon: "optimizer", color: "#ffd500", name: "AI 优化者",   desc: "眼里没有麻烦，只有自动化" },
    { icon: "visionary", color: "#3a3aff", name: "AI 远见者",   desc: "3 步看到未来的清醒派" },
    { icon: "hub",       color: "#06b6d4", name: "AI 超级节点", desc: "链接一切价值的中心枢纽" },
    { icon: "maker",     color: "#a855f7", name: "AI 建造者",   desc: "想到就做的双核驱动" },
    { icon: "commander", color: "#10b981", name: "AI 指挥官",   desc: "一个人 = 一支 AI 军队" },
  ],

  previewIndex: 0,

  initPreviewCarousel() {
    const dotsContainer = document.getElementById("preview-dots");
    if (!dotsContainer) return;

    dotsContainer.innerHTML = this.previewPersonalities.map((_, i) =>
      `<span class="preview-dot ${i === 0 ? "active" : ""}"></span>`
    ).join("");

    this.updatePreview();

    setInterval(() => {
      this.previewIndex = (this.previewIndex + 1) % this.previewPersonalities.length;
      this.updatePreview();
    }, 2800);
  },

  updatePreview() {
    const p = this.previewPersonalities[this.previewIndex];

    const iconEl = document.getElementById("preview-icon");
    const nameEl = document.getElementById("preview-name");
    const descEl = document.getElementById("preview-desc");

    if (iconEl) {
      iconEl.style.transform = "scale(0.7)";
      iconEl.style.opacity = "0";
      setTimeout(() => {
        iconEl.innerHTML = renderIcon(p.icon, 56, p.color);
        iconEl.style.transform = "scale(1)";
        iconEl.style.opacity = "1";
      }, 200);
    }
    if (nameEl) {
      nameEl.style.opacity = "0";
      setTimeout(() => {
        nameEl.textContent = p.name;
        nameEl.style.color = p.color;
        nameEl.style.opacity = "1";
      }, 200);
    }
    if (descEl) {
      descEl.style.opacity = "0";
      setTimeout(() => {
        descEl.textContent = p.desc;
        descEl.style.opacity = "1";
      }, 200);
    }

    const dotsContainer = document.getElementById("preview-dots");
    if (dotsContainer) {
      const dots = dotsContainer.children;
      Array.from(dots).forEach((d, i) => {
        if (i === this.previewIndex) d.classList.add("active");
        else d.classList.remove("active");
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
