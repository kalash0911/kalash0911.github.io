"use strict";

function filterBlogs(filter) {
  var posts = document.querySelectorAll(".similar_post");
  posts.forEach(function (postElement) {
    var categories = postElement.querySelectorAll(".category_name");
    var shouldShow = false;
    categories.forEach(function (category) {
      if (category.textContent === filter || filter === "all") {
        shouldShow = true;
      }
    });

    if (shouldShow) {
      postElement.style = "\n            display:flex;\n            ";
    } else {
      postElement.style = "\n            display:none;\n            ";
    }
  });
  var filterItems = document.querySelectorAll(".dropdown_item");
  filterItems.forEach(function (filterItem) {
    filterItem.classList.remove("active_filter_item");
  });
  var activeFilterItem = document.querySelector("[data-id=\"".concat(filter, "\"]"));
  activeFilterItem.classList.add("active_filter_item");
}

var filterItems = document.querySelectorAll(".dropdown_item");
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function (event) {
    var filter = event.target.getAttribute("data-id");
    filterBlogs(filter);
  });
});
//# sourceMappingURL=blog_script.js.map
