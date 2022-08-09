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