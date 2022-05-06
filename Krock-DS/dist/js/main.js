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
  $('.pricepopup-btn').click(function (event) {
    event.preventDefault();
    $('.overlay').toggleClass('overlay-visible');
    $('.pricepopup').toggleClass('pricepopup-visible');
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
  autoHeight: true,
  speed: 1000
});
new Swiper('.challange-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  effect: 'slide',
  speed: 1000
});
var openVideo = document.querySelector(".open-video");
var closeVideo = document.querySelector(".close-video");
var videoBlock = document.querySelector(".video-block");
openVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.add("video-block_active");
  document.body.classList.add("body_overflow");
  document.body.classList.add("body_lock");
  document.body.addEventListener("click", closeVideoEvent);
});
closeVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.remove("video-block_active");
  document.body.classList.remove("body_overflow");
  document.body.classList.remove("body_lock");
  document.body.removeEventListener("click", closeVideoEvent);
});

function closeVideoEvent(e) {
  if (e.target.id != 'video' && !e.target.closest('.open-video')) {
    videoBlock.classList.remove("video-block_active");
    document.body.classList.remove("body_overflow");
    document.body.classList.remove("body_lock");
    document.body.removeEventListener("click", closeVideoEvent);
  }
}
//# sourceMappingURL=main.js.map
