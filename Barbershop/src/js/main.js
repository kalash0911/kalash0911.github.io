const progressCircle = document.querySelector('.progress-content');

document.addEventListener('DOMContentLoaded', () => {
  initCounter();
});

function initCounter() {
  let statWrapEl = document.querySelector('.init-progress');
  let initStart = false;
  let maxNumbersElArr = document.querySelectorAll('.yer > p');

  window.addEventListener('scroll', () => {
      if(isVisible(statWrapEl) && !initStart) {
        progressCircle.classList.add('progress_active');
          initStart = true;
          maxNumbersElArr.forEach((el) => {
              const maxNumber = Number(el.textContent);
              let startCount = 1308;
              let intervalId = setInterval(() => {
                  if(startCount < maxNumber) {
                      startCount += 10;
                      if (startCount > maxNumber) {
                          startCount = maxNumber;
                          clearInterval(intervalId);
                      }
                      el.textContent = formatNumber(startCount);
                  } 
              }, 20)
          })
      } 
  });
}

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{0})+(?!\d))/g, ",");
};


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}