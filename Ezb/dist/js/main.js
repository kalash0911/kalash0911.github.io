"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var burger = document.querySelector(".burger-wrap");
var gamburger = document.querySelector(".plate7");
var menuLinks = document.querySelectorAll(".link-close");

if (burger) {
  var menuBody = document.querySelector(".menu");
  var menuOverlay = document.querySelector(".menu_overlay");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    gamburger.classList.toggle("active");
    menuBody.classList.toggle("menu_active");
    menuOverlay.classList.toggle("menu_overlay_active");
  });
  menuOverlay.addEventListener("click", function (e) {
    document.body.classList.remove("body_lock");
    gamburger.classList.remove("active");
    menuBody.classList.remove("menu_active");
    menuOverlay.classList.remove("menu_overlay_active");
  });
}

;

function initSliders(selector, width, obj) {
  var init = _objectSpread({
    infinite: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }, obj);

  $(function () {
    var win = $(window);
    var slider = $(selector);
    win.on("load resize", function () {
      if (win.width() <= width) {
        slider.not(".slick-initialized").slick(init);
      } else if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
      }
    });
  });
}

initSliders(".merch-slider", 9999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});
initSliders(".tattoo-slider", 9999, {
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  responsive: [{
    breakpoint: 1320,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
initSliders(".product__big-slider", 9999, {
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".product__nav-slider"
});
initSliders(".product__nav-slider", 9999, {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  asNavFor: ".product__big-slider",
  responsive: [{
    breakpoint: 1160,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5
    }
  }, {
    breakpoint: 700,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3
    }
  }]
});
initSliders(".description__main-slider", 9999, {
  arrows: false,
  dots: true,
  dotsClass: 'description__main-slider__dots',
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: "unslick"
  }]
});
initSliders(".rewiew-slider", 768, {
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
});
//# sourceMappingURL=main.js.map
