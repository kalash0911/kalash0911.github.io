function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome') != -1) && (ua.indexOf('version/') != -1)))
    const isiphone = (/iPad|iPhone|iPod/.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    return (isSafari || isiphone) && hasMediaCapabilities
}

const playerKids = document.querySelectorAll('.kids');
const playerStep = document.querySelectorAll('.img-step');
const playerStepMob = document.querySelectorAll('.img-step-mob');

playerKids.forEach((video, ind) => { video.src = supportsHEVCAlpha() ? `./files/${ind + 1}.mov` : `./files/${ind + 1}.webm`; })

playerStep.forEach((video, ind) => { video.src = supportsHEVCAlpha() ? `./files/step${ind + 1}.mp4` : `./files/step${ind + 1}.webm`; })

playerStepMob.forEach((video, ind) => { video.src = supportsHEVCAlpha() ? `./files/step${ind + 1}-mob.mp4` : `./files/step${ind + 1}-mob.webm`; })



// Video controls
initVideoPlayers();

function initVideoPlayers() {
    const videoWraps = document.querySelectorAll(".video-wrap");
    videoWraps?.forEach((videoWrap) => {
        const video = videoWrap.querySelector(".video");
        const playButton = videoWrap.querySelector(".play-button");

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

            currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
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

const itemImg = document.querySelectorAll('.gallery__item-img');
const modal = document.querySelector('.modal-pop-up');
const modalImg = modal.querySelector('img');
const overflowImg = document.querySelector('.modal-overflow');
const closeBtnImg = document.querySelector('.modal-btn-close');

function showImg(e) {
    document.body.classList.add("body_lock");
    modal.classList.add("modal-img_active");
    e.preventDefault();

    let img = e.target.closest('img');
    let src = img.getAttribute('src');

    modalImg.setAttribute('src', src);
};

function closeImg() {
    document.body.classList.remove("body_lock");
    modal.classList.remove("modal-img_active");
};

for (let i = 0; i < itemImg.length; ++i) {
    itemImg[i].addEventListener("click", function (e) {
        showImg(e);
    });
};

let modalActive = document.querySelectorAll('.modal-img_active');

if (modalActive) {
    overflowImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });

    closeBtnImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });
};