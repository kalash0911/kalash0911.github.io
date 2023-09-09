const videoThresholdScreenSize = 860;

function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf("safari") != -1 &&
    !(ua.indexOf("chrome") != -1) &&
    ua.indexOf("version/") != -1;
  const isiphone =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return (isSafari || isiphone) && hasMediaCapabilities;
}

const playerKids = document.querySelectorAll(".kids");
const playerStep = document.querySelectorAll(".img-step");
const playerStepMob = document.querySelectorAll(".img-step-mob");

playerKids.forEach((video, ind) => {
  video.src = supportsHEVCAlpha()
    ? `./files/${ind + 1}.mov`
    : `./files/${ind + 1}.webm`;
});

playerStep.forEach((video, ind) => {
  video.src = supportsHEVCAlpha()
    ? `./files/step${ind + 1}.mp4`
    : `./files/step${ind + 1}.webm`;
});

playerStepMob.forEach((video, ind) => {
  video.src = supportsHEVCAlpha()
    ? `./files/step${ind + 1}-mob.mp4`
    : `./files/step${ind + 1}-mob.webm`;
});

// Video controls
initVideoPlayers();

function initVideoPlayers() {
  const videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps?.forEach((videoWrap) => {
    const video = videoWrap.querySelector(".video");
    const playButton = videoWrap.querySelector(".play-button");

    //Play and Pause button
    playButton.addEventListener("click", (e) => {
      if (window.innerWidth <= videoThresholdScreenSize) {
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

// Video controls pop-up
initVideoPlayersPopUp();

function initVideoPlayersPopUp() {
  const videoWraps = document.querySelectorAll(".video-wrap-pop-up");
  videoWraps?.forEach((videoWrap) => {
    const video = videoWrap.querySelector(".video");
    const playButton = videoWrap.querySelector(".play-button");
    const muteButton = videoWrap.querySelector(".mute-button");
    const volume = videoWrap.querySelector(".volume");
    const currentTimeElement = videoWrap.querySelector(".current");
    const durationTimeElement = videoWrap.querySelector(".duration");
    const progress = videoWrap.querySelector(".video-progress");
    const progressBar = videoWrap.querySelector(".video-progress-filled");

    //Play and Pause button
    playButton.addEventListener("click", (e) => {
      if (video.paused) {
        video.play();
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        videoWrap.classList.toggle("active");
      }
    });

    //Mute button
    muteButton.addEventListener("click", (e) => {
      if (video.muted) {
        video.muted = false;
        muteButton.classList.toggle("mute");
      } else {
        video.muted = true;
        muteButton.classList.toggle("mute");
      }
    });

    //volume
    volume.addEventListener("mousemove", (e) => {
      video.volume = e.target.value;
    });

    //current time and duration
    const currentTime = () => {
      let currentMinutes = Math.floor(video.currentTime / 60);
      let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(video.duration / 60);
      let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

      currentTimeElement.innerHTML = `${currentMinutes}:${
        currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
      }`;
      durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
    };

    video.addEventListener("timeupdate", currentTime);

    //Progress bar
    video.addEventListener("timeupdate", () => {
      const percentage = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    });

    //change progress bar on click
    progress.addEventListener("click", (e) => {
      const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
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
modal();
function modal() {
  const modalPopup = document.querySelector(".modal-pop-up");
  const titleModal = modalPopup.querySelector(".pop-up-title");
  const bgModal = modalPopup.querySelector(".pop-up-bg");
  const videoModal = modalPopup.querySelector(".video");

  const openModal = () => (modalPopup.style.display = "flex");
  const closeModal = () => {
    modalPopup.style.display = "none";
    videoModal.pause();
    videoModal.currentTime = 0;
    document.querySelector(".video-wrap-pop-up").classList.remove("active");
  };
  const setModalContent = ({ title, img, bg, video }) => {
    titleModal.textContent = title.textContent;
    bgModal.setAttribute("src", bg.src);
    videoModal
      .querySelectorAll("source")
      .forEach((el, i) =>
        el.setAttribute("src", video.querySelectorAll("source")[i].src)
      );
  };

  document.addEventListener("click", (event) => {
    const { target } = event;
    if (
      target.closest(".modal-btn-close") ||
      target.closest(".modal-overflow")
    ) {
      event.preventDefault();
      closeModal();
    }
  });

  const cards = document.querySelectorAll(".open-video-modal");
  cards.forEach((el) =>
    el.addEventListener("click", (event) => {
      if (window.innerWidth > videoThresholdScreenSize) {
        const cTarget = event.currentTarget;
        const title = cTarget.querySelector(".item-title");
        const img = cTarget.querySelector(".img");
        const bg = cTarget.querySelector(".pop-up-bg");
        const video = cTarget.querySelector(".video");
        setModalContent({ title, img, bg, video });
        openModal();
      }
    })
  );
}
