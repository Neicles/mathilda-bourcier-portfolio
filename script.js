// ============================================================
// PASSEPORT CRÉATIF — Scroll animations & interactions
// ============================================================

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Generic fade-up elements
document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));

// Stamps — staggered reveal
document.querySelectorAll('.stamp').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.09}s`;
  io.observe(el);
});

// Why-me items — staggered
document.querySelectorAll('.why-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.14}s`;
  io.observe(el);
});

// Escale cards — staggered
document.querySelectorAll('.escale').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  el.classList.add('fade-up');
  io.observe(el);
});

// Visa cards — staggered
document.querySelectorAll('.visa-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  io.observe(el);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 60
    ? '0 2px 24px rgba(0,0,0,.25)'
    : 'none';
}, { passive: true });
