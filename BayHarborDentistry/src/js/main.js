// btn logic

const btn = document.querySelector('.btn');

btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;
                      
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
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
      const neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width
      if (neededWidth) {
        if (!sliderSelector.classList.contains("swiper-initialized")) {
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

destroySlidersOnResize(".main-slider", 99999, {
  spaceBetween: 30,
  effect: "fade",
  mousewheel: true,
  autoHeight: true,
  speed: 700,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  