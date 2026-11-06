/* Builds assets/stellara-digital-map.svg, the pixel-grid chart behind the Regional Atlas, and exposes the terrain model for audit.js.
   The terrain is drawn AROUND the place anchors in assets/atlas-geo.js (the one source of positions), so moving an anchor moves its biome.
   Nothing here is canon: the coastline, rivers and biomes are proposals that fit the official location descriptions.

   Run:  node tools/atlas-map/build-map.js            (writes assets/stellara-digital-map.svg; mapScale in atlas-geo.js sets the landmass size)
         node tools/atlas-map/build-map.js --ascii    (also prints a text view of the biomes)            */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const W = 1536, H = 1024, C = 12, NX = W / C, NY = Math.ceil(H / C);

/* positions in design space: the file stores final (scaled) positions, so undo mapScale about the map centre */
function design(geo) {
  const s = geo.mapScale || 1, o = {};
  Object.keys(geo.points).forEach(id => { const p = geo.points[id], u = (v, c) => c + (v - c) / s; o[id] = { x: u(p.x, W / 2), y: u(p.y, H / 2), lx: u(p.lx, W / 2), ly: u(p.ly, H / 2) }; });
  return o;
}
function loadGeo() { const win = {}; new Function('window', fs.readFileSync(path.join(ROOT, 'assets', 'atlas-geo.js'), 'utf8'))(win); return win.STELLARA_ATLAS_GEO; }

/* ---- seeded noise (unchanged since the first version of the map, so the coastline stays put) ---- */
let seed = 7771; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
const perm = []; for (let i = 0; i < 4096; i++) perm.push(rnd());
const hash = (x, y) => perm[((x * 73856093) ^ (y * 19349663)) & 4095];
const sm = t => t * t * (3 - 2 * t);
function vnoise(x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi; const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1); const u = sm(xf), v = sm(yf); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }
function fbm(x, y) { let s = 0, a = .5, f = 1; for (let i = 0; i < 4; i++) { s += a * vnoise(x * f, y * f); a /= 2; f *= 2; } return s / .9375; }

/* ---- the coastline: fixed land seeds (the original anchor-shaped lumps, kept so the shape does not change), plus the islands ---- */
const SEEDS = [[390,336],[610,857],[928,281],[1037,571],[90,461],[937,552],[740,488],[811,730],[473,391],[165,465],[340,610],[1170,151],[399,515],[974,202],[279,493],[1242,631],[571,504],[1334,349],[616,610],[427,593],[1294,287],[276,631],[1222,200],[230,321],[1016,355],[1181,303],[761,421],[647,636],[915,732],[564,293],[824,549],[1085,448],[463,836],[174,358],[299,243],[421,711],[1206,570]].map(p => [p[0], p[1], 105]);
[[250,300,150],[330,520,140],[470,260,130],[620,230,140],[760,200,120],[900,150,130],[1050,200,140],[1250,300,150],[1180,480,140],[1000,470,120],[800,400,130],[700,620,140],[560,740,150],[800,820,130],[1000,720,150],[1150,760,100],[400,820,110],[250,640,110],[900,600,120],[520,520,120],[330,400,110],[1100,330,120],[700,330,110]].forEach(s => SEEDS.push(s));
[[120,700,70],[170,90,55],[520,60,38],[640,95,42],[1400,110,50],[1450,370,38],[1470,520,34],[1380,700,36],[90,330,34],[60,860,50],[700,940,40],[1440,930,44],[1250,960,36],
 [1335,880,82]].forEach(s => SEEDS.push([s[0], s[1], s[2], 1.9]));   /* the last one is Antila Island */
function landAt(x, y) {
  const wx = x + (fbm(x / 140 + 5, y / 140) - .5) * 110, wy = y + (fbm(x / 140, y / 140 + 9) - .5) * 110;
  let f = 0; for (const [sx, sy, r, k] of SEEDS) { const d = Math.hypot(wx - sx, wy - sy) / r; f += (k || 1) * Math.exp(-d * d * 1.15); }
  return f + (fbm(x / 48, y / 48) - .5) * .95 > 1.0;
}

