"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    var targetElement = e.target;

    if (window.innerWidth < 5000 && isMobile.any()) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_hover');
      }
    }
  }
};

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu");
var linkClose = document.querySelector(".link-close");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    burger.classList.toggle("burger_active");
    menuBody.classList.toggle("menu_active");
  });
}

;

if (linkClose) {
  linkClose.addEventListener("click", function (e) {
    document.body.classList.remove("body_lock");
    burger.classList.remove("burger_active");
    menuBody.classList.remove("menu_active");
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

initSliders(".main-slider", 99999, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  cssEase: 'ease',
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: false
});
initSliders(".cities-wrap", 1024, {
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
  }]
});
initSliders(".gallery-slider", 960, {
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
initSliders(".reviews_slider", 1300, {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 900,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
initSliders(".trip__text-wrap", 1023, {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
var itemImg = document.querySelectorAll('.trip__img-wrap > img');
var modal = document.querySelector('.modal-img');
var modalImg = modal.querySelector('img');
var overflowImg = document.querySelector('.modal-img__overflow');
var closeBtnImg = document.querySelector('.modal-btn-close');

function showImg(e) {
  var width = $(window).width();

  if (width >= 1024) {
    document.body.classList.add("body_lock");
    modal.classList.add("modal-img_active");
    e.preventDefault();
    var img = e.target.closest('img');
    var src = img.getAttribute('src');
    modalImg.setAttribute('src', src);
  }

  ;
}

;

function closeImg() {
  document.body.classList.remove("body_lock");
  modal.classList.remove("modal-img_active");
}

;

for (var i = 0; i < itemImg.length; ++i) {
  itemImg[i].addEventListener("click", function (e) {
    showImg(e);
  });
}

;
var modalActive = document.querySelectorAll('.modal-img_active');

if (modalActive) {
  overflowImg.addEventListener("click", function (e) {
    closeImg();
    e.preventDefault();
  });
  closeBtnImg.addEventListener("click", function (e) {
    closeImg();
    e.preventDefault();
  });
}

;
//# sourceMappingURL=main.js.map
