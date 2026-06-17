// Nav scroll effect 
let nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hero image
let heroImg = document.querySelector('.hero__img');
if (heroImg) {
  heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
  if (heroImg.complete) heroImg.classList.add('loaded');
}

// Hamburger menu
let hamburger = document.getElementById('hamburger');
let navDrawer = document.getElementById('navDrawer');
let drawerLinks = document.querySelectorAll('.drawer__link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navDrawer.classList.toggle('open');
  document.body.style.overflow = navDrawer.classList.contains('open') ? 'hidden' : '';
});

drawerLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navDrawer.classList.remove('open');
    document.body.style.overflow = '';
  });
});

window.addEventListener('load', () => {

  // Glide.js carousel
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    hoverpause: true,
    animationDuration: 700,
    animationTimingFunc: 'cubic-bezier(0.22, 1, 0.36, 1)'
  }).mount();

  // Parsley form validation 
  $('#travelForm').parsley({
    errorClass: 'parsley-error',
    successClass: 'parsley-success',
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
    errorTemplate: '<li></li>'
  });

  $('#travelForm').on('submit', function (e) {
    e.preventDefault();
    if ($(this).parsley().isValid()) {
      let btn = document.querySelector('.btn-submit');
      btn.textContent = 'Request Sent ✓';
      btn.style.background = '#6abf8a';
      btn.style.color = '#fff';
    }
  });

  // Cleave.js — phone formatting
  new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'CA'
  });

  // Cleave.js — date formatting
  new Cleave('#travelDate', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
  });

  // Anime.js — hero title
  anime({
    targets: '#pageTitle',
    translateY: [-60, 0],
    opacity: [0, 1],
    duration: 1600,
    delay: 400,
    easing: 'easeOutExpo'
  });

  // Anime.js — hero rule line
  let heroRule = document.getElementById('heroRule');
  if (heroRule) {
    setTimeout(() => heroRule.classList.add('active'), 1600);
  }

  // Anime.js — booking section on scroll
  let bookingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: '#bookingSection .field',
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.staggering ? anime.staggering(100) : (el, i) => i * 100,
          easing: 'easeOutExpo'
        });
        bookingObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  let bookingSection = document.getElementById('bookingSection');
  if (bookingSection) bookingObserver.observe(bookingSection);

  // Anime.js — destination cards on scroll
  let cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: '.dest-card',
          translateY: [60, 0],
          opacity: [0, 1],
          duration: 900,
          delay: (el, i) => i * 150,
          easing: 'easeOutExpo'
        });
        cardObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  let trendingSection = document.getElementById('trending');
  if (trendingSection) cardObserver.observe(trendingSection);

});