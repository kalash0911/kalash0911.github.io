let citiList = document.querySelector('.citi-list__ul'),
    citiToggle = document.querySelector('.citi-list__title'),
    citiClose = document.querySelector('.list_close');

    citiToggle.onclick = function() {
        citiList.style.display = "block"
    };

    citiClose.onclick = function() {
        citiList.style.display = "none"
    };

    window.onclick = function(e) {
        if(e.target == citiList) {
            citiList.style.display = "none"
        }
    };


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