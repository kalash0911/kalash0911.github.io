"use strict";

new WOW().init();
var slider = new Swiper(".swiper_beach_club", {
  speed: 1400,
  centeredSlides: true,
  grabCursor: true,
  // loopedSlides: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
    // clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 1.3,
      spaceBetween: 40
    },
    1440: {
      slidesPerView: 1.5,
      spaceBetween: 80
    },
    1600: {
      slidesPerView: 1.7
    },
    1920: {
      slidesPerView: 2
    },
    2100: {
      slidesPerView: 2.3
    }
  }
});
//# sourceMappingURL=beach_club_script.js.map
