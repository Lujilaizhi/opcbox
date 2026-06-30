const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

// 加载 .env（兼容 BOM）
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  let raw = fs.readFileSync(envPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.substring(1);
  raw.split(/\r?\n/).forEach(line => {
    const m = line.match(/^([^=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  });
}

const ROOT = fs.existsSync(path.join(__dirname, 'public')) ? path.join(__dirname, 'public') : __dirname;
const PORT = process.env.PORT || 3456;
const API_KEY = process.env.MINIMAX_API_KEY || '';

console.log('[MiniMax API Key]:', API_KEY ? API_KEY.substring(0, 12) + '...' + API_KEY.substring(API_KEY.length - 6) : 'NOT SET');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
};

function callMiniMax(scenario, fields) {
  return new Promise((resolve, reject) => {
    if (!API_KEY) return reject(new Error('MINIMAX_API_KEY not set'));

    // 从 prompts/{scenario}.md 加载模板，替换 {{key}} 占位符
    const tplPath = path.join(__dirname, 'prompts', scenario + '.md');
    if (!fs.existsSync(tplPath)) return reject(new Error('Unknown scenario: ' + scenario));
    let tpl = fs.readFileSync(tplPath, 'utf8');
    // 去掉 BOM
    if (tpl.charCodeAt(0) === 0xFEFF) tpl = tpl.substring(1);

    // 替换 {{key}} 占位符
    const prompt = tpl.replace(/\{\{(\w+)\}\}/g, (m, key) => {
      const v = fields && fields[key];
      return (v && String(v).trim()) ? String(v).trim() : '（未提供）';
    });


    const body = JSON.stringify({
      model: 'abab6.5s-chat',
      messages: [
        { role: 'system', content: '你是一个专业、高效的中文AI助手。直接输出用户要求的内容，不要寒暄，不要额外解释。' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      top_p: 0.95,
      max_tokens: 2000,
    });

    const req = https.request({
      hostname: 'api.minimax.chat',
      path: '/v1/text/chatcompletion_v2',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Length': Buffer.byteLength(body)
      },
      timeout: 30000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error('MiniMax API ' + res.statusCode + ': ' + data.substring(0, 200)));
        }
        try {
          const json = JSON.parse(data);
          if (json.base_resp && json.base_resp.status_code !== 0) {
            return reject(new Error('MiniMax error: ' + JSON.stringify(json.base_resp)));
          }
          const content = json.choices?.[0]?.message?.content || '';
          resolve(content);
        } catch (e) {
          reject(new Error('Parse error: ' + e.message));
        }
      });
    });
    req.on('error', e => reject(new Error('Request error: ' + e.message)));
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timeout')); });
    req.write(body);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.end();

  if (req.url === '/api/generate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { scenario, fields } = JSON.parse(body);
        console.log('[API] generate:', scenario, JSON.stringify(fields));

        if (!API_KEY) {
          return res.end(JSON.stringify({ content: '', fallback: true, error: 'no_api_key' }));
        }

        try {
          const content = await callMiniMax(scenario, fields || {});
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ content, scenario }));
        } catch (err) {
          console.error('[API] MiniMax error:', err.message);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ content: '', fallback: true, error: err.message }));
        }
      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  let filePath = req.url.split('?')[0];
  if (filePath === '/' || filePath === '') filePath = '/index.html';

  let fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(ROOT, filePath);
  }

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      return res.end('404: ' + filePath);
    }
    const ext = path.extname(fullPath);
    res.setHeader('Content-Type', MIME[ext] || 'text/plain; charset=utf-8');
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('[Server] http://localhost:' + PORT);
});
