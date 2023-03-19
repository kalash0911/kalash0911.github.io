// Swiper:

/* function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);
  let swiper = new Swiper(selector, init);

  const toggleInit = () => {
    const neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width
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

destroySlidersOnResize(".me-slider", 960, {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
}); */


const dot = document.getElementById('dot');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollX;
  dot.style.left = scrollPosition + 'px';
});



/* header logick */

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth < 1024) {
      if (targetElement.classList.contains('arrows')) {
        targetElement.closest('.menu-item').classList.toggle('menu-item_active');
        targetElement.closest('.menu').classList.toggle('opacity-links')
      }
    }
  }
};

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
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
    })
  }
};


/* ///// */

/* paralax */

let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let m3 = document.getElementById('m3');
let grad = document.getElementById('grad');


window.addEventListener('scroll', function () {
  let value = window.scrollY;
  m2.style.top = 90 + value * -0.15 + 'px';
  m3.style.top = 185 + value * -0.3 + 'px';
  grad.style.top = 375 + value * -0.3 + 'px';
})



/* ///// */

/* Modal popUp img */

const itemImg = document.querySelectorAll('.gallery__item-img');
const modal = document.querySelector('.modal-img');
const modalImg = modal.querySelector('img');
const overflowImg = document.querySelector('.modal-img__overflow');
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

/* ///// */

/* Tabs */

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tab_active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('tab_active');
      });

      tabsItem.forEach(function (item) {
        item.classList.remove('tab__item_active');
      });

      currentBtn.classList.add('tab_active');
      currentTab.classList.add('tab__item_active');
    }
  });
});

/* ///// */

/* Tabs2 */

const tabsBtn2 = document.querySelectorAll('.tabs2__nav-btn');
const tabsItem2 = document.querySelectorAll('.tabs2__item');

tabsBtn2.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn2 = item;
    let tabId2 = currentBtn2.getAttribute('data-tab');
    let currentTab2 = document.querySelector(tabId2);

    if (!currentBtn2.classList.contains('tab2_active')) {
      tabsBtn2.forEach(function (item) {
        item.classList.remove('tab2_active');
      });

      tabsItem2.forEach(function (item) {
        item.classList.remove('tab2__item_active');
      });

      currentBtn2.classList.add('tab2_active');
      currentTab2.classList.add('tab2__item_active');
    }
  });
});

/* ///// */

/* Открытие кнопки и её закрытие при клике вне её области */

const langWrap = document.querySelector(".lang-wrap");
const langName = document.querySelector(".languages-name");

if (langName) {
  langName.addEventListener("click", function (e) {
    e.preventDefault();
    langWrap.classList.toggle("lang-wrap_active");
  });

  document.body.addEventListener("click", function (e) {
    if (!e.target.closest('.lang-wrap_active')) {
      langWrap.classList.remove("lang-wrap_active");
    };
  });
};

/* ///// */

/* Анимация при скролле */

const progressCircle = document.querySelector('.progress-content');

document.addEventListener('DOMContentLoaded', () => {
  initCounter();
});

function initCounter() {
  let statWrapEl = document.querySelector('.init-progress');
  let initStart = false;
  let maxNumbersElArr = document.querySelectorAll('.progress-title > span');

  window.addEventListener('scroll', () => {
    if (isVisible(statWrapEl) && !initStart) {
      progressCircle.classList.add('progress_active');
      initStart = true;
      maxNumbersElArr.forEach((el) => {
        const maxNumber = Number(el.textContent);
        let startCount = 1;
        let intervalId = setInterval(() => {
          if (startCount < maxNumber) {
            startCount += 1;
            if (startCount > maxNumber) {
              startCount = maxNumber;
              clearInterval(intervalId);
            }
            el.textContent = formatNumber(startCount);
          }
        }, 20)
      })
    }
  });
}

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/* ///// */

/* Открытие попапа с помощью кнопки */

const openVideo = document.querySelector(".open-video");
const closeVideo = document.querySelector(".close-video");
const videoBlock = document.querySelector(".video-block");

openVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.add("video-block_active");
  document.body.classList.add("body_overflow");
  document.body.classList.add("body_lock");
  document.body.addEventListener("click", closeVideoEvent);
});

closeVideo.addEventListener("click", function (e) {
  e.preventDefault();
  videoBlock.classList.remove("video-block_active");
  document.body.classList.remove("body_overflow");
  document.body.classList.remove("body_lock");
  document.body.removeEventListener("click", closeVideoEvent);
});

function closeVideoEvent(e) {
  if (e.target.id != 'video' && !e.target.closest('.open-video')) {
    videoBlock.classList.remove("video-block_active");
    document.body.classList.remove("body_overflow");
    document.body.classList.remove("body_lock");
    document.body.removeEventListener("click", closeVideoEvent);
  }
}

/* ///// */