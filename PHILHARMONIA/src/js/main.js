jQuery(function() {
    greeting();
});
 
let greeting = () => console.log("Hi!");  

$(document).ready(function() {
    $('.burger').click(function(event){
        $('.nav-menu').toggleClass('nav-active');
        $('.burger').toggleClass('burger-active');
    });
});

$(document).ready(function() {
    $('.swiper-container').slick({
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        touchThreshold:10,
    });
});

$(document).ready(function(){
	$("#header, #footer").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});