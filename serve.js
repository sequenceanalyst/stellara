/* Tiny local web server for previewing the site: node serve.js [port]  (default 8830). Not needed on GitHub Pages. */
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = +process.argv[2] || 8830;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.webp': 'image/webp', '.png': 'image/png', '.md': 'text/plain; charset=utf-8' };
http.createServer((q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); let f = path.join(root, p); if (!f.startsWith(root)) { r.writeHead(403); return r.end(); }
  if (p.endsWith('/')) f = path.join(f, 'index.html');
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end('Not found'); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); r.end(d); });
}).listen(port, () => console.log('Stellara preview on http://localhost:' + port));
