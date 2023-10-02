"use strict";

new WOW().init();
document.addEventListener('DOMContentLoaded', function () {
  init();
});
var path = "./";
var sections = document.querySelectorAll("[section]");
var mainBlock = document.querySelector("#main");
var videos = document.querySelectorAll('[video]');
var turnSounds = document.querySelectorAll('[turn-sound ]');
var lastSection = document.querySelector("[section=\"video3\"]");
var lastVideoSection = document.querySelector("[section=\"video3\"]");
var header = document.querySelector("#header");
var copyCodeButton = document.querySelector("[copyCode]");
var body = document.querySelector(".main_body_section");
var mobilePosters = document.querySelectorAll("[poster_mobile]");
var mobile_buttons = document.querySelectorAll("[mobile_button]");
var userAgentString = navigator.userAgent;
var isSafari = userAgentString.indexOf("Safari") > -1;

function init() {
  window.isDownScroll = false;
  window.currentIndex = null;
  window.body_lock = false;
  window.isScroling = false;
  header.classList.add("header_transparent");

  if (isMobile()) {
    changeVideoForMobile();
    changeMobilePosters();
  }

  if (isMobile() && isSafari) {
    mobile_buttons.forEach(function (mobile_button) {
      mobile_button.classList.add("safari_button");
    });
  }

  if (/phone_video/.test(location.href)) {
    showHeader(true);
    videos[2].play();
    setSectionState(2);
  } else if (/desktop_video/.test(location.href)) {
    showHeader(true);
    videos[1].play();
    setSectionState(1);
  }

  var firstVideo = videos[0];
  firstVideo.addEventListener("error", function (e) {
    if (isMobile()) {
      firstVideo.setAttribute('poster', 'images/main_page/video_img_mobile_1.png');
    } else {
      firstVideo.setAttribute('poster', 'images/main_page/video_img_1.png');
    }

    showCopyCodeButton(true);
  });
  firstVideo.addEventListener('timeupdate', function () {
    var firstVideoBlock = document.querySelector("[section=\"video1\"]");

    if (firstVideo.currentTime > 0) {
      showCopyCodeButton(true);
    }

    if (firstVideo.currentTime >= 3.50000) {
      showCopyCodeButton(false);
      addFullVideo(true);
    }

    if (firstVideo.currentTime >= 15.00000) {
      firstVideoBlock.classList.add("video-opacity");
      showHeader(true);
    }

    if (firstVideo.currentTime >= 15.80000) {
      nextSlide();
      firstVideoBlock.classList.remove("video-opacity");
    }
  }, false);
}

window.addEventListener('resize', function () {
  if (isMobile()) {
    changeVideoForMobile();
  }
}, true);

function copyCode() {
  var jsCode = "<!DOCTYPE html>\n    <head><title></title></head>\n    <body>\n    <svg id=\"mySvg\" width=\"960\" height=\"500\"></svg>\n    <script src=\"http://d3js.org/d3.v7.min.js\"></script>\n    <script src=\"http://d3js.org/topojson.v3.min.js\"></script>\n    <script>\n    var width = 960, height = 500, svg = d3.select(\"svg\");\n    d3.json(\"https://raw.githubusercontent.com/org-scn-design-studio-\" +\n        \"community/sdkcommunitymaps/master/geojson/Europe/Ukraine-regions.json\"\n    ).then(function (data) {\n        var land = topojson.feature(data, data.objects.UKR_adm1),\n            projection = d3.geoAlbers().rotate([-30, 0, 0])\n                .fitSize([.9 * width, .9 * height], land),\n            path = d3.geoPath().projection(projection);\n        svg.selectAll(\"path\").data(land.features).enter()\n            .append(\"path\").attr(\"d\", path).attr(\"fill\", \"#FFD500')\n            .attr(\"stroke\", \"#005BBB\");\n        svg.append(\"text\").attr(\"x\", (width / 2)).attr(\"y\", height - (20))\n            .attr(\"text-anchor\", \"middle\").style(\"font-size\", \"24px\")\n            .style(\"fill\", \"#005BBB\").text(\"Improvs\");";
  navigator.clipboard.writeText(jsCode);
}

