function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class VideoPlayer {
  constructor(query) {
    // Event listeners
    _defineProperty(this, "playBtnListener", () => {
      if (this.video.paused) {
        this.video.play();
        this.videoPlayer.classList.toggle("active");
      } else {
        this.video.pause();
        this.videoPlayer.classList.toggle("active");
      }
    });

    _defineProperty(this, "muteBtnsListener", () => {
      if (this.video.muted) {
        this.video.muted = false;
        this.muteButton.classList.toggle("mute");
      } else {
        this.video.muted = true;
        this.muteButton.classList.toggle("mute");
      }
    });

    _defineProperty(this, "volumeListener", e => {
      this.video.volume = e.target.value;
    });

    _defineProperty(this, "currentTimeUpdate", () => {
      let currentMinutes = Math.floor(this.video.currentTime / 60);
      let currentSeconds = Math.floor(this.video.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(this.video.duration / 60);
      let durationSeconds = Math.floor(this.video.duration - durationMinutes * 60);
      this.currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;
      this.durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
    });

    _defineProperty(this, "progressBarUpdate", () => {
      const percentage = this.video.currentTime / this.video.duration * 100;
      this.progressBar.style.width = `${percentage}%`;
    });

    _defineProperty(this, "progressBarAcrionsListener", e => {
      const progressTime = e.offsetX / this.progress.offsetWidth * this.video.duration;
      this.video.currentTime = progressTime;
    });

    _defineProperty(this, "stopMediaListener", () => {
      this.video.pause();
      this.video.currentTime = 0;
      this.videoPlayer.classList.remove("active");
    });

    this.videoPlayer = document.querySelector(query);
    this.video = this.videoPlayer.querySelector(".video");
    this.playButton = this.videoPlayer.querySelector(".play-button");
    this.muteButton = this.videoPlayer.querySelector(".mute-button");
    this.volume = this.videoPlayer.querySelector(".volume");
    this.currentTimeElement = this.videoPlayer.querySelector(".current");
    this.durationTimeElement = this.videoPlayer.querySelector(".duration");
    this.progress = this.videoPlayer.querySelector(".video-progress");
    this.progressBar = this.videoPlayer.querySelector(".video-progress-filled");
    this.initListenPlayerBtns();
    this.initMuteListenBtns();
    this.initVolumeListener();
    this.initTimeUpdateListener();
    this.initProgressBarListener();
    this.initProgressBarActionsListener();
    this.initStopListener();
  }

  stop() {
    this.video.pause();
    this.video.currentTime = 0;
    this.currentTimeUpdate();
    this.progressBarUpdate();
    this.videoPlayer.classList.remove("active");
  }

  destroy() {
    this.playButton.removeEventListener("click", this.playBtnListener);
    this.muteButton.removeEventListener("click", this.muteBtnsListener);
    this.volume.removeEventListener("mousemove", this.volumeListener);
    this.video.removeEventListener("timeupdate", this.currentTimeListener);
    this.video.removeEventListener("timeupdate", this.progressBarListener);
    this.progress.removeEventListener("click", this.progressBarAcrionsListener);
    this.video.removeEventListener("ended", this.stopMediaListener);
    this.videoPlayer = null;
    this.video = null;
    this.playButton = null;
    this.muteButton = null;
    this.volume = null;
    this.currentTimeElement = null;
    this.durationTimeElement = null;
    this.progress = null;
    this.progressBar = null;
  } // Init listeners


  initListenPlayerBtns() {
    //Play and Pause button
    this.playButton.addEventListener("click", this.playBtnListener);
  }

  initMuteListenBtns() {
    //Mute button
    this.muteButton.addEventListener("click", this.muteBtnsListener);
  }

  initVolumeListener() {
    this.volume.addEventListener("mousemove", this.volumeListener);
  }

  initTimeUpdateListener() {
    this.video.addEventListener("timeupdate", this.currentTimeUpdate);
  }

  initProgressBarListener() {
    this.video.addEventListener("timeupdate", this.progressBarUpdate);
  }

  initProgressBarActionsListener() {
    this.progress.addEventListener("click", this.progressBarAcrionsListener);
  }

  initStopListener() {
    this.video.addEventListener("ended", this.stopMediaListener);
  }

}

const videoThresholdScreenSize = 860;

function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
  const isSafari = ua.indexOf("safari") != -1 && !(ua.indexOf("chrome") != -1) && ua.indexOf("version/") != -1;
  const isiphone = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return (isSafari || isiphone) && hasMediaCapabilities;
}

