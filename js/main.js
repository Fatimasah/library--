
$("document").ready(function($){

// navbar change background
    var nav = $('#mainnav');
    var logo = $('.logo');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("sticky");
            logo.addClass("sticky-logo");
        } else {
            nav.removeClass("sticky");
            logo.removeClass("sticky-logo");

        }

        });

 }); //end ready function


$('#myCarousel').carousel({
    interval: 3000,
 })

