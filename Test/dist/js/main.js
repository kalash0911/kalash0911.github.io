"use strict";

var itemImg = document.querySelectorAll('.main__item-img');
var modal = document.querySelector('.modal-img');
var modalImg = modal.querySelector('img');
var overflowImg = document.querySelector('.modal-img__overflow');
var closeBtnImg = document.querySelector('.modal-img__close');

function showImg(e) {
  document.body.classList.add("body_lock");
  modal.classList.add("modal-img_active");
  e.preventDefault();
  var img = e.target.closest('img');
  var src = img.getAttribute('src');
  modalImg.setAttribute('src', src);
}

;

function closeImg() {
  document.body.classList.remove("body_lock");
  modal.classList.remove("modal-img_active");
}

;

for (var i = 0; i < itemImg.length; ++i) {
  itemImg[i].addEventListener("click", function (e) {
    showImg(e);
  });
}

;
var modalActive = document.querySelectorAll('.modal-img_active');

if (modalActive) {
  overflowImg.addEventListener("click", function (e) {
    closeImg();
    e.preventDefault();
  });
  closeBtnImg.addEventListener("click", function (e) {
    closeImg();
    e.preventDefault();
  });
}

;
//# sourceMappingURL=main.js.map
