/* Builds the menus, breadcrumbs, sidebar, page contents, related links, previous/next, search and footer from assets/site-data.js.
   Each page only holds its own content. You should not need to edit this file to add a page. */
(function () {
  var S = window.SITE, B = document.body;
  var ROOT = B.getAttribute('data-root') || './', ROUTE = B.getAttribute('data-route') || '';
  var LAYOUT = B.getAttribute('data-layout') || 'article';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function U(route) { var p = String(route).split('#'); return (p[0] ? ROOT + p[0] + '/' : ROOT) + (p[1] ? '#' + p[1] : ''); }

  var P = {};
  S.pages.forEach(function (p) { P[p.route] = p; });
  function kids(route) { return S.pages.filter(function (p) { return p.parent === route && !p.hidden; }); }
  function chain(p) { var c = []; while (p) { c.unshift(p); p = P[p.parent]; } return c; }
  var cur = P[ROUTE] || null, isHome = ROUTE === '';
  var top = S.pages.filter(function (p) { return p.parent === '' && !p.hidden; });
  var cat = cur ? chain(cur)[0] : null;
  var title = isHome ? S.name : cur ? cur.title : S.name;
  var desc = isHome ? S.home.lead : cur ? (cur.layout === 'category' || cur.layout === 'directory' ? kids(cur.route).length + ' pages in this section' : cur.layout === 'sitemap' ? cur.desc : '') : '';

  /* header */
  var menu = '<li><a href="' + ROOT + '"' + (isHome ? ' aria-current="page"' : '') + '>Home</a></li>' + top.map(function (c) {
    var on = cat && cat.route === c.route, ks = kids(c.route);
    return '<li><a href="' + U(c.route) + '"' + (on ? ' aria-current="true"' : '') + '>' + esc(c.nav || c.title) + '</a>' +
      (ks.length ? '<div class="drop"><ul>' + ks.map(function (k) { return '<li><a href="' + U(k.route) + '">' + esc(k.title) + '</a></li>'; }).join('') + '</ul><a class="all" href="' + U(c.route) + '">All of ' + esc(c.nav || c.title) + '</a></div>' : '') + '</li>';
  }).join('');
  var header = $('#site-header');
  if (header) header.innerHTML = '<a class="skip" href="#main">Skip to content</a><header class="top"><div class="top-in"><a class="brand" href="' + ROOT + '">' + esc(S.name) + '</a>' +
    '<nav aria-label="Main"><ul class="menu">' + menu + '</ul></nav>' +
    '<div class="search"><input id="q" type="search" placeholder="Search the site" aria-label="Search the site" autocomplete="off"><ul id="qr" hidden></ul></div>' +
    (S.discord ? '<a class="ext" href="' + esc(S.discord) + '" target="_blank" rel="noopener">Discord</a>' : '') + '</div></header>';

  /* hero */
  var hero = $('#site-hero');
  if (hero) {
    var crumb = '<a href="' + ROOT + '">Home</a>' + (cur ? chain(cur).map(function (c, i, a) { return ' / ' + (i === a.length - 1 ? '<b>' + esc(c.title) + '</b>' : '<a href="' + U(c.route) + '">' + esc(c.title) + '</a>'); }).join('') : '');
    /* a page can name its own picture (art: "assets/art/name.webp") and the hero shows it instead of the banner */
    var heroImg = cur && cur.art ? ROOT + cur.art : ROOT + 'assets/banner.webp';
    var kindPill = cur && cur.layout === 'location' ? '<span class="kind">' + esc(cur.kind || (cur.parent === 'region/wilderness' ? 'Wilderness or landmark' : 'Place')) + '</span>' : '';
    hero.innerHTML = '<div class="hero' + (isHome ? ' home' : '') + (cur && cur.art ? ' has-art' : '') + '" id="top-of-page"><img src="' + heroImg + '" alt="" width="1920" height="1188"><div class="hero-in">' + kindPill +
      (isHome ? '' : '<p class="crumb">' + crumb + '</p>') + '<h1>' + esc(title) + '</h1>' + (desc ? '<p>' + esc(desc) + '</p>' : '') + '</div></div>';
  }

  var main = $('#main');

  /* automatic card lists (category and directory pages, and the home page) */
  /* icons: each page can name one in site-data.js (icon: "swords"). Pages without one get a default. */
  var ICONS = {
 doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',chat:'<path d="M4 5h16v11H10l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><circle cx="12" cy="12" r="2.6"/>',
 monitor:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',dna:'<path d="M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/><path d="M9.5 6.5h5M9.5 17.5h5"/>',
 speech:'<path d="M4 5h16v10h-8l-4 4v-4H4z"/>',ladder:'<path d="M8 3v18M16 3v18M8 7h8M8 12h8M8 17h8"/>',shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 13.5L12 10l3.5 3.5"/>',
 up:'<path d="M12 20V6M6 12l6-6 6 6M5 20h14"/>',evo:'<circle cx="6" cy="18" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 8v4M12 12l-5 4M12 12l5 4"/>',
 star:'<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',swords:'<path d="M5 5l12 12M19 5L7 17M4 18l3 3M20 18l-3 3"/>',
 bolt:'<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',spark:'<path d="M12 3c.6 4.4 1.6 5.4 6 6-4.4.6-5.4 1.6-6 6-.6-4.4-1.6-5.4-6-6 4.4-.6 5.4-1.6 6-6z"/><path d="M18 15v4M16 17h4"/>',
 grid4:'<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
 mega:'<ellipse cx="12" cy="15" rx="8.5" ry="6"/><ellipse cx="12" cy="15" rx="4.5" ry="2.8"/><path d="M12 2l3 3.5L12 9 9 5.5z"/>',zc:'<path d="M2 12l10-7 10 7-10 7z"/><path d="M12 8.6l4.6 3.4-4.6 3.4-4.6-3.4z"/>',
 dyn:'<ellipse cx="12" cy="7" rx="7.5" ry="3"/><path d="M4.5 7v10c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V7"/>',tera:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="11" ry="3.2" transform="rotate(-20 12 12)"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 20h8M10 17h4"/>',flame:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-6 1 1 3 1 3-4z"/>',
 flag:'<path d="M6 21V4M6 5h12l-2 4 2 4H6"/>',ribbon:'<circle cx="12" cy="9" r="5"/><path d="M9 13l-2 8 5-3 5 3-2-8"/>',bag:'<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
 swap:'<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',mask:'<path d="M4 8c4-2 12-2 16 0v4c0 4-3 7-8 7s-8-3-8-7z"/><path d="M8 11h2M14 11h2"/>',
 city:'<path d="M4 21V9h6v12M10 21V4h10v17M14 8h2M14 12h2M14 16h2M6 13h2M6 17h2"/>',mount:'<path d="M3 20l6-11 4 6 3-4 5 9z"/>',house:'<path d="M4 11l8-7 8 7v9H4zM10 20v-6h4v6"/>',
 columns:'<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3l9 5H3z"/>',factory:'<path d="M3 21V11l6 4v-4l6 4V6h6v15z"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 20c0-3-1-5-3-6"/>',pokes:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><circle cx="12" cy="12" r="2.6"/>'
  };
  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  function svg(p) { var k = (p && p.icon) || (p && p.layout === 'category' ? 'compass' : 'doc'); return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k] || ICONS.doc) + '</svg>'; }
  function count(route) { var n = 0; kids(route).forEach(function (k) { n += 1 + count(k.route); }); return n; }
  function card(p) {
    var n = count(p.route);
    return '<a class="card" href="' + U(p.route) + '"><span class="ct"><span class="ico">' + svg(p) + '</span><h3>' + esc(p.title) + '</h3></span>' +
      (p.desc || n ? '<p>' + esc(p.desc || n + ' pages in this section') + '</p>' : '') +
      '<span class="more"><span>' + (p.kind ? esc(p.kind) : n ? n + ' pages' : 'Open') + '</span>' + ARROW + '</span></a>';
  }
  function tile(c, i) {
    var ks = kids(c.route), wide = i === 0;
    return '<article class="tile' + (wide ? ' wide' : '') + '"><div class="th"><span class="ico">' + svg(c) + '</span><span class="count">' + count(c.route) + ' pages</span></div>' +
      '<h3><a class="stretch" href="' + U(c.route) + '">' + esc(c.title) + '</a></h3><ul>' + ks.slice(0, wide ? 6 : 3).map(function (k) { return '<li><a href="' + U(k.route) + '">' + esc(k.title) + '</a></li>'; }).join('') + '</ul>' +
      '<span class="more" aria-hidden="true"><span>View all</span>' + ARROW + '</span></article>';
  }
  $$('[data-auto]').forEach(function (el) {
    var mode = el.getAttribute('data-auto');
    if (mode === 'children') el.innerHTML = '<div class="cards' + (cur && cur.layout === 'directory' ? ' dir' : '') + '">' + kids(ROUTE).map(card).join('') + '</div>';
    if (mode === 'home') el.innerHTML = '<div class="tiles">' + top.map(tile).join('') + '</div>';
    if (mode === 'sitemap') el.innerHTML = '<div class="map">' + top.map(function (c) {
      function list(route, d) { return '<ul>' + kids(route).map(function (k) { return '<li><a href="' + U(k.route) + '">' + esc(k.title) + '</a>' + (kids(k.route).length ? list(k.route, d + 1) : '') + '</li>'; }).join('') + '</ul>'; }
      return '<section><h2><a href="' + U(c.route) + '">' + esc(c.title) + '</a></h2>' + list(c.route, 1) + '</section>'; }).join('') + '</div>';
  });

  /* rules articles: callouts, badges, a reading-progress line and a "key points" panel.
     Everything is built from text that is already bold in the page, so authors only need to use bold for emphasis.
       - A paragraph that opens with a full bold sentence becomes a callout. If the sentence states a limit or requirement
         (must, cannot, only, approval, required ...) it is an amber "limit" callout, otherwise a cyan "note" callout.
       - ALL-CAPS bold terms and labels become small badges.
       - A bold line on its own, with no full stop, becomes a sub-heading. */
  if (main && cur && (LAYOUT === 'article' || LAYOUT === 'organization')) {
    var INFO = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>';
    var WARN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/></svg>';
    var LIMIT = /\b(must|cannot|can not|may not|not allowed|not permitted|prohibited|forbidden|required|requires|require|approval|approved|only|never|limit|limits|no more than|at most|at least)\b/i;
    $$('p', main).forEach(function (q) {
      var f = q.firstElementChild, t = f ? f.textContent.trim() : '';
      if (!f || f.tagName !== 'B' || q.closest('li,td,.item,.def,.related')) return;
      if (q.firstChild === f && q.textContent.trim() === t && t.length < 70 && !/[.!?:]$/.test(t)) { q.className = 'subhead'; return; }
      if (q.firstChild === f && /[.!?]$/.test(t) && t.length >= 28 && /[a-z]/.test(t)) {
        var lim = LIMIT.test(t), w = document.createElement('div');
        w.className = 'call' + (lim ? ' limit' : ''); w.setAttribute('role', 'note'); w.setAttribute('aria-label', lim ? 'Limit or requirement' : 'Note');
        w.innerHTML = '<span class="i">' + (lim ? WARN : INFO) + '</span><p>' + q.innerHTML + '</p>'; q.replaceWith(w);
      }
    });
    function sectionOf(el) {
      var n = el; while (n && n.parentElement !== main) n = n.parentElement;
      while (n) { if (n.tagName === 'H2') return n.textContent.replace(/^#/, '').trim(); n = n.previousElementSibling; }
      return '';
    }
    var keys = [];
    $$('b', main).forEach(function (b) {
      var t = b.textContent.trim(), v = t.replace(/[:.]$/, '');
      if (/^[A-Z0-9À-Ü][A-Z0-9À-Ü \-]{2,}$/.test(v) && v.length < 30 && !b.closest('th')) b.className = 'num';
      if (!b.closest('th,.tile,.related') && v.length > 2 && v.length <= 90 && (/\s/.test(v) || /\d/.test(v)) && !keys.some(function (k) { return k.v === v; })) keys.push({ v: v, el: b });
    });
    keys = keys.slice(0, 12);
    var lay = $('.layout');
    if (keys.length >= 2 && lay) {
      keys.forEach(function (k, i) { k.el.id = 'hl-' + (i + 1); k.s = sectionOf(k.el); });
      var list = '<ul>' + keys.map(function (k, i) { return '<li><a href="#hl-' + (i + 1) + '">' + esc(k.v) + (k.s ? '<small>' + esc(k.s) + '</small>' : '') + '</a></li>'; }).join('') + '</ul>';
      main.insertAdjacentHTML('afterbegin', '<details class="mtoc keyfold"><summary>Key points on this page</summary>' + list + '</details>');
    }
    B.insertAdjacentHTML('afterbegin', '<div class="progress" aria-hidden="true"><i id="progress"></i></div>');
    var bar = $('#progress');
    function prog() { var h = document.documentElement, mx = h.scrollHeight - h.clientHeight; bar.style.width = (mx > 0 ? Math.min(100, h.scrollTop / mx * 100) : 0) + '%'; }
    window.addEventListener('scroll', prog, { passive: true }); prog();
  }

  /* headings: anchors, then the contents list */
  var heads = $$('h2[id]', main);
  heads.forEach(function (h) { if (!$('.anchor', h)) h.insertAdjacentHTML('afterbegin', '<a class="anchor" href="#' + h.id + '" aria-label="Link to this section">#</a>'); });
  var toc = heads.map(function (h) { return '<li><a href="#' + h.id + '">' + esc(h.textContent.replace(/^#/, '')) + '</a></li>'; }).join('');

  /* sidebar: the section tree, then this page's contents */
  function tree(route, depth) {
    return '<ul>' + kids(route).map(function (k) {
      var here = cur && (cur.route === k.route), inside = cur && chain(cur).some(function (c) { return c.route === k.route; });
      var sub = kids(k.route).length && inside && depth < 2 ? tree(k.route, depth + 1) : '';
      return '<li><a href="' + U(k.route) + '"' + (here ? ' aria-current="page" class="on"' : inside ? ' class="in"' : '') + '>' + esc(k.title) + '</a>' + sub + '</li>'; }).join('') + '</ul>';
  }
  var side = $('#site-side'), navHtml = '';
  if (isHome && side) side.remove(), side = null;
  if (cat) navHtml = '<h2><a href="' + U(cat.route) + '">' + esc(cat.title) + '</a></h2>' + tree(cat.route, 0);
  if (side) side.innerHTML = navHtml + (toc ? '<h2>On this page</h2><ul data-toc>' + toc + '</ul>' : '');
  if (main && cur && (navHtml || toc)) main.insertAdjacentHTML('afterbegin',
    (navHtml ? '<details class="mtoc"><summary>In this section</summary>' + navHtml + '</details>' : '') + (heads.length > 2 ? '<details class="mtoc"><summary>On this page</summary><ul>' + toc + '</ul></details>' : ''));

  /* location pages: "within this location" and "places mentioned" chips built from the text */
  if (main && cur && cur.layout === 'location') {
    var wi = $('p.within', main), within = wi ? $$('a', wi).map(function (a) { return '<a href="' + a.getAttribute('href') + '">' + esc(a.textContent) + '</a>'; }) : [];
    if (wi) wi.remove();
    var seenR = {}, ment = [];
    $$('p a[href]', main).forEach(function (a) {
      if (a.getAttribute('href').charAt(0) === '#') return;
      var pn = a.pathname.replace(/index\.html$/, ''); if (pn.slice(-1) !== '/') pn += '/';
      var pg = S.pages.filter(function (p) { return p.route && p.route !== cur.route && pn.slice(-(p.route.length + 2)) === '/' + p.route + '/'; })[0];
      if (pg && !seenR[pg.route]) { seenR[pg.route] = 1; ment.push(pg); }
    });
    main.insertAdjacentHTML('beforeend',
      (within.length ? '<h3 class="lbl">Within this location</h3><div class="chips">' + within.join('') + '</div>' : '') +
      (ment.length ? '<h3 class="lbl">Places mentioned</h3><div class="chips">' + ment.map(function (p) { return '<a href="' + U(p.route) + '">' + svg(p) + esc(p.title) + '</a>'; }).join('') + '</div>' : ''));
  }

  /* organization pages: a profile rail with an emblem, related pages, contents and the other organizations */
  if (main && cur && cur.layout === 'organization') {
    var lay2 = $('.layout');
    function relItem(r) { var rt = typeof r === 'string' ? { r: r } : r, pg = P[rt.r.split('#')[0]]; return pg ? '<li><a href="' + U(rt.r) + '">' + esc(rt.l || pg.title) + '</a></li>' : ''; }
    var relL = (cur.related || []).map(relItem).join(''), others = kids(cur.parent).map(function (k) { return '<li><a href="' + U(k.route) + '"' + (k.route === cur.route ? ' aria-current="page"' : '') + '>' + esc(k.title) + '</a></li>'; }).join('');
    var emb = cur.emblem ? '<img src="' + ROOT + cur.emblem + '" alt="">' : svg(cur);
    lay2.classList.add('org');
    lay2.insertAdjacentHTML('beforeend', '<aside class="rail" aria-label="Organization profile"><div class="box"><div class="e">' + emb + '</div></div>' +
      (relL ? '<div class="box"><h2>Related pages</h2><ul>' + relL + '</ul></div>' : '') +
      (heads.length > 1 ? '<div class="box"><h2>On this page</h2><ul>' + toc + '</ul></div>' : '') +
      '<div class="box"><h2>Organizations</h2><ul>' + others + '</ul></div></aside>');
    var rh = $('#ranks', main);
    if (rh) {
      var steps = [], nn = rh.nextElementSibling;
      function isRank(n) { var ff = n.firstElementChild; return n.tagName === 'P' && ff && ff.tagName === 'B' && (n.firstChild === ff || /^The\s$/.test(n.firstChild.textContent)) && /^[A-Z ]+$/.test(ff.textContent.trim()); }
      while (nn && nn.tagName === 'P' && !isRank(nn)) nn = nn.nextElementSibling;
      while (nn && isRank(nn)) { steps.push(nn); nn = nn.nextElementSibling; }
      if (steps.length >= 3) { var ol = document.createElement('ol'); ol.className = 'steps'; steps[0].insertAdjacentElement('beforebegin', ol); steps.forEach(function (p) { var li = document.createElement('li'); li.innerHTML = '<p>' + p.innerHTML + '</p>'; ol.appendChild(li); p.remove(); }); }
    }
  }

  /* related pages, then previous and next */
  if (main && cur && cur.layout !== 'organization' && cur.related && cur.related.length) {
    main.insertAdjacentHTML('beforeend', '<aside class="related" aria-label="Related pages"><h2>Related pages</h2><ul>' + cur.related.map(function (r) {
      var rt = typeof r === 'string' ? { r: r } : r, pg = P[rt.r.split('#')[0]];
      return pg ? '<li><a href="' + U(rt.r) + '"><b>' + esc(rt.l || pg.title) + '</b><span>' + esc(chain(pg).slice(0, -1).map(function (c) { return c.title; }).join(' / ') || 'Home') + '</span></a></li>' : ''; }).join('') + '</ul></aside>');
  }
  if (main && cur && cur.layout !== 'category' && cur.layout !== 'directory' && cur.layout !== 'sitemap' && cur.layout !== 'notfound') {
    var sib = kids(cur.parent), i = sib.indexOf(cur), pv = sib[i - 1], nx = sib[i + 1], par = P[cur.parent];
    if (sib.length > 1 && cur.layout === 'location') main.insertAdjacentHTML('beforeend', '<nav class="pager pc" aria-label="Next and previous places">' +
      (pv ? '<a href="' + U(pv.route) + '"><small>Previous</small><b>' + esc(pv.title) + '</b></a>' : par ? '<a href="' + U(par.route) + '"><small>Up</small><b>' + esc(par.title) + '</b></a>' : '<span></span>') +
      (nx ? '<a href="' + U(nx.route) + '"><small>Next</small><b>' + esc(nx.title) + '</b></a>' : '<a href="#top-of-page"><small>Top</small><b>Back to top</b></a>') + '</nav>');
    else if (sib.length > 1) main.insertAdjacentHTML('beforeend', '<nav class="pager" aria-label="Next and previous pages">' + (pv ? '<a href="' + U(pv.route) + '">&larr; ' + esc(pv.title) + '</a>' : par ? '<a href="' + U(par.route) + '">&larr; ' + esc(par.title) + '</a>' : '<span></span>') + (nx ? '<a href="' + U(nx.route) + '">' + esc(nx.title) + ' &rarr;</a>' : '<a href="#top-of-page">Back to top &uarr;</a>') + '</nav>');
  }

  /* footer */
  var foot = $('#site-footer');
  if (foot) foot.innerHTML = '<footer class="foot"><div class="foot-in"><p>' + esc(S.footer) + '</p><p><a href="' + U('sitemap') + '">Site map</a></p></div></footer>';

  /* contents highlight */
  var links = $$('.side [data-toc] a');
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {}; links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (a) { a.classList.remove('on'); }); var a = byId[e.target.id]; if (a) a.classList.add('on'); } }); }, { rootMargin: '-84px 0px -70% 0px' });
    heads.forEach(function (h) { obs.observe(h); });
  }

  /* search: titles, descriptions and section headings */
  var q = $('#q'), qr = $('#qr');
  if (q) {
    q.addEventListener('input', function () {
      var v = q.value.trim().toLowerCase();
      if (!v) { qr.hidden = true; return; }
      var hits = S.pages.filter(function (p) { return p.layout !== 'notfound' && (p.title + ' ' + (p.desc || '') + ' ' + (p.heads || []).join(' ')).toLowerCase().indexOf(v) > -1; }).slice(0, 8);
      qr.innerHTML = hits.length ? hits.map(function (p) { return '<li><a href="' + U(p.route) + '"><b>' + esc(p.title) + '</b><span>' + esc((chain(p)[0] || p).title) + '</span></a></li>'; }).join('') : '<li class="none">No pages match.</li>';
      qr.hidden = false;
    });
    q.addEventListener('keydown', function (e) { if (e.key === 'Escape') { q.value = ''; qr.hidden = true; } if (e.key === 'Enter') { var a = $('a', qr); if (a) location.href = a.getAttribute('href'); } });
    document.addEventListener('click', function (e) { if (!e.target.closest('.search')) qr.hidden = true; });
  }
  document.title = (isHome ? S.name : title + ' | ' + S.name);
})();