const PAL = {
  plain: ['#173f50', '#1a4a5c', '#1e5568', '#22617a'],
  grass: ['#3f7a3c', '#498a44', '#549a4e', '#60aa58'],
  forest: ['#14583f', '#186b4c', '#1d7e59', '#239268'],
  swamp: ['#2a5c4c', '#2f6b54', '#36795c', '#3e8865'],
  mount: ['#4a4a88', '#5a59a0', '#7371b8', '#9794d2'],
  volc: ['#3b3340', '#493f4f', '#5a4d5f', '#6e5f73'],
  snow: ['#8fb4c8', '#a6c6d6', '#c0dae6', '#e0eef4'],
  tundra: ['#3f6676', '#487382', '#538392', '#5f93a2'],
  desert: ['#9a7d38', '#b4964a', '#cdae5c', '#e2c874'],
  bad: ['#5c2430', '#76303a', '#92404a', '#ad5258'],
  jungle: ['#13804f', '#1a9a5e', '#27b86f', '#40d487'],
  falls: ['#a6dcff', '#bfe8ff', '#d8f2ff', '#f0faff'],
  spring: ['#2fd0c0', '#3fdccc', '#55e6d8', '#7df0e4'],
  steam: ['#9fc2b8', '#b4d3ca', '#c9e4dc', '#e0f2ed'],
  geo: ['#4f6e5f', '#5f8070', '#719281', '#84a592'],
  beach: ['#58a8ac', '#63b3b6', '#6fbec0', '#7dc8c9'],
  lake: ['#1d5ea8', '#2269b8', '#2775c6', '#2d82d4'],
  river: ['#46b4ff', '#58c0ff', '#6ccaff', '#85d6ff']
};

/* biome zones, each centred on a place anchor from atlas-geo.js: [kind, anchor id, radius, dx, dy, overrides what is under it] */
const ZONES = [
  ['tundra', 'gurios-mountains', 185, 45, 20, 0],
  ['mount', 'gurios-mountains', 140, 0, 0, 0], ['snow', 'gurios-mountains', 88, 0, 0, 1],
  ['tundra', 'gurios-mountains', 130, -215, 30, 0], ['mount', 'gurios-mountains', 90, -215, 10, 0], ['snow', 'gurios-mountains', 40, -215, 0, 1],
  ['mount', 'vaisera-mountains', 150, 0, 0, 0], ['mount', 'altair-city', 46, 0, 0, 0],
  ['volc', 'ignara-highlands', 80, 0, 0, 1],
  ['desert', 'deneb-desert', 205, 0, 0, 0], ['bad', 'vardos-badlands', 88, 0, 0, 1],
  ['forest', 'kaxyl-forest', 135, 0, 0, 0], ['swamp', 'largia-swamp', 78, 0, 0, 1],
  ['jungle', 'tucana-rainforest', 115, 0, 0, 0], ['jungle', 'antares-city', 62, 0, 0, 0], ['jungle', 'yanna-jungle', 120, 0, 0, 0],
  ['grass', 'breshno-flatlands', 110, 0, 0, 0], ['grass', 'celaeno-town', 64, 0, 0, 0], ['grass', 'rana-town', 80, 0, 0, 0],
  ['geo', 'hamal-town', 52, 0, 0, 1]
];
/* the Risa River: starts at the west shore of Polaris Lake and runs west to the ocean beside Eridani City. Middle waypoints are art. */
const LAKE = { rx: 66, ry: 44 };

