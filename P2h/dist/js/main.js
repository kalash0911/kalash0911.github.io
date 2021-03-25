"use strict";

jQuery(function () {
  greeting();
});

var greeting = function greeting() {
  return console.log("Hi!");
};

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.nav-menu').toggleClass('nav-active');
    $('.burger').toggleClass('burger-active');
  });
});
new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  speed: 1000,
  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  }
});
//# sourceMappingURL=main.js.map
