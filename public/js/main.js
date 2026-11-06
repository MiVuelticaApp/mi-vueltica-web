/*
  Mi VuelTica — interacciones del sitio
*/

/* ------------------------------------------------------------------
   LINKS DE LAS TIENDAS
   Pegá aquí los links cuando la app esté publicada.
   Mientras estén vacíos, los botones muestran "Muy pronto".
------------------------------------------------------------------- */
const STORE_LINKS = {
  appStore: '',   // ej: 'https://apps.apple.com/cr/app/mi-vueltica/id0000000000'
  googlePlay: '', // ej: 'https://play.google.com/store/apps/details?id=com.mivueltica.app'
};

(function setupStores() {
  let anyMissing = false;

  document.querySelectorAll('.store[data-store]').forEach((btn) => {
    const url = STORE_LINKS[btn.dataset.store];
    if (url) {
      btn.href = url;
      btn.target = '_blank';
      btn.rel = 'noopener';
    } else {
      anyMissing = true;
      btn.classList.add('is-soon');
      btn.removeAttribute('href');
      btn.setAttribute('role', 'link');
      btn.setAttribute('aria-disabled', 'true');
      const small = btn.querySelector('.store__text small');
      if (small) small.textContent = 'Muy pronto en';
    }
  });

  if (anyMissing) {
    document.querySelectorAll('[data-stores-note]').forEach((n) => (n.hidden = false));
  }
})();

/* Sombra del nav al hacer scroll */
(function setupNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* Filtros del catálogo */
(function setupFilters() {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const plans = document.querySelectorAll('[data-plans] .plan');
  const empty = document.querySelector('[data-plans-empty]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;

      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });

      let visible = 0;
      plans.forEach((plan) => {
        const show = filter === 'all' || plan.dataset.aud.split(' ').includes(filter);
        plan.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible > 0;
    });
  });
})();

/* Animaciones de entrada */
(function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Al terminar la animación se quita la clase para que los :hover funcionen.
  const done = (el) => el.classList.remove('reveal', 'is-in');

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(done);
    return;
  }

  // Escalonar elementos hermanos (tarjetas en grilla)
  items.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    const i = siblings.indexOf(el);
    if (siblings.length > 1) el.style.setProperty('--delay', `${Math.min(i, 5) * 0.08}s`);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-in');
        io.unobserve(el);
        el.addEventListener('transitionend', () => done(el), { once: true });
        setTimeout(() => done(el), 1600); // por si transitionend no llega
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => io.observe(el));
})();

/* Año del footer */
document.querySelectorAll('[data-year]').forEach((n) => (n.textContent = new Date().getFullYear()));
