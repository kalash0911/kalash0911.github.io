new WOW().init();

initSwiperImg();

function initSwiperImg() {
    const slider = new Swiper(".swiper_indise", {
        speed: 1400,
        grabCursor: true,
        loop: true,
        autoplay: true,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 3.5,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3.5,
            },
            1444: {
                slidesPerView: 4,
            },
            1920: {
                slidesPerView: 5,
            },
        },
    });
}

// JSON ANIMATION + SWIPER
let menuSteps = [
    "Write a detailed description of the design you would like to create",
    "Select your desired square footage",
    "Choose one interior design style from our catalog",
    "As needed, you can upload a reference image directly from your iPhone gallery",
    "Just 60 seconds of patience…",
    "4 results are ready. Edit them or upscale for higher resolution",
    "Here's your interior design, delivered in under 90 seconds",
];

let loadCounter = 0;
let totalDuration = 0;
let timerIntervalId;

const animPhoneSlider = destroySlidersOnResize(".stepSlider", 9999999, {
    spaceBetween: 20,
    speed: 0,

    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   stopOnLastSlide: true,
    // },

    autoplay: false,

    pagination: {
        el: ".slider-nav",
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<li class="' +
                className +
                '">' +
                "<h2>" +
                menuSteps[index] +
                "</h2>" +
                "</li>"
            );
        },
    },

    on: {
        afterInit: () => {
            const paginationBtns = document.querySelectorAll(
                ".swiper-pagination-bullet"
            );
            paginationBtns.forEach((btn, ind) => {
                btn.addEventListener("click", () => {
                    startProgressTimer(ind, true);
                });
            });
        },
        activeIndexChange: (swiper) => {
            jsonPhoneAnimations[swiper.activeIndex].play();
            jsonPhoneAnimations[swiper.previousIndex].stop();
        },
    },
});

const jsonPhoneAnimations = new Array(menuSteps.length)
    .fill("step")
    .map((step, ind, arr) => {
        const anim = bodymovin.loadAnimation({
            container: document.getElementById(`${step}_${ind + 1}`),
            path: `files/step_${ind + 1}/data.json`,
            render: "svg",
            loop: false,
            autoplay: false,
        });
        anim.addEventListener("DOMLoaded", () => {
            loadCounter += 1;
            if (loadCounter === arr.length) {
                totalDuration = jsonPhoneAnimations.reduce((prev, cur) => {
                    cur.onComplete = () => {
                        animPhoneSlider.slideNext();
                    };
                    return (prev += cur.getDuration());
                }, 0);
            }
        });
        return anim;
    });

function checktimer(progress, total, intervalId) {
    if (progress >= total) clearInterval(intervalId);
}


function startProgressTimer(currentSlideIndex = 0, reset = false) {
    if (reset) {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
    }

    const totalSlides = 7;
    const fps = 16;
    const durationMS = totalDuration * 1000;
    const msPerSlide = durationMS / totalSlides;

    const intervalTimer = msPerSlide / fps;
    const progressCircle = document.querySelector(".raz");
    const clockArrow = document.querySelector(".clock-arrow");
    let progress = msPerSlide * (currentSlideIndex + 1) - msPerSlide;

    if (!timerIntervalId) {
        timerIntervalId = setInterval(() => {

            const totalTime = (progress / durationMS) || 0;

            progress += intervalTimer;
            const percent = totalTime * 100;
            const clockArrowDeg = totalTime * 360;
            progressCircle.style.setProperty("--pie-p", `${percent}%`);
            clockArrow.style.transform = `translate(-50%, -50%) rotate(${clockArrowDeg}deg)`;
            checktimer(progress, durationMS, timerIntervalId);
        }, intervalTimer);
    }
}

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
        ...obj,
    };

    const win = window;
    const sliderSelector = document.querySelector(selector);
    let swiper = new Swiper(selector, init);

    swiper.on("slideChange", function () {
        setTimeout(function () {
            swiper.params.mousewheel.releaseOnEdges = false;
        }, 500);
    });
    swiper.on("reachEnd", function () {
        setTimeout(function () {
            swiper.params.mousewheel.releaseOnEdges = true;
        }, 750);
    });
    swiper.on("reachBeginning", function () {
        setTimeout(function () {
            swiper.params.mousewheel.releaseOnEdges = true;
        }, 750);
    });

    const toggleInit = () => {
        const neededWidth = moreThan
            ? win.innerWidth >= width
            : win.innerWidth <= width;
        if (neededWidth) {
            if (!sliderSelector?.classList.contains("swiper-initialized")) {
                swiper = new Swiper(selector, init);
            }
        } else if (sliderSelector.classList.contains("swiper-initialized")) {
            swiper.destroy();
        }
    };

    ["load", "resize"].forEach((evt) =>
        win.addEventListener(evt, toggleInit, false)
    );

    return swiper;
}

const indiseIntersectionObs = document.querySelector(".indise_slider_section");
function callback(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            jsonPhoneAnimations[0].play();
            startProgressTimer();
        }
    });
}

function createObserver(target, callback) {
    const options = {
        root: null,
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}

createObserver(indiseIntersectionObs, callback);


