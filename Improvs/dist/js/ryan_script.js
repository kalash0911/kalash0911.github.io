"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

initAudioPlayers();

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);

  if (!sliderSelector) {
    return;
  }

  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

    if (neededWidth) {
      if (!sliderSelector.classList.contains("swiper-initialized")) {
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

destroySlidersOnResize(".swiper_voice", 9999, {
  speed: 1200,
  // centeredSlides: true,
  // loopedSlides: 5,
  grabCursor: true,
  // loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 2,
      centeredSlides: true
    },
    480: {
      slidesPerView: 2.5
    },
    620: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3.6
    },
    1024: {
      slidesPerView: 4.6
    },
    1200: {
      slidesPerView: 5.6
    },
    1441: {
      slidesPerView: "auto"
    }
  }
}); // const slider = new Swiper(".swiper_voice", {
//     speed: 1200,
//     centeredSlides: true,
//     loopedSlides: 3,
//     grabCursor: true,
//     loop: true,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             spaceBetween: 20,
//             slidesPerView: 2,
//         },
//         480: {
//             slidesPerView: 2.5,
//         },
//         620: {
//             slidesPerView: 3,
//         },
//         768: {
//             slidesPerView: 3.6,
//         },
//         1024: {
//             slidesPerView: 4.6,
//         },
//         1440: {
//             slidesPerView: 6.1,
//         },
//         1920: {
//             slidesPerView: 8,
//         },
//     },
// });

function initAudioPlayers() {
  var audioList = document.querySelectorAll(".fairy_sound");
  var playButton = document.querySelectorAll(".play_btn");
  var play = document.querySelectorAll(".play");
  var pause = document.querySelectorAll(".pause");
  playButton.forEach(function (item, index) {
    item.addEventListener("click", function () {
      if (audioList[index].paused) {
        audioList[index].play();
        pause[index].classList.add("pauseActive");
        play[index].classList.add("playInactive");
      } else {
        audioList[index].pause();
        pause[index].classList.remove("pauseActive");
        play[index].classList.remove("playInactive");
      }

      audioList.forEach(function (audio, i) {
        if (i !== index && !audio.paused) {
          audio.pause();
          pause[i].classList.remove("pauseActive");
          play[i].classList.remove("playInactive");
        }

        audio.addEventListener("ended", function () {
          pause[i].classList.remove("pauseActive");
          play[i].classList.remove("playInactive");
        });
      });
    });
  });
}

var videoThresholdScreenSize = 860;

function supportsHEVCAlpha() {
  var navigator = window.navigator;
  var ua = navigator.userAgent.toLowerCase();
  var hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
  var isSafari = ua.indexOf("safari") != -1 && !(ua.indexOf("chrome") != -1) && ua.indexOf("version/") != -1;
  var isiphone = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return (isSafari || isiphone) && hasMediaCapabilities;
}

var playerKids = document.querySelectorAll(".kids");
var playerStep = document.querySelectorAll(".img-step");
var playerStepMob = document.querySelectorAll(".img-step-mob");
playerKids.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "../files/".concat(ind + 1, ".mov") : "../files/".concat(ind + 1, ".webm");
});
playerStep.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "../files/step".concat(ind + 1, ".mp4") : "../files/step".concat(ind + 1, ".webm");
});
playerStepMob.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "../files/step".concat(ind + 1, "-mob.mp4") : "../files/step".concat(ind + 1, "-mob.webm");
});
//# sourceMappingURL=ryan_script.js.map