function spline(pts, n) { const o = []; for (let k = 0; k < pts.length - 1; k++) { const p0 = pts[Math.max(0, k - 1)], p1 = pts[k], p2 = pts[k + 1], p3 = pts[Math.min(pts.length - 1, k + 2)]; for (let t = 0; t < 1; t += 1 / n) { const t2 = t * t, t3 = t2 * t; o.push([0, 1].map(a => .5 * ((2 * p1[a]) + (-p0[a] + p2[a]) * t + (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t2 + (-p0[a] + 3 * p1[a] - 3 * p2[a] + p3[a]) * t3))); } } return o; }

function build(geo) {
  geo = geo || loadGeo();
  const P = design(geo), ids = Object.keys(P);
  const L = [], water = [], kindG = [], comp = [];
  for (let j = 0; j < NY; j++) { L[j] = []; water[j] = []; kindG[j] = []; comp[j] = new Array(NX).fill(0); for (let i = 0; i < NX; i++) { L[j][i] = landAt(i * C + C / 2, j * C + C / 2); water[j][i] = ''; } }
  const cell = (x, y) => [Math.floor(x / C), Math.floor(y / C)];
  const inb = (i, j) => i >= 0 && j >= 0 && i < NX && j < NY;
  const N4 = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  /* connected land masses; keep any that hold an anchor, drop tiny specks */
  let nc = 0; const sizes = [];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (L[j][i] && !comp[j][i]) {
    nc++; let n = 0; const st = [[i, j]]; comp[j][i] = nc;
    while (st.length) { const [a, b] = st.pop(); n++; N4.forEach(([da, db]) => { const x = a + da, y = b + db; if (inb(x, y) && L[y][x] && !comp[y][x]) { comp[y][x] = nc; st.push([x, y]); } }); }
    sizes[nc] = n;
  }
  const keep = {}; ids.forEach(id => { const [i, j] = cell(P[id].x, P[id].y); if (inb(i, j) && comp[j][i]) keep[comp[j][i]] = 1; });
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (L[j][i] && !keep[comp[j][i]] && sizes[comp[j][i]] < 7) { L[j][i] = false; comp[j][i] = 0; }

  /* lake and river */
  const pol = P['polaris-lake'];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const x = i * C + C / 2, y = j * C + C / 2, d = ((x - pol.x) / LAKE.rx) ** 2 + ((y - pol.y) / LAKE.ry) ** 2 + (fbm(x / 30, y / 30) - .5) * .5; if (d < 1) { L[j][i] = true; water[j][i] = 'lake'; if (!comp[j][i]) comp[j][i] = -1; } }
  const s0 = geo.mapScale || 1, riverPts = (geo.rivers[0].points).map(([x, y]) => [W / 2 + (x - W / 2) / s0, H / 2 + (y - H / 2) / s0]);
  const river = spline(riverPts, 24);
  const riverCells = [];
  river.forEach(([x, y]) => { const [i, j] = cell(x, y); [[i, j], [i, j + 1]].forEach(([ci, cj]) => { if (inb(ci, cj) && L[cj][ci] && !water[cj][ci]) { water[cj][ci] = 'river'; riverCells.push([ci, cj]); } }); });

  /* biomes */
  const zones = ZONES.filter(z => P[z[1]]).map(z => ({ k: z[0], x: P[z[1]].x + z[3], y: P[z[1]].y + z[4], r: z[2], over: z[5] }));
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    if (!L[j][i]) continue;
    const x = i * C + C / 2, y = j * C + C / 2; let kind = 'plain', best = 0;
    zones.forEach(z => { const w = 1 - Math.hypot(x - z.x + (fbm(x / 60, y / 60) - .5) * 90, y - z.y + (fbm(x / 60 + 7, y / 60) - .5) * 90) / z.r; if (w > 0 && (z.over || w > best)) { if (!z.over) best = w; kind = z.k; } });
    kindG[j][i] = water[j][i] || kind;
  }
  /* Elysia Falls (a waterfall across the river), hot springs and steam around Hamal Town */
  const ely = P['elysia-falls'], ham = P['hamal-town'];
  if (ely) riverCells.forEach(([i, j]) => { if (Math.abs(i * C + C / 2 - ely.x) < 15) kindG[j][i] = 'falls'; });
  if (ham) {
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (kindG[j][i] === 'geo' && hash(i + 3, j + 11) < .16) kindG[j][i] = 'steam';
    [[-30, 26], [32, 30], [4, 54], [-44, -10]].forEach(([dx, dy]) => { const [ci, cj] = cell(ham.x + dx, ham.y + dy); [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([a, c]) => { const x = ci + a, y = cj + c; if (inb(x, y) && L[y][x] && !water[y][x] && kindG[y][x] !== 'volc') kindG[y][x] = 'spring'; }); });
  }
  /* distance from the sea, in cells (for beaches and the ocean steps) */
  const dist = []; for (let j = 0; j < NY; j++) dist[j] = new Array(NX).fill(99);
  let q = [];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (!L[j][i] && N4.some(([a, b]) => inb(i + a, j + b) && L[j + b][i + a])) { dist[j][i] = 1; q.push([i, j]); }
  while (q.length) { const [i, j] = q.shift(); if (dist[j][i] >= 4) continue; N4.forEach(([a, b]) => { const x = i + a, y = j + b; if (inb(x, y) && !L[y][x] && dist[y][x] > dist[j][i] + 1) { dist[y][x] = dist[j][i] + 1; q.push([x, y]); } }); }
  const coastal = (i, j) => L[j][i] && N4.some(([a, b]) => inb(i + a, j + b) && !L[j + b][i + a]);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (L[j][i] && !water[j][i] && coastal(i, j)) kindG[j][i] = 'beach';

  return { W, H, C, NX, NY, land: L, kind: kindG, water, comp, riverPts, river, riverCells, lake: { x: pol.x, y: pol.y, ...LAKE }, cell, inb, coastal, dist, keep };
}

