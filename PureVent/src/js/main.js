// for header

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
const overflow = document.querySelector(".overflow");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
};

if (overflow) {
  overflow.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if (burger.classList.contains('burger_active')) {
      burger.classList.add('burger_finish');
      burger.classList.remove('burger_active');
      overflow.classList.toggle("overflow_active");
    } else {
      burger.classList.add('burger_active');
      burger.classList.remove('burger_finish');
      overflow.classList.toggle("overflow_active");
    }
    menuBody.classList.toggle("menu_active");
  });
};

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", function (e) {
      document.body.classList.remove("body_lock");
      document.body.classList.remove("active");
      burger.classList.remove("burger_active");
      burger.classList.add('burger_finish');
      menuBody.classList.remove("menu_active");
      overflow.classList.remove("overflow_active");
    })
  }
};

// for active-link

var currentUrl = window.location.href;
var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function (menuItem) {

  var menuItemLink = menuItem.querySelector('a');

  if (menuItemLink.href === currentUrl) {
    menuItem.classList.add('active-link');
  }
});

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

let menuVent = ['Clean guarantee', 'Price matching', 'Locally Licensed']

destroySlidersOnResize(".vent-slider", 99999, {

  pagination: {
    el: ".vent-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menuVent[index]) + "</span>";
    },
  },
});


let menuPricing = ['duct cleaning', 'air CC']

destroySlidersOnResize(".pricing-slider", 99999, {
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: ".pricing-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menuPricing[index]) + "</span>";
    },
  },
});
