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
