"use strict";

new WOW().init();
var slider = new Swiper(".swiper_paritet", {
  speed: 1400,
  centeredSlides: true,
  grabCursor: true,
  loopedSlides: 1,
  spaceBetween: 70,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 1.3,
      spaceBetween: 60
    },
    1440: {
      slidesPerView: 1.5,
      spaceBetween: 70
    },
    1920: {
      slidesPerView: 2.5
    }
  }
});
//# sourceMappingURL=him-paritet_script.js.map
