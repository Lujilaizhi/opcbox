/* ============================================
   poster.js — AI能力卡海报生成器
   Canvas · 1080×1440 (3:4) · 病毒传播核心
   ============================================ */

const Poster = {
  // 渲染整张海报
  async generate(personality) {
    // 整体超时保护：8秒后强制返回
    return Promise.race([
      this._generateInner(personality),
      new Promise((_, reject) => setTimeout(() => reject(new Error("生成超时")), 8000))
    ]);
  },

  async _generateInner(personality) {
    const W = 1080, H = 1440;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    const ZH = `'PingFang SC', 'Heiti SC', 'Microsoft YaHei', sans-serif`;
    const EN = `'Inter', 'Helvetica', sans-serif`;

    // ====== 1. 紫色径向渐变背景 ======
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#3b0a6e");
    bg.addColorStop(0.5, "#5b13a3");
    bg.addColorStop(1, "#7e22ce");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 顶部紫色光晕
    const topGlow = ctx.createRadialGradient(W/2, 0, 0, W/2, 0, W * 0.7);
    topGlow.addColorStop(0, "rgba(236, 72, 153, 0.35)");
    topGlow.addColorStop(1, "rgba(236, 72, 153, 0)");
    ctx.fillStyle = topGlow;
    ctx.fillRect(0, 0, W, H * 0.5);

    // 底部蓝色光晕
    const botGlow = ctx.createRadialGradient(W/2, H, 0, W/2, H, W * 0.6);
    botGlow.addColorStop(0, "rgba(34, 211, 238, 0.25)");
    botGlow.addColorStop(1, "rgba(34, 211, 238, 0)");
    ctx.fillStyle = botGlow;
    ctx.fillRect(0, H/2, W, H/2);

    // 装饰星点
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    [[100, 80], [900, 60], [60, 380], [950, 420], [80, 800]].forEach(([x, y]) => {
      this.drawStar(ctx, x, y, 4, 4, "#fff", 0);
    });

    // ====== 2. 顶部 Header ======
    ctx.fillStyle = "#fde047";
    ctx.font = `bold 36px ${EN}`;
    ctx.textAlign = "left";
    ctx.fillText("WaytoAGI  2026", 60, 80);

    ctx.fillStyle = "#fff";
    ctx.font = `900 48px ${ZH}`;
    ctx.textAlign = "right";
    ctx.fillText("AI 超能力鉴定", W - 60, 80);

    // 大标题副标
    ctx.font = `900 24px ${EN}`;
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("OPC BOOTH × JULY 4", W - 60, 115);

    // 装饰线
    ctx.fillStyle = "#fde047";
    ctx.fillRect(60, 140, 960, 4);

    // ====== 3. 标题块 (黄色高亮框) ======
    ctx.fillStyle = "#fde047";
    this.roundRect(ctx, 60, 180, 580, 130, 18);
    ctx.fill();
    ctx.strokeStyle = "#0a0a0a";
    ctx.lineWidth = 3;
    this.roundRect(ctx, 60, 180, 580, 130, 18);
    ctx.stroke();

    ctx.fillStyle = "#0a0a0a";
    ctx.font = `900 56px ${ZH}`;
    ctx.textAlign = "left";
    ctx.fillText("战力超凡", 88, 235);

    ctx.font = `900 48px ${ZH}`;
    ctx.fillText(personality.name, 88, 285);

    // 右侧 EN 信息
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = `900 22px ${EN}`;
    ctx.textAlign = "right";
    ctx.fillText("PLAYER", W - 60, 200);
    ctx.fillStyle = "#fde047";
    ctx.font = `900 36px ${EN}`;
    ctx.fillText(personality.enName, W - 60, 235);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = `900 22px ${EN}`;
    ctx.fillText("IDENTITY", W - 60, 270);
    ctx.font = `900 30px ${ZH}`;
    ctx.fillStyle = "#fff";
    ctx.fillText("AI 原型 " + personality.rarity + "%", W - 60, 305);

    // ====== 4. 大圆形头像 (核心视觉) ======
    const avatarCX = W / 2;
    const avatarCY = 600;
    const avatarR = 220;

    // 外层光晕环 (粉色)
    const ringGlow = ctx.createRadialGradient(avatarCX, avatarCY, avatarR - 20, avatarCX, avatarCY, avatarR + 40);
    ringGlow.addColorStop(0, "rgba(236, 72, 153, 0)");
    ringGlow.addColorStop(0.7, "rgba(236, 72, 153, 0.4)");
    ringGlow.addColorStop(1, "rgba(236, 72, 153, 0)");
    ctx.fillStyle = ringGlow;
    ctx.beginPath();
    ctx.arc(avatarCX, avatarCY, avatarR + 40, 0, Math.PI * 2);
    ctx.fill();

    // 外圈深紫
    ctx.fillStyle = "#1e1b4b";
    ctx.beginPath();
    ctx.arc(avatarCX, avatarCY, avatarR, 0, Math.PI * 2);
    ctx.fill();

    // 内圈彩色 (人格主色)
    ctx.fillStyle = personality.color;
    ctx.beginPath();
    ctx.arc(avatarCX, avatarCY, avatarR - 20, 0, Math.PI * 2);
    ctx.fill();

    // 半调点阵纹理 (在彩色圆上)
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    const dotStep = 18;
    for (let y = avatarCY - avatarR + 20; y < avatarCY + avatarR - 20; y += dotStep) {
      for (let x = avatarCX - avatarR + 20; x < avatarCX + avatarR - 20; x += dotStep) {
        const dx = x - avatarCX, dy = y - avatarCY;
        if (dx * dx + dy * dy < (avatarR - 22) * (avatarR - 22)) {
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // 中心人物图标
    try {
      const iconImg = await this.svgToImage(Icons[personality.icon], 280, "#ffffff");
      ctx.drawImage(iconImg, avatarCX - 140, avatarCY - 140, 280, 280);
    } catch (e) {
      // 降级：纯色块
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.beginPath();
      ctx.arc(avatarCX, avatarCY, 100, 0, Math.PI * 2);
      ctx.fill();
    }

    // 外圈点阵装饰
    ctx.fillStyle = "#fde047";
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
      const r = avatarR + 50;
      const x = avatarCX + Math.cos(angle) * r;
      const y = avatarCY + Math.sin(angle) * r;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 周围装饰元素 - 星星
    this.drawStar(ctx, avatarCX - 240, avatarCY - 160, 18, 4, "#fde047", 0);
    this.drawStar(ctx, avatarCX + 230, avatarCY + 140, 22, 4, "#ec4899", Math.PI / 6);
    this.drawStar(ctx, avatarCX + 260, avatarCY - 80, 14, 4, "#06b6d4", 0);

    // 心形 (简化为两个圆+三角)
    this.drawHeart(ctx, avatarCX - 200, avatarCY + 60, 20, "#ec4899");

    // ====== 5. 成就卡 (白色卡片 + 标签) ======
    const cardX = 60, cardY = 880, cardW = W - 120, cardH = 320;

    // 卡阴影
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    this.roundRect(ctx, cardX + 4, cardY + 6, cardW, cardH, 24);
    ctx.fill();

    // 卡片白底
    ctx.fillStyle = "#ffffff";
    this.roundRect(ctx, cardX, cardY, cardW, cardH, 24);
    ctx.fill();

    // 卡片标题带 ★
    ctx.fillStyle = "#1e1b4b";
    ctx.font = `900 28px ${ZH}`;
    ctx.textAlign = "center";
    ctx.fillText("★  WaytoAGI 年度成就  ★", W/2, cardY + 50);

    // 副标题
    ctx.fillStyle = "#7c3aed";
    ctx.font = `900 16px ${EN}`;
    ctx.fillText("A C H I E V E M E N T S", W/2, cardY + 80);

    // 分隔线
    ctx.fillStyle = "#fde047";
    ctx.fillRect(W/2 - 40, cardY + 95, 80, 4);

    // 成就网格 2列3行
    const achievements = [
      { icon: "✦", text: personality.traits[0]?.text || "灵感永不枯竭", color: "#7c3aed" },
      { icon: "✦", text: personality.traits[1]?.text || "嗅觉敏锐", color: "#ec4899" },
      { icon: "✦", text: personality.traits[2]?.text || "一个人=一支团队", color: "#06b6d4" },
      { icon: "✦", text: `全网 ${personality.rarity}% 同款`, color: "#f59e0b" },
      { icon: "✦", text: `AI 战力 ${personality.power}/100`, color: "#10b981" },
      { icon: "✦", text: "OPC 摊位认证玩家", color: "#3b82f6" },
    ];

    const gridCols = 2;
    const gridRows = 3;
    const cellW = (cardW - 80) / gridCols;
    const cellH = 56;
    const gridStartX = cardX + 40;
    const gridStartY = cardY + 120;

    achievements.forEach((a, i) => {
      const col = i % gridCols;
      const row = Math.floor(i / gridCols);
      const x = gridStartX + col * cellW;
      const y = gridStartY + row * cellH;

      // 星标
      ctx.fillStyle = a.color;
      ctx.font = `900 22px ${EN}`;
      ctx.textAlign = "left";
      ctx.fillText(a.icon, x, y + 22);

      // 文字
      ctx.fillStyle = "#1e1b4b";
      ctx.font = `600 18px ${ZH}`;
      ctx.fillText(a.text, x + 30, y + 22);
    });

    // 卡片背景水印文字
    ctx.fillStyle = "rgba(124, 58, 237, 0.06)";
    ctx.font = `900 80px ${EN}`;
    ctx.textAlign = "center";
    ctx.fillText("ACHIEVEMENTS", W/2, cardY + cardH - 30);

    // ====== 6. 底部 Footer ======
    const footerY = H - 200;

    // QR 码背景
    ctx.fillStyle = "#fff";
    this.roundRect(ctx, 60, footerY, 130, 130, 14);
    ctx.fill();
    ctx.strokeStyle = "#fde047";
    ctx.lineWidth = 5;
    this.roundRect(ctx, 60, footerY, 130, 130, 14);
    ctx.stroke();

    // QR 码占位 (3个定位方框 + 装饰点阵)
    ctx.fillStyle = "#0a0a0a";
    const qrX = 72, qrY = footerY + 12, qrSize = 106;
    const cell = qrSize / 21;
    const qrPattern = [
      "111111101010111111101",
      "100000101110101000001",
      "101110101011101011101",
      "101110100011101011101",
      "101110101100101011101",
      "100000101010101000001",
      "111111101010101111111",
      "000000001011100000000",
      "111011110011010110100",
      "010010001100110010011",
      "111101010010111001011",
      "001100110011000101101",
      "010111001011110011010",
      "000000001100101110001",
      "111111100110110001101",
      "100000101010111011010",
      "101110100101101100110",
      "101110101100101010010",
      "101110101011101011011",
      "100000101000111101010",
      "111111101101001111001",
    ];
    for (let r = 0; r < 21; r++) {
      for (let c = 0; c < 21; c++) {
        if (qrPattern[r][c] === "1") {
          ctx.fillRect(qrX + c * cell, qrY + r * cell, cell, cell);
        }
      }
    }

    // 引导文字
    ctx.fillStyle = "#fde047";
    ctx.font = `bold 22px ${EN}`;
    ctx.textAlign = "left";
    ctx.fillText("(◕‿◕)  Scan to test", 220, footerY + 30);

    ctx.fillStyle = "#ffffff";
    ctx.font = `900 36px ${ZH}`;
    ctx.fillText("扫码测你的 AI 超能力", 220, footerY + 70);

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = `500 22px ${EN}`;
    ctx.fillText("WaytoAGI  ·  waytoagi.com", 220, footerY + 110);

    // 右下角 "EVERYTHING WILL BE OK" 圆形徽章
    const badgeCX = W - 130;
    const badgeCY = footerY + 65;
    const badgeR = 65;

    ctx.fillStyle = "#ec4899";
    ctx.beginPath();
    ctx.arc(badgeCX, badgeCY, badgeR, 0, Math.PI * 2);
    ctx.fill();

    // 徽章内部笑脸
    ctx.fillStyle = "#fff";
    ctx.font = `bold 36px ${EN}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("(◕ᴗ◕)", badgeCX, badgeCY - 5);

    // 徽章文字环绕
    ctx.fillStyle = "#fde047";
    ctx.font = `900 11px ${EN}`;
    ctx.textBaseline = "alphabetic";
    const badgeText = "★ EVERYTHING WILL BE OK ★ ";
    const textRadius = badgeR - 8;
    const startAngle = -Math.PI / 2;
    ctx.save();
    ctx.translate(badgeCX, badgeCY);
    for (let i = 0; i < badgeText.length; i++) {
      const angle = startAngle + (i / badgeText.length) * Math.PI * 2;
      ctx.save();
      ctx.rotate(angle + Math.PI / 2);
      ctx.translate(0, -textRadius);
      ctx.fillText(badgeText[i], 0, 0);
      ctx.restore();
    }
    ctx.restore();

    // ====== 7. 顶部右侧大星星 ======
    this.drawStar(ctx, W - 100, 70, 20, 4, "#fde047", Math.PI / 8);

    // ====== 8. 边框 ======
    ctx.strokeStyle = "#fde047";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    return canvas.toDataURL("image/png", 0.95);
  },
  // ============ 辅助函数 ============
  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  },
  // ============ 字体加载辅助 ============
  async ensureFonts() {
    if (document.fonts && document.fonts.ready) {
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise(r => setTimeout(r, 1500))
        ]);
      } catch (e) {}
    }
    await new Promise(r => setTimeout(r, 100));
  },


  drawHeart(ctx, x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    // 简化的心形 (两个圆 + 倒三角)
    ctx.moveTo(0, size * 0.3);
    ctx.bezierCurveTo(-size * 0.5, -size * 0.3, -size * 0.6, size * 0.2, 0, size * 0.7);
    ctx.bezierCurveTo(size * 0.6, size * 0.2, size * 0.5, -size * 0.3, 0, size * 0.3);
    ctx.fill();
    ctx.restore();
  },

  drawStar(ctx, x, y, r, points, color, rotation = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? r : r * 0.4;
      const angle = (Math.PI * i) / points - Math.PI / 2;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split("");
    let line = "";
    let lines = [];
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        lines.push(line);
        line = words[i];
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const startY = y - (lines.length - 1) * lineHeight / 2;
    lines.forEach((l, i) => {
      ctx.fillText(l, x, startY + i * lineHeight);
    });
  },

  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  },

  colorizeSvg(svgString, color, size) {
    return svgString
      .replace(/width="100%"/, `width="${size}"`)
      .replace(/height="100%"/, `height="${size}"`)
      .replace("<svg ", `<svg style="color:${color}" `);
  },

  svgToImage(svgString, size, color) {
    return new Promise((resolve, reject) => {
      try {
        const svg = this.colorizeSvg(svgString, color, size);
        // 用 data URL 避免 blob 跨域问题
        const dataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
        const img = new Image();
        let resolved = false;
        
        const done = () => {
          if (resolved) return;
          resolved = true;
        };
        
        img.onload = () => {
          done();
          resolve(img);
        };
        img.onerror = (e) => {
          done();
          console.warn("SVG load failed, using fallback");
          reject(new Error("SVG load failed"));
        };
        
        // 2秒超时
        setTimeout(() => {
          if (!resolved) {
            done();
            console.warn("SVG load timeout, using fallback");
            reject(new Error("SVG load timeout"));
          }
        }, 2000);
        
        img.src = dataUrl;
      } catch (err) {
        console.warn("SVG build failed:", err);
        reject(err);
      }
    });
  },

  // ============ 海报模态框 ============
  modalOpen: false,

  async show(personality) {
    if (this.modalOpen) return;
    this.modalOpen = true;

    // 每次都重建模态框（重置内容）
    let modal = document.getElementById("poster-modal");
    if (modal) modal.remove();
    modal = document.createElement("div");
    modal.id = "poster-modal";
    modal.className = "poster-modal";
    modal.innerHTML = `
        <div class="poster-modal-content">
          <button class="poster-close" id="poster-close-btn">×</button>
          <div class="poster-loading" id="poster-loading">
            <div class="poster-spinner"></div>
            <div class="poster-loading-text">GENERATING YOUR CARD…</div>
          </div>
          <div class="poster-preview" id="poster-preview" style="display:none;">
            <img id="poster-img" />
          </div>
          <div class="poster-actions" id="poster-actions" style="display:none;">
            <button class="btn-poster btn-poster-primary" id="btn-save-poster">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              保存到相册
            </button>
            <button class="btn-poster btn-poster-share" id="btn-share-poster">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
              分享给朋友
            </button>
          </div>
          <div class="poster-hint" id="poster-hint" style="display:none;">
            长按图片可保存或分享 ·
            <a href="https://waytoagi.com" target="_blank" style="color:var(--blue);text-decoration:none;font-weight:700;">waytoagi.com</a>
          </div>
        </div>
      `;
    document.body.appendChild(modal);
    document.getElementById("poster-close-btn").onclick = () => this.close();
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.close();
    });

    modal.classList.add("show");
    document.getElementById("poster-loading").style.display = "flex";

    await this.ensureFonts();
    document.getElementById("poster-preview").style.display = "none";
    document.getElementById("poster-actions").style.display = "none";
    document.getElementById("poster-hint").style.display = "none";

    try {
      const dataUrl = await this.generate(personality);

      const img = document.getElementById("poster-img");
      img.src = dataUrl;

      document.getElementById("poster-loading").style.display = "none";
      document.getElementById("poster-preview").style.display = "block";
      document.getElementById("poster-actions").style.display = "flex";
      document.getElementById("poster-hint").style.display = "block";

      // 绑定下载
      document.getElementById("btn-save-poster").onclick = () => this.download(dataUrl, personality);
      document.getElementById("btn-share-poster").onclick = () => this.share(dataUrl, personality);
    } catch (err) {
      console.error("生成海报失败:", err);
      document.getElementById("poster-loading").innerHTML =
        "<div style=\"color:#ff5b3a;font-weight:700;padding:40px;\">生成失败，请重试</div>";
    }
  },

  download(dataUrl, personality) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `AI超能力-${personality.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    App.showToast("已保存 ✓");
  },

  async share(dataUrl, personality) {
    // 优先用 Web Share API (移动端友好)
    if (navigator.share && navigator.canShare) {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], `AI超能力-${personality.name}.png`, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "我的AI超能力",
            text: `我是${personality.name}，全网只有${personality.rarity}%的人和我一样！测测你的`,
            files: [file],
          });
          return;
        }
      } catch (e) {
        // 用户取消或不支持，降级
      }
    }
    // 降级：直接下载
    this.download(dataUrl, personality);
  },

  close() {
    const modal = document.getElementById("poster-modal");
    if (modal) modal.classList.remove("show");
    this.modalOpen = false;
  },
};




