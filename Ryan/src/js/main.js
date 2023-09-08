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