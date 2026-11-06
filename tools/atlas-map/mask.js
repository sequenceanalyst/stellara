/* Land mask only (same silhouette as the shipped map). Prints it as text so places can be planned on it. */
const fs=require('fs');
let seed = 7771; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
const perm = []; for (let i = 0; i < 4096; i++) perm.push(rnd());
const hash = (x, y) => perm[((x * 73856093) ^ (y * 19349663)) & 4095];
const sm = t => t * t * (3 - 2 * t);
function vnoise(x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi; const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1); const u = sm(xf), v = sm(yf); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }
function fbm(x, y) { let s = 0, a = .5, f = 1; for (let i = 0; i < 4; i++) { s += a * vnoise(x * f, y * f); a /= 2; f *= 2; } return s / .9375; }
const legacy=[[390,336],[610,857],[928,281],[1037,571],[90,461],[937,552],[740,488],[811,730],[473,391],[165,465],[340,610],[1170,151],[399,515],[974,202],[279,493],[1242,631],[571,504],[1334,349],[616,610],[427,593],[1294,287],[276,631],[1222,200],[230,321],[1016,355],[1181,303],[761,421],[647,636],[915,732],[564,293],[824,549],[1085,448],[463,836],[174,358],[299,243],[421,711],[1206,570],[1328,840]];
const seeds = legacy.map(p => [p[0], p[1], 105]);
[[250,300,150],[330,520,140],[470,260,130],[620,230,140],[760,200,120],[900,150,130],[1050,200,140],[1250,300,150],[1180,480,140],[1000,470,120],[800,400,130],[700,620,140],[560,740,150],[800,820,130],[1000,720,150],[1150,760,100],[400,820,110],[250,640,110],[900,600,120],[520,520,120],[330,400,110],[1100,330,120],[700,330,110]].forEach(s => seeds.push(s));
[[120,700,70],[170,90,55],[520,60,38],[640,95,42],[1400,110,50],[1450,370,38],[1470,520,34],[1380,700,36],[90,330,34],[60,860,50],[700,940,40],[1440,930,44],[1250,960,36]].forEach(s => seeds.push([s[0], s[1], s[2], 1.9]));
function land(x, y) {
  const wx = x + (fbm(x / 140 + 5, y / 140) - .5) * 110, wy = y + (fbm(x / 140, y / 140 + 9) - .5) * 110;
  let f = 0; for (const [sx, sy, r, k] of seeds) { const d = Math.hypot(wx - sx, wy - sy) / r; f += (k || 1) * Math.exp(-d * d * 1.15); }
  return f + (fbm(x / 48, y / 48) - .5) * .95 > 1.0;
}
const C=24;let out='     '+Array.from({length:64},(_,i)=>i%5===0?String(Math.round(i*C/100)).padEnd(5):'').join('')+'\n';
for(let y=0;y<1024;y+=C){let row=String(y).padStart(4)+' ';for(let x=0;x<1536;x+=C/1.0*1){row+=land(x+C/2,y+C/2)?'#':'.';}out+=row+'\n';}
console.log(out);
