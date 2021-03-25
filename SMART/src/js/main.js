document.addEventListener('DOMContentLoaded', () => {
  initCounter();
});

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  autoHeight: true,
  speed: 1100,
});

const burger = document.querySelector('.burger');
if (burger) {
  const subMenu = document.querySelector('.sub-menu');
  burger.addEventListener("click", function (e) {
    burger.classList.toggle('burger-active');
    subMenu.classList.toggle('sub-menu-active');
  });
};

const popupLink = document.querySelectorAll('.popup-link');
const popupLogin = document.querySelector('.login-popup')
const popupSingup = document.querySelector('.singup-popup')
const overlay = document.querySelector ('.overlay')
const body = document.querySelector('body')
if (popupLink) {
  popupLink[0].addEventListener("click", function (x) {
    popupLogin.classList.add("popup-active");
    overlay.classList.add("overlay-visible");
    body.classList.add("body-lock");
    const popupClose = popupLogin.querySelector('.popup-btn-close');
    hidePopup(popupClose, popupLogin);
  });
  popupLink[1].addEventListener("click", function (x) {
    popupSingup.classList.add("popup-active");
    overlay.classList.add("overlay-visible");
    body.classList.add("body-lock");
    const popupClose = popupSingup.querySelector('.popup-btn-close');
    hidePopup(popupClose, popupSingup);
  });
};

function hidePopup(btn, popup) {
  btn.addEventListener("click", function () {
    popup.classList.remove("popup-active");
    overlay.classList.remove("overlay-visible");
    body.classList.remove("body-lock");
  });
}

function initCounter() {
  let statWrapEl = document.querySelector('.statistics');
  let initStart = false;
  let maxNumbersElArr = document.querySelectorAll('.statistics-item-wrap > h2');

  window.addEventListener('scroll', () => {
      if(isVisible(statWrapEl) && !initStart) {
          initStart = true;
          maxNumbersElArr.forEach((el) => {
              const maxNumber = Number(el.textContent);
              let startCount = 1;
              let intervalId = setInterval(() => {
                  if(startCount < maxNumber) {
                      startCount += startCount;
                      if (startCount > maxNumber) {
                          startCount = maxNumber;
                          clearInterval(intervalId);
                      }
                      el.textContent = formatNumber(startCount);
                  } 
              }, 50)
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





