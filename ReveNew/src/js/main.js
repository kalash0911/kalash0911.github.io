// for header

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
const overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
};

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
};

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
      menuBody.classList.remove("menu_active");
      overflow.classList.remove("overflow_active");
    })
  }
};

// For Paralax

let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateY(" + window.scrollY / 25 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)


// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);
  let swiper = new Swiper(selector, init);

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

destroySlidersOnResize(".slider-vip", 99999, {

  autoplay: {
    delay: 2000,
  },

  thumbs: {
    swiper: {
      el: '.slider-vip-nav',
      slidesPerView: 5,
    },
  },

});

destroySlidersOnResize(".slider-vip-nav", 99999, {});

const planSlider = destroySlidersOnResize(".slider-plan", 99999, {
  thumbs: {
    swiper: {
      el: ".slider-plan-nav",
      direction: "vertical",
      slidesPerView: 8,
      loop: true,

      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },

      breakpoints: {
        768: {
          slidesPerView: 8,
        },

        320: {
          slidesPerView: 4,
        },
      },
    },
  },
  on: {
    activeIndexChange: (swiper) => {
      // jsonPhoneAnimations[swiper.activeIndex].play();
      // jsonPhoneAnimations[swiper.previousIndex].stop();
      // TODO: Replace when will be full list of animation
      const { activeIndex, previousIndex } = swiper;
      const ind = ["1", "3", "4", "6", "7", "9", "10", "11", "12"].indexOf(
        `${activeIndex + 1}`
      );
      const prevInd = ["1", "3", "4", "6", "7", "9", "10", "11", "12"].indexOf(
        `${previousIndex + 1}`
      );
      jsonPhoneAnimations[ind]?.play();
      jsonPhoneAnimations[prevInd]?.stop();
    },
  },
});

destroySlidersOnResize(".slider-plan-nav", 99999, {});

const planSliders = document.querySelectorAll(
  ".plan-section .slider-plan .swiper-slide"
);
let animLoadCounter = 0;
let totalDuration = 0;
// TODO: Replace when will be full list of animation
// new Array(planSliders.length).fill('step')
const jsonPhoneAnimations = [
  "1",
  "3",
  "4",
  "6",
  "7",
  "9",
  "10",
  "11",
  "12",
].map((step, ind, arr) => {
  const anim = bodymovin.loadAnimation({
    // container: document.getElementById(`${step}_${ind + 1}`),
    // path: `./files/plan_anim/data-${ind + 1}.json`,
    container: document.getElementById(`step_${step}`),
    path: `./files/plan_anim/data-${step}.json`,
    render: "svg",
    loop: false,
    autoplay: false,
  });
  anim.addEventListener("DOMLoaded", () => {
    animLoadCounter += 1;
    if (animLoadCounter === arr.length) {
      totalDuration = jsonPhoneAnimations.reduce((prev, cur) => {
        cur.onComplete = () => {
          console.log("cur: ", cur);
          planSlider.slideNext();
        };
        return (prev += cur.getDuration());
      }, 0);
      jsonPhoneAnimations[0].play();
    }
  });
  return anim;
});