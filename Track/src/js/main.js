$(document).ready(function(){
    $('.slider').slick({
        infinite: false,
        arrows: true,
        adaptiveHeight: true,
        speed: 1000,
        dots: true,
        appendArrows:$('.arrows'),
        appendDots:$('.dots'),
            
    });
});

jQuery(function() {
    greeting();
});
 
let greeting = () => console.log("Hi!");  

$(document).ready(function() {
    $('.burger').click(function(event){
        $('.burger,.nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
