new WOW().init();

destroyMenusOnResize($(".drilldown"), 1200);
initHeaderBurger();
initHoverSubMenu();
initMainBtnAnimation();
initBlockInViewportAnimation();
initVideoPlayers();
initVideoPopup();
initAccordion();
initActiveSubMenu();
initContactFormPopup();
initContactForm();
initActiveSubMenuFooter();

function initContactForm() {
  const contactForm = $('.contactForm');
  Foundation.Abide.defaults.patterns['time'] = /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])$/;
  Foundation.Abide.defaults.patterns['tel'] = /^\d{10}$/;
  Foundation.Abide.defaults.patterns['name'] = /\D/;
  new Foundation.Abide(contactForm);
  contactForm.on('submit', (e) => {
    e.preventDefault();
    if(e.result) {
      const payload = contactForm.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});;
  
      // Fake API
      postData('https://jsonplaceholder.typicode.com/todos', payload)
      .then((data) => {
        console.log(data);
      });
    }
  })
}

// ContactForm popup
function initContactFormPopup() {
  const overflow = document.querySelector(".overflow");
  const formPopup = document.querySelector(".pop-up");
  const closePopupBtn = formPopup.querySelector(".btn-close");

  const openPopup = () => formPopup.classList.add("show");
  const hidePopup = () => {
    $('.contactForm').foundation('resetForm');
    formPopup.classList.remove("show")
  };

  document.addEventListener("click", (event) => {
    const { target } = event;

    if (target.closest(".openPopup")) {
      document.body.classList.toggle("body_lock");
      overflow.classList.toggle("overflow_active");
      openPopup();
    }

    if (target.closest(".overflow") && formPopup.classList.contains('show')) {
      document.body.classList.remove("body_lock");
      overflow.classList.remove("overflow_active");
      hidePopup();
    }
  });

  closePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("body_lock");
    overflow.classList.remove("overflow_active");
    hidePopup();
  });
}

// Foundation drilldown menu:
function destroyMenusOnResize(jQueryObj, width) {
  const win = window;
  let headerMenu = new Foundation.Drilldown(jQueryObj);

  jQueryObj.on("hide.zf.drilldown", () => {
    if (jQueryObj.hasClass("invisible")) return;
    document.body.classList.remove("item-active");
  });

  const toggleInit = () => {
    const neededWidth = win.innerWidth >= width;
    if (neededWidth) {
      if (!jQueryObj?.hasClass("destroyed")) {
        jQueryObj.foundation("_destroy").addClass("destroyed");
      }
    } else if (jQueryObj?.hasClass("destroyed")) {
      headerMenu = new Foundation.Drilldown(jQueryObj);
      jQueryObj.removeClass("destroyed");
    }
  };

  ["load", "resize"].forEach((evt) =>
    win.addEventListener(evt, toggleInit, false)
  );

  $(".back-btn ").on("click", function () {
    const activeSubMenus = $("#header").find(".submenu.is-active").last();
    activeSubMenus.find(".js-drilldown-back > a")[0]?.click();
  });
}

// header logic
function initHeaderBurger() {
  const overflow = document.querySelector(".overflow");

  document.addEventListener("click", (event) => {
    const { target } = event;
    if (target.closest(".menu-wrap") || target.closest(".back-btn")) return;
    if (target.closest(".burger")) {
      document.body.classList.toggle("body_lock");
      document.body.classList.toggle("active");
      overflow.classList.toggle("overflow_active");
      return;
    }
    if (
      target.closest('.overflow') &&
      document.body.classList.contains("body_lock") &&
      overflow.classList.contains("overflow_active")
    ) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      document.body.classList.remove("item-active");
      overflow.classList.remove("overflow_active");
      $('.drilldown').foundation('_hideAll');
      return;
    }
  });
}

// for hover sub menu
function initHoverSubMenu() {
  const header = document.querySelector("#header");
  const itemDrop = document.querySelector(".item-drop");
  const addHoverCb = () => header.classList.add("hover");
  const removeHoverCb = () => header.classList.remove("hover");

  ["load", "resize"].forEach((evt) =>
    window.addEventListener(
      evt,
      () => {
        if (window.innerWidth > 1200 && itemDrop) {
          itemDrop.addEventListener("mouseover", addHoverCb);
          itemDrop.addEventListener("mouseleave", removeHoverCb);
        } else {
          itemDrop.removeEventListener("mouseover", addHoverCb);
          itemDrop.removeEventListener("mouseleave", removeHoverCb);
        }
      },
      false
    )
  );
}

