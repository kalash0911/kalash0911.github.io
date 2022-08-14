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