const playerKids = document.querySelectorAll(".kids");
const playerStep = document.querySelectorAll(".img-step");
const playerStepMob = document.querySelectorAll(".img-step-mob");
playerKids.forEach((video, ind) => {
  video.src = supportsHEVCAlpha() ? `./files/${ind + 1}.mov` : `./files/${ind + 1}.webm`;
});
playerStep.forEach((video, ind) => {
  video.src = supportsHEVCAlpha() ? `./files/step${ind + 1}.mp4` : `./files/step${ind + 1}.webm`;
});
playerStepMob.forEach((video, ind) => {
  video.src = supportsHEVCAlpha() ? `./files/step${ind + 1}-mob.mp4` : `./files/step${ind + 1}-mob.webm`;
}); // Video controls

initVideoPlayers();

function initVideoPlayers() {
  const videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps?.forEach((videoWrap, index) => {
    const video = videoWrap.querySelector(".video");
    const playButton = videoWrap.querySelector(".play-button"); //Play and Pause button

    playButton.addEventListener("click", e => {
      if (window.innerWidth <= videoThresholdScreenSize) {
        // Pause all other videos
        videoWraps.forEach((vwrap, ind) => {
          if (index !== ind) {
            const video = vwrap.querySelector(".video");
            video.pause();
            vwrap.classList.remove("active");
          }
        }); // Play current video

        if (video.paused) {
          video.play();
          videoWrap.classList.toggle("active");
        } else {
          video.pause();
          videoWrap.classList.toggle("active");
        }
      }
    });
  });
}
/* Modal popUp img */


modal();

function modal() {
  const modalPopup = document.querySelector(".modal-pop-up");
  const titleModal = modalPopup.querySelector(".pop-up-title");
  const bgModal = modalPopup.querySelector(".pop-up-bg");
  let videoModal = modalPopup.querySelector(".video");
  let videoPlayer;

  const openModal = () => modalPopup.style.display = "flex";

  const closeModal = () => {
    modalPopup.style.display = "none";
    videoPlayer.stop();
    videoPlayer.destroy();
    videoModal.remove();
  };

  const setModalContent = ({
    title,
    img,
    bg,
    video
  }) => {
    videoModal.remove();
    const videoWrap = modalPopup.querySelector(".recent-anim");
    const videoEl = document.createElement("video");
    videoEl.classList.add("video");
    videoModal = videoEl;
    [...video.querySelectorAll("source")].map(source => {
      const src = document.createElement("source");
      src.setAttribute("src", source.src);
      src.setAttribute("type", source.getAttribute("type"));
      videoEl.appendChild(src);
    });
    videoWrap.appendChild(videoEl);
    titleModal.textContent = title.textContent;
    bgModal.setAttribute("src", bg.src);
    videoPlayer = new VideoPlayer(".video-wrap-pop-up");
  };

  document.addEventListener("click", event => {
    const {
      target
    } = event;

    if (target.closest(".modal-btn-close") || target.closest(".modal-overflow")) {
      event.preventDefault();
      closeModal();
    }
  });
  const cards = document.querySelectorAll(".open-video-modal");
  cards.forEach(el => el.addEventListener("click", event => {
    if (window.innerWidth > videoThresholdScreenSize) {
      const cTarget = event.currentTarget;
      const title = cTarget.querySelector(".item-title");
      const img = cTarget.querySelector(".img");
      const bg = cTarget.querySelector(".pop-up-bg");
      const video = cTarget.querySelector(".video");
      setModalContent({
        title,
        img,
        bg,
        video
      });
      openModal();
    }
  }));
}
//# sourceMappingURL=main.js.map
