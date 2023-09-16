new WOW().init();
initBurger();

// Video controls
initVideoPlayers();

function initVideoPlayers() {
  const videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps?.forEach((videoWrap) => {
    const video = videoWrap.querySelector(".video");
    const playButton = videoWrap.querySelector(".play-button");

    //Play and Pause button
    playButton.addEventListener("click", (e) => {
      if (video.paused) {
        video.play();
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        videoWrap.classList.toggle("active");
      }
    });
  });
}

/* castom anim */
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements) {
  observer.observe(elm);
}

// For counter animate
if (document.querySelectorAll('.count-progress').length) {
  // создаем экземпляр Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // если элемент стал видимым и его анимация еще не проигрывалась, запускаем анимацию
      if (entry.isIntersecting && entry.target.getAttribute('data-animated') === 'false') {
        const element = entry.target;
        const count = parseInt(element.innerText);
        let currentCount = 0;
        const speed = parseInt(element.getAttribute('data-speed')) || 10; // считываем значение атрибута "data-speed" или устанавливаем значение по умолчанию
        const step = parseInt(element.getAttribute('data-step')) || 1; // считываем значение атрибута "data-step" или устанавливаем значение по умолчанию
        const interval = setInterval(() => {
          if (currentCount < count) {
            currentCount += step;
            if (currentCount > count) {
              currentCount = count;
            }
            element.innerText = currentCount;
          } else {
            clearInterval(interval);
            element.setAttribute('data-animated', 'true'); // устанавливаем атрибут "data-animated" в значение "true"
          }
        }, speed);
      }
    });
  });

  // добавляем каждый элемент с классом "count-progress" в Observer
  document.querySelectorAll('.count-progress').forEach(element => {
    observer.observe(element);
  });
}


// For Paralax
window.addEventListener('scroll', function () {
  const section = document.getElementById('paralax-sc');
  const paralax = document.querySelector('.paralax');
  const windowHeight = window.innerHeight;
  const sectionBottom = section.getBoundingClientRect().bottom;

  if (sectionBottom <= windowHeight && sectionBottom >= 0) {
    const translateY = Math.max(0, (sectionBottom - windowHeight) / -windowHeight * 50);
    paralax.style.transform = `translateY(${translateY}%)`;
  }
});



function initBurger() {
  const btnBurger = document.querySelector(".header_burger");
  if (!btnBurger) {
      return;
  }
  const menuBurger = document.querySelector(".nav");
  // const menuContainer = document.querySelector(".nav_container");

  document.addEventListener("click", function (event) {
      if (btnBurger.contains(event.target)) {
          menuBurger.classList.toggle("nav_active");
          btnBurger.classList.toggle("burger_active");
          // menuContainer.classList.toggle("nav_container_active");
          document.body.classList.toggle("body_lock");
          return;
      }
      if (!menuBurger.contains(event.target)) {
          menuBurger.classList.remove("nav_active");
          btnBurger.classList.remove("burger_active");
          document.body.classList.remove("body_lock");
          // menuContainer.classList.remove("nav_container_active");
      }
  });
}