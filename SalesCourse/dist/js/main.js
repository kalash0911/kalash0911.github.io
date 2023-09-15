"use strict";

// Video controls
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
