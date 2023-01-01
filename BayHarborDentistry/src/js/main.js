new WOW().init();

// btn logic

const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
  btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
                        
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }
}


// Animation

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


// For added video controls

document.addEventListener("DOMContentLoaded", function(){
  let videos = document.getElementsByClassName('video'); 
  videos = [].slice.call(videos); 
  videos.forEach(function(item) { 
    let media = item;
    media.onclick = function () {
      media.controls = true;
    };
    media.addEventListener('ended', function() {
      media.controls = false;
    });
  });
});

// Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
    const init = {
      ...obj,
    };
  
    const win = window;
    const sliderSelector = document.querySelector(selector);
    let swiper = new Swiper(selector, init);
  
    const toggleInit = () => {
      const neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width
      if (neededWidth) {
        if (!sliderSelector.classList.contains("swiper-initialized")) {
          swiper = new Swiper(selector, init);
        }
      } else if (sliderSelector.classList.contains("swiper-initialized")) {
        swiper.destroy();
      }
    };
  
    ["load", "resize"].forEach((evt) =>
      win.addEventListener(evt, toggleInit, false)
    );
}

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 30,
  effect: "fade",
  mousewheel: true,
  autoHeight: true,
  speed: 700,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  
destroySlidersOnResize(".sec-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  speed: 700,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },

  breakpoints: {

    320: {
      slidesPerView: 1.01,
      spaceBetween: 10
    },

    480: {
      slidesPerView: 1.05,
      spaceBetween: 20
    },

    640: {
      slidesPerView: 1.1,
      spaceBetween: 30
    },

    860: {
      slidesPerView: 1.2,
    },

    960: {
      slidesPerView: 1.3,
    },

    1024: {
      slidesPerView: 1.5,
    },

    1300: {
      slidesPerView: 1.7,
    }
  }
});