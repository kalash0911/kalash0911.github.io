const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
const overflow = document.querySelector(".overflow");

const winTriggersMethods = ["resize", "load"];
let prevWidth = window.innerWidth;

winTriggersMethods.forEach((method) => {
  window.addEventListener(method, () => {
    // worst case to refresh animation?
    if (method === "load") {
      phoneAnimation();
    }
    if (method === "resize" && prevWidth !== window.innerWidth) {
      ScrollTrigger?.killAll();
      prevWidth = window.innerWidth;
      phoneAnimation();
      return;
    }
  });
});

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains("burger_active")) {
      burger.classList.add("burger_finish");
      burger.classList.remove("burger_active");
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add("burger_active");
      burger.classList.remove("burger_finish");
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
}

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains("burger_active")) {
      burger.classList.add("burger_finish");
      burger.classList.remove("burger_active");
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add("burger_active");
      burger.classList.remove("burger_finish");
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
}

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add("burger_finish");
      menuBody.classList.remove("menu_active");
      overflow.classList.remove("overflow_active");
    });
  }
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
      const paginationBtns = document.querySelectorAll('.swiper-pagination-bullet');
      paginationBtns.forEach((btn, ind) => {
        btn.addEventListener('click', () => {
          startProgressTimer(ind, true);
        })
      })
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
      path: `./files/step_${ind + 1}/data.json`,
      render: "svg",
      loop: false,
      autoplay: false,
    })
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


// Scroll Trigger phoneAnimation
function phoneAnimation() {
  const secondSection = document.querySelector(".sec-section");
  const phone = document.querySelector(".phone-anim");

  // if(window.innerWidth < 768) {
  //   phone.classList.add('d-none')
  //   return;
  // };

  if (!secondSection || !phone) return;

  const sectionRect = secondSection.getBoundingClientRect();
  const fromY = sectionRect.top + 110;

  const firstSlide = document.querySelectorAll(".swiper-slide .json-anim")[0];
  firstSlide.classList.add("hidden");

  gsap.fromTo(
    phone,
    {
      x: 0,
      y: -fromY,
      rotation: 5,
    },
    {
      x: 0,
      y: 0,
      rotation: 0,
      scrollTrigger: {
        trigger: secondSection,
        start: `-25`,
        end: `bottom`,
        scrub: 1,
        /* markers: true, */
        onLeave: () => {
          phone.classList.add("d-none");
          firstSlide.classList.remove("hidden");
          jsonPhoneAnimations[0].play();

          if (!timerIntervalId) {
            startProgressTimer();
          }
        },
      },
    }
  );
}

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
  const progressCircle = document.querySelector('.raz');
  const clockArrow = document.querySelector('.clock-arrow');
  let progress = msPerSlide * (currentSlideIndex + 1) - msPerSlide;


  if (!timerIntervalId) {
    timerIntervalId = setInterval(() => {
      progress += intervalTimer;
      const percent = progress / durationMS * 100;
      const clockArrowDeg = progress / durationMS * 360;
      progressCircle.style.setProperty(
        "--pie-p",
        `${percent}%`
      );
      clockArrow.style.transform = `translate(-50%, -50%) rotate(${clockArrowDeg}deg)`;
      checktimer(progress, durationMS, timerIntervalId)
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
