"use strict";

var slider = new Swiper(".case_swiper", {
  speed: 6000,
  grabCursor: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  // loop: true,
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
    1024: {
      freeMode: true
    },
    1440: {
      slidesPerView: 1.5
    },
    1520: {
      slidesPerView: 2.2
    },
    1920: {
      slidesPerView: 2.5
    },
    2560: {
      slidesPerView: 3
    }
  },
  on: {
    init: function init() {
      var _this = this;

      this.autoplay.stop();
      this.el.addEventListener("mouseenter", function () {
        _this.autoplay.start();
      });
      this.el.addEventListener("mouseleave", function () {
        _this.autoplay.stop();
      });
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
      caseElement.style = "\n            display:flex;\n            ";
    } else {
      caseElement.style = "\n            display:none;\n            ";
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
});
//# sourceMappingURL=our_work_script.js.map
