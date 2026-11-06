/* Regional Atlas geographic audit.
   Compares assets/atlas-geo.js (positions) with assets/atlas-data.js (locations), then checks every marker against the terrain model
   in build-map.js and the geographic relationships written in the official location descriptions.
   Run:  node tools/atlas-map/audit.js        Exit code 1 if anything fails. A pass proves the checks below, not that the lore is complete. */
const fs = require('fs'), path = require('path');
const { build, loadGeo, design, toSvg, PAL: PALS, C, W, H } = require('./build-map.js');
const ROOT = path.join(__dirname, '..', '..');

const win = {}; new Function('window', fs.readFileSync(path.join(ROOT, 'assets', 'atlas-data.js'), 'utf8'))(win);
const DATA = win.STELLARA_ATLAS, GEO = loadGeo(), STORED = GEO.points, P = design(GEO), M = build(GEO);

/* the authoritative list of 38 primary locations, by display name */
const REQUIRED = {
  cities_towns: ['Cyngi City', 'Lacaille City', 'Eridani City', 'Vega City', 'Nair City', 'Saiph City', 'Antares City', 'Mintaka City', 'Baltis City', 'Altair City', 'Pavo Town', 'Rana Town', 'Musca Town', 'Hamal Town', 'Shaula Town', 'Menkent Town', 'Celaeno Town', 'Sabik Town'],
  forests_wetlands: ['Kaxyl Forest', 'Largia Swamp', 'Tucana Rainforest', 'Yanna Jungle', 'Breshno Flatlands'],
  mountains_highlands: ['Vaisera Mountains', 'Gurios Mountains', 'Ignara Highlands'],
  deserts_badlands: ['Deneb Desert', 'Vardos Badlands'],
  waterways_coasts: ['Polaris Lake', 'Risa River', 'Irra Beach', 'Elysia Falls', 'Caelum Cliffs'],
  special_landmarks: ['Fomalhaut Estate', 'Ulan Grotto', 'Helos Ruins', 'Stellara Pokémon League', 'Talas Co. Power Plant']
};

let pass = 0, fail = 0; const failures = [];
function check(name, ok, detail) { if (ok) pass++; else { fail++; failures.push(name + (detail ? ' (' + detail + ')' : '')); } }
const dist = (a, b) => Math.hypot(P[a].x - P[b].x, P[a].y - P[b].y);
const at = id => { const [i, j] = M.cell(P[id].x, P[id].y); return { i, j, ok: M.inb(i, j) }; };
const kindOf = id => { const c = at(id); return c.ok ? (M.kind[c.j][c.i] || 'ocean') : 'outside'; };
const landOf = id => { const c = at(id); return c.ok && M.land[c.j][c.i]; };
const near = (id, kinds, r) => { for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const i = at(id).i + di, j = at(id).j + dj; if (M.inb(i, j) && M.land[j][i] && kinds.includes(M.kind[j][i])) return true; } return false; };

/* ---- 1. identity and count ---- */
const locs = DATA.locations, ids = locs.map(l => l.id), keys = Object.keys(STORED);
check('exactly 38 locations in atlas-data.js', locs.length === 38, locs.length);
check('exactly 38 positions in atlas-geo.js', keys.length === 38, keys.length);
check('location ids are unique', new Set(ids).size === ids.length);
const missing = ids.filter(i => !P[i]), extra = keys.filter(k => !ids.includes(k));
check('every location id has a position', !missing.length, missing.join(', '));
check('no position for an unknown id (no invented locations, POIs or Gyms)', !extra.length, extra.join(', '));
const poiIds = new Set(); locs.forEach(l => (l.pointsOfInterest || []).forEach(p => poiIds.add(p.id)));
check('no POI or Gym id is a marker', !keys.some(k => poiIds.has(k)));
Object.keys(REQUIRED).forEach(cat => {
  const have = locs.filter(l => l.category === cat).map(l => l.name).sort(), want = REQUIRED[cat].slice().sort();
  check('category ' + cat + ' matches the authoritative list (' + want.length + ')', JSON.stringify(have) === JSON.stringify(want), 'have ' + have.length);
});
check('no location name outside the authoritative list', locs.every(l => Object.values(REQUIRED).some(a => a.includes(l.name))));

