const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu");

if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
  });
};

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

destroySlidersOnResize(".partners-slider", 999999, {
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  pagination: {
    el: ".pagination",
    clickable: true,
  },
});

/* for form */

let yearSelect = document.getElementById("year");

if (yearSelect) {
  const currentYear = new Date().getFullYear();
  for (let year = 1900; year <= currentYear; year++) {
    let option = document.createElement("option");
    option.setAttribute("value", year);
    option.text = year;
    yearSelect.appendChild(option);
  }
}

const textarea = document.getElementById("myTextarea");
const charCount = document.getElementById("charCount");

if (textarea) {
  textarea.addEventListener("input", function () {
    const length = textarea.value.length;
    charCount.innerText = length + " /300";
  });
}

const fileDrop = document.getElementById('file-drop');
const fileInput = document.getElementById('file-input');
const fileName = document.getElementById('file-name');

if (fileDrop && fileInput && fileName) {

  fileDrop.addEventListener('dragenter', (event) => {
    event.preventDefault();
    fileDrop.classList.add('drag-over');
  });

  fileDrop.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  fileDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    fileDrop.classList.remove('drag-over');

    const file = event.dataTransfer.files[0];

    if (file) {
      fileName.textContent = `${file.name}`;
      fileInput.files = event.dataTransfer.files;
    } else {
      fileName.textContent = 'Файл не обраний';
    }
  });

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
      fileName.textContent = `${file.name}`;
    } else {
      fileName.textContent = 'Файл не обраний';
    }
  });
}