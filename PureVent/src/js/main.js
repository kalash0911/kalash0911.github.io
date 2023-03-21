new WOW().init();

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

// For Accardion

initAccordion();

function initAccordion() {
  const accardionToggle = (slideMenu) => (e) => {
    slideMenu.forEach((links) => {
      const hidePanel = links.nextElementSibling;
      const item = links.closest(".item");
      if (links === e.currentTarget) {
        hidePanel.classList.toggle("active-block");
        item.classList.toggle("active");
      } else {
        links.classList.remove("active");
        hidePanel.classList.remove("active-block");
        item.classList.remove("active");
      }
    });
  };

  const slideMenu = document.querySelectorAll(".accardion-link");

  slideMenu.forEach((links) => {
    links.addEventListener("click", accardionToggle(slideMenu));
  });
}


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


destroySlidersOnResize(".sec-slider", 99999, {
  spaceBetween: 20,
  freeMode: true,
  speed: 700,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  scrollbar: {
    el: ".sec-swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },

    640: {
      slidesPerView: 1.5,
    },

    800: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2.5,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

// For progress-circle animate

function animateProgressCircle(circle, speed, updateSpeed) {
  var offset = circle.getBoundingClientRect().top - window.innerHeight;
  if (offset < 0 && !circle.classList.contains('animated')) {
    var percent = parseInt(circle.querySelector('.progress-text').textContent);
    var circumference = 2 * Math.PI * 50;
    var strokeDasharrayValue = (percent / 100) * circumference + ' ' + (1 - percent / 100) * circumference;
    circle.querySelector('.progress-value').style.strokeDasharray = strokeDasharrayValue;
    circle.querySelector('.progress-text').textContent = '0%';
    circle.classList.add('animated');
    var duration = 1000 / speed;
    var startTime = performance.now();
    requestAnimationFrame(function animate(currentTime) {
      var elapsedTime = currentTime - startTime;
      var progress = elapsedTime / duration;
      if (progress > 1) {
        progress = 1;
      }
      var currentPercent = Math.round(progress * percent);
      var currentStrokeDasharrayValue = (currentPercent / 100) * circumference + ' ' + (1 - currentPercent / 100) * circumference;
      circle.querySelector('.progress-value').style.strokeDasharray = currentStrokeDasharrayValue;
      circle.querySelector('.progress-text').textContent = currentPercent + '%';
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    });

    var updateInterval = setInterval(function () {
      var currentPercent = parseInt(circle.querySelector('.progress-text').textContent);
      if (currentPercent < percent) {
        circle.querySelector('.progress-text').textContent = currentPercent + 1 + '%';
      } else {
        clearInterval(updateInterval);
      }
    }, updateSpeed);
  }
}

function handleScroll() {
  var circles = document.querySelectorAll('.progress-circle');
  if (circles.length > 0) {
    circles.forEach(function (circle) {
      animateProgressCircle(circle, 1, 1);
    });
  }
}

window.addEventListener('scroll', handleScroll);

function isScrolledIntoView(elem) {
  var docViewTop = window.pageYOffset;
  var docViewBottom = docViewTop + window.innerHeight;

  var elemTop = elem.offsetTop;
  var elemBottom = elemTop + elem.offsetHeight;

  return (elemTop <= docViewBottom);
}

// For counter animate

// проверяем наличие элементов с классом "count-progress" на странице
if (document.querySelectorAll('.count-progress').length) {
  // создаем экземпляр Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // если элемент стал видимым и его анимация еще не проигрывалась, запускаем анимацию
      if (entry.isIntersecting && entry.target.getAttribute('data-animated') === 'false') {
        const element = entry.target;
        const count = parseInt(element.innerText);
        let currentCount = 0;
        const speed = parseInt(element.getAttribute('data-speed')) || 10; // считываем значение атрибута "data-speed" или устанавливаем значение по умолчанию
        const step = parseInt(element.getAttribute('data-step')) || 1; // считываем значение атрибута "data-step" или устанавливаем значение по умолчанию
        const interval = setInterval(() => {
          if (currentCount < count) {
            currentCount += step;
            if (currentCount > count) {
              currentCount = count;
            }
            element.innerText = currentCount;
          } else {
            clearInterval(interval);
            element.setAttribute('data-animated', 'true'); // устанавливаем атрибут "data-animated" в значение "true"
          }
        }, speed);
      }
    });
  });

  // добавляем каждый элемент с классом "count-progress" в Observer
  document.querySelectorAll('.count-progress').forEach(element => {
    observer.observe(element);
  });
}





