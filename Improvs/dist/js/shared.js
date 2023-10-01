"use strict";

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  selectCurrentPage();
  addEventButtonPopUp();
});
var menuItems = document.querySelectorAll(".menu__item");
var headerLogoBlock = document.querySelector(".logo_block ");
var footer = document.querySelector("#footer"); //isMobile

function isMobile() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  if (window.innerWidth <= 768) {
    check = true;
  }

  return check;
}

; //BURGERMENU

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

window.addEventListener("scroll", function () {
  //hide logo in header 
  var viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;
  var viewportOffsetFooter = Math.abs(footer.getBoundingClientRect().top + window.scrollY);

  if (viewedPageHeight >= viewportOffsetFooter && isMobile()) {
    headerLogoBlock.classList.add("hide_logo");
  } else {
    headerLogoBlock.classList.remove("hide_logo");
  }
});

function OpenFormCloseMenu() {
  var burger_btn = document.querySelector(".burger-btn");
  burger_btn.click();
  ShowConcactForm(true);
} //popUp


var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay-popup");
var body = document.querySelector("body");
var btnsShowPopUp = document.querySelectorAll("[show_pop_up]");
var btnsHidePopUp = document.querySelectorAll("[hide_pop_up]");

function addEventButtonPopUp() {
  btnsShowPopUp.forEach(function (btn) {
    btn.addEventListener('click', function () {
      ShowConcactForm(true);
    });
  });
  btnsHidePopUp.forEach(function (btn) {
    btn.addEventListener('click', function () {
      ShowConcactForm(false);
    });
  });
}

var isOpen = false;

function ShowConcactForm(isShow) {
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

expandBtn.addEventListener('click', expandForm, false); //logo animate

var animateHeaderLogoBlock = document.querySelector('.header_logo');
var animateHeaderLogo = bodymovin.loadAnimation({
  wrapper: animateHeaderLogoBlock,
  animType: 'svg',
  autoplay: false,
  path: './files/Logo.json'
});
animateHeaderLogoBlock.addEventListener("mouseenter", function () {
  animateHeaderLogo.play();
});
animateHeaderLogoBlock.addEventListener("mouseleave", function () {
  animateHeaderLogo.pause();
});
var animateFooterLogoBlock = document.querySelector('.footer_logo');
var animateFooterLogo = bodymovin.loadAnimation({
  wrapper: animateFooterLogoBlock,
  animType: 'svg',
  autoplay: false,
  path: './files/Logo.json'
});
animateFooterLogoBlock.addEventListener("mouseenter", function () {
  animateFooterLogo.play();
});
animateFooterLogoBlock.addEventListener("mouseleave", function () {
  animateFooterLogo.pause();
});
//# sourceMappingURL=shared.js.map
