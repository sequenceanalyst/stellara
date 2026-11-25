/* Pokémon Habitats, list version (no map): every Pokémon type as a card listing the places that have it, with the same type dropdown as the map version.
   Content comes from assets/atlas-data.js ("pokemonTypes" on each place). A place's description is read from its own page, exactly as the Regional Atlas does.
   The page holds <div class="atl hbl" data-habitats-list>. */
(function () {
  var host = document.querySelector('.hbl[data-habitats-list]');
  if (!host) return;
  var D = window.STELLARA_ATLAS || {}, SITE = window.SITE || { pages: [] };
  var ROOT = document.body.getAttribute('data-root') || '';
  var CATS = D.locationCategories || {}, ALL_KEYS = Object.keys(CATS);
  var TYPE_COLORS = { normal: '#b4b38a', fire: '#f5873f', water: '#7aa0f5', electric: '#f8d030', grass: '#7fd05a', ice: '#9fe0e0', fighting: '#d9645c', poison: '#c273c2', ground: '#e0c068', flying: '#b3a0f5', psychic: '#fa6e98', bug: '#b0c22a', rock: '#c4b04a', ghost: '#9a82c8', dragon: '#9068ff', dark: '#9a806a', steel: '#bcbcd4', fairy: '#f0a5b8' };
  var TYPE_KEYS = Object.keys(TYPE_COLORS);
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function byName(a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; }

  /* places that have types, and the page each one's description comes from */
  var pageBySlug = {};
  SITE.pages.forEach(function (p) { if (/^region\/(settlements|wilderness|landmarks)\/./.test(p.route)) pageBySlug[p.route.split('/').pop()] = p; });
  var P = [], byId = {};
  (D.locations || []).forEach(function (raw) {
    if (!raw || !raw.id || !Array.isArray(raw.pokemonTypes)) return;
    var types = raw.pokemonTypes.filter(function (t) { return TYPE_COLORS[t]; });
    if (!types.length) return;
    var l = { id: raw.id, name: String(raw.name), cat: raw.category, types: types, page: pageBySlug[raw.pageSlug || raw.id] || null };
    P.push(l); byId[l.id] = l;
  });
  var KEYS = ALL_KEYS.filter(function (k) { return P.some(function (l) { return l.cat === k; }); });
  function cIdx(k) { return 'c' + (ALL_KEYS.indexOf(k) + 1); }
  function shortCat(k) { var c = CATS[k] || ''; return c.indexOf(' and ') > -1 ? c.split(' and ')[0] : c.split(' ').pop(); }
  var COUNT = {};
  TYPE_KEYS.forEach(function (t) { COUNT[t] = P.filter(function (l) { return l.types.indexOf(t) > -1; }).length; });

  var S = { types: [], mode: 'any', order: 'std', ddOpen: false, open: '' };
  var descCache = {}, lastBtn = null;

  host.innerHTML = '<div class="hbl-ctl"></div><div class="hbl-out"></div><dialog class="hbl-dlg" aria-labelledby="hbl-dt"></dialog><p class="atl-toast" role="status" hidden></p><p class="atl-live" role="status" aria-live="polite"></p>';
  var $ = function (s) { return host.querySelector(s); };
  var ctl = $('.hbl-ctl'), out = $('.hbl-out'), dlg = $('.hbl-dlg'), live = $('.atl-live');

  /* ---------- the filter ---------- */
  function has(l, t) { return l.types.indexOf(t) > -1; }
  function allOf(T) { return P.filter(function (l) { return T.every(function (t) { return has(l, t); }); }); }
  function anyOf(T) { return P.filter(function (l) { return T.some(function (t) { return has(l, t); }); }); }
  function toggleType(t) {
    var i = S.types.indexOf(t); if (i > -1) S.types.splice(i, 1); else S.types.push(t);
    render(); if (dlg.open) fillDialog(); writeHash();
    var n = !S.types.length ? P.length : (S.mode === 'all' ? allOf(S.types).length : anyOf(S.types).length);
    live.textContent = S.types.length ? n + ' places match.' : 'All types shown.';
  }
  function ddHtml() {
    var n = S.types.length;
    var h = '<div class="atl-dd"><button type="button" class="atl-btn atl-ddb" aria-expanded="' + S.ddOpen + '" aria-controls="hbl-ddp" aria-haspopup="true">Pokémon type' + (n ? '<em class="atl-tn">' + n + '</em>' : '') + '<svg class="ai atl-caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>';
    if (S.ddOpen) {
      h += '<div class="atl-ddp" id="hbl-ddp" role="group" aria-label="Choose Pokémon types"><div class="atl-ddh"><span class="atl-lab">Show places with</span><span class="atl-seg" role="group" aria-label="Match mode"><button type="button" class="atl-so" data-mode="any" aria-pressed="' + (S.mode === 'any') + '">Any</button><button type="button" class="atl-so" data-mode="all" aria-pressed="' + (S.mode === 'all') + '">All</button></span></div><div class="atl-ddg">' +
        TYPE_KEYS.map(function (t) { var on = S.types.indexOf(t) > -1; return '<button type="button" class="atl-ddi" role="checkbox" aria-checked="' + on + '" data-type="' + t + '" style="--tc:' + TYPE_COLORS[t] + '"><i class="atl-bx">' + (on ? '&#10003;' : '') + '</i><span class="atl-sw"></span>' + cap(t) + '<em>' + COUNT[t] + '</em></button>'; }).join('') +
        '</div><div class="atl-ddf"><button type="button" class="atl-dlink" data-act="clear"' + (n ? '' : ' disabled') + '>Clear all</button><button type="button" class="atl-btn" data-act="done">Done</button></div></div>';
    }
    return h + '</div>';
  }
  function pillsHtml() {
    if (!S.types.length) return '';
    return '<div class="atl-pills hbl-pills" aria-label="Active filters">' + S.types.map(function (t) { return '<button type="button" class="atl-pill" style="--cc:' + TYPE_COLORS[t] + '" data-type="' + t + '">' + (S.types.length > 1 && S.mode === 'all' ? 'Has ' : '') + cap(t) + '<span aria-hidden="true">&times;</span><span class="atl-sr"> remove filter</span></button>'; }).join('') + '<button type="button" class="atl-pill atl-pall" data-act="clear">Clear all</button></div>';
  }

  /* ---------- the cards ---------- */
  function chip(t, sm) { var on = S.types.indexOf(t) > -1; return '<i class="atl-ty' + (sm ? ' sm' : '') + (on ? ' on' : S.types.length ? ' dim' : '') + '" style="--tc:' + TYPE_COLORS[t] + '">' + t + '</i>'; }
  function row(l, full, cur) {
    var extra = '';
    if (full) extra = '<span class="atl-tys">' + l.types.map(function (t) { return chip(t, true); }).join('') + '</span>';
    else { var o = S.types.filter(function (t) { return t !== cur && has(l, t); }); if (o.length) extra = '<span class="atl-tys hbl-also"><span class="hbl-aw">also</span>' + o.map(function (t) { return chip(t, true); }).join('') + '</span>'; }
    return '<li><button type="button" class="hbl-row ' + cIdx(l.cat) + '" data-place="' + esc(l.id) + '"><span class="hbl-dot" aria-hidden="true"></span><span class="hbl-nm">' + esc(l.name) + '</span><span class="hbl-ar">' + esc(shortCat(l.cat)) + '</span>' + extra + '</button></li>';
  }
  function cardHtml(t) {
    var list = P.filter(function (l) { return has(l, t); }).sort(byName);
    var segs = KEYS.map(function (k) { var n = list.filter(function (l) { return l.cat === k; }).length; return n ? '<span class="' + cIdx(k) + '" style="flex:' + n + '" title="' + esc(CATS[k]) + ': ' + n + '"></span>' : ''; }).join('');
    return '<section class="hbl-card" style="--tc:' + TYPE_COLORS[t] + '"><header class="hbl-ch"><h2>' + cap(t) + '</h2><span>' + list.length + ' of ' + P.length + ' places</span></header><div class="hbl-bar" aria-hidden="true">' + segs + '</div><ul class="hbl-pl">' + list.map(function (l) { return row(l, false, t); }).join('') + '</ul></section>';
  }
  function legendHtml() { return '<ul class="hbl-lg" aria-label="Colour key for the bar on each card">' + KEYS.map(function (k) { return '<li class="' + cIdx(k) + '"><i></i>' + esc(CATS[k]) + '</li>'; }).join('') + '</ul>'; }

  function renderOut() {
    var T = S.types, h = '';
    if (T.length > 1 && S.mode === 'all') {
      var m = allOf(T).sort(byName);
      h += '<div class="hbl-hd"><p class="hbl-sum"><b>' + m.length + '</b> place' + (m.length === 1 ? ' has' : 's have') + ' all ' + T.length + ' types <span>(' + anyOf(T).length + ' have at least one)</span></p></div>';
      h += m.length ? '<section class="hbl-card hbl-wide"><header class="hbl-ch hbl-chm"><h2>' + T.map(cap).join(' + ') + '</h2><span>' + m.length + ' place' + (m.length === 1 ? '' : 's') + '</span></header><ul class="hbl-pl">' + m.map(function (l) { return row(l, true); }).join('') + '</ul></section>'
        : '<div class="atl-empty"><b>No place has all of these</b><p>Try &ldquo;Any&rdquo; to see places with at least one, or remove a type.</p></div>';
      out.innerHTML = h; return;
    }
    var ts = T.length ? TYPE_KEYS.filter(function (t) { return T.indexOf(t) > -1; }) : TYPE_KEYS.slice();
    if (S.order === 'most') ts.sort(function (a, b) { return COUNT[b] - COUNT[a] || TYPE_KEYS.indexOf(a) - TYPE_KEYS.indexOf(b); });
    var n = T.length ? anyOf(T).length : P.length;
    h += '<div class="hbl-hd"><p class="hbl-sum">' + (T.length ? '<b>' + ts.length + '</b> type' + (ts.length === 1 ? '' : 's') + ' shown <span>(' + n + ' place' + (n === 1 ? '' : 's') + ' have ' + (T.length > 1 ? 'at least one' : 'it') + ')</span>' : '<b>' + ts.length + '</b> types <span>across ' + P.length + ' wild places</span>') + '</p>' +
      '<span class="atl-seg" role="group" aria-label="Order the types"><button type="button" class="atl-so" data-order="std" aria-pressed="' + (S.order === 'std') + '">Standard order</button><button type="button" class="atl-so" data-order="most" aria-pressed="' + (S.order === 'most') + '">Most places</button></span></div>' + legendHtml();
    out.innerHTML = h + '<div class="hbl-grid">' + ts.map(cardHtml).join('') + '</div>';
  }
  function render() {
    ctl.innerHTML = '<div class="atl-tools hbl-tools">' + ddHtml() + '<span class="hbl-sp"></span><button type="button" class="atl-btn" data-act="link">Copy link</button><button type="button" class="atl-btn" data-act="list">Copy list</button></div>' + pillsHtml();
    renderOut();
  }

  /* ---------- a place's description ---------- */
  function paragraphs(l, done) {
    if (descCache[l.id]) return done(descCache[l.id]);
    var fallback = { p: [(l.page && l.page.desc) || ''], official: false };
    if (!l.page) return done(fallback);
    fetch(ROOT + l.page.route + '/').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
      var m = new DOMParser().parseFromString(t, 'text/html').querySelector('main'), ps = m ? [].map.call(m.querySelectorAll(':scope > p:not(.nojs)'), function (p) { return p.textContent.trim(); }).filter(Boolean) : [];
      descCache[l.id] = ps.length ? { p: ps, official: true } : fallback; done(descCache[l.id]);
    }).catch(function () { done(fallback); });
  }
  function fillDialog() {
    var l = byId[S.open]; if (!l) return;
    var sim = P.filter(function (o) { return o !== l; }).map(function (o) { return { o: o, n: o.types.filter(function (t) { return has(l, t); }).length }; }).sort(function (a, b) { return b.n - a.n || byName(a.o, b.o); }).slice(0, 3);
    dlg.innerHTML = '<button type="button" class="hbl-x" data-act="close" aria-label="Close">&times;</button>' +
      '<article class="atl-detail ' + cIdx(l.cat) + '"><p class="atl-kind">' + esc(CATS[l.cat]) + '</p><h2 class="atl-title" id="hbl-dt" tabindex="-1">' + esc(l.name) + '</h2>' +
      '<div class="atl-desc" aria-busy="true"><div class="atl-clamp"><p class="atl-dim">Loading the official description&hellip;</p></div></div>' +
      '<div class="atl-types"><h3 class="atl-lab">Pokémon types</h3><p>Wild Pokémon of these ' + l.types.length + ' types can be found in ' + esc(l.name) + '. Select a type to add it to the filter.</p><div class="atl-tys">' +
      l.types.map(function (t) { var on = S.types.indexOf(t) > -1; return '<button type="button" class="atl-ty' + (on ? ' on' : S.types.length ? ' dim' : '') + '" data-type="' + t + '" aria-pressed="' + on + '" style="--tc:' + TYPE_COLORS[t] + '">' + t + '</button>'; }).join('') + '</div></div>' +
      '<h3 class="atl-ph">Places with similar types</h3><ul class="hbl-pl hbl-simp">' + sim.map(function (x) { return '<li><button type="button" class="hbl-row ' + cIdx(x.o.cat) + '" data-place="' + esc(x.o.id) + '"><span class="hbl-dot" aria-hidden="true"></span><span class="hbl-nm">' + esc(x.o.name) + '</span><span class="hbl-ar">' + x.n + ' shared</span></button></li>'; }).join('') + '</ul>' +
      (l.page ? '<p class="atl-full"><a class="atl-go" href="' + ROOT + l.page.route + '/">Full page<svg class="ai" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a></p>' : '') + '</article>';
    var token = l.id, box = dlg.querySelector('.atl-desc');
    paragraphs(l, function (r) {
      if (S.open !== token || !box.isConnected) return;
      box.removeAttribute('aria-busy');
      box.innerHTML = '<div class="atl-clamp">' + r.p.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + (r.official ? '' : '<p class="atl-dim">Short summary shown because the full page could not be loaded.</p>') + '</div><button type="button" class="atl-more" aria-expanded="false" hidden>Read more</button>';
      var cl = box.querySelector('.atl-clamp'); if (cl.scrollHeight > cl.clientHeight + 4) box.querySelector('.atl-more').hidden = false; else cl.classList.add('open');
    });
    dlg.scrollTop = 0;
  }
  function openPlace(id, btn) {
    if (!byId[id]) return;
    S.open = id; if (btn) lastBtn = btn;
    fillDialog(); if (!dlg.open) { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } }
    var t = dlg.querySelector('.atl-title'); if (t) t.focus({ preventScroll: true });
    writeHash(); live.textContent = byId[id].name + ' selected. ' + byId[id].types.length + ' Pokémon types.';
  }
  dlg.addEventListener('close', function () {
    var id = S.open; S.open = ''; writeHash();
    var b = (lastBtn && lastBtn.isConnected) ? lastBtn : host.querySelector('[data-place="' + id + '"]');
    if (b) b.focus({ preventScroll: true });
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- copy, and the address ---------- */
  function listText() {
    var T = S.types, lines = [];
    if (T.length > 1 && S.mode === 'all') { var m = allOf(T).sort(byName); lines.push('Places with all of ' + T.map(cap).join(', ') + ' Pokémon (' + m.length + '):'); m.forEach(function (l) { lines.push('- ' + l.name + ': ' + l.types.map(cap).join(', ')); }); return lines.join('\n'); }
    lines.push(T.length ? 'Where ' + T.map(cap).join(', ') + ' Pokémon live in Stellara:' : 'Where Pokémon types live in Stellara:');
    (T.length ? TYPE_KEYS.filter(function (t) { return T.indexOf(t) > -1; }) : TYPE_KEYS).forEach(function (t) {
      var list = P.filter(function (l) { return has(l, t); }).sort(byName);
      lines.push('', cap(t) + ' (' + list.length + '): ' + list.map(function (l) { return l.name; }).join(', '));
    });
    return lines.join('\n');
  }
  function toast(msg) { var t = $('.atl-toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { t.hidden = true; }, 1800); }
  function copyText(text, msg) {
    function fallback() { var a = document.createElement('textarea'); a.value = text; a.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); toast(msg); } catch (e) { toast('Copy is not available here'); } a.remove(); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { toast(msg); }, fallback); else fallback();
  }
  function readHash() {
    var h = new URLSearchParams(location.hash.slice(1));
    S.types = (h.get('types') || '').split(',').filter(function (t, i, a) { return TYPE_COLORS[t] && a.indexOf(t) === i; });
    S.mode = h.get('mode') === 'all' ? 'all' : 'any';
    S.order = h.get('order') === 'most' ? 'most' : 'std';
    return h.get('place');
  }
  function writeHash() {
    var h = new URLSearchParams();
    if (S.types.length) h.set('types', S.types.join(',')); if (S.types.length > 1 && S.mode === 'all') h.set('mode', 'all');
    if (S.order === 'most') h.set('order', 'most'); if (S.open) h.set('place', S.open);
    var qs = h.toString().replace(/%2C/g, ',');
    try { history.replaceState(null, '', qs ? '#' + qs : location.pathname + location.search); } catch (e) {}
  }

  /* ---------- events ---------- */
  function refocus(sel) { var el = host.querySelector(sel); if (el) el.focus({ preventScroll: true }); }
  host.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest('.atl-ddb')) { S.ddOpen = !S.ddOpen; render(); refocus('.atl-ddb'); return; }
    var it = t.closest('.atl-ddi'); if (it) { var ty = it.dataset.type; toggleType(ty); refocus('.atl-ddi[data-type="' + ty + '"]'); return; }
    var m = t.closest('[data-mode]'); if (m) { S.mode = m.dataset.mode; render(); writeHash(); refocus('[data-mode="' + S.mode + '"]'); return; }
    var o = t.closest('[data-order]'); if (o) { S.order = o.dataset.order; render(); writeHash(); refocus('[data-order="' + S.order + '"]'); return; }
    var a = t.closest('[data-act]');
    if (a) {
      var act = a.dataset.act;
      if (act === 'clear') { S.types = []; render(); if (dlg.open) fillDialog(); writeHash(); refocus(S.ddOpen ? '[data-act="clear"]' : '.atl-ddb'); }
      else if (act === 'done') { S.ddOpen = false; render(); refocus('.atl-ddb'); }
      else if (act === 'link') copyText(location.href, 'Link copied');
      else if (act === 'list') copyText(listText(), 'List copied');
      else if (act === 'close') dlg.close();
      return;
    }
    var pl = t.closest('[data-place]'); if (pl) { openPlace(pl.dataset.place, pl); return; }
    var tg = t.closest('[data-type]'); if (tg) { var k = tg.dataset.type; toggleType(k); refocus('[data-type="' + k + '"]'); return; }
    var mo = t.closest('.atl-more'); if (mo) { var cl = mo.previousElementSibling, on = !cl.classList.contains('open'); cl.classList.toggle('open', on); mo.setAttribute('aria-expanded', on); mo.textContent = on ? 'Show less' : 'Read more'; }
  });
  document.addEventListener('click', function (e) { if (S.ddOpen && !e.composedPath().some(function (n) { return n.classList && n.classList.contains('atl-dd'); })) { S.ddOpen = false; render(); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && S.ddOpen) { S.ddOpen = false; render(); refocus('.atl-ddb'); e.stopImmediatePropagation(); e.preventDefault(); } }, true);
  window.addEventListener('hashchange', function () { var p = readHash(); render(); if (p && byId[p]) openPlace(p); else if (dlg.open) { S.open = ''; dlg.close(); } else if (S.open) fillDialog(); });

  var first = readHash();
  render();
  if (first && byId[first]) openPlace(first);
})();
