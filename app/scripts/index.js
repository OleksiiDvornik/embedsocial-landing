const body = document.querySelector('.body');
const menuBurger = document.querySelector('.menu__burger');
const menuContent = document.querySelector('.menu__content');

const burgerToggle = () => {
  menuBurger.classList.toggle('active');
  menuContent.classList.toggle('active');
  body.classList.toggle('lock');
};

menuBurger.addEventListener('click', burgerToggle);


// Templates slider

const slider = new Swiper('.templates__slider', {
  speed: 500,
  effect: 'slide',
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
  pagination: {
    el: '.templates__slider-pagination',
    bulletActiveClass: 'current',
    bulletClass: 'templates__slider-pagination-item',
    clickable: true,
  }
})

// CTA slider

const ctaSlider = new Swiper('.cta__slider', {
  speed: 500,
  effect: 'slide',
  grabCursor: true,
  loop: true,
  slidesPerView: 2,
  slidesPerColumn: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.cta__slider-buttons-prev',
    prevEl: '.cta__slider-buttons-next',
  }
})