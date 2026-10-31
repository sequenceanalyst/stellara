/* Flip cards (Gym badges on the League page, Trial Crests on the Trials page): select a card to turn it over.
   A card may hold a place link (.loc) that is only reachable while the card is turned. */
(function () {
  [].forEach.call(document.querySelectorAll('.fl .fc'), function (c) {
    var b = c.querySelector('.fcb'), a = c.querySelector('.loc'), label = b.getAttribute('aria-label'), name = label.split('. ')[0], show = label.slice(name.length + 2);
    b.addEventListener('click', function () {
      var on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on); if (a) a.hidden = !on;
      b.setAttribute('aria-label', name + '. ' + (on ? 'Turn back over.' : show));
    });
  });
})();
