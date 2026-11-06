/* The Regional Atlas: a filterable SVG map and a location panel with an accordion of Points of Interest (POIs).
   Content comes from assets/atlas-data.js, geometry from assets/atlas-geo.js. The page holds <div class="atl" data-atlas>.
   Official location text is read from each location's own page on this site, so it is never copied here. */
(function () {
  var host = document.querySelector('.atl[data-atlas]');
  if (!host) return;
  var D = window.STELLARA_ATLAS || {}, G = window.STELLARA_ATLAS_GEO || {}, SITE = window.SITE || { pages: [] };
  var ROOT = document.body.getAttribute('data-root') || '';
  var CATS = D.locationCategories || {}, POICATS = D.poiCategories || [];
  var CAT_KEYS = Object.keys(CATS);
  var NS = 'http://www.w3.org/2000/svg';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  /* icon drawings (24 x 24 grid, drawn as outlines) */
  var ICON = {
    city: 'M4 21V9h6v12M10 21V4h10v17M14 8h2M14 12h2M14 16h2M6 13h2M6 17h2',
    town: 'M4 11l8-7 8 7v9H4zM10 20v-6h4v6',
    cities_towns: 'M4 21V9h6v12M10 21V4h10v17M14 8h2M14 12h2M14 16h2M6 13h2M6 17h2',
    forests_wetlands: 'M12 3l5 8h-3l4 6H6l4-6H7zM12 17v4',
    mountains_highlands: 'M3 20l6-11 4 6 3-4 5 9z',
    deserts_badlands: 'M3 19h18M6 19a6 6 0 0112 0M12 5v2M5 9l1.5 1.5M19 9l-1.5 1.5',
    waterways_coasts: 'M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0',
    special_landmarks: 'M12 3l2.6 5.6 6 .7-4.4 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.4 9.3l6-.7z',
    gym: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z',
    sub: 'M12 3a6 6 0 016 6c0 4-6 12-6 12S6 13 6 9a6 6 0 016-6zM12 7.5v3'
  };
  function ico(path, cls) { return '<svg class="' + (cls || 'ai') + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + path + '"/></svg>'; }

  /* ---------- load and check the data ---------- */
  var problems = [];
  function warn(m) { problems.push(m); console.warn('Atlas: ' + m + ' Check assets/atlas-data.js.'); }
  var pageBySlug = {};
  SITE.pages.forEach(function (p) { if (/^region\/(settlements|wilderness|landmarks)\/./.test(p.route)) pageBySlug[p.route.split('/').pop()] = p; });

  var L = [], byId = {}, poiSeen = {}, poiTotal = 0, gymTotal = 0;
  (D.locations || []).forEach(function (raw, i) {
    if (!raw || !raw.id || !raw.name) return warn('Location number ' + (i + 1) + ' needs an id and a name.');
    if (byId[raw.id]) return warn('The location id ' + raw.id + ' is used twice.');
    if (!CATS[raw.category]) warn(raw.id + ' has an unknown category (' + raw.category + ').');
    var page = pageBySlug[raw.pageSlug || raw.id];
    if (!page) warn(raw.id + ' has no matching page on this site, so its official description cannot be shown.');
    var loc = { id: raw.id, name: String(raw.name), cat: raw.category, page: page || null, pois: [], key: norm(raw.name), geoStatus: raw.coordinatesStatus };
    (raw.pointsOfInterest || []).forEach(function (p) {
      if (!p || !p.id || !p.name) return warn('A POI in ' + raw.id + ' needs an id and a name.');
      if (poiSeen[p.id]) return warn('The POI id ' + p.id + ' is used twice.');
      if (p.id.indexOf(raw.id + '--') !== 0) warn('The POI id ' + p.id + ' does not start with its location id (' + raw.id + '--).');
      if (!p.description) warn('The POI ' + p.id + ' has no description.');
      if (p.category && POICATS.indexOf(p.category) < 0) warn('The POI ' + p.id + ' has an unknown category (' + p.category + ').');
      poiSeen[p.id] = 1; poiTotal++;
      var isGym = p.isGym === true || p.category === 'gym'; if (isGym) gymTotal++;
      loc.pois.push({ id: p.id, name: String(p.name), desc: String(p.description || ''), gym: isGym, gymType: p.gymType || '', gymOk: p.gymAssignmentStatus === 'verified', sub: p.isNamedSubregion === true, key: norm(p.name) });
    });
    byId[raw.id] = loc; L.push(loc);
  });
  var draft = /draft/i.test(D.status || '');
  var geoOn = (G.approved === true || G.placeholder === true || G.proposed === true) && G.points, chart = G.theme === 'chart', art = G.theme === 'digital' && !!G.image;
  if (chart) host.classList.add('chart');
  if (art) host.classList.add('digital');
  function kindIcon(l) { return l.cat === 'cities_towns' ? (/-town$/.test(l.id) ? ICON.town : ICON.city) : ICON[l.cat] || ICON.special_landmarks; }
  function kindName(l) { return l.cat === 'cities_towns' ? (/-town$/.test(l.id) ? 'Town' : 'City') : (CATS[l.cat] || ''); }

  /* ---------- state ---------- */
  var S = { q: '', cats: {}, sel: '', open: '', legend: false };
  var base = [1000, 700], view = { x: 0, y: 0, w: 1000, h: 700 }, pos = {};
  var descCache = {};

  function matches(l) {
    var anyCat = Object.keys(S.cats).length;
    if (anyCat && !S.cats[l.cat]) return false;
    var q = norm(S.q).trim(); if (!q) return true;
    return l.key.indexOf(q) > -1 || l.pois.some(function (p) { return p.key.indexOf(q) > -1; });
  }
  function poiHits(l) {
    var q = norm(S.q).trim(); if (!q) return [];
    return l.pois.filter(function (p) { return p.key.indexOf(q) > -1; });
  }

  /* ---------- page skeleton ---------- */
  var gymNote = gymTotal && L.some(function (l) { return l.pois.some(function (p) { return p.gym && !p.gymOk; }); });
  host.innerHTML =
    '<div class="atl-head"><p class="atl-meta"><b>' + L.length + '</b> locations <i>/</i> <b>' + poiTotal + '</b> points of interest <i>/</i> <b>' + gymTotal + '</b> Gyms' +
    (draft ? ' <span class="atl-tag atl-draft">Draft content</span>' : '') + '</p></div>' +
    '<div class="atl-tools" role="search">' +
    '<label class="atl-search"><span class="atl-lab">Search places and points of interest</span><input type="search" class="atl-q" placeholder="Try a city, a forest or a Gym" autocomplete="off"></label>' +
    '<div class="atl-chips" role="group" aria-label="Filter by category"></div>' +
    '<div class="atl-btns"><button type="button" class="atl-btn atl-reset">Reset map</button><button type="button" class="atl-btn atl-lg" aria-pressed="false" aria-controls="atl-legend">Legend</button></div></div>' +
    '<div class="atl-main"><section class="atl-mapwrap" aria-label="Map of Stellara">' +
    '<p class="atl-banner" hidden></p>' +
    '<div class="atl-stage" tabindex="0" aria-label="Map. Use the arrow keys to move, plus and minus to zoom, zero to reset."><svg class="atl-svg" role="group" aria-label="Locations in Stellara"></svg>' +
    '<div class="atl-zoom"><button type="button" data-z="in" aria-label="Zoom in">+</button><button type="button" data-z="out" aria-label="Zoom out">&minus;</button>' + (chart ? '<button type="button" data-z="names" class="atl-nmbtn" aria-pressed="false" aria-label="Show all place names">Aa</button>' : '') + '</div>' +
    '<div class="atl-legend" id="atl-legend" hidden></div></div>' +
    '<p class="atl-hint">Drag to move the map. Hold Ctrl and scroll, or pinch, to zoom.</p></section>' +
    '<aside class="atl-panel" aria-label="Location information"><div class="atl-pin"></div></aside></div>' +
    '<p class="atl-live" role="status" aria-live="polite"></p>';

  var $ = function (s) { return host.querySelector(s); };
  var svg = $('.atl-svg'), stage = $('.atl-stage'), panel = $('.atl-panel'), pin = $('.atl-pin'), live = $('.atl-live'), qIn = $('.atl-q');

  /* category chips (they double as the colour key) */
  $('.atl-chips').innerHTML = CAT_KEYS.map(function (k, i) {
    var n = L.filter(function (l) { return l.cat === k; }).length;
    return '<button type="button" class="atl-chip c' + (i + 1) + '" data-cat="' + k + '" aria-pressed="false">' + ico(ICON[k]) + '<span>' + esc(CATS[k]) + '</span><em>' + n + '</em></button>';
  }).join('');
  function cIdx(k) { return 'c' + (CAT_KEYS.indexOf(k) + 1); }

  /* legend */
  $('.atl-legend').innerHTML = '<b class="atl-lab">Legend</b><ul>' + CAT_KEYS.map(function (k) { return '<li class="' + cIdx(k) + '"><span class="atl-lgi">' + ico(ICON[k]) + '</span>' + esc(CATS[k]) + '</li>'; }).join('') +
    '<li class="lgx"><span class="atl-lgi">' + ico(ICON.town) + '</span>Towns use the house symbol, cities the building</li></ul><p>Selected places get a bright ring. Dimmed places do not match the search or filters.</p>';

  /* ---------- the map ---------- */
  function layoutBoard() {
    /* Index board: places grouped by category in rows. It is NOT geography. */
    var cols = 6, dx = 160, rowH = 104, y = 0, out = {}, bands = [];
    CAT_KEYS.forEach(function (k) {
      var items = L.filter(function (l) { return l.cat === k; }); if (!items.length) return;
      var rows = Math.ceil(items.length / cols);
      bands.push({ k: k, y: y, h: 40 + rows * rowH });
      items.forEach(function (l, i) { out[l.id] = { x: 100 + (i % cols) * dx, y: y + 40 + 40 + Math.floor(i / cols) * rowH }; });
      y += 40 + rows * rowH + 16;
    });
    return { pos: out, bands: bands, h: y };
  }
  var board = null;
  if (geoOn) { base = G.viewBox || base; pos = G.points; }
  else { board = layoutBoard(); base = [1000, Math.max(300, board.h)]; pos = board.pos; }
  view = { x: 0, y: 0, w: base[0], h: base[1] };
  svg.setAttribute('viewBox', '0 0 ' + base[0] + ' ' + base[1]);

  function lines(name) {
    var w = name.split(' '), a = '', b = '';
    w.forEach(function (t) { if (!b && (a + ' ' + t).trim().length <= 15) a = (a + ' ' + t).trim(); else b = (b + ' ' + t).trim(); });
    if (b.length > 17) b = b.slice(0, 16) + '…';
    return [a, b];
  }
  function buildSvg() {
    var h = '';
    if (!geoOn) {
      board.bands.forEach(function (b) {
        h += '<g class="atl-band ' + cIdx(b.k) + '"><rect x="0" y="' + b.y + '" width="1000" height="' + b.h + '"/><text x="22" y="' + (b.y + 27) + '">' + esc(CATS[b.k]) + '</text></g>';
      });
    } else {
      if (art) h += '<image class="atl-art" href="' + ROOT + esc(G.image) + '" x="0" y="0" width="' + base[0] + '" height="' + base[1] + '" preserveAspectRatio="none" aria-hidden="true"/>';
      (G.layers || []).forEach(function (ly) { h += '<g class="atl-layer" data-layer="' + esc(ly.id || '') + '" aria-hidden="true">' + ly.svg + '</g>'; });
    }
    L.forEach(function (l) {
      var p = pos[l.id]; if (!p) return;
      if (art) {
        /* digital chart: a node on the anchor, a leader line and a label chip placed at the audited label position */
        var lx = p.lx == null ? p.x : p.lx, ly = p.ly == null ? p.y : p.ly, tw = Math.round(l.name.length * 8.4), w = tw + 46, ht = 28;
        h += '<g class="atl-mk ' + cIdx(l.cat) + '" data-id="' + esc(l.id) + '" role="button" tabindex="0" aria-pressed="false" aria-label="' + esc(l.name + ', ' + kindName(l)) + '">' +
          '<line class="ln" x1="' + p.x + '" y1="' + p.y + '" x2="' + lx + '" y2="' + ly + '"/>' +
          '<rect class="nd" x="' + (p.x - 6) + '" y="' + (p.y - 6) + '" width="12" height="12" transform="rotate(45 ' + p.x + ' ' + p.y + ')"/><rect class="pulse" x="' + (p.x - 6) + '" y="' + (p.y - 6) + '" width="12" height="12" transform="rotate(45 ' + p.x + ' ' + p.y + ')"/>' +
          '<g transform="translate(' + (lx - w / 2) + ' ' + (ly - ht / 2) + ')"><rect class="chip" width="' + w + '" height="' + ht + '" rx="3"/><rect class="bar" width="4" height="' + ht + '"/>' +
          '<path class="gl" transform="translate(12 6) scale(.667)" d="' + kindIcon(l) + '"/>' +
          '<text class="lb" x="36" y="' + (ht / 2 + 4.6) + '" textLength="' + tw + '" lengthAdjust="spacingAndGlyphs">' + esc(l.name) + '</text></g>' +
          '<rect class="hit" x="' + (lx - w / 2) + '" y="' + (ly - ht / 2) + '" width="' + w + '" height="' + ht + '"/><title>' + esc(l.name) + '</title></g>';
        return;
      }
      var ln = lines(l.name);
      h += '<g class="atl-mk ' + cIdx(l.cat) + '" data-id="' + esc(l.id) + '" role="button" tabindex="0" aria-pressed="false" aria-label="' + esc(l.name + ', ' + kindName(l)) + '" transform="translate(' + p.x + ' ' + p.y + ')' + (chart ? ' scale(1.15)' : '') + '">' +
        (chart ? '<circle class="hit" r="34"/><rect class="ring" x="-27" y="-27" width="54" height="54" rx="14"/><rect class="dot" x="-21" y="-21" width="42" height="42" rx="10"/><path class="gl" transform="translate(-13 -13) scale(1.0833)" d="' + kindIcon(l) + '"/>'
          : '<circle class="hit" r="36"/><circle class="ring" r="31"/><circle class="dot" r="25"/><path class="gl" transform="translate(-14 -14) scale(1.1667)" d="' + kindIcon(l) + '"/>') +
        '<text class="lb" y="' + (chart ? 40 : 46) + '" text-anchor="middle">' + esc(ln[0]) + '</text>' + (ln[1] ? '<text class="lb" y="' + (chart ? 56 : 62) + '" text-anchor="middle">' + esc(ln[1]) + '</text>' : '') + '<title>' + esc(l.name) + '</title></g>';
    });
    svg.innerHTML = h;
  }
  buildSvg();
  if (art) stage.insertAdjacentHTML('beforeend', '<div class="atl-hud" aria-hidden="true"><b>Stellara // Regional chart</b><span>Proposed placement, not canon</span></div>');
  var banner = $('.atl-banner');
  var unplaced = L.filter(function (l) { return !pos[l.id]; });
  if (G.placeholder === true) { banner.hidden = false; banner.innerHTML = '<b>Style preview, not Stellara.</b> The coastline and every position here were invented to show the map style. They are not canon and mean nothing. The approved map will replace them: see assets/atlas-geo.js.'; }
  else if (G.proposed === true) { banner.hidden = false; banner.innerHTML = '<b>Proposed map.</b> This placement of the places in Stellara is a proposal and is not final canon. It can change.'; }
  else if (!geoOn) { banner.hidden = false; banner.innerHTML = '<b>Index board, not a map.</b> The approved map of Stellara is not ready, so places are grouped by category and their positions mean nothing. The board is ready for the real map: see assets/atlas-geo.js.'; }
  else if (unplaced.length) { banner.hidden = false; banner.innerHTML = unplaced.length + ' location(s) are not on the map yet. Find them in the list.'; }

  function applyView() {
    view.w = Math.min(base[0], Math.max(base[0] / 6, view.w)); view.h = view.w * base[1] / base[0];
    view.x = Math.min(base[0] - view.w, Math.max(0, view.x)); view.y = Math.min(base[1] - view.h, Math.max(0, view.y));
    svg.setAttribute('viewBox', view.x + ' ' + view.y + ' ' + view.w + ' ' + view.h);
    stage.classList.toggle('zoomed', view.w < base[0] - 1);
  }
  function zoomBy(f, cx, cy) {
    var nx = cx == null ? view.x + view.w / 2 : cx, ny = cy == null ? view.y + view.h / 2 : cy, nw = view.w * f;
    nw = Math.min(base[0], Math.max(base[0] / 6, nw)); var k = nw / view.w;
    view.x = nx - (nx - view.x) * k; view.y = ny - (ny - view.y) * k; view.w = nw; applyView();
  }
  function toSvg(ev) { var r = svg.getBoundingClientRect(); return { x: view.x + (ev.clientX - r.left) / r.width * view.w, y: view.y + (ev.clientY - r.top) / r.height * view.h }; }
  function resetView() { view = { x: 0, y: 0, w: base[0], h: base[1] }; applyView(); }

  /* drag to move, two fingers to zoom */
  var ptrs = {}, drag = null, moved = false, pinch = 0;
  svg.addEventListener('pointerdown', function (e) {
    ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; moved = false;
    var ids = Object.keys(ptrs);
    if (ids.length === 2) { pinch = Math.hypot(ptrs[ids[0]].x - ptrs[ids[1]].x, ptrs[ids[0]].y - ptrs[ids[1]].y); drag = null; }
    else drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
  });
  svg.addEventListener('pointermove', function (e) {
    if (!ptrs[e.pointerId]) return; ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
    var ids = Object.keys(ptrs);
    if (ids.length === 2 && pinch) {
      var d = Math.hypot(ptrs[ids[0]].x - ptrs[ids[1]].x, ptrs[ids[0]].y - ptrs[ids[1]].y), r = svg.getBoundingClientRect();
      var mid = toSvg({ clientX: (ptrs[ids[0]].x + ptrs[ids[1]].x) / 2, clientY: (ptrs[ids[0]].y + ptrs[ids[1]].y) / 2 });
      zoomBy(pinch / d, mid.x, mid.y); pinch = d; moved = true; return;
    }
    if (!drag || !stage.classList.contains('zoomed')) return;
    var r2 = svg.getBoundingClientRect(), dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) { moved = true; try { svg.setPointerCapture(e.pointerId); } catch (x) {} }
    if (moved) { view.x = drag.vx - dx / r2.width * view.w; view.y = drag.vy - dy / r2.height * view.h; applyView(); }
  });
  function up(e) { delete ptrs[e.pointerId]; pinch = 0; drag = null; }
  svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  svg.addEventListener('wheel', function (e) { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); var p = toSvg(e); zoomBy(e.deltaY > 0 ? 1.15 : 1 / 1.15, p.x, p.y); }, { passive: false });
  stage.addEventListener('keydown', function (e) {
    if (e.target !== stage) return;
    var st = view.w * .15, k = e.key;
    if (k === '+' || k === '=') zoomBy(1 / 1.3); else if (k === '-' || k === '_') zoomBy(1.3); else if (k === '0') resetView();
    else if (k === 'ArrowLeft') { view.x -= st; applyView(); } else if (k === 'ArrowRight') { view.x += st; applyView(); } else if (k === 'ArrowUp') { view.y -= st; applyView(); } else if (k === 'ArrowDown') { view.y += st; applyView(); } else return;
    e.preventDefault();
  });
  $('.atl-zoom').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; if (b.dataset.z === 'names') { var on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); stage.classList.toggle('names', on); return; } zoomBy(b.dataset.z === 'in' ? 1 / 1.4 : 1.4); });

  /* ---------- selecting ---------- */
  function select(id, poiId) {
    S.sel = id || ''; S.open = poiId || '';
    drawMarkers(); drawPanel();
    if (id) { live.textContent = byId[id].name + ' selected. ' + byId[id].pois.length + ' points of interest.'; centerOn(id); }
    else live.textContent = 'Selection cleared.';
  }
  function centerOn(id) {
  var p = pos[id]; if (!p || view.w >= base[0] - 1) return; if (p.lx != null) p = { x: p.lx, y: p.ly };
    if (p.x < view.x + 60 || p.x > view.x + view.w - 60 || p.y < view.y + 60 || p.y > view.y + view.h - 60) { view.x = p.x - view.w / 2; view.y = p.y - view.h / 2; applyView(); }
  }
  svg.addEventListener('click', function (e) {
    if (moved) { moved = false; return; }
    var g = e.target.closest('.atl-mk'); if (g) select(g.dataset.id === S.sel ? '' : g.dataset.id, '');
  });
  svg.addEventListener('keydown', function (e) {
    var g = e.target.closest && e.target.closest('.atl-mk'); if (!g) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(g.dataset.id === S.sel ? '' : g.dataset.id, ''); }
  });

  function drawMarkers() {
    [].forEach.call(svg.querySelectorAll('.atl-mk'), function (g) {
      var id = g.dataset.id, on = matches(byId[id]), sel = id === S.sel;
      g.classList.toggle('dim', !on); g.classList.toggle('sel', sel);
      g.setAttribute('aria-pressed', sel); g.setAttribute('tabindex', on ? 0 : -1);
      if (sel) g.parentNode.appendChild(g);
    });
  }

  /* ---------- the panel ---------- */
  function paragraphs(l, done) {
    if (descCache[l.id]) return done(descCache[l.id]);
    var fallback = { p: [(l.page && l.page.desc) || ''], official: false };
    if (!l.page) return done(fallback);
    fetch(ROOT + l.page.route + '/').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
      var m = new DOMParser().parseFromString(t, 'text/html').querySelector('main'), ps = m ? [].map.call(m.querySelectorAll(':scope > p:not(.nojs)'), function (p) { return p.textContent.trim(); }).filter(Boolean) : [];
      descCache[l.id] = ps.length ? { p: ps, official: true } : fallback; done(descCache[l.id]);
    }).catch(function () { done(fallback); });
  }
  function listHtml() {
    var q = norm(S.q).trim(), shown = L.filter(matches), h = '';
    h += '<p class="atl-count">' + shown.length + ' of ' + L.length + ' locations' + (q || Object.keys(S.cats).length ? ' match' : '') + '</p>';
    if (!shown.length) return h + '<div class="atl-empty"><b>Nothing found</b><p>No place or point of interest matches &ldquo;' + esc(S.q) + '&rdquo;' + (Object.keys(S.cats).length ? ' in the chosen categories' : '') + '. Check the spelling or try a shorter word.</p><button type="button" class="atl-btn atl-clear">Clear search and filters</button></div>';
    CAT_KEYS.forEach(function (k) {
      var items = shown.filter(function (l) { return l.cat === k; }); if (!items.length) return;
      h += '<h3 class="atl-gh ' + cIdx(k) + '">' + ico(ICON[k]) + esc(CATS[k]) + '</h3><ul class="atl-list">' + items.map(function (l) {
        var hits = poiHits(l), extra = hits.length && norm(l.name).indexOf(q) < 0 ? '<span class="atl-sub">Contains: ' + hits.slice(0, 3).map(function (p) { return esc(p.name); }).join(', ') + (hits.length > 3 ? ' +' + (hits.length - 3) : '') + '</span>' : '';
        return '<li><button type="button" class="atl-row ' + cIdx(l.cat) + '" data-id="' + esc(l.id) + '"' + (hits.length && norm(l.name).indexOf(q) < 0 ? ' data-poi="' + esc(hits[0].id) + '"' : '') + '><span class="atl-nm">' + esc(l.name) + extra + '</span>' + (pos[l.id] ? '' : '<span class="atl-np">Not on map</span>') + '<span class="atl-n">' + l.pois.length + '</span></button></li>';
      }).join('') + '</ul>';
    });
    return h;
  }
  function poiHtml(l, p) {
    var open = S.open === p.id, tags = (p.gym ? '<span class="atl-tag atl-gym">' + esc(p.gymType ? p.gymType + ' Gym' : 'Gym') + '</span>' : '') + (p.sub ? '<span class="atl-tag atl-subr">Subregion</span>' : '');
    return '<li class="atl-poi' + (open ? ' open' : '') + '"><h4><button type="button" class="atl-pb" data-poi="' + esc(p.id) + '" aria-expanded="' + open + '" aria-controls="b-' + esc(p.id) + '">' +
      '<span class="atl-pi">' + ico(p.gym ? ICON.gym : p.sub ? ICON.sub : 'M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0') + '</span><span class="atl-pt">' + esc(p.name) + '</span>' + tags + '<span class="atl-car" aria-hidden="true"></span></button></h4>' +
      '<div class="atl-pbody" id="b-' + esc(p.id) + '"' + (open ? '' : ' hidden') + '><p>' + esc(p.desc) + '</p>' +
      (p.gym && !p.gymOk ? '<p class="atl-prov">Gym type assignment is provisional and awaiting verification.</p>' : '') + '</div></li>';
  }
  function drawPanel() {
    panel.classList.toggle('has-sel', !!S.sel);
    var l = byId[S.sel];
    if (!l) { pin.innerHTML = '<div class="atl-welcome"><b>Select a destination</b><p>Choose a marker on the map, or a place below, to read about it and browse its points of interest.</p></div>' + listHtml(); return; }
    var open = S.open;
    pin.innerHTML = '<div class="atl-bar"><button type="button" class="atl-back">&larr; All locations</button><button type="button" class="atl-x" aria-label="Close and show all locations">&times;</button></div>' +
      '<article class="atl-detail ' + cIdx(l.cat) + '"><p class="atl-kind">' + ico(kindIcon(l)) + esc(kindName(l)) + (l.cat === 'cities_towns' ? '' : '') + '</p><h2 tabindex="-1" class="atl-title">' + esc(l.name) + '</h2>' +
      '<p class="atl-cat">' + esc(CATS[l.cat] || '') + (pos[l.id] ? '' : ' &middot; position on the map not yet approved') + '</p>' +
      '<div class="atl-desc" aria-busy="true"><p class="atl-dim">Loading the official description&hellip;</p></div>' +
      (l.page ? '<p class="atl-full"><a href="' + ROOT + l.page.route + '/">Read the full page for ' + esc(l.name) + '</a></p>' : '') +
      '<h3 class="atl-ph">Points of interest <span>' + l.pois.length + '</span></h3>' +
      (l.pois.length ? '<ul class="atl-pois">' + l.pois.map(function (p) { return poiHtml(l, p); }).join('') + '</ul>' : '<p class="atl-dim">No points of interest have been added for this location yet.</p>') + '</article>';
    var token = l.id; var box = pin.querySelector('.atl-desc');
    paragraphs(l, function (r) {
      if (S.sel !== token || !box.isConnected) return;
      box.removeAttribute('aria-busy');
      box.innerHTML = r.p.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + (r.official ? '' : '<p class="atl-dim">Short summary shown because the full page could not be loaded.</p>');
    });
    if (open) { var b = pin.querySelector('[data-poi="' + open + '"]'); if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest' }); }
  }

  /* panel clicks: list rows, back, accordion */
  panel.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('atl-row')) { select(b.dataset.id, b.dataset.poi || ''); var h = pin.querySelector('.atl-title'); if (h) h.focus({ preventScroll: true }); }
    else if (b.classList.contains('atl-back') || b.classList.contains('atl-x')) { var was = S.sel; select('', ''); var m = svg.querySelector('.atl-mk[data-id="' + was + '"]'); if (m && b.classList.contains('atl-x')) m.focus({ preventScroll: true }); }
    else if (b.classList.contains('atl-pb')) {
      var id = b.dataset.poi, on = S.open !== id; S.open = on ? id : '';
      [].forEach.call(pin.querySelectorAll('.atl-poi'), function (li) { var pb = li.querySelector('.atl-pb'), is = on && pb.dataset.poi === id; li.classList.toggle('open', is); pb.setAttribute('aria-expanded', is); li.querySelector('.atl-pbody').hidden = !is; });
    }
    else if (b.classList.contains('atl-clear')) clearAll();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && S.sel && host.contains(document.activeElement)) { select('', ''); } });

  /* ---------- toolbar ---------- */
  function refresh() { S.sel = ''; S.open = ''; drawMarkers(); drawPanel(); }
  function clearAll() { S.q = ''; S.cats = {}; qIn.value = ''; syncChips(); refresh(); }
  function syncChips() { [].forEach.call(host.querySelectorAll('.atl-chip'), function (c) { c.setAttribute('aria-pressed', !!S.cats[c.dataset.cat]); }); }
  qIn.addEventListener('input', function () { S.q = qIn.value; refresh(); });
  qIn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { var shown = L.filter(matches); if (shown.length === 1 || (S.q.trim() && shown.length)) { var l = shown[0], h = poiHits(l); select(l.id, norm(l.name).indexOf(norm(S.q).trim()) < 0 && h.length ? h[0].id : ''); } }
    else if (e.key === 'Escape' && S.q) { S.q = ''; qIn.value = ''; refresh(); e.stopPropagation(); }
  });
  $('.atl-chips').addEventListener('click', function (e) { var c = e.target.closest('.atl-chip'); if (!c) return; var k = c.dataset.cat; if (S.cats[k]) delete S.cats[k]; else S.cats[k] = 1; syncChips(); refresh(); live.textContent = L.filter(matches).length + ' locations shown.'; });
  $('.atl-reset').addEventListener('click', function () { resetView(); select('', ''); clearAll(); });
  $('.atl-lg').addEventListener('click', function (e) { S.legend = !S.legend; e.currentTarget.setAttribute('aria-pressed', S.legend); $('.atl-legend').hidden = !S.legend; });

  drawMarkers(); drawPanel(); applyView();
  if (problems.length) { var w = document.createElement('p'); w.className = 'atl-problems'; w.textContent = problems.length + ' data problem(s) were found. Details are in the browser console.'; host.insertBefore(w, host.firstChild); }
  /* a link such as ?place=cyngi-city opens that place */
  try { var want = new URLSearchParams(location.search).get('place'); if (want && byId[want]) select(want, ''); } catch (e) {}
})();
