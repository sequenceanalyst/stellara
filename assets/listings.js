/* Pokémon listing screens: the Exchange kiosk and the Black Market terminal.
   Each page holds <div class="lst" data-market="exchange|blackMarket">; the listings come from assets/listings-data.js. */
(function () {
  var DATA = window.STELLARA_LISTINGS || {};
  var ROOT = document.body.getAttribute('data-root') || '';
  var T = { Normal: '#b8b8a0', Fire: '#f08030', Psychic: '#f85888', Fairy: '#ee99ac', Electric: '#f8d030', Rock: '#b8a038', Ground: '#e0c068', Dragon: '#a98bff', Dark: '#9a8a80', Steel: '#b8b8d0' };
  var CHECK = '<svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5L16 9.5"/></svg>';
  var WARN = '<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></svg>';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function tcol(d) { return T[d.t && d.t[0]] || '#8fb0b8'; }
  function sprite(d, sm) {
    var img = d.sprite ? '<img src="' + ROOT + 'assets/sprites/' + encodeURIComponent(d.sprite) + '" alt="' + esc(d.s) + '" loading="lazy">' : '';
    return '<div class="l-sprite' + (sm ? ' l-sm' : '') + (img ? ' l-img' : '') + '" style="--glow:' + tcol(d) + '33"><i class="l-k l-a"></i><i class="l-k l-b"></i><i class="l-k l-c"></i><i class="l-k l-d"></i><span class="l-sh"></span><span class="l-ph-t">Sprite<br>or image</span>' + img + '</div>';
  }
  function types(d) { return (d.t || []).map(function (x) { return '<span class="l-chip" style="color:' + (T[x] || '#9fd3d9') + '">' + esc(x) + '</span>'; }).join(' '); }
  function fields(d) {
    var rows = [['Species', esc(d.s)], ['Tier', esc(d.tier)], ['Type', types(d)], ['Ability', esc(d.ab)], ['Gender', esc(d.g)], ['Height', esc(d.h)], ['Weight', esc(d.w)]];
    return '<dl class="l-dl">' + rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl>';
  }
  function moves(d) { return '<div class="l-lab">Move list</div><div class="l-moves">' + (d.mv || []).map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</div>'; }
  function status(l, r) { return '<div class="l-stat"><span>' + l + '</span><span>' + r + '</span></div>'; }
  function ripple(e) {
    var b = e.target.closest && e.target.closest('.lst button'); if (!b) return;
    var r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2, i = document.createElement('i');
    i.className = 'l-rip'; i.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (e.clientX - r.left - s / 2) + 'px;top:' + (e.clientY - r.top - s / 2) + 'px;background:currentColor';
    if (getComputedStyle(b).position === 'static') b.style.position = 'relative';
    b.style.overflow = 'hidden'; b.appendChild(i); setTimeout(function () { i.remove(); }, 600);
  }
  document.addEventListener('pointerdown', ripple);

  /* a picture that fails to load falls back to the empty frame */
  function watchImages(root) {
    [].forEach.call(root.querySelectorAll('.l-sprite img'), function (im) {
      function bad() { var s = im.parentNode; s.classList.remove('l-img'); im.remove(); }
      im.addEventListener('error', bad); if (im.complete && im.naturalWidth === 0) bad();
    });
  }
  function frame(inner, cls) { return '<div class="l-dev l-tab"><div class="l-scr ' + cls + '">' + inner + '</div></div>'; }
  function empty(msg) { return '<div class="l-empty">' + msg + '</div>'; }
  function sample(on) { return on ? '<span class="l-sample">Sample listings</span>' : ''; }
  function howBlock(text) { return '<p class="l-how" role="status" hidden>' + esc(text) + '</p>'; }
  function toggleHow(root) { var h = root.querySelector('.l-how'); h.hidden = !h.hidden; }

  /* Exchange kiosk */
  function exchange(host, cfg) {
    var items = cfg.items || [], i = 0, svc = 'Adopt', showHow = false;
    var SERVICE_TEXT = { Sell: 'Submit a Pokémon for evaluation and receive an offer in Pokédollars. You may accept or decline.', Appraise: 'Present a Pokémon for evaluation and receive potential trade offers. You may accept one or reject them all.' };
    function draw() {
      if (!items.length) { host.innerHTML = frame(status('STELLARA POKÉMON EXCHANGE', 'Facility terminal') + empty('No Pokémon are listed right now.'), 'l-ex'); return; }
      var d = items[i];
      var detail = svc === 'Adopt' ?
        '<div>' + sprite(d) + '<div class="l-ok">' + CHECK + 'Health checked</div></div><div><h4>' + esc(d.n) + '</h4><div class="l-sp">' + esc(d.s) + '</div>' + fields(d) +
        '<div style="margin-top:12px">' + moves(d) + '</div><div style="margin-top:12px"><div class="l-lab">Personality</div><p class="l-txt">' + esc(d.p) + '</p></div><div style="margin-top:10px"><div class="l-lab">Acquisition</div><p class="l-txt">' + esc(d.aq) + '</p></div></div>' +
        '<div class="l-buy"><div class="l-price">' + esc(d.pr) + '<small>Pokédollars</small></div><div><button class="l-btn l-p" data-act="how">Adopt ' + esc(d.n) + '</button></div></div>' + howBlock(cfg.how)
        : '<div class="l-svcnote"><div><div class="l-lab">' + svc + '</div><p class="l-txt">' + SERVICE_TEXT[svc] + '</p></div></div>';
      host.innerHTML = frame(status('STELLARA POKÉMON EXCHANGE', DATA.sample ? sample(true) : 'Facility terminal') +
        '<div class="l-head"><h3>Available Pokémon</h3><div class="l-svc" role="group" aria-label="Service">' + ['Adopt', 'Sell', 'Appraise'].map(function (s) { return '<button class="' + (s === svc ? 'l-on' : '') + '" data-s="' + s + '" aria-pressed="' + (s === svc) + '">' + s + '</button>'; }).join('') + '</div></div>' +
        '<div class="l-body"><div class="l-rail" role="group" aria-label="Listings">' + items.map(function (x, k) { return '<button class="l-li" aria-pressed="' + (k === i) + '" data-i="' + k + '">' + sprite(x, 1) + '<span><b>' + esc(x.n) + '</b><small>' + esc(x.s) + ' · ' + esc(x.tier) + '</small></span><span class="l-pr">' + esc(x.pr) + '</span></button>'; }).join('') + '</div>' +
        '<div class="l-det l-swap">' + detail + '</div></div><div class="l-home"></div>', 'l-ex');
      watchImages(host);
      [].forEach.call(host.querySelectorAll('.l-li'), function (b) { b.onclick = function () { i = +b.dataset.i; showHow = false; draw(); }; });
      [].forEach.call(host.querySelectorAll('.l-svc button'), function (b) { b.onclick = function () { svc = b.dataset.s; draw(); }; });
      var a = host.querySelector('[data-act=how]'); if (a) a.onclick = function () { toggleHow(host); };
    }
    draw();
  }

  /* Black Market terminal */
  function blackMarket(host, cfg) {
    var items = cfg.items || [], i = 0;
    function draw(glitch) {
      if (!items.length) { host.innerHTML = frame(status('<span class="l-fl">// UNLISTED NETWORK</span>', 'No official oversight') + empty('Nothing is listed right now.'), 'l-bm'); return; }
      var d = items[i], free = !/^[\d,.\s]+$/.test(String(d.pr));
      var risks = (d.risk || []).map(function (r) { return '<span class="l-chip">' + WARN + esc(r) + '</span>'; }).join('');
      host.innerHTML = frame(status('<span class="l-fl">// UNLISTED NETWORK</span>', DATA.sample ? sample(true) : 'No official oversight') +
        '<div class="l-head"><h3>Open listings</h3><span>' + items.length + ' available · prices may change</span></div>' +
        '<div class="l-body"><div class="l-rail" role="group" aria-label="Listings">' + items.map(function (x, k) { return '<button class="l-li" aria-pressed="' + (k === i) + '" data-i="' + k + '">' + sprite(x, 1) + '<span><span class="l-id">' + esc(x.id) + '</span><b>' + esc(x.s) + '</b><small>' + esc(x.tier) + '</small></span><span class="l-pr">' + esc(x.pr) + '</span></button>'; }).join('') + '</div>' +
        '<div class="l-det' + (glitch ? ' l-glitch' : '') + '"><div style="position:relative">' + sprite(d) + '<span class="l-stamp">Unverified</span></div><div><h4>' + esc(d.n) + '</h4><div class="l-sp">' + esc(d.id) + ' · ' + esc(d.s) + '</div>' + fields(d) +
        '<div style="margin-top:12px">' + moves(d) + '</div><div style="margin-top:12px"><div class="l-lab">Personality</div><p class="l-txt">' + esc(d.p) + '</p></div>' +
        '<div style="margin-top:10px"><div class="l-lab">Acquisition</div><button class="l-red" aria-expanded="false"><span class="l-bar3"></span><span class="l-rv">' + esc(d.aq) + '</span><span class="l-tg">Tap to reveal</span></button></div>' +
        '<div style="margin-top:12px"><div class="l-lab">Risks</div><div class="l-risks">' + risks + '</div></div></div>' +
        '<div class="l-buy"><div class="l-price">' + esc(d.pr) + '<small>' + (free ? 'terms by the dealer' : 'Pokédollars') + '</small></div><div><button class="l-btn l-h" data-act="walk">Walk away</button> <button class="l-btn l-p" data-act="how">' + (free ? 'Hear the terms' : 'Make an offer') + '</button></div></div>' + howBlock(cfg.how) + '</div></div><div class="l-home"></div>', 'l-bm');
      watchImages(host);
      [].forEach.call(host.querySelectorAll('.l-li'), function (b) { b.onclick = function () { i = +b.dataset.i; draw(true); }; });
      var r = host.querySelector('.l-red'); r.onclick = function () { var o = r.classList.toggle('l-open'); r.setAttribute('aria-expanded', o); r.querySelector('.l-tg').textContent = o ? 'Hide' : 'Tap to reveal'; };
      host.querySelector('[data-act=walk]').onclick = function () { i = (i + 1) % items.length; draw(true); };
      host.querySelector('[data-act=how]').onclick = function () { toggleHow(host); };
    }
    draw();
  }

  [].forEach.call(document.querySelectorAll('.lst[data-market]'), function (host) {
    var m = host.getAttribute('data-market'), cfg = DATA[m] || {};
    if (m === 'exchange') exchange(host, cfg); else if (m === 'blackMarket') blackMarket(host, cfg);
  });
})();
