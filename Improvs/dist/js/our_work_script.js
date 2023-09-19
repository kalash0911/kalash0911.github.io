"use strict";

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
      caseElement.style = "\n            transform: scale(1);\n            height: 100%;\n            ";
    } else {
      caseElement.style = "\n            transform: scale(0);\n            height: 0;\n            ";
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
