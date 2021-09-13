var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth < 5000 && isMobile.any()) {
            if (targetElement.classList.contains('btn-arrow')) {
                targetElement.closest('.menu__item').classList.toggle('_hover')
            }
        }
    }
};

const burger = document.querySelector(".burger");
if (burger) {
  const menuBody = document.querySelector(".menu");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    burger.classList.toggle("burger_active");
    menuBody.classList.toggle("menu_active");
  });
}

/* Modal popUp img */

const itemImg = document.querySelectorAll('.gallery__item-img');
const modal =  document.querySelector('.modal-img');
const modalImg = modal.querySelector('img');
const overflowImg = document.querySelector('.modal-img__overflow');
const closeBtnImg  = document.querySelector('.modal-btn-close');

function showImg(e){
    document.body.classList.add("body_lock");
    modal.classList.add("modal-img_active");
    e.preventDefault();
    
    let img = e.target.closest('img');
    let src = img.getAttribute('src');

    modalImg.setAttribute('src', src);
};

function closeImg(){
    document.body.classList.remove("body_lock");
    modal.classList.remove("modal-img_active");
};

for (let i = 0;i<itemImg.length;++i){
    itemImg[i].addEventListener("click", function (e) {
        showImg(e);
    });
};

let modalActive = document.querySelectorAll('.modal-img_active');

if (modalActive) {
    overflowImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });

    closeBtnImg.addEventListener("click", function (e) {
        closeImg();
        e.preventDefault();
    });
};

/* ///// */

/* Tabs */

const tabsBtn  = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tabs__nav-btn_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tabs__nav-btn_active');
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('tabs__item_active');
            });

            currentBtn.classList.add('tabs__nav-btn_active');
            currentTab.classList.add('tabs__item_active');
        }
    });
});

/* Открытие кнопки и её закрытие при клике вне её области */

const langWrap = document.querySelector(".lang-wrap");
const langName = document.querySelector(".languages-name");

if (langName) {
	langName.addEventListener("click", function (e) {
		e.preventDefault();
		langWrap.classList.toggle("lang-wrap_active");
	});

	document.body.addEventListener("click", function (e) {
		if (!e.target.closest('.lang-wrap_active')) {
			langWrap.classList.remove("lang-wrap_active");
		};
	});
};

/* Плавный скрол на ссылку якоря на jQuery */

$('.scrollto a').on('click', function() { /* добавить класс scrollto в тег nav */

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});