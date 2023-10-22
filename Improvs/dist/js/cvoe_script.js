"use strict";

var sliderMain = new Swiper(".swiper_cvoe", {
  speed: 1400,
  slidesPerView: 1.9,
  centeredSlides: true,
  grabCursor: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      // slidesPerView: 1.2,
      // spaceBetween: 20,
      pagination: {
        dynamicBullets: true
      }
    },
    480: {
      // slidesPerView: 1.5,
      // spaceBetween: 20,
      pagination: {
        dynamicBullets: true
      }
    },
    768: {
      // slidesPerView: 1.8,
      // spaceBetween: 20,
      pagination: {
        dynamicBullets: false
      }
    } // 1024: {
    //     slidesPerView: 1.9,
    //     spaceBetween: 40,
    // },
    // 1200: {
    //     slidesPerView: 1.9,
    //     spaceBetween: 80,
    // },
    // 1440: {
    //     slidesPerView: 2.2,
    //     spaceBetween: 80,
    // },
    // 1620: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 80,
    // },
    // 1920: {
    //     slidesPerView: 2.8,
    //     spaceBetween: 80,
    // },
    // 2220: {
    //     slidesPerView: 3.2,
    //     spaceBetween: 80,
    // },
    // 2560: {
    //     slidesPerView: 3.5,
    //     spaceBetween: 80,
    // },
    // 2860: {
    //     slidesPerView: 3.8,
    //     spaceBetween: 80,
    // },
    // 3160: {
    //     slidesPerView: 4.1,
    //     spaceBetween: 80,
    // },
    // 3460: {
    //     slidesPerView: 4.4,
    //     spaceBetween: 80,
    // },
    // 3760: {
    //     slidesPerView: 4.7,
    //     spaceBetween: 80,
    // },
    // 4060: {
    //     slidesPerView: 5.3,
    //     spaceBetween: 80,
    // },
    // 4360: {
    //     slidesPerView: 5.6,
    //     spaceBetween: 80,
    // },
    // 4660: {
    //     slidesPerView: 5.9,
    //     spaceBetween: 80,
    // },
    // 4960: {
    //     slidesPerView: 6.2,
    //     spaceBetween: 80,
    // },

  }
});
var sliderMainText = new Swiper(".swiper_cvoe_text", {
  speed: 1400,
  slidesPerView: 1,
  direction: "vertical",
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false
  }
});
sliderMain.controller.control = sliderMainText;
//# sourceMappingURL=cvoe_script.js.map
