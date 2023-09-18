"use strict";

initAudioPlayers();
var slider = new Swiper(".swiper_voice", {
  speed: 1200,
  centeredSlides: true,
  loopedSlides: 3,
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 2
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
    1440: {
      slidesPerView: 6.1
    },
    1920: {
      slidesPerView: 8
    }
  }
});

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
