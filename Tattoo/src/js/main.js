new WOW().init();

const tabletScreenSize = 768;

// for header

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
const overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    overflow.classList.toggle("overflow_active");
  });
};

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    overflow.classList.toggle("overflow_active");
  });
};

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      overflow.classList.remove("overflow_active");
    })
  }
};

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
      ? win.innerWidth <= width
      : win.innerWidth >= width;
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

const howSlider = destroySlidersOnResize(".slider-how", 768, {
  speed: 0,

  thumbs: {
    swiper: {
      el: '.slider-how-nav',
      slidesPerView: 4,
    },
  },

  on: {
    activeIndexChange: (swiper) => {
      sliderHowVideos[swiper.activeIndex].play();
      sliderHowVideos[swiper.previousIndex].currentTime = 0;
      sliderHowVideos[swiper.previousIndex].pause();
    },
  }
});

destroySlidersOnResize(".slider-how-nav", 768, {});

destroySlidersOnResize(".slider-our", 1, {
  spaceBetween: 20,
  freeMode: true,
  slidesPerView: 'auto',

  breakpoints: {
    300: {
      spaceBetween: 10,
    },

    280: {
      spaceBetween: 20,
    },
  },
});

destroySlidersOnResize(".slider-reviews", 1, {
  spaceBetween: 20,
  slidesPerView: 5,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 5,
    },
  },

});

/* castom anim */

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements) {
  observer.observe(elm);
}

// For counter animate
if (document.querySelectorAll(".count-progress").length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target.getAttribute("data-animated") === "false"
      ) {
        const element = entry.target;
        const count = parseFloat(element.innerText);
        const isInteger = count % 1 === 0; // Проверяем, является ли число целым

        let currentCount = 0;
        const speed = parseInt(element.getAttribute("data-speed")) || 10;
        const step = parseFloat(element.getAttribute("data-step")) || 0.1;
        const decimalPlaces = isInteger ? 0 : 1; // Устанавливаем количество знаков после запятой в зависимости от того, целое число или нет

        const interval = setInterval(() => {
          if (currentCount < count) {
            currentCount += step;
            if (currentCount > count) {
              currentCount = count;
            }
            element.innerText = currentCount.toFixed(decimalPlaces);
          } else {
            clearInterval(interval);
            element.setAttribute("data-animated", "true");
          }
        }, speed);
      }
    });
  });

  document.querySelectorAll(".count-progress").forEach((element) => {
    observer.observe(element);
  });
}

const sliderHowVideos = document.querySelectorAll(".slider-how video");

["load", "resize"].forEach((event) => {
  window.addEventListener(event, videoSliderSync);
});

function videoSliderSync() {
  if (window.innerWidth > tabletScreenSize) {
    sliderHowVideos.forEach((video) => {
      video.pause();
      video.addEventListener("ended", () => {
        const nextSlideIndex = howSlider.activeIndex + 1;
        howSlider.slideNext();
        sliderHowVideos[nextSlideIndex]?.play();
      });
    });

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const firstVideo = howSlider.hostEl.querySelector("video");
            firstVideo.play();
          }
        });
      },
      { threshold: [0.5] }
    );
    videoObserver.observe(howSlider.hostEl);
    return;
  }

  const mobileVideoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          // entry.target.currentTime = 0;
          entry.target.pause();
        }
      });
    },
    { threshold: [0.5] }
  );
  sliderHowVideos.forEach((video) => {
    video.pause();
    mobileVideoObserver.observe(video);
  });
}
