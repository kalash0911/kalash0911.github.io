"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// for header
var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");
var linkClose = document.querySelectorAll(".link-close");
var overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }

    menuBody.classList.toggle("menu_active");
  });
}

;

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");

    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }

    menuBody.classList.toggle("menu_active");
  });
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
      menuBody.classList.remove("menu_active");
      overflow.classList.remove("overflow_active");
    });
  }
}

; // For Zoom

var zoomImage = document.querySelector('.zoom');
var missionSection = document.getElementById('mission');
var missionSectionHeight = missionSection.offsetHeight;

function handleScroll() {
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var distanceFromBottom = scrollTop + windowHeight - missionSection.offsetTop;

  if (distanceFromBottom >= 0 && distanceFromBottom <= windowHeight) {
    var scaleFactor = 1.5 - distanceFromBottom / windowHeight * 0.3;
    zoomImage.style.transform = "scale(".concat(scaleFactor, ")");
  }
}

window.addEventListener('scroll', handleScroll); // Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

    if (neededWidth) {
      if (!(sliderSelector === null || sliderSelector === void 0 ? void 0 : sliderSelector.classList.contains("swiper-initialized"))) {
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach(function (evt) {
    return win.addEventListener(evt, toggleInit, false);
  });
}

destroySlidersOnResize(".me-slider", 960, {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination"
  }
});
//# sourceMappingURL=main.js.map
