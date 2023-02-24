// Classes
class Spinner {
  constructor() {
    this.spinnerEl = `
      <div class="spinner loadingio-spinner-spin-nir07jtyl1o">
      <div class="spinner-container">
        <div class="ldio-5desmbk2c7">
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
          <div>
              <div></div>
          </div>
        </div>
      </div>
    </div>`;
    this.init();
    this.spinner = document.querySelector(".spinner");
  }
  init() {
    if (!this.isInit) {
      document.body.insertAdjacentHTML("beforeend", this.spinnerEl);
      this.isInit = true;
    }
  }
  show() {
    this.spinner.classList.add("visible");
  }
  hide() {
    this.spinner.classList.remove("visible");
  }
}

const loader = new Spinner();
loader.show();

window.addEventListener('load', () => {
  loader.hide();
  document.body.classList.add('loaded')
})

// Links:
// TODO: replace to relative api
const API_PATH = "https://jsonplaceholder.typicode.com/todos";

// Utils:
const maskPhoneNumber = (value) => {
  if (value.length > 6) {
    return (value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
      6
    )}`);
  }
  if (value.length > 3) {
    return (value = `(${value.slice(0, 3)}) ${value.slice(3)}`);
  }
  return value;
};

// Regex:
const TIME_REGEX = /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])$/;
const PHONE_REGEX = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
const NAME_REGEX = /\D/;

// Functions initialization:
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
initRequestFormPopup();
initContactUsForm();
initRequestForm();
initFooterDrilldownMenu();
initPhoneChangeValidation();
initMarqueeFixed();

// Website full js logic:

function initMarqueeFixed() {
  const requestBlock = $('.request-block')
  if(!requestBlock.length) return;
  const height = requestBlock.outerHeight();
  const footer = $('footer');
  $(window).scroll(function () {
    if ($(this).scrollTop() > requestBlock.position().top + (height / 2)) {
      requestBlock.addClass('fixed');
      footer.css('paddingBottom', `${height}px`);
    } else {
      requestBlock.removeClass('fixed');
      footer.css('paddingBottom', `0px`);
    }
  });
}

// Mask phone inputs
function initPhoneChangeValidation() {
  const phones = document.querySelectorAll('input[name="phone"]');
  phones.forEach((input) => {
    input.setAttribute("maxLength", "14");
    input.addEventListener("input", (event) => {
      const value = event.target.value.replace(/[\)\( -]/gm, "");
      const maskedPhoneNumber = maskPhoneNumber(value);
      event.target.value = maskedPhoneNumber;
    });
  });
}

function initRequestForm() {
  const requestForms = $(".contactForm");

  requestForms.each(function () {
    const form = new Foundation.Abide($(this));
    const msg = $(this).find(".form-msg");
    const clearMsg = () => {
      msg.text("");
      msg.removeClass("success");
      msg.removeClass("error");
      msg.removeClass("active");
    };

    const showErrorMsg = () => {
      msg.addClass("error");
      msg.addClass("active");
      msg.text("Something went wrong. Please try again later.");
    };

    const showSuccessMsg = () => {
      msg.addClass("success");
      msg.addClass("active");
      msg.text("Thank you! The form was submitted successfully");
    };

    form.options.patterns["time"] = TIME_REGEX;
    form.options.patterns["tel"] = PHONE_REGEX;
    form.options.patterns["name"] = NAME_REGEX;

    $(this)
      .on("formvalid.zf.abide", () => {
        const payload = $(this)
          .serializeArray()
          .reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
          }, {});

        loader.show();
        postData(API_PATH, payload)
          .then((data) => {
            if (!data.ok) {
              showErrorMsg();
              return;
            }
            showSuccessMsg();
          })
          .catch(showErrorMsg)
          .finally(() => {
            loader.hide();
          });
      })
      .on("submit", (e) => {
        e.preventDefault();
        clearMsg();
      });
  });
}

function initContactUsForm() {
  const contactsForms = $(".contact-us-form");

  contactsForms.each(function () {
    const form = new Foundation.Abide($(this));
    const msg = $(this).find(".form-msg");
    const clearMsg = () => {
      msg.text("");
      msg.removeClass("success");
      msg.removeClass("error");
      msg.removeClass("active");
    };

    const showErrorMsg = () => {
      msg.addClass("error");
      msg.addClass("active");
      msg.text("Something went wrong. Please try again later.");
    };

    const showSuccessMsg = () => {
      msg.addClass("success");
      msg.addClass("active");
      msg.text("Thank you! The form was submitted successfully");
    };

    form.options.patterns["tel"] = PHONE_REGEX;
    form.options.patterns["name"] = NAME_REGEX;

    $(this)
      .on("formvalid.zf.abide", (evt) => {
        const payload = $(this)
          .serializeArray()
          .reduce((obj, item) => {
            obj[item.name] = item.value;
            return obj;
          }, {});

        loader.show();
        postData(API_PATH, payload)
          .then((data) => {
            if (!data.ok) {
              showErrorMsg();
              return;
            }
            showSuccessMsg();
          })
          .catch(showErrorMsg)
          .finally(() => {
            loader.hide();
          });
      })
      .on("submit", (e) => {
        e.preventDefault();
      });
  });
}

// ContactForm popup
function initRequestFormPopup() {
  const defaultPlaceholder = 'How can we help you?';
  const backdrop = document.querySelector(".backdrop");
  const formPopup = document.querySelector(".pop-up");
  const textArea = formPopup.querySelector('textarea')
  const closePopupBtn = formPopup.querySelector(".btn-close");

  const openPopup = () => formPopup.classList.add("show");
  const hidePopup = () => {
    $(".contactForm").foundation("resetForm");
    formPopup.classList.remove("show");
    $(".contactForm").find('.form-msg').removeClass('active')
  };

  document.addEventListener("click", (event) => {
    const { target } = event;
    const openPopupBtn = target.closest(".openPopup");

    if (openPopupBtn) {
      event.preventDefault();
      document.body.classList.toggle("body_lock");
      backdrop.classList.toggle("visible");
      openPopup();
      const placeholderValue = openPopupBtn.dataset.placeholder || defaultPlaceholder;
      textArea.setAttribute('placeholder', placeholderValue)
    }

    if (target.closest(".backdrop") && formPopup.classList.contains("show")) {
      document.body.classList.remove("body_lock");
      backdrop.classList.remove("visible");
      hidePopup();
    }
  });

  closePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("body_lock");
    backdrop.classList.remove("visible");
    hidePopup();
  });
}

// Foundation drilldown menu:
function initFooterDrilldownMenu() {
  new Foundation.Drilldown($(".footer-drilldown"));
  const linkDropFooter = document.querySelector(".item-drop-footer > a.link");
  const overflow = document.querySelector(".overflow");

  const showFooterMenu = (e) => {
    document.body.classList.add("item-footer-active");
    overflow.classList.add("overflow_active");
    e.preventDefault();
  };

  const hideFooterMenu = () => {
    if(document.body.classList.contains("item-footer-active")) {
      document.body.classList.remove("item-footer-active");
      overflow.classList.remove("overflow_active");
      $(".footer-drilldown").foundation("_hideAll");
    }
  };

  if (linkDropFooter) {
    linkDropFooter.addEventListener("click", showFooterMenu);

    overflow.addEventListener("click", hideFooterMenu);

    document.addEventListener("click", (event) => {
      if (event.target.closest(".mobile-footer-menu .btn-close")) {
        hideFooterMenu();
        return;
      }
    });
  }
}

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
      document.body.classList.remove("item-active");
      overflow.classList.toggle("overflow_active");
      $(".drilldown").foundation("_hideAll");
      return;
    }
    if (
      target.closest(".overflow") &&
      document.body.classList.contains("body_lock") &&
      overflow.classList.contains("overflow_active")
    ) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      document.body.classList.remove("item-active");
      overflow.classList.remove("overflow_active");
      $(".drilldown").foundation("_hideAll");
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
        if (window.innerWidth > 1199 && itemDrop) {
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

      currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
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
  const closeVideo = document.querySelector(".btn-close");
  const videoBlock = document.querySelector(".video-block");
  const backdrop = document.querySelector(".backdrop");
  const video = videoBlock?.querySelector('video');

  if (videoBlock !== null) {
    openVideo.addEventListener("click", function (e) {
      videoBlock.classList.add("video-block_active");
      backdrop.classList.add("visible");
    });

    closeVideo.addEventListener("click", function (e) {
      videoBlock.classList.remove("video-block_active");
      backdrop.classList.remove("visible");
      video.pause();
      video.currentTime = 0;
    });

    backdrop.addEventListener("click", function (e) {
      videoBlock.classList.remove("video-block_active");
      backdrop.classList.remove("visible");
      video.pause();
      video.currentTime = 0;
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

  swiper.on("slideChange", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = false;
    }, 500);
  });
  swiper.on("reachEnd", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });
  swiper.on("reachBeginning", function () {
    setTimeout(function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }, 750);
  });

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

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

$(function () {
  const marquee = $('.marquee');
  if(!marquee.length) return;
  $('.marquee').marquee({
    duration: 70000,
    startVisible: true,
    duplicated: true
  });
});