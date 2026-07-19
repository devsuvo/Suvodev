// Floating quick-contact button (WhatsApp) shown on every page
(function () {
  var wa = document.createElement('a');
  wa.href = 'https://wa.me/880160172103?text=' +
    encodeURIComponent("Hi Suvo! I'd like to discuss a project with you.");
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.className = 'float-wa';
  wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML =
    '<svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">' +
    '<path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 3.9 1.5 4.7 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-4.3 1.4 1.4-4.2-.2-.3c-1-1.5-1.6-3.3-1.6-5.2 0-5.4 4.4-9.8 9.6-9.8s9.6 4.4 9.6 9.8-4.3 9.7-9.6 9.7zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>';
  document.body.appendChild(wa);
})();

// Instant navigation: prerender/prefetch internal pages so menu clicks feel instant
(function () {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
    var s = document.createElement('script');
    s.type = 'speculationrules';
    s.textContent = JSON.stringify({
      prerender: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }]
    });
    document.head.appendChild(s);
    return;
  }
  // Fallback: prefetch a page the moment the user hovers/touches its link
  var done = {};
  function prefetch(href) {
    if (done[href]) return;
    done[href] = true;
    var l = document.createElement('link');
    l.rel = 'prefetch';
    l.href = href;
    document.head.appendChild(l);
  }
  function onIntent(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank') return;
    if (a.origin !== location.origin) return;
    prefetch(a.href);
  }
  document.addEventListener('mouseover', onIntent);
  document.addEventListener('touchstart', onIntent, { passive: true });
})();