/* ---- 1b. which positions are guesses ---- */
const GUESSES = ['stellara-pok-mon-league', 'talas-co-power-plant', 'musca-town', 'mintaka-city', 'celaeno-town', 'breshno-flatlands'];
check('every position states its basis (lore or guess)', Object.keys(STORED).every(k => ['lore', 'guess'].includes(STORED[k].basis)));
check('the guessed positions are exactly: ' + GUESSES.join(', '), JSON.stringify(Object.keys(STORED).filter(k => STORED[k].basis === 'guess').sort()) === JSON.stringify(GUESSES.slice().sort()));
check('the Risa River is stored as data in atlas-geo.js', Array.isArray(GEO.rivers) && GEO.rivers.length === 1 && GEO.rivers[0].points.length >= 10);

/* ---- 2. coordinates ---- */
keys.forEach(k => {
  const p = STORED[k];
  check(k + ': coordinates are finite numbers inside the map', [p.x, p.y, p.lx, p.ly].every(Number.isFinite) && p.x >= 0 && p.x <= W && p.y >= 0 && p.y <= H && p.lx >= 0 && p.lx <= W && p.ly >= 0 && p.ly <= H);
});
let minGap = 1e9, minPair = '';
for (let a = 0; a < keys.length; a++) for (let b = a + 1; b < keys.length; b++) { const d = dist(keys[a], keys[b]); if (d < minGap) { minGap = d; minPair = keys[a] + ' / ' + keys[b]; } }
check('every marker is at least 28 map units from every other (closest: ' + minPair + ' = ' + Math.round(minGap) + ')', minGap >= 28);

/* ---- 3. markers sit in sensible terrain ---- */
const cat = id => locs.find(l => l.id === id).category;
keys.forEach(k => { check(k + ': marker is on land or water, not in the open ocean', landOf(k), kindOf(k)); });
locs.filter(l => ['cities_towns', 'special_landmarks'].includes(l.category)).forEach(l => {
  check(l.id + ': settlement/landmark is not on water', !['lake', 'river'].includes(kindOf(l.id)), kindOf(l.id));
});
const expectKind = {
  'polaris-lake': ['lake'], 'risa-river': ['river'], 'elysia-falls': ['river', 'falls'], 'deneb-desert': ['desert'], 'vardos-badlands': ['bad'], 'saiph-city': ['desert'],
  'vaisera-mountains': ['mount'], 'gurios-mountains': ['snow', 'mount'], 'ignara-highlands': ['volc'], 'kaxyl-forest': ['forest'], 'largia-swamp': ['swamp'], 'tucana-rainforest': ['jungle'],
  'yanna-jungle': ['jungle'], 'breshno-flatlands': ['grass'], 'antares-city': ['jungle'], 'hamal-town': ['geo', 'steam', 'spring'], 'ulan-grotto': ['mount'], 'celaeno-town': ['grass', 'plain'],
  'rana-town': ['grass'], 'altair-city': ['mount']
};
Object.keys(expectKind).forEach(k => check(k + ': biome under the marker is ' + expectKind[k].join(' or '), expectKind[k].includes(kindOf(k)), kindOf(k)));
['talas-co-power-plant', 'stellara-pok-mon-league'].forEach(k => check(k + ': not placed in desert, badlands or water', !['desert', 'bad', 'lake', 'river'].includes(kindOf(k)), kindOf(k)));
['irra-beach', 'caelum-cliffs', 'vega-city', 'eridani-city'].forEach(k => {
  const c = at(k); let sea = false;
  for (let dj = -5; dj <= 5; dj++) for (let di = -5; di <= 5; di++) { const i = c.i + di, j = c.j + dj; if (M.inb(i, j) && !M.land[j][i]) sea = true; }
  check(k + ': sits on the coast (open sea within ~60 units)', sea);
});

