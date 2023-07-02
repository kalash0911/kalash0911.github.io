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
}

let menuSteps = [
  'Write a detailed description of the design you would like to create',
  'Select your desired square footage',
  'Choose one interior design style from our catalog.',
  'As needed, you can upload a reference image directly from your iPhone gallery',
  'Just 60 seconds of patience…',
  '4 results are ready. Edit them or upscale for higher resolution.',
  "Here's your interior design, delivered in under 90 seconds."
]

destroySlidersOnResize(".stepSlider", 9999999, {
  spaceBetween: 20,
  effect: "fade",
  speed: 1200,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  /*   mousewheel: {
      invert: false,
      releaseOnEdges: true,
    }, */

  pagination: {
    el: ".slider-nav",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + "<h2>" + (menuSteps[index]) + "</h2>" + "</li>";
    },
  },

  /*   on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    } */
});
