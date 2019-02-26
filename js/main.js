
$("document").ready(function ($) {

    // for navigation 
    var anchor = $('.nav-link');
    anchor.on('click', function (event) {
        if ($(window).width() <= 767) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 140
                }, 1000, function () {
                    window.location.hash = hash - 140;
                });
            }

        } else if ($(window).width() >= 768 && $(window).width() <= 992) {
            if (this.hash !== "") {
                event.preventDefault();
                hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 142
                }, 1000, function () {
                    window.location.hash = hash - 142;
                });
            }
        } else if ($(window).width() > 991) {
            if (this.hash !== "") {
                event.preventDefault();
                hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 83
                }, 1000, function () {
                    window.location.hash = hash - 83;
                });
            }
        }
    });
    // end for navigation 

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
    // end

    // contact
    $(".whats-fixed").click(function () {
        $(".fixed-contact").css("display", "block");
    });
    $(".close").click(function () {
        $(".fixed-contact").css("display", "none");
    });

}); //end ready function


$('#myCarousel').carousel({
    interval: 4000,
});

