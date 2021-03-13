"use strict";

jQuery(function () {
  initMaps();
});

var greeting = function greeting() {
  return console.log("Hi!");
};

$(document).ready(function () {
  $('.get-for-btn').click(function (event) {
    event.preventDefault();
    $('.overlay').toggleClass('overlay-visible');
    $('.get-for').toggleClass('get-for-visible');
  });
});
$(document).ready(function () {
  $('.order-now').click(function (event) {
    event.preventDefault();
    $('.overlay').toggleClass('overlay-visible');
    $('.order').toggleClass('order-visible');
  });
});
$(document).ready(function () {
  $('.burger').click(function (event) {
    event.preventDefault();
    $('.burger').toggleClass('burger-active');
    $('.header').toggleClass('header-active');
  });
});

function initMaps() {
  var mapLinks = document.querySelectorAll('.map-link');
  mapLinks.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var map = document.getElementById('map');
      var mapSrc = map.getAttribute('src');

      if (mapSrc !== el.dataset.src) {
        changeSrc('map', el.dataset.src);
      }
    });
  });
}

function changeSrc(id, src) {
  document.getElementById(id).src = src;
}

window.onscroll = function () {
  var header = document.querySelector('.header');

  if (window.pageYOffset > 50) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
};

new Swiper('.mob-swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  effect: 'coverflow',
  speed: 1000
});
//# sourceMappingURL=main.js.map
