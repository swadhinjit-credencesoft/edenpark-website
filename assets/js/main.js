/* Eden Park Motel — progressive enhancement only.
   Every feature below degrades to working HTML if JS is unavailable. */
(function () {
  'use strict';

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.navtoggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.acc__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var acc = btn.closest('.acc');
      var open = acc.getAttribute('data-open') === 'true';
      acc.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
      var icon = btn.querySelector('.acc__icon');
      if (icon) icon.textContent = open ? '+' : '\u2212';
    });
  });

  /* ---- Blog search + category filter ---- */
  var search = document.getElementById('post-search');
  var filters = document.querySelectorAll('.filter');
  var posts = Array.prototype.slice.call(document.querySelectorAll('.post'));
  var count = document.getElementById('post-count');

  if (posts.length && (search || filters.length)) {
    var term = '';
    var cat = 'all';

    function apply() {
      var shown = 0;
      posts.forEach(function (post) {
        var matchesCat = cat === 'all' || post.dataset.category === cat;
        var haystack = post.textContent.toLowerCase();
        var matchesTerm = !term || haystack.indexOf(term) > -1;
        var show = matchesCat && matchesTerm;
        post.hidden = !show;
        if (show) shown++;
      });
      if (count) {
        count.textContent = 'Showing ' + shown + ' of ' + posts.length + ' articles';
      }
    }

    if (search) {
      search.addEventListener('input', function () {
        term = search.value.trim().toLowerCase();
        apply();
      });
    }

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        cat = btn.dataset.filter;
        apply();
      });
    });
  }
})();