function showCopyCodeButton(isShow) {
  if (isShow) {
    copyCodeButton.classList.remove("hide");
  } else {
    copyCodeButton.classList.add("hide");
  }
}

function addFullVideo(isFullVideo) {
  var firstVideo = document.querySelector("[section=\"video1\"]");

  if (isFullVideo) {
    firstVideo.classList.add("video_block_full");
  } else {
    firstVideo.classList.remove("video_block_full");
  }
} //video


function changeVideoForMobile() {
  for (var index = 0; index < videos.length; index++) {
    var video = videos[index];

    if (!video.src.includes("mobile")) {
      video.src = path + "files/main_video/video_".concat(index + 1, "_mobile.mp4");
    }
  }
}

function changeMobilePosters() {
  mobilePosters.forEach(function (mobilePoster) {
    var poster = mobilePoster.getAttribute("poster_mobile");
    mobilePoster.poster = poster;
  });
}

turnSounds.forEach(function (turn) {
  turn.addEventListener('click', function () {
    var video = videos[getSectionState()];

    if (video) {
      video.muted = !video.muted;
      var sound_turn = turn.querySelector(".sound_turn");
      var sound_switch = turn.querySelector(".sound_switch");

      if (video.muted) {
        if (sound_turn) {
          sound_turn.style.display = "none";
          sound_switch.style.display = "block";
        }
      } else {
        if (sound_switch) {
          sound_switch.style.display = "none";
          sound_turn.style.display = "block";
        }
      }
    }
  });
});

var _loop = function _loop(index) {
  var video = videos[index];
  video.addEventListener('ended', function (e) {
    nextSlide();
    stopAllVideo();
    var nextIndex = index + 1;

    if (videos[nextIndex]) {
      safePlayVideo(nextIndex);
    }
  });
};

for (var index = 0; index < videos.length; index++) {
  _loop(index);
}

function safePlayVideo(Index) {
  var currentVideo = videos[Index];
  var isPlaying = currentVideo.currentTime == 0;

  if (isPlaying) {
    currentVideo.play();
  }
}

function stopAllVideo() {
  videos.forEach(function (video) {
    video.currentTime = 0;
    video.pause();
  });
}

function nextSlide() {
  if (window.body_lock) {
    return;
  }

  var index = getSectionState();

  if (index) {
    if (index <= sections.length - 2) {
      index = index + 1;

      if (index == 2) {
        stopAllVideo();
        safePlayVideo(2);
      }

      if (index == 3) {
        stopAllVideo();
      }

      var section = sections[index].getAttribute('section');
      scrollByElementName(section);
      setSectionState(index);
    }
  } else {
    showHeader(true);

    var _section = sections[1].getAttribute('section');

    scrollByElementName(_section);
    stopAllVideo();
    safePlayVideo(1);
    setSectionState(1);
  }
}

function previousSlide() {
  var isDownScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (window.body_lock) {
    return;
  }

  var index = getSectionState();

  if (index) {
    if (index > 0) {
      index = index - 1;

      if (index <= 2) {
        stopAllVideo();
        showCopyCodeButton(false);
        addFullVideo(false);
        safePlayVideo(index);
      }

      if (index == 0) {
        showHeader(false);
      }

      var section = sections[index].getAttribute('section');

      if (section === "video3" && isDownScroll) {
        var scrollToVideo = function scrollToVideo() {
          scrollByElementName(section);
          window.removeEventListener('scrollend', scrollToVideo);
        };

        window.addEventListener('scrollend', scrollToVideo);
      }

      if (section == "video3" && !isDownScroll) {
        return;
      }

      scrollByElementName(section);
      setSectionState(index);
    }
  }
} //scroll


function scrollByElementName(elementName) {
  var element = "";
  element = document.querySelector("[section=".concat(elementName, "]"));

  if (!element) {
    return;
  }

  var scrollToValue = element.offsetTop;
  scrollToOffset(scrollToValue);
}

function scrollToOffset(offset) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: offset
  });
} //sroll previous