/* ---- 4. geographic relationships from the official descriptions ---- */
const riverAtX = x => { let best = null; M.river.forEach(([rx, ry]) => { if (best === null || Math.abs(rx - x) < Math.abs(best[0] - x)) best = [rx, ry]; }); return best; };
const R = M.river, first = R[0], last = R[R.length - 1];
check('Risa River starts at the west shore of Polaris Lake', Math.hypot(first[0] - P['polaris-lake'].x, first[1] - P['polaris-lake'].y) < M.lake.rx + 12 && first[0] < P['polaris-lake'].x, first.map(Math.round).join(','));
check('Risa River ends at the western ocean beside Eridani City', last[0] < 60 && Math.abs(last[1] - P['eridani-city'].y) < 60, last.map(Math.round).join(','));
let monotone = true; for (let i = 1; i < R.length; i++) if (R[i][0] > R[i - 1][0] + 6) monotone = false;
check('Risa River flows west only (x never increases downstream)', monotone && last[0] < first[0] - 700);
check('Cyngi City is south of the Risa River', P['cyngi-city'].y > riverAtX(P['cyngi-city'].x)[1] + 20, 'river y ' + Math.round(riverAtX(P['cyngi-city'].x)[1]) + ' vs ' + P['cyngi-city'].y);
check('Risa River marker is on the river', M.water[at('risa-river').j][at('risa-river').i] === 'river');
check('Eridani City is a western coastal city (x < 160)', P['eridani-city'].x < 160);
check('Baltis City overlooks Polaris Lake (within 90 of its centre)', dist('baltis-city', 'polaris-lake') < 90 && P['baltis-city'].y < P['polaris-lake'].y, Math.round(dist('baltis-city', 'polaris-lake')));
check('Rana Town is near Polaris Lake', dist('rana-town', 'polaris-lake') < 160, Math.round(dist('rana-town', 'polaris-lake')));
check('Nair City is near the Gurios Mountains', dist('nair-city', 'gurios-mountains') < 160, Math.round(dist('nair-city', 'gurios-mountains')));
check('Helos Ruins are in the same northern region as Nair City', dist('helos-ruins', 'nair-city') < 200 && P['helos-ruins'].y < 300);
check('Helos Ruins are near the Gurios Mountains (mountain or snow within ~100 units)', near('helos-ruins', ['mount', 'snow'], 8));
check('northern terrain is cold (tundra/snow/mountain under Nair City and Helos Ruins)', ['tundra', 'snow', 'mount'].includes(kindOf('nair-city')) && ['tundra', 'snow', 'mount'].includes(kindOf('helos-ruins')), kindOf('nair-city') + ' / ' + kindOf('helos-ruins'));
check('Gurios Mountains are in the north (y < 300)', P['gurios-mountains'].y < 300);
check('Vaisera Mountains are in the west (x < 500)', P['vaisera-mountains'].x < 500);
check('Pavo Town lies at the foot of the Vaisera Mountains', dist('pavo-town', 'vaisera-mountains') < 190 && near('pavo-town', ['mount'], 7));
check('Ulan Grotto is beneath the Vaisera Mountains', dist('ulan-grotto', 'vaisera-mountains') < 100);
check('Altair City is on a plateau not far from the Vaisera Mountains', dist('altair-city', 'vaisera-mountains') < 260 && near('altair-city', ['mount'], 2));
check('Ignara Highlands lie along the southern reaches of the Vaisera Mountains (south of its anchor, in the west)', P['ignara-highlands'].y > P['vaisera-mountains'].y + 120 && P['ignara-highlands'].x < 500);
check('Caelum Cliffs are on the west coast near Eridani City', P['caelum-cliffs'].x < 140 && dist('caelum-cliffs', 'eridani-city') < 200, Math.round(dist('caelum-cliffs', 'eridani-city')));
check('Hamal Town is near Elysia Falls', dist('hamal-town', 'elysia-falls') < 100, Math.round(dist('hamal-town', 'elysia-falls')));
{ const cellsNear = (id, kind, r) => { const c = at(id); let n = 0; for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const i = c.i + di, j = c.j + dj; if (M.inb(i, j) && M.kind[j][i] === kind) n++; } return n; };
  check('Elysia Falls: a waterfall is drawn across the river at the marker', cellsNear('elysia-falls', 'falls', 3) >= 2);
  check('Hamal Town: hot springs are drawn beside it', cellsNear('hamal-town', 'spring', 6) >= 6);
  check('Hamal Town: steam is drawn over the geothermal ground', cellsNear('hamal-town', 'steam', 6) >= 3);
  const kinds = {}; M.kind.forEach(row => row.forEach(k => { if (k) kinds[k] = (kinds[k] || 0) + 1; }));
  check('tropical jungle is a different biome from temperate forest (both are drawn)', kinds.jungle > 100 && kinds.forest > 100);
  check('the Vardos badlands and Deneb desert use different colours', JSON.stringify(PALS.bad) !== JSON.stringify(PALS.desert)); }
