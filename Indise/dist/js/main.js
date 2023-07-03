"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");
var linkClose = document.querySelectorAll(".link-close");
var overflow = document.querySelector(".overflow");
var winTriggersMethods = ["resize", "load"];
var prevWidth = window.innerWidth;
winTriggersMethods.forEach(function (method) {
  window.addEventListener(method, function () {
    // worst case to refresh animation?
    if (method === "load") {
      phoneAnimation();
    }

    if (method === "resize" && prevWidth !== window.innerWidth) {
      var _ScrollTrigger;

      (_ScrollTrigger = ScrollTrigger) === null || _ScrollTrigger === void 0 ? void 0 : _ScrollTrigger.killAll();
      prevWidth = window.innerWidth;
      phoneAnimation();
      return;
    }
  });
});

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

; // Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  var swiper = new Swiper(selector, init);
  swiper.on("slideChange", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = false;
    }, 500);
  });
  swiper.on("reachEnd", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });
  swiper.on("reachBeginning", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });

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

var menuSteps = ['Write a detailed description of the design you would like to create', 'Select your desired square footage', 'Choose one interior design style from our catalog.', 'As needed, you can upload a reference image directly from your iPhone gallery', 'Just 60 seconds of patience…', '4 results are ready. Edit them or upscale for higher resolution.', "Here's your interior design, delivered in under 90 seconds."];
destroySlidersOnResize(".stepSlider", 9999999, {
  spaceBetween: 20,
  effect: "fade",
  speed: 1200,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // autoplay: false,
  pagination: {
    el: ".slider-nav",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<li class="' + className + '">' + "<h2>" + menuSteps[index] + "</h2>" + "</li>";
    }
  },
  on: {
    autoplayTimeLeft: function autoplayTimeLeft(swiper, time, progress) {
      var current = swiper.activeIndex + 1;
      var max = swiper.slides.length;
      var currentPercents = current / max + -progress / max;
      var clockArrowDeg = currentPercents * 360;
      var arrowEl = document.querySelector('.clock-arrow');
      var progressCircle = document.querySelector(".autoplay-progress svg");
      arrowEl.style.transform = "rotate(".concat(clockArrowDeg, "deg)");
      progressCircle.style.setProperty("--progress", currentPercents - 1 / 170); // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

function phoneAnimation() {
  var secondSection = document.querySelector('.sec-section');
  var phone = document.querySelector(".phone-anim"); // if(window.innerWidth < 768) {
  //   phone.classList.add('d-none')
  //   return;
  // };

  if (!secondSection || !phone) return;
  var sectionRect = secondSection.getBoundingClientRect();
  var fromY = sectionRect.top + 230;
  var firstSlide = document.querySelectorAll(".swiper-slide img")[0];
  firstSlide.classList.add('hidden');
  gsap.fromTo(phone, {
    x: 0,
    y: -fromY,
    rotation: 5
  }, {
    x: 0,
    y: 0,
    rotation: 0,
    scrollTrigger: {
      trigger: secondSection,
      start: "0",
      end: "bottom",
      scrub: 1,
      // markers: true,
      onLeave: function onLeave() {
        phone.classList.add('d-none');
        firstSlide.classList.remove('hidden');
      }
    }
  });
}
//# sourceMappingURL=main.js.map
