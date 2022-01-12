/* header logick */

window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth < 1024) {
            if (targetElement.classList.contains('arrows')) {
                targetElement.closest('.menu-item').classList.toggle('menu-item_active');
                targetElement.closest('.menu').classList.toggle('opacity-links')
            }
        }
    }
};

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu-wrap");
const linkClose = document.querySelectorAll(".link-close");
if (burger) {
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("body_lock");
    document.body.classList.toggle("active");
    if(burger.classList.contains('burger_active')) {
        burger.classList.add('burger_finish');
        burger.classList.remove('burger_active');
      } else {
        burger.classList.add('burger_active');
        burger.classList.remove('burger_finish');
      }
    menuBody.classList.toggle("menu_active");
  });
};

if (linkClose.length) {
    for(var i =0;i<linkClose.length;++i){
        linkClose[i].addEventListener("click", function (e) {
            document.body.classList.remove("body_lock");
            document.body.classList.remove("active");
            burger.classList.remove("burger_active");
            burger.classList.add('burger_finish');
            menuBody.classList.remove("menu_active");
        })
    }
};


/* ///// */

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

        if( ! currentBtn.classList.contains('tab_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tab_active');
            });

            tabsItem.forEach(function(item) {
                item.classList.remove('tab__item_active');
            });

            currentBtn.classList.add('tab_active');
            currentTab.classList.add('tab__item_active');
        }
    });
});

/* Tabs2 */

const tabsBtn2  = document.querySelectorAll('.tabs2__nav-btn');
const tabsItem2 = document.querySelectorAll('.tabs2__item');

tabsBtn2.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn2 = item;
        let tabId2 = currentBtn2.getAttribute('data-tab');
        let currentTab2 = document.querySelector(tabId2);

        if( ! currentBtn2.classList.contains('tab2_active')) {
            tabsBtn2.forEach(function(item) {
                item.classList.remove('tab2_active');
            });

            tabsItem2.forEach(function(item) {
                item.classList.remove('tab2__item_active');
            });

            currentBtn2.classList.add('tab2_active');
            currentTab2.classList.add('tab2__item_active');
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