/* ═══════════════════════════════════════════════════════════════
   Script: Scroll-Interactive Portfolio
   Handles: IntersectionObserver reveals, scroll progress, 
   parallax, active nav, and smooth scroll
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Scroll Progress Bar ──
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  // ── Glass Navbar: show after scrolling past hero ──
  const glassNav = document.getElementById('glassNav');
  const hero = document.getElementById('hero');

  function updateNavVisibility() {
    const heroBottom = hero.offsetTop + hero.offsetHeight * 0.3;
    if (window.scrollY > heroBottom) {
      glassNav.classList.add('visible');
    } else {
      glassNav.classList.remove('visible');
    }
  }

  // ── Active Nav Link based on scroll position ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  function updateActiveNav() {
    const scrollY = window.scrollY + window.innerHeight * 0.4;

    let currentSection = '';
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.dataset.section === currentSection) {
        link.classList.add('active');
      }
    });
  }

  // ── Scroll-Triggered Reveal Animations ──
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-card');

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Parallax Effect on Hero ──
  function updateParallax() {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.getElementById('scrollIndicator');

    if (heroContent && scrollY < window.innerHeight) {
      const parallaxFactor = scrollY * 0.35;
      const opacity = 1 - scrollY / (window.innerHeight * 0.7);
      heroContent.style.transform = 'translateY(' + parallaxFactor + 'px)';
      heroContent.style.opacity = Math.max(0, opacity);
    }

    if (scrollIndicator && scrollY < window.innerHeight) {
      const fadeOut = 1 - scrollY / (window.innerHeight * 0.3);
      scrollIndicator.style.opacity = Math.max(0, fadeOut);
    }
  }

  // ── Mouse-follow Glow on Cards ──
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
      card.style.background =
        'radial-gradient(600px circle at ' + x + 'px ' + y + 'px, rgba(160, 120, 255, 0.06), transparent 40%), ' +
        'rgba(31, 31, 37, 0.45)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.background = 'rgba(31, 31, 37, 0.45)';
    });
  });

  // ── Tilt Effect on Cards ──
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * 6;
      const tiltY = (x - 0.5) * -6;
      card.style.transform =
        'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });

  // ── Smooth Scroll for Nav Links ──
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Also handle hero CTA
  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = heroCta.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ── Throttled Scroll Handler ──
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateScrollProgress();
        updateNavVisibility();
        updateActiveNav();
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Initial calls ──
  updateScrollProgress();
  updateNavVisibility();
  updateActiveNav();

  // ── Trigger hero reveals on load ──
  window.addEventListener('load', function () {
    const heroReveals = document.querySelectorAll('.hero .reveal-up');
    heroReveals.forEach(function (el) {
      el.classList.add('visible');
    });
  });

})();
