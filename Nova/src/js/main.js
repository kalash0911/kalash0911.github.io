const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
};