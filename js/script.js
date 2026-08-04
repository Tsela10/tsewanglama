document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.querySelector('#name')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const message = form.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent = 'Please fill out all fields before sending your message.';
        }
        return;
      }

      if (status) {
        status.textContent = 'Thanks! Your message is ready to send — demo form enabled for preview.';
      }

      form.reset();
    });
  }
});