check('Hamal Town is by geothermal terrain', near('hamal-town', ['geo', 'volc'], 2));
check('Shaula Town borders Kaxyl Forest', dist('shaula-town', 'kaxyl-forest') < 140 && near('shaula-town', ['forest'], 3));
check('Menkent Town is near Kaxyl Forest outskirts and Fomalhaut Estate', near('menkent-town', ['forest'], 4) && dist('menkent-town', 'fomalhaut-estate') < 120, Math.round(dist('menkent-town', 'fomalhaut-estate')));
check('Fomalhaut Estate is near Kaxyl Forest', dist('fomalhaut-estate', 'kaxyl-forest') < 160 && near('fomalhaut-estate', ['forest'], 2));
check('Largia Swamp is close to Kaxyl Forest and Fomalhaut Estate', dist('largia-swamp', 'kaxyl-forest') < 200 && dist('largia-swamp', 'fomalhaut-estate') < 160, Math.round(dist('largia-swamp', 'kaxyl-forest')) + ' / ' + Math.round(dist('largia-swamp', 'fomalhaut-estate')));
check('Sabik Town borders Largia Swamp', dist('sabik-town', 'largia-swamp') < 110 && near('sabik-town', ['swamp'], 3));
check('Kaxyl cluster is one region (Kaxyl, Shaula, Menkent, Fomalhaut, Largia, Sabik all within 260 of Kaxyl)', ['shaula-town', 'menkent-town', 'fomalhaut-estate', 'largia-swamp', 'sabik-town'].every(k => dist(k, 'kaxyl-forest') < 260));
{ const c = at('saiph-city'); let allDesert = true; for (let dj = -4; dj <= 4; dj++) for (let di = -4; di <= 4; di++) { if (Math.hypot(di, dj) > 4) continue; const i = c.i + di, j = c.j + dj; if (!M.inb(i, j) || !M.land[j][i] || M.kind[j][i] !== 'desert') allDesert = false; }
  check('Saiph City is deep inside Deneb Desert (every cell within ~48 units is desert)', allDesert); }
check('Deneb Desert is in southern Stellara (y > 600)', P['deneb-desert'].y > 600);
check('Vardos Badlands are on the northwestern outskirts of Deneb Desert', P['vardos-badlands'].x < P['deneb-desert'].x && P['vardos-badlands'].y < P['deneb-desert'].y && dist('vardos-badlands', 'deneb-desert') < 260, Math.round(dist('vardos-badlands', 'deneb-desert')));
check('Vardos Badlands and Deneb Desert are different biomes', kindOf('vardos-badlands') !== kindOf('deneb-desert'));
check('Tucana Rainforest is in the south (y > 700)', P['tucana-rainforest'].y > 700);
check('Antares City is in or beside the rainforest', dist('antares-city', 'tucana-rainforest') < 170 && ['jungle'].includes(kindOf('antares-city')));
check('Mintaka City is in the northeast (x > 1200, y < 400)', P['mintaka-city'].x > 1200 && P['mintaka-city'].y < 400);
check('Lacaille City is in the east (x > 1150)', P['lacaille-city'].x > 1150);
check('Vega City is on the eastern coastline (x > 1150)', P['vega-city'].x > 1150);
check('Irra Beach is near Vega City on the east coast', dist('irra-beach', 'vega-city') < 110 && P['irra-beach'].x > 1150, Math.round(dist('irra-beach', 'vega-city')));
check('Celaeno Town is central (400 < x < 1100)', P['celaeno-town'].x > 400 && P['celaeno-town'].x < 1100);
{ const comp = k => M.comp[at(k).j][at(k).i]; check('Yanna Jungle is on Antila Island, a separate landmass from the mainland', comp('yanna-jungle') > 0 && comp('yanna-jungle') !== comp('cyngi-city') && M.keep[comp('yanna-jungle')]);
  const mainland = comp('cyngi-city'); const others = keys.filter(k => comp(k) !== mainland); check('only Yanna Jungle is off the mainland', others.length === 1 && others[0] === 'yanna-jungle', others.join(', ')); }
check('League and Talas plant are distinct landmark markers (category special_landmarks)', cat('stellara-pok-mon-league') === 'special_landmarks' && cat('talas-co-power-plant') === 'special_landmarks');

/* ---- 5. rendering ---- */
let svgOk = false; try { const svg = toSvg(M, GEO.mapScale || 1); svgOk = svg.startsWith('<svg') && svg.length > 50000; } catch (e) { svgOk = false; }
check('map artwork renders (svg builds)', svgOk);
const svgFile = path.join(ROOT, 'assets', 'stellara-digital-map.svg');
check('assets/stellara-digital-map.svg exists and matches the current positions (run build-map.js after moving anything)', fs.existsSync(svgFile) && fs.readFileSync(svgFile, 'utf8') === toSvg(M, GEO.mapScale || 1));

console.log('Regional Atlas audit: ' + pass + ' passed, ' + fail + ' failed');
failures.forEach(f => console.log('  FAIL  ' + f));
process.exit(fail ? 1 : 0);
