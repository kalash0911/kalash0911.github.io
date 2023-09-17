"use strict";

var slider = new Swiper(".swiper_acrossUs", {
  speed: 1400,
  // slidesPerView: 1.6,
  centeredSlides: true,
  grabCursor: true,
  // spaceBetween: 80,
  loopedSlides: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets" // clickable: true,

  },
  breakpoints: {
    320: {
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1
    },
    768: {
      spaceBetween: 40,
      slidesPerView: 1.6
    },
    1024: {
      spaceBetween: 80
    }
  }
});
//# sourceMappingURL=across_us_script.js.map
