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

// For Scroll

function handleScroll() {
  const body = document.querySelector('body');

  if (window.scrollY > 0) {
    body.classList.add('scroll');
  } else {
    body.classList.remove('scroll');
  }
}

window.addEventListener('scroll', handleScroll);

// For Paralax

window.addEventListener('scroll', function () {
  const section = document.getElementById('mission');
  const paralax = document.querySelector('.paralax');
  const windowHeight = window.innerHeight;
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;

  if (sectionBottom <= windowHeight && sectionBottom >= 0) {
    const translateY = Math.max(0, (sectionBottom - windowHeight) / -windowHeight * 300);
    paralax.style.transform = `translateY(${translateY}%)`;
  }
});


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

const vipSlider = destroySlidersOnResize(".slider-vip", 99999, {

  autoplay: {
    delay: 5000,
  },

  thumbs: {
    swiper: {
      el: '.slider-vip-nav',
      slidesPerView: 5,
    },
  },

});
vipSlider.autoplay.stop();

destroySlidersOnResize(".slider-vip-nav", 99999, {});

const planSlider = destroySlidersOnResize(".slider-plan", 99999, {

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  thumbs: {
    swiper: ".slider-plan-nav",
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      thumbs: {
        swiper: ".slider-plan-nav",
      },
    },

    320: {
      thumbs: false,
    },
  },
  on: {
    activeIndexChange: (swiper) => {
      jsonPhoneAnimations[swiper.activeIndex].play();
      jsonPhoneAnimations[swiper.previousIndex].stop();
      /* const { activeIndex, previousIndex } = swiper;
      const ind = notFullAnimData.indexOf(
        `${activeIndex + 1}`
      );
      const prevInd = notFullAnimData.indexOf(
        `${previousIndex + 1}`
      );
      jsonPhoneAnimations[ind]?.play();
      jsonPhoneAnimations[prevInd]?.stop(); */
    },
  },
});

const planSliderNav = destroySlidersOnResize(".slider-plan-nav", 99999, {

  direction: "vertical",
  slidesPerView: 8,
  mousewheel: true,
  freeMode: true,

  breakpoints: {
    768: {
      slidesPerView: 8,

      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    },

    320: {
      direction: "horizontal",
      freeMode: false,
      slidesPerView: 1,
    },
  },

});

function handleScreenSizeChange() {
  if (window.innerWidth <= 768) {
    planSlider.controller.control = planSliderNav;
    planSliderNav.controller.control = planSlider;
  } else {
  }
}

handleScreenSizeChange();

window.addEventListener('resize', handleScreenSizeChange);


const planSliders = document.querySelectorAll(
  ".plan-section .slider-plan .swiper-slide"
);
let animLoadCounter = 0;
let totalDuration = 0;
let accessAnimLoadCounter = 0;

const jsonPhoneAnimations = new Array(planSliders.length).fill('step').map((step, ind, arr) => {
  const anim = bodymovin.loadAnimation({
    container: document.getElementById(`${step}_${ind + 1}`),
    path: `./files/plan_anim/data-${ind + 1}.json`,
    /* container: document.getElementById(`step_${step}`),
    path: `./files/plan_anim/data-${step}.json`, */
    render: "svg",
    loop: false,
    autoplay: false,
  });
  anim.addEventListener("DOMLoaded", () => {
    animLoadCounter += 1;
    if (animLoadCounter === arr.length) {
      totalDuration = jsonPhoneAnimations.reduce((prev, cur) => {
        cur.onComplete = () => {
          planSlider.slideNext();
        };
        return (prev += cur.getDuration());
      }, 0);
    }
  });
  return anim;
});

let isPlanSectionViewed = false;
let isVipSectionViewed = false;
let isAccessSectionViewed = false;

const startSlider = ({ target }) => {
  const sectionClassName = target.className;
  switch (sectionClassName) {
    case "plan-section":
      if (isPlanSectionViewed) return;
      jsonPhoneAnimations[0].play();
      isPlanSectionViewed = true;
      break;
    case "vip-section":
      if (isVipSectionViewed) return;
      vipSlider.autoplay.start();
      isVipSectionViewed = true;
      break;
    case "access-section":
      if (isAccessSectionViewed) return;
      jsonAccessAnimations[0].play();
      isVipSectionViewed = true;
      break;
    default:
      break;
  }
};


const jsonAccessAnimations = new Array(4).fill('anim').map((step, ind, arr) => {
  const anim = bodymovin.loadAnimation({
    container: document.getElementById(`${step}_${ind + 1}`),
    path: `./files/plan_anim/data-${ind + 1}.json`,
    /* container: document.getElementById(`step_${step}`),
    path: `./files/plan_anim/data-${step}.json`, */
    render: "svg",
    loop: false,
    autoplay: false,
  });
  anim.addEventListener("DOMLoaded", () => {
    accessAnimLoadCounter += 1;
    if (accessAnimLoadCounter === arr.length) {
      totalDuration = jsonAccessAnimations.reduce((prev, cur, ind) => {
        const animWrapper = jsonAccessAnimations[ind].wrapper.closest('.item');
        cur.onComplete = () => {
          if(jsonAccessAnimations[ind + 1]) {
            jsonAccessAnimations[ind + 1].play();
          }
          if(animWrapper) {
            animWrapper.classList.add('anim-done')
          }
        };
        cur.onEnterFrame = () => {
          if(animWrapper) {
            animWrapper.classList.add('active')
          }
        }
        return (prev += cur.getDuration());
      }, 0);
    }
  });
  return anim;
});


const planIntersectionObs = document.querySelector(".plan-section");
const vipIntersectionObs = document.querySelector(".vip-section");
const accessSection = document.querySelector('.access-section')
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startSlider(entry);
    }
  });
}
function createObserver(target, callback) {
  const options = {
    root: null,
    threshold: 0,
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}

createObserver(planIntersectionObs, callback);
createObserver(vipIntersectionObs, callback);
createObserver(accessSection, callback)