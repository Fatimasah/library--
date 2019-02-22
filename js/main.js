
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
   
    // scroll top 
	var scrollBtn = $(".scroll-up");
	$(window).scroll(function () {
			if ($(this).scrollTop()>=100)
			{
				scrollBtn.show();
			}
			else{
                scrollBtn.hide();
            }             
		});
		scrollBtn.click(function () {
			$("html, body").animate({scrollTop: 0}, 600);
			return false;
			});

 }); //end ready function


$('#myCarousel').carousel({
    interval: 3000,
 })

