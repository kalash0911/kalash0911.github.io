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

; // For Paralax

var didScroll = false;
var paralaxTitles = document.querySelectorAll('.paralax');

var scrollInProgress = function scrollInProgress() {
  didScroll = true;
};

var raf = function raf() {
  if (didScroll) {
    paralaxTitles.forEach(function (element, index) {
      element.style.transform = "translateY(" + window.scrollY / 25 + "%)";
    });
    didScroll = false;
  }

  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress); // Swiper:

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
  return swiper;
}

destroySlidersOnResize(".slider-vip", 99999, {
  autoplay: {
    delay: 2000
  },
  thumbs: {
    swiper: {
      el: '.slider-vip-nav',
      slidesPerView: 5
    }
  }
});
destroySlidersOnResize(".slider-vip-nav", 99999, {});
var notFullAnimData = ["1", "3", "4", "6", "7", "9", "10", "11", "12"];
var planSlider = destroySlidersOnResize(".slider-plan", 99999, {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  thumbs: {
    swiper: {
      el: ".slider-plan-nav",
      direction: "vertical",
      slidesPerView: 8,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev"
      },
      breakpoints: {
        768: {
          slidesPerView: 8
        },
        320: {
          slidesPerView: 4
        }
      }
    }
  },
  on: {
    activeIndexChange: function activeIndexChange(swiper) {
      var _jsonPhoneAnimations$, _jsonPhoneAnimations$2;

      // jsonPhoneAnimations[swiper.activeIndex].play();
      // jsonPhoneAnimations[swiper.previousIndex].stop();
      // TODO: Replace when will be full list of animation
      var activeIndex = swiper.activeIndex,
          previousIndex = swiper.previousIndex;
      var ind = notFullAnimData.indexOf("".concat(activeIndex + 1));
      var prevInd = notFullAnimData.indexOf("".concat(previousIndex + 1));
      (_jsonPhoneAnimations$ = jsonPhoneAnimations[ind]) === null || _jsonPhoneAnimations$ === void 0 ? void 0 : _jsonPhoneAnimations$.play();
      (_jsonPhoneAnimations$2 = jsonPhoneAnimations[prevInd]) === null || _jsonPhoneAnimations$2 === void 0 ? void 0 : _jsonPhoneAnimations$2.stop();
    }
  }
});
destroySlidersOnResize(".slider-plan-nav", 99999, {});
var planSliders = document.querySelectorAll(".plan-section .slider-plan .swiper-slide");
var animLoadCounter = 0;
var totalDuration = 0; // TODO: Replace when will be full list of animation
// new Array(planSliders.length).fill('step')

var jsonPhoneAnimations = notFullAnimData.map(function (step, ind, arr) {
  var anim = bodymovin.loadAnimation({
    // container: document.getElementById(`${step}_${ind + 1}`),
    // path: `./files/plan_anim/data-${ind + 1}.json`,
    container: document.getElementById("step_".concat(step)),
    path: "./files/plan_anim/data-".concat(step, ".json"),
    render: "svg",
    loop: false,
    autoplay: false
  });
  anim.addEventListener("DOMLoaded", function () {
    animLoadCounter += 1;

    if (animLoadCounter === arr.length) {
      totalDuration = jsonPhoneAnimations.reduce(function (prev, cur) {
        cur.onComplete = function () {
          planSlider.slideNext();
        };

        return prev += cur.getDuration();
      }, 0);
      jsonPhoneAnimations[0].play();
    }
  });
  return anim;
});
//# sourceMappingURL=main.js.map
