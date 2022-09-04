import { PLANET_ENDPOINT_CONTACT } from './constants/link.js';

/* header */

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu");
const linkClose = document.querySelectorAll(".link-close");


if (burger) {
  burgerOutsideClick();
  burger.addEventListener("click", openMenu);
};

if (linkClose.length) {
  for(var i =0;i<linkClose.length;++i){
    linkClose[i].addEventListener("click", closeMenu)
  }
};

function openMenu(e) {
  document.body.classList.toggle("body_lock");
  document.body.classList.toggle("active");
  if(burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
    }
  menuBody.classList.toggle("menu_active");
}

function closeMenu(e) {
  document.body.classList.remove("body_lock");
  document.body.classList.remove("active");
  burger.classList.remove("burger_active");
  burger.classList.add('burger_finish');
  menuBody.classList.remove("menu_active");
}

function burgerOutsideClick() {
  let backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', closeMenu)
}

/* popUp */

const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const btnOpenPopUp = document.querySelector('.open-popup');
const btnClosePopUp = document.querySelector('.close-popup');


if (btnOpenPopUp) {
  btnOpenPopUp.addEventListener("click", openPopUp);
};

if (btnClosePopUp) {
  btnClosePopUp.addEventListener("click", closePopUp);
  overlay.addEventListener("click", closePopUp);
};

function openPopUp (e){
  overlay.classList.add("active");
  popUp.classList.add("active");
  document.body.classList.add("body_lock");
}

function closePopUp(e) {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
  document.body.classList.remove("body_lock");
}

/* navmenu service pages */

const tabsBtn  = document.querySelectorAll('.tab_nav-btn');
const tabsItem = document.querySelectorAll('.tab_list');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('btn_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('btn_active');
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('list_active');
            });

            currentBtn.classList.add('btn_active');
            currentTab.classList.add('list_active');
        }
    });
});

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);

  if(!sliderSelector) return;

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

destroySlidersOnResize(".reviews-slider", 99999, {
  spaceBetween: 20,
  speed: 800,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* reviews opener */

const reviewsBlock = document.querySelectorAll(".text-wrap");

reviewsBlock.forEach(function(review){
  const btnOpen = review.querySelector('.rev-open');
  const btnClose = review.querySelector('.rev-close');

  if(btnOpen){
    btnOpen.addEventListener('click', function(){
      review.classList.add("active_review");
    });

    btnClose.addEventListener('click', function(){
      review.classList.remove("active_review");
    });
  }
});

new WOW().init();

/* castom anim */

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

/* active link page */

let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
    navItem = document.querySelector(`[data-id-nav=${pageId}]`);

if(pageId == navItem.getAttribute("data-id-nav")) {
    navItem.classList.add("active-link");
}

/* contact form */
initContactForm();

function initContactForm() {
  const formWrap = document.querySelector(".form-wrap");
  
  if (!formWrap) return;
  
  const form = formWrap.querySelector("#contactForm");
  const successMsgBlock = formWrap.querySelector('.success-msg');
  const formContent = formWrap.querySelector('.form-content');
  const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const firstNameInput = form.querySelector("#firstName");
  const lastNameInput = form.querySelector("#lastName");
  const emailInput = form.querySelector("#email");
  const messageInput = form.querySelector("#message");
  const firstNameErrorEl = form.querySelector("#firstNameError");
  const lastNameErrorEl = form.querySelector("#lastNameError");
  const emailErrorEl = form.querySelector("#emailError");
  const fetchErrorEl = formWrap.querySelector('.fetch-error');
  const spinner = document.querySelector('.spinnerWrap');
  let isFormValid = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm("firstNameInput", firstNameInput.value);
    validateForm("lastNameInput", lastNameInput.value);
    validateForm("emailInput", emailInput.value);

    if(!isFormValid) return;

    fetchErrorEl.classList.remove('active');

    const request = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    }

    spinner.classList.remove('d-none');

    fetch(PLANET_ENDPOINT_CONTACT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(request),
    })
      .then((res) => {
        if (res.ok) {
          successMsgBlock.classList.add('active');
          formContent.classList.add('d-none');
          spinner.classList.add('d-none');
          formWrap.classList.add('form-send');
        } else {
          fetchErrorEl.classList.add('active');
        }
      })
      .catch((error) => {
        console.log("error: ", error);
        fetchErrorEl.classList.add('active');
      })
      .finally(() => {
        spinner.classList.add('d-none');
      });

  });

  firstNameInput.addEventListener("input", (event) => {
    validateForm("firstNameInput", event.target.value);
  });
  lastNameInput.addEventListener("input", (event) => {
    validateForm("lastNameInput", event.target.value);
  });
  emailInput.addEventListener("input", (event) => {
    validateForm("emailInput", event.target.value);
  });

  function validateForm(field, value) {
    switch (field) {
      case "firstNameInput":
        if(value < 1) {
          firstNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }
        isFormValid = true;
        firstNameErrorEl.classList.remove("active");
        break;
      case "lastNameInput":
        if(value < 1) {
          lastNameErrorEl.classList.add("active")
          isFormValid = false;
          return;
        }
        isFormValid = true;
        lastNameErrorEl.classList.remove("active");
        break;
      case "emailInput":
        if(!EMAIL_REGEX.test(value)) {
          emailErrorEl.classList.add("active")
          isFormValid = false;
          return;
        }
        isFormValid = true;
        emailErrorEl.classList.remove("active");
        break;
    }
  }
}

/* services menu logic */
initServiceMenu();

function initServiceMenu() {
  const menuItem = document.querySelectorAll(".menu-item");

  document.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (targetElement.classList.contains('arrows')) {
      closeOpenItems();
      targetElement.closest('.menu-item').classList.toggle('menu-item_active');
    } else {
      closeOpenItems();
    };
  });

  function closeOpenItems() {
    menuItem.forEach((el) => {
      el.classList.remove('menu-item_active');
    })
  }
}

/* Sticky */
initStickyMenu();

function initStickyMenu() {
  const menuEl = document.querySelector('.menu-sec');
  
  if(!menuEl) return;

  const originMenuTop = menuEl.offsetParent.offsetTop;
  
  document.addEventListener('scroll', () => {
    if(window.scrollY > originMenuTop) {
      menuEl.classList.add('fixed');
    } else {
      menuEl.classList.remove('fixed');
    };
  })
}