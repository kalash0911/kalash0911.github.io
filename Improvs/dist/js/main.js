"use strict";

document.addEventListener('DOMContentLoaded', function () {
  init();
});
var path = "./";
var sections = document.querySelectorAll("[section]");
var mainBlock = document.querySelector("#main");
var videos = document.querySelectorAll('[video]');
var turnSounds = document.querySelectorAll('[turn-sound ]');

function isMobile() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  if (window.innerWidth <= 768) {
    check = true;
  }

  return check;
}

;

function init() {
  window.currentIndex = null;
  showHeader(false);

  if (isMobile()) {
    changeVideoForMobile();
  }
}

function copyCode() {
  var jsCode = "<!DOCTYPE html>\n    <head><title></title></head>\n    <body>\n    <svg id=\"mySvg\" width=\"960\" height=\"500\"></svg>\n    <script src=\"http://d3js.org/d3.v7.min.js\"></script>\n    <script src=\"http://d3js.org/topojson.v3.min.js\"></script>\n    <script>\n    var width = 960, height = 500, svg = d3.select(\"svg\");\n    d3.json(\"https://raw.githubusercontent.com/org-scn-design-studio-\" +\n        \"community/sdkcommunitymaps/master/geojson/Europe/Ukraine-regions.json\"\n    ).then(function (data) {\n        var land = topojson.feature(data, data.objects.UKR_adm1),\n            projection = d3.geoAlbers().rotate([-30, 0, 0])\n                .fitSize([.9 * width, .9 * height], land),\n            path = d3.geoPath().projection(projection);\n        svg.selectAll(\"path\").data(land.features).enter()\n            .append(\"path\").attr(\"d\", path).attr(\"fill\", \"#FFD500')\n            .attr(\"stroke\", \"#005BBB\");\n        svg.append(\"text\").attr(\"x\", (width / 2)).attr(\"y\", height - (20))\n            .attr(\"text-anchor\", \"middle\").style(\"font-size\", \"24px\")\n            .style(\"fill\", \"#005BBB\").text(\"Improvs\");";
  navigator.clipboard.writeText(jsCode);
} //video


function changeVideoForMobile() {
  for (var index = 0; index < videos.length; index++) {
    var video = videos[index];
    video.src = path + "files/main_video/video_".concat(index + 1, "_mobile.mp4");
  }
}

turnSounds.forEach(function (turn) {
  turn.addEventListener('click', function () {
    var video = videos[getSectionState()];
    var img = turn.querySelector('img');

    if (video) {
      video.muted = !video.muted;

      if (video.muted) {
        img.src = path + '/images/main_page/sound_switch.svg';
      } else {
        img.src = path + '/images/main_page/sound_turn.svg';
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
      videos[nextIndex].play();
    }
  });
};

for (var index = 0; index < videos.length; index++) {
  _loop(index);
}

function stopAllVideo() {
  videos.forEach(function (video) {
    video.currentTime = 0;
    video.pause();
  });
}

function nextSlide() {
  var index = getSectionState();

  if (index) {
    if (index <= sections.length - 2) {
      index = index + 1;

      if (index == 2) {
        stopAllVideo();
        videos[2].play();
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
    videos[1].play();
    setSectionState(1);
  }
}

function previousSlide() {
  var index = getSectionState();

  if (index) {
    if (index > 0) {
      index = index - 1;

      if (index <= 2) {
        stopAllVideo();
        videos[index].play();
      }

      if (index == 0) {
        showHeader(false);
      }

      var section = sections[index].getAttribute('section');
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
  }); //mainBlock.style.transform = `translate3d(0px, -${offset}px, 0px)`;
} //header


function showHeader(isShow) {
  var header = document.querySelector("#header");

  if (isShow) {
    header.style.display = "block";
  } else {
    header.style.display = "none";
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
  speed: 1400,
  // centeredSlides: true,
  // grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1.3,
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
  }
});

function filterCases(filter) {
  var cases = document.querySelectorAll(".case");
  cases.forEach(function (caseElement) {
    var tags = caseElement.querySelectorAll(".tag");
    var shouldShow = false;
    tags.forEach(function (tag) {
      if (tag.textContent === filter || filter === "all") {
        shouldShow = true;
      }
    });

    if (shouldShow) {
      caseElement.style = "display:flex;";
    } else {
      caseElement.style = "display:none;";
    }
  });
  var filterItems = document.querySelectorAll(".work_filter_item");
  filterItems.forEach(function (filterItem) {
    filterItem.classList.remove("active_filter_item");
  });
  var activeFilterItem = document.querySelector("[data-id=\"".concat(filter, "\"]"));
  activeFilterItem.classList.add("active_filter_item");
}

var filterItems = document.querySelectorAll(".work_filter_item");
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function (event) {
    var filter = event.target.getAttribute("data-id");
    filterCases(filter);
  });
}); //move contact button

function moveToForm() {
  nextSlide();
}

var blockContactButton = document.querySelector('[section="button_form"]');
var contactButton = document.querySelector("#move_form_button");

blockContactButton.onmousemove = function (e) {
  contactButton.style.left = e.clientX + -(contactButton.offsetWidth / 2) + 'px';
  contactButton.style.top = e.clientY + -(contactButton.offsetHeight / 2) + 'px';
};
//# sourceMappingURL=main.js.map
