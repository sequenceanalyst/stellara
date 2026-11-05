/* The mission console on the Missions page: a searchable, sortable list that unfolds each mission under its row.
   The missions come from assets/missions-data.js. The page holds <div class="msn" data-board>.
   The Team Crux page holds <div class="msn" data-board data-set="crux"> and reads assets/crux-data.js instead; it uses the same code with Crux wording. */
(function () {
  var host = document.querySelector('.msn[data-board]');
  if (!host) return;
  var CRUX = host.getAttribute('data-set') === 'crux', ROOT = document.body.getAttribute('data-root') || '';
  var D = (CRUX ? window.STELLARA_CRUX_MISSIONS : window.STELLARA_MISSIONS) || {}, RANKS = D.ranks || [];
  var W = CRUX ? { head: 'CRUX FIELD CONSOLE // OPERATIONS INDEX', by: 'Ordered by', brief: 'Orders', party: 'Squad', copy: 'Crux mission: ' } : { head: 'FIELD CONSOLE // MISSION INDEX', by: 'Issued by', brief: 'Briefing', party: 'Party', copy: 'Mission: ' };
  var ROWS = true, FLASH = false;
  var LIMIT = Number(D.visible) > 0 ? Number(D.visible) : 8, EXPAND = false;
  var F = { q: '', stars: {}, rep: 'any', type: '', issuer: '', solo: false, sort: 'star', dir: 1 }, sel = '', ANIM = false;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function list(v) { return Array.isArray(v) ? v.map(String) : (v ? [String(v)] : []); }

  /* each mission is checked, and its Tier, Pokémon and bonus EXP are filled in from its star rank */
  var M = (D.items || []).map(function (raw, i) {
    var n = Number(raw && raw.stars), r = RANKS[n - 1];
    if (!raw || !raw.title || !(n >= 1 && n <= 6) || !r) { console.warn('Missions: mission number ' + (i + 1) + ' (' + (raw && raw.title || 'no title') + ') was skipped. It needs a title and "stars" from 1 to 6. Check assets/missions-data.js.'); return null; }
    return { id: String(raw.id || 'M-' + (i + 1)), title: String(raw.title), st: n, type: String(raw.type || 'Other'), issuer: String(raw.issuer || 'Unknown'), loc: String(raw.location || ''),
      rep: raw.repeatable === true, solo: raw.solo === true, party: String(raw.party || ''), desc: list(raw.description), obj: list(raw.objectives), req: String(raw.requirements || ''), rw: String(raw.rewards || ''),
      rank: r.name, tier: r.tier, pk: r.pokemon, bonus: Number(r.bonus) || 0, mod: n >= 5 };
  }).filter(Boolean);
  var seen = {}; M.forEach(function (m) { if (seen[m.id]) { console.warn('Missions: the label ' + m.id + ' is used twice. Give each mission its own id.'); } seen[m.id] = 1; });

  function stars(n) { return '<span class="m-st m-st' + n + '" role="img" aria-label="' + n + '-star">' + new Array(n + 1).join('★') + '</span>'; }
  function uniq(k) { var o = {}; M.forEach(function (m) { o[m[k]] = 1; }); return Object.keys(o).sort(); }
  function results() {
    var q = F.q.trim().toLowerCase(), any = Object.keys(F.stars).length;
    var r = M.filter(function (m) {
      if (any && !F.stars[m.st]) return false;
      if (F.rep === 'yes' && !m.rep) return false; if (F.rep === 'no' && m.rep) return false;
      if (F.type && m.type !== F.type) return false; if (F.issuer && m.issuer !== F.issuer) return false;
      if (F.solo && !m.solo) return false;
      if (q && (m.title + ' ' + m.desc.join(' ') + ' ' + m.issuer + ' ' + m.loc + ' ' + m.type + ' ' + m.obj.join(' ')).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var k = F.sort, dir = F.dir;
    r.sort(function (a, b) {
      var x, y;
      if (k === 'star') { x = a.st; y = b.st; } else if (k === 'reward') { x = a.bonus; y = b.bonus; } else if (k === 'title') { x = a.title; y = b.title; } else if (k === 'issuer') { x = a.issuer; y = b.issuer; } else if (k === 'type') { x = a.type; y = b.type; } else { x = a.rep; y = b.rep; }
      return (x < y ? -1 : x > y ? 1 : a.title < b.title ? -1 : 1) * dir;
    });
    return r;
  }

  function dossier(m) {
    var tags = '<span class="m-tag m-t-type">' + esc(m.type) + '</span><span class="m-tag ' + (m.rep ? 'm-t-yes' : 'm-t-once') + '">' + (m.rep ? 'Repeatable' : 'One time') + '</span>' + (m.mod ? '<span class="m-tag m-t-mod">Staff moderated</span>' : '') + (m.solo ? '<span class="m-tag m-t-solo">Solo friendly</span>' : '');
    return '<div class="m-dos' + (ANIM ? ' m-play' : '') + '">' + (CRUX ? '<span class="m-stamp">Crux eyes only</span>' : '') + '<div class="m-top"><span class="m-lab">' + esc(m.id) + '</span>' + stars(m.st) + '<span class="m-lab" style="color:var(--s' + m.st + ')">' + esc(m.rank) + '</span></div><h3 class="m-title">' + esc(m.title) + '</h3>' +
      '<div class="m-meta">' + tags + '</div>' +
      (m.desc.length ? '<div class="m-sec"><div class="m-lab">' + W.brief + '</div>' + m.desc.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' : '') +
      (m.obj.length ? '<div class="m-sec"><div class="m-lab">Objectives</div><ul>' + m.obj.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>' : '') +
      '<dl class="m-facts"><div><dt>' + W.by + '</dt><dd>' + esc(m.issuer) + '</dd></div>' + (m.loc ? '<div><dt>Location</dt><dd>' + esc(m.loc) + '</dd></div>' : '') + '<div><dt>Minimum Trainer Tier</dt><dd>' + esc(m.tier) + '</dd></div><div><dt>Pokémon required</dt><dd>' + esc(m.pk) + '</dd></div>' + (m.party ? '<div><dt>' + W.party + '</dt><dd>' + esc(m.party) + '</dd></div>' : '') + '<div><dt>Reward</dt><dd>' + m.bonus + ' bonus EXP' + (m.rw ? '<br><span class="m-dim">' + esc(m.rw) + '</span>' : '') + '</dd></div></dl>' +
      (m.req ? '<div class="m-sec"><div class="m-lab">Extra requirements</div><p>' + esc(m.req) + '</p></div>' : '') +
      (m.mod ? '<div class="m-flag">Five- and six-star missions are moderated by staff. Ask a moderator to run this one.</div>' : '') +
      '<div class="m-go"><button class="m-btn m-p" data-copy="' + esc(m.id) + '">Copy mission details</button>' + (D.forum ? '<a class="m-btn" href="' + esc(D.forum) + '" target="_blank" rel="noopener">Open the Discord forum</a>' : '') + '</div><p class="m-ok" role="status" aria-live="polite"></p></div>';
  }
  function summary(m) {
    return [W.copy + m.title + ' (' + m.st + '-star, ' + m.rank + ')', W.by + ': ' + m.issuer, m.loc && 'Location: ' + m.loc, 'Minimum Trainer Tier: ' + m.tier, 'Pokémon required: ' + m.pk, 'Reward: ' + m.bonus + ' bonus EXP' + (m.rw ? '. ' + m.rw : ''), m.req && 'Extra requirements: ' + m.req, 'Objectives:'].filter(Boolean).concat(m.obj.map(function (o) { return '- ' + o; })).join('\n');
  }
  function copyText(text, done) {
    function legacy() { var t = document.createElement('textarea'); t.value = text; t.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(t); t.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} t.remove(); done(ok); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, legacy); else legacy();
  }

  function controls(root) {
    root.innerHTML =
      '<label class="m-fl m-grow">Search<input type="search" class="m-q" placeholder="Search missions" value="' + esc(F.q) + '" autocomplete="off"></label>' +
      '<div class="m-fl" role="group" aria-label="Difficulty">Difficulty<div class="m-chips">' + [1, 2, 3, 4, 5, 6].map(function (n) { return '<button class="m-s' + n + '" data-s="' + n + '" aria-pressed="' + !!F.stars[n] + '" aria-label="' + n + '-star"><span>' + n + '★</span></button>'; }).join('') + '</div></div>' +
      '<div class="m-fl" role="group" aria-label="Repeatable">Repeatable<div class="m-seg">' + [['any', 'Any'], ['yes', 'Repeat'], ['no', 'One-time']].map(function (a) { return '<button data-r="' + a[0] + '" aria-pressed="' + (F.rep === a[0]) + '">' + a[1] + '</button>'; }).join('') + '</div></div>' +
      '<label class="m-fl">Type<select class="m-ty"><option value="">All types</option>' + uniq('type').map(function (v) { return '<option' + (F.type === v ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join('') + '</select></label>' +
      '<label class="m-fl">' + (CRUX ? 'Ordered by' : 'Issued by') + '<select class="m-is"><option value="">Anyone</option>' + uniq('issuer').map(function (v) { return '<option' + (F.issuer === v ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join('') + '</select></label>' +
      '<label class="m-chk"><input type="checkbox" class="m-so"' + (F.solo ? ' checked' : '') + '>Can be done solo</label>' +
      '<button class="m-clr">Clear all filters</button>';
    root.onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.s) { var n = b.dataset.s; if (F.stars[n]) delete F.stars[n]; else F.stars[n] = 1; b.setAttribute('aria-pressed', !!F.stars[n]); pop(b); filt(); }
      else if (b.dataset.r) { F.rep = b.dataset.r;[].forEach.call(root.querySelectorAll('.m-seg button'), function (x) { x.setAttribute('aria-pressed', x === b); }); pop(b); filt(); }
      else if (b.classList.contains('m-clr')) { F.q = ''; F.stars = {}; F.rep = 'any'; F.type = ''; F.issuer = ''; F.solo = false; controls(root); filt(); }
    };
    root.oninput = function (e) {
      var t = e.target;
      if (t.classList.contains('m-q')) F.q = t.value; else if (t.classList.contains('m-ty')) F.type = t.value; else if (t.classList.contains('m-is')) F.issuer = t.value; else if (t.classList.contains('m-so')) F.solo = t.checked;
      filt();
    };
  }

  host.innerHTML = '<div class="m-dev"><div class="m-scr"><div class="m-stat"><span class="m-brand">' + (CRUX ? '<img src="' + ROOT + 'assets/logos/team-crux-128.png" alt="">' : '') + '<span>&gt; ' + W.head + '</span></span>' + (D.sample ? '<span class="m-sm">Sample missions</span>' : '') + '</div>' +
    '<div class="m-cmd"><div class="m-flt"></div></div><div class="m-count" role="status" aria-live="polite"></div>' +
    '<div class="m-tblw"><table class="m-tbl"><thead><tr></tr></thead><tbody></tbody></table></div><div class="m-more"></div></div></div>';
  controls(host.querySelector('.m-flt'));
  var head = host.querySelector('thead tr'), body = host.querySelector('tbody'), cnt = host.querySelector('.m-count'), more = host.querySelector('.m-more');

  var COLS = [['star', 'Rank'], ['title', 'Mission'], ['type', 'Type', 'm-hide'], ['issuer', W.by, 'm-hide'], ['rep', 'Repeat', 'm-hide'], ['reward', 'EXP']];
  var SORTNAME = { star: 'rank', reward: 'EXP', rep: 'repeat' };
  function draw() {
    var all = results(), r = EXPAND ? all : all.slice(0, LIMIT);
    if (sel && r.indexOf(M.filter(function (x) { return x.id === sel; })[0]) < 0) sel = '';
    cnt.textContent = (r.length < all.length ? 'Showing the first ' + r.length + ' of ' + all.length + (all.length < M.length ? ' matching' : '') : all.length + ' of ' + M.length) + ' mission' + (M.length === 1 ? '' : 's') + ', sorted by ' + (SORTNAME[F.sort] || F.sort) + (F.dir > 0 ? ', low to high' : ', high to low');
    head.innerHTML = COLS.map(function (c) { var on = F.sort === c[0]; return '<th class="' + (c[2] || '') + '"' + (on ? ' aria-sort="' + (F.dir > 0 ? 'ascending' : 'descending') + '"' : '') + '><button data-k="' + c[0] + '">' + c[1] + (on ? (F.dir > 0 ? ' ▲' : ' ▼') : '') + '</button></th>'; }).join('');
    body.innerHTML = r.length ? r.map(function (m) {
      var o = m.id === sel;
      return '<tr class="m-r' + (ROWS ? ' m-rin' : '') + '" style="--i:' + Math.min(r.indexOf(m), 12) + '" data-id="' + esc(m.id) + '"' + (o ? ' data-open' : '') + '><td>' + stars(m.st) + '</td><td><button class="m-open" aria-expanded="' + o + '"><span class="m-caret" aria-hidden="true">▸</span>' + esc(m.title) + '</button></td><td class="m-hide">' + esc(m.type) + '</td><td class="m-hide">' + esc(m.issuer) + '</td><td class="m-hide">' + (m.rep ? 'Yes' : 'No') + '</td><td>' + m.bonus + '</td></tr>' +
        (o ? '<tr class="m-x"><td colspan="6"><div class="m-xin">' + dossier(m) + '</div></td></tr>' : '');
    }).join('') : '<tr><td colspan="6"><div class="m-empty"><b>No missions found</b>Try removing a filter, or search for a different word.</div></td></tr>';
    more.innerHTML = all.length > LIMIT ? '<button type="button" class="m-tog" aria-expanded="' + EXPAND + '"><span class="m-tc" aria-hidden="true">▾</span>' + (EXPAND ? 'Show fewer missions' : 'Show all ' + all.length + ' missions') + '</button>' : '';
    ANIM = false; ROWS = false;
    var fi = 0; [].forEach.call(body.querySelectorAll('.m-facts>div'), function (d) { d.style.setProperty('--f', fi++); });
    cnt.classList.remove('m-flash'); if (FLASH) { void cnt.offsetWidth; cnt.classList.add('m-flash'); } FLASH = false;
  }
  /* small motion: a filter or sort change slides the rows in again and flashes the count; opening a mission leaves the list still */
  function filt() { ROWS = true; FLASH = true; draw(); }
  function pop(b) { b.classList.remove('m-pop'); void b.offsetWidth; b.classList.add('m-pop'); }
  more.onclick = function (e) {
    if (!e.target.closest('.m-tog')) return;
    EXPAND = !EXPAND; sel = ''; draw();
    var nb = more.querySelector('.m-tog'); if (nb) nb.focus();
    if (!EXPAND) { var top = host.querySelector('.m-count'); if (top && top.scrollIntoView) top.scrollIntoView({ block: 'nearest' }); }
  };
  head.onclick = function (e) {
    var b = e.target.closest('button'); if (!b) return; var k = b.dataset.k;
    if (F.sort === k) F.dir *= -1; else { F.sort = k; F.dir = (k === 'star' || k === 'reward') ? -1 : 1; }
    ROWS = true; draw(); var nb = head.querySelector('[data-k="' + k + '"]'); if (nb) nb.focus();
  };
  body.onclick = function (e) {
    var cp = e.target.closest('[data-copy]');
    if (cp) {
      var m = M.filter(function (x) { return x.id === cp.dataset.copy; })[0], note = body.querySelector('.m-ok');
      copyText(summary(m), function (ok) { cp.textContent = ok ? 'Copied' : 'Copy failed'; note.textContent = ok ? 'Mission details copied to your clipboard.' : 'Copying was blocked. Select the text and copy it yourself.'; setTimeout(function () { cp.textContent = 'Copy mission details'; note.textContent = ''; }, 2200); });
      return;
    }
    var row = e.target.closest('tr.m-r'); if (!row) return;
    var rid = row.dataset.id; sel = sel === rid ? '' : rid; ANIM = !!sel; draw();
    var ob = [].filter.call(body.querySelectorAll('tr.m-r'), function (x) { return x.dataset.id === rid; })[0]; if (ob) ob.querySelector('.m-open').focus();
  };
  draw();
})();