var viewportOffsetLastSection = Math.abs(lastSection.getBoundingClientRect().bottom + (lastSection.offsetHeight - 50) + window.scrollY);
var viewportOffsetLastVideo = Math.abs(lastVideoSection.getBoundingClientRect().bottom + lastSection.offsetHeight + window.scrollY);
window.addEventListener("scroll", function () {
  var viewedPageHeight = Math.abs(document.body.getBoundingClientRect().top) + window.innerHeight;

  if (window.body_lock) {
    return;
  }

  if (viewedPageHeight >= viewportOffsetLastVideo) {
    header.classList.remove("header_transparent");
  } else {
    header.classList.add("header_transparent");
  }

  if (viewedPageHeight <= viewportOffsetLastSection && window.isDownScroll) {
    window.isDownScroll = false;
    body.style.overflowY = "hidden";
    previousSlide(true);
  }

  if (viewedPageHeight >= viewportOffsetLastVideo && !isDownScroll) {
    body.style.overflowY = "auto";
    window.isDownScroll = true;
  } //menu hover


  var main = document.querySelector("[section=\"video1\"]");
  var website = document.querySelector("[section=\"video2\"]");
  var mobileApplication = document.querySelector("[section=\"video3\"]");
  var work = document.querySelector("[section=\"work\"]");
  var viewportOffsetMain = Math.abs(main.getBoundingClientRect().top + window.scrollY);
  var viewportOffsetWebsite = Math.abs(website.getBoundingClientRect().top + window.scrollY);
  var viewportOffMobileAppication = Math.abs(mobileApplication.getBoundingClientRect().top + window.scrollY);
  var viewportOffWork = Math.abs(work.getBoundingClientRect().top + window.scrollY);

  if (viewedPageHeight >= viewportOffsetMain && viewedPageHeight <= viewportOffMobileAppication) {
    cleanHoverMenu();
    menuItems[1].classList.add("menu_active_link");
  } else if (viewedPageHeight >= viewportOffsetWebsite && viewedPageHeight < viewportOffWork) {
    cleanHoverMenu();
    menuItems[2].classList.add("menu_active_link");
  } else if (viewedPageHeight >= viewportOffWork) {
    cleanHoverMenu();
    menuItems[3].classList.add("menu_active_link");
  }

  window.isScroling = true;
  setTimeout(function () {
    return window.isScroling = false;
  }, 500);
}); //header

function showHeader(isShow) {
  if (isShow) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
} //touch


var eventTouch = null;
document.addEventListener("touchstart", function (e) {
  eventTouch = e;
});
document.addEventListener("touchmove", function (e) {
  if (eventTouch) {
    var position = e.touches[0].pageY - eventTouch.touches[0].pageY;
    eventTouch = null;

    if (position > 0) {
      previousSlide();
    } else {
      nextSlide();
    }
  }
});
document.addEventListener("touched", function (e) {
  eventTouch = null;
}); //touch desktop

var event = null;
document.addEventListener("mousedown", function (e) {
  event = e;
});
document.addEventListener("mousemove", function (e) {
  if (event) {
    var position = e.screenY - event.screenY;
    event = null;

    if (position > 0) {
      previousSlide();
    } else {
      nextSlide();
    }
  }
});
document.addEventListener("mouseup", function (e) {
  event = null;
}); //mouse wheel event

var delayWheel = true;
document.addEventListener('wheel', function (event) {
  if (delayWheel === true) {
    delayWheel = false;

    if (event.deltaY > 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    setTimeout(function () {
      delayWheel = true;
    }, 1000);
  }
}); //state

function setSectionState(index) {
  window.currentIndex = index;
}

function getSectionState() {
  var state = window.currentIndex;

  if (state) {
    return state;
  } else {
    return null;
  }
} //OURWORK


var slider = new Swiper(".case_swiper", {
  speed: 4500,
  // loop: true,
  spaceBetween: 20,
  // freeMode: true,
  centeredSlides: false,
  preventInteractionOnTransition: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1.15,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.3
    },
    1440: {
      slidesPerView: 1.5
    },
    1920: {
      slidesPerView: 2.2
    }
  },
  on: {
    init: function init() {
      var _this = this;

      this.autoplay.stop();
      this.el.addEventListener('mousemove', function () {
        if (!window.isScroling) {
          _this.autoplay.start();
        }
      });
      this.el.addEventListener('mouseleave', function () {
        _this.autoplay.stop();
      });
    }
  }
});
//# sourceMappingURL=main.js.map
