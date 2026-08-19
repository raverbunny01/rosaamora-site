document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('site-nav');
  var home = document.querySelector('.home');
  if (!nav || !home) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0.6) {
        nav.classList.remove('is-hidden');
      } else {
        nav.classList.add('is-hidden');
      }
    });
  }, { threshold: [0, 0.6, 1] });

  observer.observe(home);
});
