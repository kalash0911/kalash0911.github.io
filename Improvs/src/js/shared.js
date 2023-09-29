document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    selectCurrentPage();
    addEventButtonPopUp();
});

//BURGERMENU
function selectCurrentPage(){
    var menuItems=document.querySelectorAll(".menu__item");

    menuItems.forEach((menu) => {
        menu.classList.remove("menu_active_link");
    });
    if (/index/.test(location.href)) {
        menuItems[0].classList.add("menu_active_link");
      }else if(/our_work/.test(location.href)) {
        menuItems[3].classList.add("menu_active_link");
      } else if(/blog_page/.test(location.href)) {
        menuItems[4].classList.add("menu_active_link");
      }else if(/brain_block/.test(location.href)) {
        menuItems[3].classList.add("menu_active_link");
      }else{
        menuItems[3].classList.add("menu_active_link");
      }
}

function initHeader() {
    const burger = document.querySelector(".burger");
    const burger_btn = document.querySelector(".burger-btn");
    const text_click = document.querySelector(".text_burger_btn");
    const menuBody = document.querySelector(".header__menu ");
    const linkClose = document.querySelectorAll(".link-close");
    const menuOverlay = document.querySelector(".menu_overlay");
    if (burger) {
        burger_btn.addEventListener("click", function (e) {
            document.body.classList.toggle("body_lock");
            document.body.classList.toggle("active");
            text_click.classList.toggle("text_burger_btn-click");
            menuOverlay.classList.toggle("menu_overlay_active");
            if (burger.classList.contains("burger_active")) {
                burger.classList.add("burger_finish");
                burger.classList.remove("burger_active");


            } else {
                burger.classList.add("burger_active");
                burger.classList.remove("burger_finish");
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

//popUp
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay-popup");
const body = document.querySelector("body");
const btnsShowPopUp = document.querySelectorAll("[show_pop_up]");
const btnsHidePopUp = document.querySelectorAll("[hide_pop_up]");

function addEventButtonPopUp(){
    btnsShowPopUp.forEach(function (btn) {
        btn.addEventListener('click', function () { Show(true) },false);
    });

    btnsHidePopUp.forEach(function (btn) {
        btn.addEventListener('click', function () { Show(false) });
    });
}

let isOpen = false;
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
    window.body_lock=isOpen;
}


//contact form
const expandBtn = document.querySelector("[expandBtn]");

function expandForm(){
    let contact_form_section=document.querySelector(".contact_form_section");
    contact_form_section.classList.toggle("expand_active");
}

expandBtn.addEventListener('click',expandForm,false);