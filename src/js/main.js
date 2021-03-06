jQuery(function() {
    greeting();
});
 
let greeting = () => console.log("Hi!");  

$(document).ready(function() {
    $('.get-for-btn').click(function(event){
        event.preventDefault()
        $('.overlay').toggleClass('overlay-visible');
        $('.get-for').toggleClass('get-for-visible');
       /*  $('.btn-closs').toggleClass('btn-closs-visible'); */
    });
});

/* $(document).ready(function() {
    $('.burger').click(function(event){
        $('.nav-menu').toggleClass('nav-active');
        $('.burger').toggleClass('burger-active');
    });
}); */