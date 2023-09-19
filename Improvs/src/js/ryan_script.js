initAudioPlayers();

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
        ...obj,
    };

    const win = window;
    const sliderSelector = document.querySelector(selector);
    if (!sliderSelector) {
        return;
    }
    let swiper = new Swiper(selector, init);

    const toggleInit = () => {
        const neededWidth = moreThan
            ? win.innerWidth >= width
            : win.innerWidth <= width;
        if (neededWidth) {
            if (!sliderSelector.classList.contains("swiper-initialized")) {
                swiper = new Swiper(selector, init);
            }
        } else if (sliderSelector.classList.contains("swiper-initialized")) {
            swiper.destroy();
        }
    };

    ["load", "resize"].forEach((evt) =>
        win.addEventListener(evt, toggleInit, false)
    );
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
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 2,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 2.5,
        },
        620: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3.6,
        },
        1024: {
            slidesPerView: 4.6,
        },
        1200: {
            slidesPerView: 5.6,
        },
        1441: {
            slidesPerView: "auto",
        },
    },
});

// const slider = new Swiper(".swiper_voice", {
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
    const audioList = document.querySelectorAll(".fairy_sound");
    const playButton = document.querySelectorAll(".play_btn");
    const play = document.querySelectorAll(".play");
    const pause = document.querySelectorAll(".pause");

    playButton.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (audioList[index].paused) {
                audioList[index].play();
                pause[index].classList.add("pauseActive");
                play[index].classList.add("playInactive");
            } else {
                audioList[index].pause();
                pause[index].classList.remove("pauseActive");
                play[index].classList.remove("playInactive");
            }

            audioList.forEach((audio, i) => {
                if (i !== index && !audio.paused) {
                    audio.pause();
                    pause[i].classList.remove("pauseActive");
                    play[i].classList.remove("playInactive");
                }
                audio.addEventListener("ended", () => {
                    pause[i].classList.remove("pauseActive");
                    play[i].classList.remove("playInactive");
                });
            });
        });
    });
}

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
        ? `../files/${ind + 1}.mov`
        : `../files/${ind + 1}.webm`;
});

playerStep.forEach((video, ind) => {
    video.src = supportsHEVCAlpha()
        ? `../files/step${ind + 1}.mp4`
        : `../files/step${ind + 1}.webm`;
});

playerStepMob.forEach((video, ind) => {
    video.src = supportsHEVCAlpha()
        ? `../files/step${ind + 1}-mob.mp4`
        : `../files/step${ind + 1}-mob.webm`;
});
