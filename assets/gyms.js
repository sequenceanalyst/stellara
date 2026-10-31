/* Gym badge flip cards: select a badge to turn it over. The place link is only reachable while the card is turned. */
(function () {
  [].forEach.call(document.querySelectorAll('#gym-badges .fc'), function (c) {
    var b = c.querySelector('.fcb'), a = c.querySelector('.loc'), badge = b.getAttribute('aria-label').split(' Badge.')[0];
    b.addEventListener('click', function () {
      var on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on); a.hidden = !on;
      b.setAttribute('aria-label', badge + ' Badge. ' + (on ? 'Turn back over.' : 'Show the Gym type and place.'));
    });
  });
})();
