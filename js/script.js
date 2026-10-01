/* =========================================
   MOBILE HAMBURGER MENU
========================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close the mobile menu whenever a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* =========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
========================================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =========================================
   ACTIVE NAV LINK WHILE SCROLLING
========================================= */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollPos = window.scrollY + 120; // offset for sticky navbar

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const linkForSection = document.querySelector(`.nav-link[href="#${id}"]`);

    if (!linkForSection) return;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinkEls.forEach((link) => link.classList.remove('active-link'));
      linkForSection.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

/* =========================================
   BACK TO TOP BUTTON
========================================= */
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleBackToTop);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */
// Add the "reveal" class to elements we want to animate in on scroll
const revealTargets = document.querySelectorAll(
  '.about-card, .skill-card, .project-card, .contact-card'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

/* =========================================
   RUN ONCE ON LOAD
========================================= */
window.addEventListener('load', () => {
  setActiveLink();
  toggleBackToTop();
});
