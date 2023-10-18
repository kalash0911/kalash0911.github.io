"use strict";

new WOW().init();
var menuItems = document.querySelectorAll(".menu__item");
var videos = document.querySelectorAll("[video]");
var first_main_video = document.querySelector("[first_main_video]");
var second_main_video = document.querySelector("[second_main_video]");
changeMainVideo();
first_main_video.addEventListener("ended", function (e) {
  if (isMobile()) {
    var currentIndex = getSectionState();

    if (!currentIndex) {
      fullpage_api.moveSectionDown();
    }
  } else {
    first_main_video.classList.add("hide_video");
    second_main_video.classList.remove("hide_video");
    second_main_video.play();
  }
});
second_main_video.addEventListener("ended", function (e) {
  var currentIndex = getSectionState();

  if (!currentIndex) {
    fullpage_api.moveSectionDown();
  }

  second_main_video.classList.add("hide_video");
  second_main_video.currentIndex = 0;
});

for (var index = 1; index < videos.length; index++) {
  var video = videos[index];
  video.addEventListener("ended", function (e) {
    fullpage_api.moveSectionDown();
  });
}

new fullpage("#fullpage", {
  navigation: false,
  scrollingSpeed: 1500,
  resetSliders: true,
  anchors: ["", "desktop_video", "phone_video", "", ""],
  afterLoad: function afterLoad(origin, destination, direction) {
    if (destination.index !== 0) {
      showLoader(false);
    }
  },
  onLeave: function onLeave(origin, destination, direction, trigger) {
    var videos = document.querySelectorAll("[video]");

    var _loop = function _loop(_index) {
      var video = videos[_index];
      currentIndex = getSectionState();

      if (_index == currentIndex) {
        setTimeout(function () {
          video.currentTime = 0;
        }, 1600);
      }

      if (origin.index === _index) {
        if (!video.muted) {
          video.muted = true;
          sound_turn = origin.item.querySelector(".sound_turn");
          sound_switch = origin.item.querySelector(".sound_switch");
          sound_switch.style.display = "block";
          sound_turn.style.display = "none";
        }
      }
    };

    for (var _index = 0; _index < videos.length; _index++) {
      var currentIndex;
      var sound_turn;
      var sound_switch;

      _loop(_index);
    }

    ;
    setSectionState(destination.index);

    if (destination.index === 1) {
      showHeader(true);
    }

    if (destination.index === 0) {
      showHeader(false);
      var firstVideo = document.querySelector('[section="video1"]');
      firstVideo.classList.remove("video_block_full");

      if (!isMobile) {
        second_main_video.classList.add("hide_video");
        first_main_video.classList.remove("hide_video");
        second_main_video.currentIndex = 0;
      }

      first_main_video.currentTime = 0;
      first_main_video.play();
    }

    menuItems.forEach(function (menu) {
      menu.classList.remove("menu_active_link");
      var a = menu.querySelector("a");

      if (a.href.endsWith({
        toString: function toString() {
          return destination.anchor || 'index.html';
        }
      })) {
        menu.classList.add("menu_active_link");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  init();
});
var path = "./";
var sections = document.querySelectorAll("[section]");
var mainBlock = document.querySelector("#main");
var turnSounds = document.querySelectorAll("[turn-sound]");
var lastSection = document.querySelector("[section=\"video3\"]");
var lastVideoSection = document.querySelector("[section=\"video3\"]");
var header = document.querySelector("#header");
var copyCodeButton = document.querySelector("[copyCode]");
var body = document.querySelector(".main_body_section");
var mobilePosters = document.querySelectorAll("[poster_mobile]");
var mobile_buttons = document.querySelectorAll("[mobile_button]");
var loaderBlock = document.querySelector(".loader_block");
var userAgentString = navigator.userAgent;
var isSafari = userAgentString.indexOf("Safari") > -1;

function init() {
  showLoader(true);
  window.currentIndex = null;
  header.classList.add("header_transparent");

  if (isMobile()) {
    changeMainVideoForMobile();
    changeVideoForMobile();
    changeMobilePosters();
  }

  if (isMobile() && isSafari) {
    mobile_buttons.forEach(function (mobile_button) {
      mobile_button.classList.add("safari_button");
    });
  }

  if (/phone_video/.test(location.href)) {
    showLoader(true);
    showHeader(true);
    videos[2].play();
  } else if (/desktop_video/.test(location.href)) {
    showLoader(true);
    showHeader(true);
    videos[1].play();
  }

  first_main_video.addEventListener("error", function (e) {
    showLoader(false);

    if (isMobile()) {
      first_main_video.setAttribute("poster", "images/main_page/video_img_mobile_1.png");
    } else {
      first_main_video.setAttribute("poster", "images/main_page/video_img_1.png");
    }

    showCopyCodeButton(true);
  });
  first_main_video.addEventListener('loadeddata', function () {
    showLoader(false);
  }, false);
  first_main_video.addEventListener("timeupdate", function () {
    var firstVideoBlock = document.querySelector('[section="video1"]');

    if (first_main_video.currentTime > 0) {
      showLoader(false);
      showCopyCodeButton(true);
    }

    if (first_main_video.currentTime >= 3.5) {
      showCopyCodeButton(false);
      addFullVideo(true);
    }

    if (first_main_video.currentTime >= 14.8) {
      firstVideoBlock.classList.add("video-opacity");
    }

    if (first_main_video.currentTime >= 15.8) {
      firstVideoBlock.classList.remove("video-opacity");
      showHeader(true);
    }
  }, false);
}

window.addEventListener("resize", function () {
  if (isMobile()) {
    changeVideoForMobile();
  }
}, true);

function showLoader(isShow) {
  if (isShow) {
    loaderBlock.classList.add("show_loader");
  } else {
    setTimeout(function () {
      loaderBlock.classList.remove("show_loader");
    }, 1000);
  }
}

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
  var firstVideo = document.querySelector('[section="video1"]');

  if (isFullVideo) {
    firstVideo.classList.add("video_block_full");
  } else {
    firstVideo.classList.remove("video_block_full");
  }
} //video


function changeVideoForMobile() {
  for (var _index2 = 1; _index2 < videos.length; _index2++) {
    var _video = videos[_index2];

    if (!_video.src.includes("mobile")) {
      _video.src = path + "files/main_video/video_".concat(_index2 + 1, "_mobile.mov");
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
  turn.addEventListener("click", function () {
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
}); //header

function showHeader(isShow) {
  if (isShow) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
} //state


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


var slider = new Swiper(".our_work-slider", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev"
  },
  pagination: {
    el: ".nav-pag",
    type: "bullets"
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 1.5
    },
    1440: {
      slidesPerView: 2.5
    },
    1920: {
      slidesPerView: 3.5
    }
  }
});
var animateSoundTurnBlocks = document.querySelectorAll(".sound_turn");
animateSoundTurnBlocks.forEach(function (soundTurn) {
  lottie.loadAnimation({
    container: soundTurn,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './files/robot.json'
  });
});
var animateSountSwitchBlocks = document.querySelectorAll(".sound_switch");
animateSountSwitchBlocks.forEach(function (soundSwitch) {
  lottie.loadAnimation({
    container: soundSwitch,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './files/robot_still.json'
  });
});

function supportsHEVCAlpha() {
  var navigator = window.navigator;
  var ua = navigator.userAgent.toLowerCase();
  var hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
  var isSafari = ua.indexOf("safari") != -1 && !(ua.indexOf("chrome") != -1) && ua.indexOf("version/") != -1;
  var isiphone = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return (isSafari || isiphone) && hasMediaCapabilities;
}

function changeMainVideoForMobile() {
  first_main_video.src = "files/main_video/video_1_mobile.mov";
}

function changeMainVideo() {
  if (supportsHEVCAlpha()) {
    first_main_video.src = "files/main_video/video_1_part1.mov";
  } else {
    first_main_video.src = "files/main_video/video_1_part1.webm";
  }

  second_main_video.src = "files/main_video/video_1_part2.mov";
}
//# sourceMappingURL=main.js.map
