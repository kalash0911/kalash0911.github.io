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

; // For Scroll

function handleScroll() {
  var body = document.querySelector('body');

  if (window.scrollY > 0) {
    body.classList.add('scroll');
  } else {
    body.classList.remove('scroll');
  }
}

window.addEventListener('scroll', handleScroll); // For Paralax

window.addEventListener('scroll', function () {
  var section = document.getElementById('mission');
  var paralax = document.querySelector('.paralax');
  var windowHeight = window.innerHeight;
  var sectionTop = section.getBoundingClientRect().top;
  var sectionBottom = section.getBoundingClientRect().bottom;

  if (sectionBottom <= windowHeight && sectionBottom >= 0) {
    var translateY = Math.max(0, (sectionBottom - windowHeight) / -windowHeight * 300);
    paralax.style.transform = "translateY(".concat(translateY, "%)");
  }
}); // Swiper:

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

var vipSlider = destroySlidersOnResize(".slider-vip", 99999, {
  autoplay: {
    delay: 5000
  },
  thumbs: {
    swiper: {
      el: '.slider-vip-nav',
      slidesPerView: 5
    }
  }
});
vipSlider.autoplay.stop();
destroySlidersOnResize(".slider-vip-nav", 99999, {});
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
      mousewheel: true,
      freeMode: true,
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
      jsonPhoneAnimations[swiper.activeIndex].play();
      jsonPhoneAnimations[swiper.previousIndex].stop();
      /* const { activeIndex, previousIndex } = swiper;
      const ind = notFullAnimData.indexOf(
        `${activeIndex + 1}`
      );
      const prevInd = notFullAnimData.indexOf(
        `${previousIndex + 1}`
      );
      jsonPhoneAnimations[ind]?.play();
      jsonPhoneAnimations[prevInd]?.stop(); */
    }
  }
});
destroySlidersOnResize(".slider-plan-nav", 99999, {});
var planSliders = document.querySelectorAll(".plan-section .slider-plan .swiper-slide");
var animLoadCounter = 0;
var totalDuration = 0;
var jsonPhoneAnimations = new Array(planSliders.length).fill('step').map(function (step, ind, arr) {
  var anim = bodymovin.loadAnimation({
    container: document.getElementById("".concat(step, "_").concat(ind + 1)),
    path: "./files/plan_anim/data-".concat(ind + 1, ".json"),

    /* container: document.getElementById(`step_${step}`),
    path: `./files/plan_anim/data-${step}.json`, */
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
    }
  });
  return anim;
});
var isPlanSectionViewed = false;
var isVipSectionViewed = false;

var startSlider = function startSlider(_ref) {
  var target = _ref.target;
  var sectionClassName = target.className;

  switch (sectionClassName) {
    case "plan-section":
      if (isPlanSectionViewed) return;
      jsonPhoneAnimations[0].play();
      isPlanSectionViewed = true;
      break;

    case "vip-section":
      if (isVipSectionViewed) return;
      vipSlider.autoplay.start();
      isVipSectionViewed = true;
      break;

    default:
      break;
  }
};

var planIntersectionObs = document.querySelector(".plan-section");
var vipIntersectionObs = document.querySelector(".vip-section");

function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      startSlider(entry);
    }
  });
}

function createObserver(target, callback) {
  var options = {
    root: null,
    threshold: 0
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}

createObserver(planIntersectionObs, callback);
createObserver(vipIntersectionObs, callback);
//# sourceMappingURL=main.js.map