function toSvg(m, scale) {
  const sc = scale && scale !== 1 ? scale : 1, land0 = sc === 1 ? '' : '<g transform="translate(' + (W / 2) + ' ' + (H / 2) + ') scale(' + sc + ') translate(' + (-W / 2) + ' ' + (-H / 2) + ')">', land1 = sc === 1 ? '' : '</g>';
  const { land: L, kind, dist, NX, NY } = m;
  const groups = {}, add = (col, i, j) => { (groups[col] = groups[col] || []).push('M' + (i * C + 1) + ' ' + (j * C + 1) + 'h' + (C - 2) + 'v' + (C - 2) + 'h-' + (C - 2) + 'z'); };
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    if (!L[j][i]) continue;
    const x = i * C + C / 2, y = j * C + C / 2, n = fbm(x / 55 + 9, y / 55 + 3) * .75 + hash(i, j) * .25, lvl = Math.min(3, Math.floor(n * 4.2));
    const k = kind[j][i];
    add(PAL[k][k === 'bad' && j % 4 < 2 ? Math.max(0, lvl - 2) : lvl], i, j);
  }
  const ocean = { 1: '#0e3550', 2: '#0a283d', 3: '#071d2e', 4: '#06161f' }, og = {};
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (!L[j][i] && dist[j][i] <= 4) (og[dist[j][i]] = og[dist[j][i]] || []).push('M' + (i * C + 1) + ' ' + (j * C + 1) + 'h' + (C - 2) + 'v' + (C - 2) + 'h-' + (C - 2) + 'z');
  const inb = m.inb, coast = [];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) if (L[j][i]) {
    const x = i * C, y = j * C;
    if (!(inb(i, j - 1) && L[j - 1][i])) coast.push('M' + x + ' ' + y + 'h' + C);
    if (!(inb(i, j + 1) && L[j + 1][i])) coast.push('M' + x + ' ' + (y + C) + 'h' + C);
    if (!(inb(i - 1, j) && L[j][i - 1])) coast.push('M' + x + ' ' + y + 'v' + C);
    if (!(inb(i + 1, j) && L[j][i + 1])) coast.push('M' + (x + C) + ' ' + y + 'v' + C);
  }
  let grid = ''; for (let x = 0; x <= W; x += 64) grid += 'M' + x + ' 0V' + H; for (let y = 0; y <= H; y += 64) grid += 'M0 ' + y + 'H' + W;
  let major = ''; for (let x = 0; x <= W; x += 256) major += 'M' + x + ' 0V' + H; for (let y = 0; y <= H; y += 256) major += 'M0 ' + y + 'H' + W;
  let ticks = ''; for (let x = 0; x <= W; x += 16) { const l = x % 64 === 0 ? 14 : 6; ticks += 'M' + x + ' 0v' + l + 'M' + x + ' ' + H + 'v-' + l; } for (let y = 0; y <= H; y += 16) { const l = y % 64 === 0 ? 14 : 6; ticks += 'M0 ' + y + 'h' + l + 'M' + W + ' ' + y + 'h-' + l; }
  const br = (x, y, sx, sy) => 'M' + x + ' ' + (y + sy * 44) + 'V' + y + 'H' + (x + sx * 44);
  let svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '">' +
    '<defs><radialGradient id="g" cx=".5" cy=".5" r=".75"><stop offset="0" stop-color="#0a2133"/><stop offset="1" stop-color="#030a11"/></radialGradient></defs>' +
    '<rect width="' + W + '" height="' + H + '" fill="url(#g)"/>' +
    '<path d="' + grid + '" stroke="#12354a" stroke-width="1" fill="none" opacity=".55"/><path d="' + major + '" stroke="#1c5470" stroke-width="1.4" fill="none" opacity=".8"/>';
  svg += land0;
  [4, 3, 2, 1].forEach(d => { if (og[d]) svg += '<path d="' + og[d].join('') + '" fill="' + ocean[d] + '" opacity=".92"/>'; });
  Object.keys(groups).forEach(col => { svg += '<path d="' + groups[col].join('') + '" fill="' + col + '"/>'; });
  svg += '<path d="' + coast.join('') + '" stroke="#7ff0ff" stroke-width="2.2" fill="none" stroke-linecap="square"/>' + land1 +
    '<path d="' + ticks + '" stroke="#4fb8d8" stroke-width="1.2" fill="none" opacity=".7"/>' +
    '<g stroke="#7ff0ff" stroke-width="3" fill="none"><path d="' + br(14, 14, 1, 1) + '"/><path d="' + br(W - 14, 14, -1, 1) + '"/><path d="' + br(14, H - 14, 1, -1) + '"/><path d="' + br(W - 14, H - 14, -1, -1) + '"/></g></svg>';
  return svg;
}

