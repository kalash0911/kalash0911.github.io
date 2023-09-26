"use strict";

new WOW().init();
var slider = new Swiper(".swiper_revenew", {
  speed: 1400,
  centeredSlides: true,
  grabCursor: true,
  loopedSlides: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // 320: {
    //     spaceBetween: 20,
    // },
    480: {
      slidesPerView: 1
    },
    // 768: {
    //     spaceBetween: 40,
    // },
    1024: {
      slidesPerView: 1.6
    },
    1440: {
      slidesPerView: 2
    }
  }
});
//# sourceMappingURL=revenew_script.js.map
