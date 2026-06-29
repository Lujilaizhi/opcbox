/* ============================================
   api/generate.js — MiniMax API 代理 & 场景生成
   Vercel Serverless Function
   ============================================ */

// MiniMax API 配置
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || '';
const MINIMAX_BASE = 'https://api.minimax.chat/v1';
const MINIMAX_MODEL = 'abab6.5s-chat'; // MiniMax 高性价比模型

/* --- Prompt 模板（直接内联，也支持 prompts/ 目录） --- */
const fs = require('fs');
const path = require('path');

// 从 prompts/{scenario}.md 加载模板，运行时替换 {{key}} 占位符
function loadPrompt(scenario, fields) {
  const tplPath = path.join(process.cwd(), 'prompts', scenario + '.md');
  if (!fs.existsSync(tplPath)) return null;
  let tpl = fs.readFileSync(tplPath, 'utf8');
  if (tpl.charCodeAt(0) === 0xFEFF) tpl = tpl.substring(1);
  return tpl.replace(/\{\{(\w+)\}\}/g, (m, key) => {
    const v = fields && fields[key];
    return (v && String(v).trim()) ? String(v).trim() : '（未提供）';
  });
}

const SUPPORTED_SCENARIOS = [
  'script', 'xiaohongshu', 'quote',
  'sop', 'workflow',
  'industry', 'competitor',
  'intro',
];

/* --- 兜底返回（API挂了就用前端的 fallback） --- */
function fallbackResponse(scenario) {
  return { content: '', fallback: true, scenario };
}

/* --- Vercel Serverless Handler --- */
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: '仅支持 POST' });
  }

  const { scenario, industry, sellingPoint, audience } = req.body || {};

  if (!scenario || !industry || !sellingPoint || !audience) {
    return res.status(400).json({ error: '缺少必填参数：scenario, industry, sellingPoint, audience' });
  }

  if (!PROMPTS[scenario]) {
    return res.status(400).json({ error: `未知场景：${scenario}，支持：${Object.keys(PROMPTS).join(', ')}` });
  }

  // 如果没有 API Key，直接返回兜底（让前端用 fallback）
  if (!MINIMAX_API_KEY) {
    console.warn('MINIMAX_API_KEY 未配置，返回兜底标记');
    return res.status(200).json(fallbackResponse(scenario));
  }

  const prompt = loadPrompt(scenario, fields);
  if (!prompt) {
    return res.status(200).json(fallbackResponse(scenario));
  }

  try {
    const response = await fetch(`${MINIMAX_BASE}/text/chatcompletion_v2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MINIMAX_API_KEY}`,
      },
      body: JSON.stringify({
        model: MINIMAX_MODEL,
        messages: [
          {
            role: 'system',
            content: '你是一个专业、高效的中文AI助手。直接输出用户要求的内容，不要寒暄，不要额外解释。',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        top_p: 0.95,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('MiniMax API 错误:', response.status, errText);
      return res.status(200).json(fallbackResponse(scenario));
    }

    const data = await response.json();

    if (data.base_resp && data.base_resp.status_code !== 0) {
      console.error('MiniMax 业务错误:', data.base_resp);
      return res.status(200).json(fallbackResponse(scenario));
    }

    const content = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ content, scenario });
  } catch (err) {
    console.error('MiniMax 请求异常:', err.message);
    return res.status(200).json(fallbackResponse(scenario));
  }
}