function ascii(m, geo) {
  const ch = { plain: '.', grass: ',', forest: 'f', swamp: 's', mount: 'M', volc: 'V', snow: 'N', tundra: 't', desert: 'd', bad: 'b', geo: 'g', beach: ':', lake: '~', river: '=' };
  const dp = design(geo), mark = {}; Object.keys(dp).forEach(id => { const [i, j] = m.cell(dp[id].x, dp[id].y); mark[i + ',' + j] = id.split('-').map(w => w[0]).join('').toUpperCase().slice(0, 2); });
  let out = '';
  for (let j = 0; j < NY; j += 2) { let row = String(j * C).padStart(4) + ' '; for (let i = 0; i < NX; i++) { const mk = mark[i + ',' + j] || mark[i + ',' + (j + 1)]; row += mk ? mk[0] : (m.land[j][i] ? ch[m.kind[j][i]] || '?' : ' '); } out += row + '\n'; }
  return out;
}

module.exports = { build, toSvg, loadGeo, design, ascii, PAL, C, W, H, NX, NY };

if (require.main === module) {
  const geo = loadGeo(), m = build(geo), out = path.join(ROOT, 'assets', 'stellara-digital-map.svg');
  fs.writeFileSync(out, toSvg(m, geo.mapScale || 1));
  console.log('wrote', path.relative(ROOT, out), fs.statSync(out).size, 'bytes, landmass scale', geo.mapScale || 1);
  if (process.argv.includes('--ascii')) console.log(ascii(m, geo));
}
