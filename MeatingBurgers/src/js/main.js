/* header logick */

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
burger.addEventListener("click", function (e) {
  document.body.classList.toggle("body_lock");
  document.body.classList.toggle("active");
  if(burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
    }
});
};

if (linkClose.length) {
  for(var i =0;i<linkClose.length;++i){
      linkClose[i].addEventListener("click", function (e) {
          document.body.classList.remove("body_lock");
          document.body.classList.remove("active");
          burger.classList.remove("burger_active");
          burger.classList.add('burger_finish');
      })
  }
};

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

/* changed bg */

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg")
const remove_class_on_scroll = () => header.classList.remove("bg")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

/* active link page */

let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
    navItem = document.querySelector(`[data-id-nav=${pageId}]`);

if(pageId == navItem.getAttribute("data-id-nav")) {
    navItem.classList.add("active-link");
}

/* amin */

let animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  path: './files/anim.json',
  render: 'svg',
  loop: false,
  autoplay: true,
})
setTimeout(() => {
  animation.pause()
}, 9600)