"use strict";

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  var menuArrows = document.querySelectorAll('.menu__arrow');

  if (menuArrows.length > 0) {
    var _loop = function _loop(index) {
      var menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    };

    for (var index = 0; index < menuArrows.length; index++) {
      _loop(index);
    }
  }
} else {
  document.body.classList.add('_pc');
}

var menuBurger = document.querySelector('.menu__burger');

if (menuBurger) {
  var menuBody = document.querySelector('.menu__body');
  menuBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('body_lock');
    menuBurger.classList.toggle('menu__burger_active');
    menuBody.classList.toggle('menu__body_active');
  });
}

sectionInViewport();

function sectionInViewport() {
  var section = document.querySelector('.scroll-section');
  window.addEventListener('scroll', function () {
    var sectionRect = section.getBoundingClientRect();
    var isBlockIsOutFromViewPort = sectionRect.height + sectionRect.top - 500;
    var isBlockInViewPort = window.innerHeight - sectionRect.top - 450;

    if (isBlockIsOutFromViewPort > 0 && isBlockInViewPort > 0) {
      document.body.classList.add('change-bg');
    } else {
      document.body.classList.remove('change-bg');
    }
  });
}
//# sourceMappingURL=main.js.map
