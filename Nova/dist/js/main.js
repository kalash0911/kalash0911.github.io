"use strict";

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu-wrap");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
}

;
//# sourceMappingURL=main.js.map
