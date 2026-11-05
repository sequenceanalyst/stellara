/* The "Points of Interest" index on every location page: a numbered list that unfolds one description at a time.
   The text comes from assets/atlas-data.js (the same file the Regional Atlas uses), matched to the page by its address. */
(function () {
  var B = document.body, main = document.getElementById('main'), D = window.STELLARA_ATLAS;
  if (!main || !D || B.getAttribute('data-layout') !== 'location') return;
  var slug = (B.getAttribute('data-route') || '').split('/').pop();
  var loc = (D.locations || []).filter(function (l) { return (l.pageSlug || l.id) === slug; })[0];
  if (!loc || !loc.pointsOfInterest || !loc.pointsOfInterest.length) return;

  var KIND = { culture_history: 'Culture and history', research_education: 'Research and education', commerce_community: 'Commerce and community', recreation: 'Recreation', natural_landmark: 'Natural landmark' };
  var ICON = {
    culture_history: 'M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3l9 5H3z',
    research_education: 'M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3',
    commerce_community: 'M5 8h14l-1 12H6zM9 8a3 3 0 016 0',
    recreation: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18',
    natural_landmark: 'M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8',
    gym: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z'
  };
  /* one colour and icon for each Gym type */
  var GYM = {
    Steel: ['#aab7bd', 'M12 3l7 4v10l-7 4-7-4V7zM12 9a3 3 0 100 6 3 3 0 000-6z'],
    Electric: ['#f2c14e', 'M13 3L5 14h6l-1 7 8-11h-6z'],
    Rock: ['#c9a27a', 'M4 16l3-9 7-3 5 6-1 8H8zM7 7l5 6 7-3'],
    Dark: ['#a99bc4', 'M20 14a8 8 0 11-10-10 6 6 0 0010 10z'],
    Normal: ['#c4c4b4', 'M12 4a8 8 0 100 16 8 8 0 000-16zM12 9a3 3 0 100 6 3 3 0 000-6z'],
    Fighting: ['#e8695a', 'M7 11V7a2 2 0 014 0v1a2 2 0 014 0v1a2 2 0 014 0v5a6 6 0 01-6 6h-2a6 6 0 01-6-6z'],
    Ice: ['#7fd8e8', 'M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4.5l3 2 3-2M9 19.5l3-2 3 2'],
    Fire: ['#ff8a4c', 'M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z'],
    Grass: ['#6fcf6f', 'M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8'],
    Ground: ['#d2a45c', 'M2 20h20M5 20c0-6 4-10 7-10s7 4 7 10M9 20c0-3 1.5-5 3-5s3 2 3 5'],
    Water: ['#5b9bff', 'M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z'],
    Bug: ['#a8c93a', 'M12 8a4 4 0 014 4v3a4 4 0 01-8 0v-3a4 4 0 014-4zM12 8V5M9 5l3 1 3-1M8 12H4M16 12h4M8 16l-3 2M16 16l3 2'],
    Psychic: ['#ff7ab8', 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 100 6 3 3 0 000-6z'],
    Flying: ['#9db7f5', 'M3 15c4 0 7-2 9-6 1 3 4 5 9 5-3 1-5 3-6 6-2-3-5-4-12-5z'],
    Dragon: ['#8f82ff', 'M12 3c5 3 8 7 8 11l-8 7-8-7c0-4 3-8 8-11zM12 8v8'],
    Ghost: ['#a07fd0', 'M5 21V11a7 7 0 0114 0v10l-3-2-2 2-2-2-2 2-2-2zM9.5 11h.01M14.5 11h.01'],
    Fairy: ['#ff9fd0', 'M12 3l2 6 6 3-6 3-2 6-2-6-6-3 6-3z'],
    Poison: ['#c477e8', 'M5 12a7 7 0 0114 0c0 2-1 3-2 4v3H7v-3c-1-1-2-2-2-4zM9 12h.01M15 12h.01M10 19v-2M14 19v-2']
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>'; }
  function sentences(t) { return t.match(/[^.!?]+[.!?]+["')”]*(\s+|$)/g) || [t]; }
  function tags(p) {
    var h;
    if (p.isGym || p.category === 'gym') { var g = GYM[p.gymType] || ['#f2c14e', ICON.gym]; h = '<span class="poi-tag" style="--t:' + g[0] + '">' + svg(g[1]) + esc(p.gymType ? p.gymType + ' Gym' : 'Gym') + '</span>'; }
    else h = '<span class="poi-tag poi-k-' + esc(p.category) + '">' + svg(ICON[p.category] || ICON.natural_landmark) + esc(KIND[p.category] || '') + '</span>';
    return h + (p.isNamedSubregion ? '<span class="poi-tag poi-sub">Subregion</span>' : '');
  }

  var pois = loc.pointsOfInterest.slice().sort(function (a, b) { return (b.isGym ? 1 : 0) - (a.isGym ? 1 : 0); });
  var want = decodeURIComponent((location.hash || '').replace(/^#poi-/, '')), start = 0;
  pois.forEach(function (p, i) { if (p.id === want) start = i; });

  var html = '<section class="poi" aria-labelledby="poi-h"><h2 id="poi-h">Points of Interest <span class="poi-n">' + pois.length + '</span>' + '</h2>' +
    '<p class="poi-lead">Places to see in ' + esc(loc.name) + '. Choose one to read about it.</p><ul class="poi-list">' +
    pois.map(function (p, i) {
      var open = i === start;
      return '<li class="poi-item' + (p.isGym ? ' poi-gym' : '') + (open ? ' open' : '') + '" id="poi-' + esc(p.id) + '"><h3><button type="button" class="poi-btn" aria-expanded="' + open + '" aria-controls="poi-b' + i + '">' +
        '<span class="poi-no">' + (i < 9 ? '0' : '') + (i + 1) + '</span><span class="poi-nm">' + esc(p.name) + '</span><span class="poi-tags">' + tags(p) + '</span><span class="poi-car" aria-hidden="true"></span></button></h3>' +
        '<div class="poi-body" id="poi-b' + i + '" role="region" aria-labelledby="poi-' + esc(p.id) + '"><div><p>' + sentences(p.description).map(function (s, j) { return '<span class="s" style="--i:' + j + '">' + esc(s) + '</span>'; }).join('') + '</p></div></div></li>';
    }).join('') + '</ul></section>';

  /* always directly after the description paragraphs, ahead of the chip lists, previous/next and anything else */
  var ps = [].filter.call(main.children, function (n) { return n.tagName === 'P' && !n.classList.contains('nojs'); }), last = ps[ps.length - 1];
  if (last) last.insertAdjacentHTML('afterend', html); else main.insertAdjacentHTML('afterbegin', html);

  var list = main.querySelector('.poi-list');
  list.addEventListener('click', function (e) {
    var b = e.target.closest('.poi-btn'); if (!b) return;
    var li = b.closest('.poi-item'), was = li.classList.contains('open');
    [].forEach.call(list.children, function (x) { x.classList.remove('open'); x.querySelector('.poi-btn').setAttribute('aria-expanded', 'false'); });
    if (!was) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });
  if (want) { var t = document.getElementById('poi-' + want); if (t && t.classList.contains('poi-item') && t.scrollIntoView) t.scrollIntoView({ block: 'center' }); }
})();
