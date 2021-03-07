jQuery(function() {
    greeting();
});
 
let greeting = () => console.log("Hi!");  

$(document).ready(function() {
    $('.get-for-btn').click(function(event){
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.get-for').toggleClass('get-for-visible');
    });
});

$(document).ready(function() {
    $('.order-now').click(function(event){
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.order').toggleClass('order-visible');
    });
});

$(document).ready(function() {
    $('.burger').click(function(event){
        event.preventDefault()
        $('.burger').toggleClass('burger-active');
        $('.header').toggleClass('header-active');
    });
});
