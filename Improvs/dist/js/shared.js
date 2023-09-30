"use strict";

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  selectCurrentPage();
  addEventButtonPopUp();
});
var menuItems = document.querySelectorAll(".menu__item"); //BURGERMENU

function selectCurrentPage() {
  cleanHoverMenu();

  if (/index/.test(location.href)) {
    menuItems[0].classList.add("menu_active_link");
  } else if (/our_work/.test(location.href)) {
    menuItems[3].classList.add("menu_active_link");
  } else if (/blog_page/.test(location.href)) {
    menuItems[4].classList.add("menu_active_link");
  } else if (/brain_block/.test(location.href)) {
    menuItems[3].classList.add("menu_active_link");
  } else {
    menuItems[3].classList.add("menu_active_link");
  }
}

function cleanHoverMenu() {
  menuItems.forEach(function (menu) {
    menu.classList.remove("menu_active_link");
  });
}

function initHeader() {
  var burger = document.querySelector(".burger");
  var burger_btn = document.querySelector(".burger-btn");
  var text_click = document.querySelector(".text_burger_btn");
  var menuBody = document.querySelector(".header__menu ");
  var linkClose = document.querySelectorAll(".link-close");
  var menuOverlay = document.querySelector(".menu_overlay");

  if (burger) {
    burger_btn.addEventListener("click", function (e) {
      document.body.classList.toggle("body_lock");
      document.body.classList.toggle("active");
      text_click.classList.toggle("text_burger_btn-click");
      menuOverlay.classList.toggle("menu_overlay_active");

      if (burger.classList.contains("burger_active")) {
        burger.classList.add("burger_finish");
        burger.classList.remove("burger_active");
        window.body_lock = false;
      } else {
        burger.classList.add("burger_active");
        burger.classList.remove("burger_finish");
        window.body_lock = true;
      }

      menuBody.classList.toggle("menu_active");
    });
  }

  if (linkClose.length) {
    for (var i = 0; i < linkClose.length; ++i) {
      linkClose[i].addEventListener("click", function (e) {
        document.body.classList.remove("body_lock");
        document.body.classList.remove("active");
        text_click.classList.remove("text_burger_btn-click");
        burger.classList.remove("burger_active");
        burger.classList.add("burger_finish");
        menuBody.classList.remove("menu_active");
        menuOverlay.classList.remove("menu_overlay_active");
      });
    }
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      text_click.classList.remove("text_burger_btn-click");
      burger.classList.remove("burger_active");
      burger.classList.add("burger_finish");
      menuBody.classList.remove("menu_active");
      menuOverlay.classList.remove("menu_overlay_active");
    });
  }
}

document.addEventListener('scroll', function () {
  var main = document.querySelector("[section=\"video1\"]");
  var website = document.querySelector("[section=\"video2\"]");
  var mobileApplication = document.querySelector("[section=\"video3\"]");
  var work = document.querySelector("[section=\"work\"]");
  var viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;
  var viewportOffsetMain = Math.abs(main.getBoundingClientRect().top + window.scrollY);
  var viewportOffsetWebsite = Math.abs(website.getBoundingClientRect().top + window.scrollY);
  var viewportOffMobileAppication = Math.abs(mobileApplication.getBoundingClientRect().top + window.scrollY);
  var viewportOffWork = Math.abs(work.getBoundingClientRect().top + window.scrollY);

  if (viewedPageHeight >= viewportOffsetMain && viewedPageHeight <= viewportOffMobileAppication) {
    cleanHoverMenu();
    menuItems[1].classList.add("menu_active_link");
  } else if (viewedPageHeight >= viewportOffsetWebsite && viewedPageHeight <= viewportOffWork) {
    cleanHoverMenu();
    menuItems[2].classList.add("menu_active_link");
  }
}); //popUp

var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay-popup");
var body = document.querySelector("body");
var btnsShowPopUp = document.querySelectorAll("[show_pop_up]");
var btnsHidePopUp = document.querySelectorAll("[hide_pop_up]");

function addEventButtonPopUp() {
  btnsShowPopUp.forEach(function (btn) {
    btn.addEventListener('click', function () {
      Show(true);
    });
  });
  btnsHidePopUp.forEach(function (btn) {
    btn.addEventListener('click', function () {
      Show(false);
    });
  });
}

var isOpen = false;

function Show(isShow) {
  if (isShow) {
    overlay.classList.add("active");
    popup.classList.add("active");
    body.classList.add("body_lock");
    isOpen = true;
  } else {
    overlay.classList.remove("active");
    popup.classList.remove("active");
    body.classList.remove("body_lock");
    isOpen = false;
  }

  window.body_lock = isOpen;
} //contact form


var expandBtn = document.querySelector("[expandBtn]");

function expandForm() {
  var contact_form_section = document.querySelector(".contact_form_section");
  contact_form_section.classList.toggle("expand_active");
}

expandBtn.addEventListener('click', expandForm, false);
var animateLogoBlock = document.querySelector('.header_logo');
var animateLogo = bodymovin.loadAnimation({
  wrapper: animateLogoBlock,
  animType: 'svg',
  autoplay: false,
  path: './files/Logo.json'
});
animateLogoBlock.addEventListener("mouseenter", function () {
  animateLogo.play();
});
animateLogoBlock.addEventListener("mouseleave", function () {
  animateLogo.pause();
});
//# sourceMappingURL=shared.js.map
