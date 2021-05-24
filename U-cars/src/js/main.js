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

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll ('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle ('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
    const menuBody = document.querySelector('.menu__body');
    menuBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('body_lock');
        menuBurger.classList.toggle('menu__burger_active');
        menuBody.classList.toggle('menu__body_active');
    });
}


let citiList = [...document.querySelectorAll('.citi-list__ul')],
    citiesToggle = [...document.querySelectorAll('.citi-list__title')],
    citiClose = document.querySelector('.list_close');

    citiesToggle.forEach((el)=>{
        el.onclick = function(e) {
            e.preventDefault();
            let parent=e.target.parentElement;
            let citiList=parent.querySelector('.citi-list__ul');
            citiList.classList.toggle('citi-list__ul_active')
        };
    });

    citiList.forEach((el)=>{
        el.onclick = function(e) {
            e.preventDefault();
           el.classList.remove('citi-list__ul_active')
        };
    })

let clockList = [...document.querySelectorAll('.clock-list__ul')],
clocksToggle = [...document.querySelectorAll('.clock-list__title')],
clockClose = document.querySelector('.clock-list_close');

clocksToggle.forEach((el)=>{
    el.onclick = function(e) {
        e.preventDefault();
        let parent=e.target.parentElement;
        let clockList=parent.querySelector('.clock-list__ul');
        clockList.classList.toggle('clock-list__ul_active')
    };
});

clockList.forEach((el)=>{
    el.onclick = function(e) {
        e.preventDefault();
        el.classList.remove('clock-list__ul_active')
    };
})


$(function(){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("#datepicker").datepicker({
        minDate: 0,
	});
});

$(function(){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("#datepicker2").datepicker({
        minDate: 0,
	});
});

$(document).ready(function(){
    $('.slider-auto').slick({
        slidesToShow: 3,
        infinite: false,
        speed: 400,
        responsive: [
            {
                breakpoint: 1130,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]
    });
});