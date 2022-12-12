// for burger

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
};

const control = document.querySelector(".control");
const drop = document.querySelector(".drop");

if (window.innerWidth < 800) {
  if (control) {
    control.addEventListener("click", function (e) {
      drop.classList.toggle("drop-active");
    });
  }
}

// for copy link

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Скопійовано: " + copyText.value);
}