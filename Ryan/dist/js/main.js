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
} // Video controls pop-up


initVideoPlayersPopUp();

function initVideoPlayersPopUp() {
  var videoWraps = document.querySelectorAll(".video-wrap-pop-up");
  videoWraps === null || videoWraps === void 0 ? void 0 : videoWraps.forEach(function (videoWrap) {
    var video = videoWrap.querySelector(".video");
    var playButton = videoWrap.querySelector(".play-button");
    var muteButton = videoWrap.querySelector(".mute-button");
    var volume = videoWrap.querySelector(".volume");
    var currentTimeElement = videoWrap.querySelector(".current");
    var durationTimeElement = videoWrap.querySelector(".duration");
    var progress = videoWrap.querySelector(".video-progress");
    var progressBar = videoWrap.querySelector(".video-progress-filled"); //Play and Pause button

    playButton.addEventListener("click", function (e) {
      if (video.paused) {
        video.play();
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        videoWrap.classList.toggle("active");
      }
    }); //Mute button

    muteButton.addEventListener("click", function (e) {
      if (video.muted) {
        video.muted = false;
        muteButton.classList.toggle("mute");
      } else {
        video.muted = true;
        muteButton.classList.toggle("mute");
      }
    }); //volume

    volume.addEventListener("mousemove", function (e) {
      video.volume = e.target.value;
    }); //current time and duration

    var currentTime = function currentTime() {
      var currentMinutes = Math.floor(video.currentTime / 60);
      var currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
      var durationMinutes = Math.floor(video.duration / 60);
      var durationSeconds = Math.floor(video.duration - durationMinutes * 60);
      currentTimeElement.innerHTML = "".concat(currentMinutes, ":").concat(currentSeconds < 10 ? "0" + currentSeconds : currentSeconds);
      durationTimeElement.innerHTML = "".concat(durationMinutes, ":").concat(durationSeconds);
    };

    video.addEventListener("timeupdate", currentTime); //Progress bar

    video.addEventListener("timeupdate", function () {
      var percentage = video.currentTime / video.duration * 100;
      progressBar.style.width = "".concat(percentage, "%");
    }); //change progress bar on click

    progress.addEventListener("click", function (e) {
      var progressTime = e.offsetX / progress.offsetWidth * video.duration;
      video.currentTime = progressTime;
    });
    video.addEventListener("ended", stopMedia);

    function stopMedia() {
      video.pause();
      video.currentTime = 0;
      videoWrap.classList.remove("active");
    }
  });
}
/* Modal popUp img */


var itemImg = document.querySelectorAll('.gallery__item-img');
var modal = document.querySelector('.modal-pop-up');
var modalImg = modal.querySelector('img');
var overflowImg = document.querySelector('.modal-overflow');
var closeBtnImg = document.querySelector('.modal-btn-close');

function showImg(e) {
  document.body.classList.add("body_lock");
  modal.classList.add("modal-img_active");
  e.preventDefault();
  var img = e.target.closest('img');
  var src = img.getAttribute('src');
  modalImg.setAttribute('src', src);
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
