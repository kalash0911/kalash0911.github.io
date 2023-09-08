"use strict";

function supportsHEVCAlpha() {
  var navigator = window.navigator;
  var ua = navigator.userAgent.toLowerCase();
  var hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
  var isSafari = ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') != -1) && ua.indexOf('version/') != -1;
  var isiphone = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return (isSafari || isiphone) && hasMediaCapabilities;
}

var playerKids = document.querySelectorAll('.kids');
var playerStep = document.querySelectorAll('.img-step');
var playerStepMob = document.querySelectorAll('.img-step-mob');
playerKids.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "./files/".concat(ind + 1, ".mov") : "./files/".concat(ind + 1, ".webm");
});
playerStep.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "./files/step".concat(ind + 1, ".mp4") : "./files/step".concat(ind + 1, ".webm");
});
playerStepMob.forEach(function (video, ind) {
  video.src = supportsHEVCAlpha() ? "./files/step".concat(ind + 1, "-mob.mp4") : "./files/step".concat(ind + 1, "-mob.webm");
}); // Video controls

initVideoPlayers();

function initVideoPlayers() {
  var videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps === null || videoWraps === void 0 ? void 0 : videoWraps.forEach(function (videoWrap) {
    var video = videoWrap.querySelector(".video");
    var playButton = videoWrap.querySelector(".play-button"); //Play and Pause button

    playButton.addEventListener("click", function (e) {
      if (video.paused) {
        video.play();
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        videoWrap.classList.toggle("active");
      }
    });
  });
}
//# sourceMappingURL=main.js.map
