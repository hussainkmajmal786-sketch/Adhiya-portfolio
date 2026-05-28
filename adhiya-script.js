// mobile nav
const tgl = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (tgl && nav) {
  tgl.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3 * 0.08) + 's';
  io.observe(el);
});
