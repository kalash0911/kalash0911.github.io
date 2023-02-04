new WOW().init();

destroyMenusOnResize($('.drilldown'), 1200)

function destroyMenusOnResize(jQueryObj, width) {
  const win = window;
  let headerMenu = new Foundation.Drilldown(jQueryObj);

  const toggleInit = () => {
    const neededWidth = win.innerWidth >= width
    if (neededWidth) {
      if (!jQueryObj?.hasClass("destroyed")) {
        jQueryObj.foundation('_destroy').addClass('destroyed');
      }
    } else if (jQueryObj?.hasClass("destroyed")) {
      headerMenu = new Foundation.Drilldown(jQueryObj);
      jQueryObj.removeClass('destroyed');
    }
  };

  ["load", "resize"].forEach((evt) =>
    win.addEventListener(evt, toggleInit, false)
  );
}

// header logic
const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    overflow.classList.toggle("overflow_active");
    document.body.classList.remove("item-active");
    document.body.classList.remove("sub-item-active");
    subItem.classList.remove("sub-item-active");
  });
}

// for hover sub menu
initHoverSubMenu();
function initHoverSubMenu() {
  const header = document.querySelector("#header");
  const itemDrop = document.querySelector(".item-drop");
  const addHoverCb = () => header.classList.add("hover");
  const removeHoverCb = () => header.classList.remove("hover");
  
  ["load", "resize"].forEach((evt) =>
      window.addEventListener(evt, () => {
        if (window.innerWidth > 1200 && itemDrop) {
          itemDrop.addEventListener('mouseover', addHoverCb);
          itemDrop.addEventListener('mouseleave', removeHoverCb);
        } else {
          itemDrop.removeEventListener('mouseover', addHoverCb);
          itemDrop.removeEventListener('mouseleave', removeHoverCb);
        }
      }, false)
    );
}

// for active sub menu

const btnMob = document.querySelector(".btn-mob");

if (btnMob) {
  btnMob.addEventListener("click", function (e) {
    document.body.classList.toggle("item-active");
  });
}

// for active sub block

const subBtnMob = document.querySelectorAll(".sub-btn-mob");
const subItem = document.querySelector(".sub-item");

if (subBtnMob.length) {
  for(var i = 0; i < subBtnMob.length; ++i){
    subBtnMob[i].addEventListener("click", function (e) {
      document.body.classList.toggle("sub-item-active");
      subItem.classList.toggle("active");
    })
  }
};

// btn logic

const btns = document.querySelectorAll('.btn');

if (btns !== null) {
  for (let btn of btns) {
    btn.onmousemove = function(e){
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.getBoundingClientRect().top - window.scrollY;
                          
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    };
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

// Video controls

const videoWrap = document.querySelector('.video-wrap');
const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playButton = document.querySelector('.play-button');
const muteButton = document.querySelector('.mute-button');
const fullscreenButton = document.querySelector('.fullscreen-button');
const volume = document.querySelector('.volume');
const currentTimeElement = document.querySelector('.current');
const durationTimeElement = document.querySelector('.duration');
const progress = document.querySelector('.video-progress');
const progressBar = document.querySelector('.video-progress-filled');

if (videoWrap !== null) {

  //Play and Pause button
  playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play();
    e.target.textContent = '| |';
    videoWrap.classList.toggle('active');
  } else {
    video.pause();
    e.target.textContent = '►';
    videoWrap.classList.toggle('active');
  }
  });

  //Mute button
  muteButton.addEventListener('click', (e) => {
    if(video.muted){
      video.muted = false;
      muteButton.classList.toggle('mute');
    } else {
      video.muted = true;
      muteButton.classList.toggle('mute');
    }
  });

  //Fullscreen button
  fullscreenButton.addEventListener('click', (e) => {
    if(video.requestFullScreen){
      video.requestFullscreen();
    } else if(video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    }else if(video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    }
  });

  //volume
  volume.addEventListener('mousemove', (e)=> {
    video.volume = e.target.value;
  });

  //current time and duration
  const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
  };

  video.addEventListener('timeupdate', currentTime);

  //Progress bar
  video.addEventListener('timeupdate', () =>{
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`;
  });

  //change progress bar on click
  progress.addEventListener('click', (e) =>{
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = progressTime;
  });

  video.addEventListener('ended', stopMedia);
  function stopMedia() {
    video.pause();
    video.currentTime = 0;
    videoWrap.classList.remove('active');
  }
}

// for video pop-up

const openVideo = document.querySelector(".open-video");
const closeVideo = document.querySelector(".close-video");
const videoBlock = document.querySelector(".video-block");

if (videoBlock !== null) {
  openVideo.addEventListener("click", function (e) {
    videoBlock.classList.add("video-block_active");
    document.body.classList.add("body_overflow");
    document.body.addEventListener("click", closeVideoEvent);
  });

  closeVideo.addEventListener("click", function (e) {
    videoBlock.classList.remove("video-block_active");
    document.body.classList.remove("body_overflow");
    document.body.removeEventListener("click", closeVideoEvent);
  });
}

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
        if (!sliderSelector?.classList.contains("swiper-initialized")) {
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
  autoHeight: true,
  speed: 700,
  
  mousewheel: {
    invert: false,
    releaseOnEdges: true,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  
destroySlidersOnResize(".sec-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  freeMode: true,
  speed: 700,

  scrollbar: {
    el: ".sec-swiper-scrollbar",
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

destroySlidersOnResize(".video-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  freeMode: true,
  speed: 700,

  scrollbar: {
    el: ".video-swiper-scrollbar",
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
      slidesPerView: 1.5,
    },

    1024: {
      slidesPerView: 1.9,
    },

    1300: {
      slidesPerView: 2.05,
    }
  }
});

destroySlidersOnResize(".reviews-slider", 99999, {
  spaceBetween: 30,
  effect: "fade",
  autoHeight: true,
  speed: 700,
  
  mousewheel: {
    invert: false,
    releaseOnEdges: true,
  },
  
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },
});

// For Accardion

const accardionToggle = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
      const hidePanel = links.nextElementSibling;
      if (links === e.currentTarget) {
          e.currentTarget.classList.toggle('active');
          hidePanel.classList.toggle('active-block');
      } else {
          links.classList.remove('active');
          hidePanel.classList.remove('active-block');
      }
  });
};

const slideMenu = document.querySelectorAll('.accardion-link');

slideMenu.forEach((links) => {
  links.addEventListener('click', accardionToggle(slideMenu));
});