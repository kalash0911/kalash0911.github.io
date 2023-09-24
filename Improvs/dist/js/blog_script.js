"use strict";

blogFilter();

function blogFilter() {
  var list = document.querySelector(".dropdown-content");
  var items = document.querySelectorAll(".similar_post");
  list.addEventListener("click", function (e) {
    var targetId = e.target.closest('.dropdown_item').dataset.id;
    getItems(targetId === 'all' ? "similar_post" : targetId);
  });

  function getItems(className) {
    items.forEach(function (item) {
      if (item.classList.contains(className)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}
//# sourceMappingURL=blog_script.js.map