// for active sub menu
function initActiveSubMenu() {
  const linkDrop = document.querySelector(".link-drop");

  if (linkDrop) {
    linkDrop.addEventListener("click", function (e) {
      document.body.classList.toggle("item-active");
    });
  }
}

// btn logic
function initMainBtnAnimation() {
  const btns = document.querySelectorAll(".btn");

  if (btns !== null) {
    for (let btn of btns) {
      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.getBoundingClientRect().top - window.scrollY;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    }
  }
}

// Animation
function initBlockInViewportAnimation() {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("show");
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".anim");
  for (let elm of elements) {
    observer.observe(elm);
  }
}

// Video controls
function initVideoPlayers() {
  const videoWraps = document.querySelectorAll(".video-wrap");
  videoWraps?.forEach((videoWrap) => {
    const video = videoWrap.querySelector(".video");
    const playButton = videoWrap.querySelector(".play-button");
    const muteButton = videoWrap.querySelector(".mute-button");
    const fullscreenButton = videoWrap.querySelector(".fullscreen-button");
    const volume = videoWrap.querySelector(".volume");
    const currentTimeElement = videoWrap.querySelector(".current");
    const durationTimeElement = videoWrap.querySelector(".duration");
    const progress = videoWrap.querySelector(".video-progress");
    const progressBar = videoWrap.querySelector(".video-progress-filled");

    //Play and Pause button
    playButton.addEventListener("click", (e) => {
      if (video.paused) {
        video.play();
        e.target.textContent = "| |";
        videoWrap.classList.toggle("active");
      } else {
        video.pause();
        e.target.textContent = "►";
        videoWrap.classList.toggle("active");
      }
    });

    //Mute button
    muteButton.addEventListener("click", (e) => {
      if (video.muted) {
        video.muted = false;
        muteButton.classList.toggle("mute");
      } else {
        video.muted = true;
        muteButton.classList.toggle("mute");
      }
    });

    //Fullscreen button
    fullscreenButton.addEventListener("click", (e) => {
      if (video.requestFullScreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    });

    //volume
    volume.addEventListener("mousemove", (e) => {
      video.volume = e.target.value;
    });

    //current time and duration
    const currentTime = () => {
      let currentMinutes = Math.floor(video.currentTime / 60);
      let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(video.duration / 60);
      let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

      currentTimeElement.innerHTML = `${currentMinutes}:${
        currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
      }`;
      durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
    };

    video.addEventListener("timeupdate", currentTime);

    //Progress bar
    video.addEventListener("timeupdate", () => {
      const percentage = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    });

    //change progress bar on click
    progress.addEventListener("click", (e) => {
      const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = progressTime;
    });

    video.addEventListener("ended", stopMedia);
    function stopMedia() {
      video.pause();
      video.currentTime = 0;
      videoWrap.classList.remove("active");
    }
  });
}

// for video pop-up
function initVideoPopup() {
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
    const neededWidth = moreThan
      ? win.innerWidth >= width
      : win.innerWidth <= width;
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
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.01,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1.05,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1.1,
      spaceBetween: 30,
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
    },
  },
});

destroySlidersOnResize(".video-slider", 99999, {
  spaceBetween: 30,
  autoHeight: true,
  freeMode: true,
  speed: 700,

  scrollbar: {
    el: ".video-swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.01,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1.05,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1.1,
      spaceBetween: 30,
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
    },
  },
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
function initAccordion() {
  const accardionToggle = (slideMenu) => (e) => {
    slideMenu.forEach((links) => {
      const hidePanel = links.nextElementSibling;
      if (links === e.currentTarget) {
        e.currentTarget.classList.toggle("active");
        hidePanel.classList.toggle("active-block");
      } else {
        links.classList.remove("active");
        hidePanel.classList.remove("active-block");
      }
    });
  };

  const slideMenu = document.querySelectorAll(".accardion-link");

  slideMenu.forEach((links) => {
    links.addEventListener("click", accardionToggle(slideMenu));
  });
}

// for active sub menu footer
function initActiveSubMenuFooter() {
  const linkDropFooter = document.querySelector(".item-drop-footer");

  if (linkDropFooter) {
    linkDropFooter.addEventListener("click", function (e) {
      document.body.classList.toggle("item-footer-active");
      e.preventDefault();
    });
  }
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}