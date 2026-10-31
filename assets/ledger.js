/* Pokemart price ledger: draws an icon for each item, adds "Add" buttons, and builds a copyable shop-thread list with a running total.
   Rows are plain HTML in the page (see commerce/pokemart/index.html). Each row carries data-p (price), data-u (unit), data-ic (icon),
   data-c (icon color), and optionally data-lim (most you can hold), data-ask (blanks to fill in) and data-n (name used in the list). */
(function () {
  var KEY = 'stellara-pokemart-list';
  function hex(cx, cy, r) { var p = []; for (var i = 0; i < 6; i++) { var a = Math.PI / 180 * (60 * i - 90); p.push((cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1)); } return 'M' + p.join('L') + 'z'; }
  /* spray bottle: the body grows from Potion to Full Restore, and each has its own mark */
  function bt(h, w, m) { var t = 21 - h, x = 12 - w / 2; return '<path d="M9.5 ' + (t - 5) + 'h5v3h-5zM14.5 ' + (t - 3.5) + 'h3"/><path d="M10.8 ' + (t - 2) + 'V' + t + 'M13.2 ' + (t - 2) + 'V' + t + '"/><rect x="' + x + '" y="' + t + '" width="' + w + '" height="' + h + '" rx="2.5"/>' + m; }
  var RING = '<circle cx="12" cy="12" r="9"/>';
  var TICKET = '<path d="M3 8a2 2 0 0 0 0 4v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a2 2 0 0 1 0-4V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M14 5v12" stroke-dasharray="2 2"/>';
  var ICONS = {
    tier: '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 13.5L12 10l3.5 3.5"/>',
    ticket: TICKET, pass2: TICKET + '<path d="M8.5 8.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2L5.6 10.3l2-.3z"/>',
    candy: '<rect x="6" y="8" width="12" height="8" rx="3"/><path d="M6 12l-4-3v6zM18 12l4-3v6z"/><path d="M10 8.4l-.8 7.2M14 8.4l-.8 7.2"/>',
    capsule: '<g transform="rotate(-35 12 12)"><rect x="2.5" y="8" width="19" height="8" rx="4"/><path d="M12 8v8M6 10.5h2"/></g>',
    charm: '<path d="M11 3c.5 4 1.5 5.5 6 7-4.5 1.5-5.5 3-6 7-.5-4-1.5-5.5-6-7 4.5-1.5 5.5-3 6-7z"/><path d="M19 2.5v3M17.5 4h3"/><path d="M4 20.5c2.5-.5 4-2 5-4"/>',
    mega: '<ellipse cx="12" cy="15" rx="8.5" ry="6"/><ellipse cx="12" cy="15" rx="4.5" ry="2.8"/><path d="M12 2l3 3.5L12 9 9 5.5z"/>',
    zring: '<ellipse cx="12" cy="13" rx="9" ry="7"/><ellipse cx="12" cy="13" rx="5.5" ry="4"/><circle cx="12" cy="5.8" r="2.2"/>',
    zcrystal: '<path d="M2 12l10-7 10 7-10 7z"/><path d="M12 8.6l4.6 3.4-4.6 3.4-4.6-3.4z"/><path d="M12 5v3.6M12 15.4V19"/>',
    band: '<ellipse cx="12" cy="7" rx="7.5" ry="3"/><path d="M4.5 7v10c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V7"/><path d="M4.5 12.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
    honey: '<path d="' + hex(8.5, 7.5, 4) + '"/><path d="' + hex(15.4, 7.5, 4) + '"/><path d="' + hex(12, 13.5, 4) + '"/><path d="M10.6 17.4v3a1.4 1.4 0 0 0 2.8 0v-3"/>',
    orb: '<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="11" ry="3.2" transform="rotate(-20 12 12)"/>',
    shard: '<path d="M3.5 21L5 11l4.5-3.5L12 21z"/><path d="M11 21L10.5 6.5 16 2l4.5 10-3 9z"/><path d="M10.5 6.5L14 21M5 11l4.5-3.5"/>',
    bottle: bt(8, 12, '<path d="M12 15.2c1.1 1.4 1.5 2.2 0 3.4-1.5-1.2-1.1-2 0-3.4z"/>'),
    bottle2: bt(10, 13, '<path d="M9.5 17.5l2.5-2.5 2.5 2.5"/>'),
    bottle3: bt(12, 14, '<path d="M9.5 18l2.5-2.5 2.5 2.5M9.5 14.2l2.5-2.5 2.5 2.5"/>'),
    bottle4: bt(14, 16, '<path d="M12 10.6c.4 2.2 1.3 3.1 3.5 3.5-2.2.4-3.1 1.3-3.5 3.5-.4-2.2-1.3-3.1-3.5-3.5 2.2-.4 3.1-1.3 3.5-3.5z"/>'),
    bottle5: bt(14, 17, '<path d="M12 11v6M9 14h6"/>'),
    stone: '<path d="M12 3l7 6-7 12L5 9z"/><path d="M5 9h14M12 3l-3 6 3 12 3-12z"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    swap: '<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',
    dlevel: RING + '<path d="M12 17V8M8.5 11.5L12 8l3.5 3.5"/>',
    dtm: RING + '<path d="M13.2 6.5L9 12.6h5.2L10.8 17.5"/>',
    degg: RING + '<path d="M12 6.5c2.6 0 4 3.2 4 5.7S14.6 17 12 17s-4-2.3-4-4.8 1.4-5.7 4-5.7z"/>',
    dtutor: RING + '<circle cx="12" cy="9.6" r="2.2"/><path d="M7.8 17c0-2.6 1.9-4.2 4.2-4.2s4.2 1.6 4.2 4.2"/>'
  };
  function svg(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k] || ICONS.tier) + '</svg>'; }
  var MINUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/></svg>', PLUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12M12 6v12"/></svg>';

  var rows = [].slice.call(document.querySelectorAll('.lrow')), qty = {}, UNIT = 'EXP';
  if (!rows.length) return;
  rows.forEach(function (r, i) { r.id = 'item-' + i; r.style.setProperty('--c1', r.getAttribute('data-c') || '#4cc9f0'); r.querySelector('.ic').innerHTML = svg(r.getAttribute('data-ic')); });
  function row(id) { return document.getElementById(id); }
  function name(r) { return r.getAttribute('data-n') || r.querySelector('b').textContent.trim(); }
  function max(r) { return +r.getAttribute('data-lim') || 9; }
  function ctl(r) {
    var q = qty[r.id] || 0, n = name(r);
    if (!q) return '<button class="add" type="button" data-a="add" aria-label="Add ' + n + ' to your list">Add</button>';
    return '<span class="stp"><button class="sb" type="button" data-a="dec" aria-label="Remove one ' + n + '">' + MINUS + '</button><span class="qn">' + q + '</span><button class="sb" type="button" data-a="inc" aria-label="Add one more ' + n + '"' + (q >= max(r) ? ' disabled' : '') + '>' + PLUS + '</button></span>';
  }
  function paint(r) { r.querySelector('.ctl').innerHTML = ctl(r); }
  rows.forEach(paint);
  rows.forEach(function (r) { var l = r.getAttribute('data-lim'); if (l) r.querySelector('.nm').insertAdjacentHTML('beforeend', '<span class="req lim"><b>Limit</b> ' + l + ' at a time</span>'); });

  /* the list bar */
  document.body.insertAdjacentHTML('beforeend',
    '<aside class="cart" id="cart" hidden aria-label="Your shop list"><div class="cart-in"><p class="sum"><span id="cn"></span><b id="ct"></b></p>' +
    '<button class="cbtn gb" type="button" id="cc">Copy list</button><button class="cbtn" type="button" id="cr" aria-expanded="false" aria-controls="cpan">Review</button><button class="cbtn" type="button" id="cx">Clear</button></div>' +
    '<div id="cpan" hidden><textarea id="ctext" readonly rows="8" aria-label="Your shop list, ready to copy"></textarea></div><span id="cmsg" role="status" aria-live="polite"></span></aside>');
  var cart = $('#cart'), ta = $('#ctext'), pan = $('#cpan'), rev = $('#cr'), msgEl = $('#cmsg');
  function $(s) { return document.querySelector(s); }
  function msg(t) { msgEl.textContent = t; }
  function build() {
    var lines = ['SHOP THREAD'], tot = 0, n = 0;
    rows.forEach(function (r) {
      var q = qty[r.id]; if (!q) return; var cost = +r.getAttribute('data-p') * q; tot += cost; n += q;
      lines.push(name(r) + (q > 1 ? ' x' + q : '') + ' - ' + cost + ' ' + r.getAttribute('data-u'));
      var ask = r.getAttribute('data-ask'); if (ask) for (var k = 0; k < q; k++) lines.push('   ' + ask + ': ____');
    });
    lines.push('Total: ' + tot + ' ' + UNIT);
    return { text: lines.join('\n'), tot: tot, n: n };
  }
  function upd() {
    var b = build(); cart.hidden = !b.n; document.body.classList.toggle('hascart', !!b.n);
    $('#cn').textContent = b.n + (b.n === 1 ? ' item' : ' items'); $('#ct').textContent = b.tot + ' ' + UNIT; ta.value = b.text;
    try { localStorage.setItem(KEY, JSON.stringify(qty)); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var bt = e.target.closest('.lrow button[data-a]'); if (!bt) return;
    var r = bt.closest('.lrow'), a = bt.getAttribute('data-a'), q = qty[r.id] || 0;
    q = (a === 'add' || a === 'inc') ? Math.min(max(r), q + 1) : Math.max(0, q - 1);
    if (q) qty[r.id] = q; else delete qty[r.id];
    paint(r);
    var c = r.querySelector('.ctl'), f = a === 'dec' ? (q ? c.querySelector('[data-a="dec"]') : c.querySelector('.add')) : (c.querySelector('[data-a="inc"]:not(:disabled)') || c.querySelector('[data-a="dec"]'));
    if (f) f.focus(); msg(''); upd();
  });
  $('#cx').onclick = function () { var ids = Object.keys(qty); qty = {}; ids.forEach(function (id) { paint(row(id)); }); msg('List cleared.'); upd(); };
  rev.onclick = function () { var o = pan.hidden; pan.hidden = !o; rev.setAttribute('aria-expanded', o); };
  function manual() { pan.hidden = false; rev.setAttribute('aria-expanded', 'true'); ta.focus(); ta.select(); msg('Press Ctrl+C (or Cmd+C) to copy the selected list.'); }
  $('#cc').onclick = function () { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(function () { msg('Copied. Paste it into your shop thread.'); }, manual); else manual(); };
  try { var saved = JSON.parse(localStorage.getItem(KEY) || '{}'); Object.keys(saved).forEach(function (id) { var r = row(id); if (r && saved[id] > 0) { qty[id] = Math.min(max(r), saved[id]); paint(r); } }); } catch (e) {}
  upd();
})();
