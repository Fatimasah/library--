
$("document").ready(function($){

// navbar change background
    var nav = $('#mainnav');
    $(window).height(function () {
        if ($(this).height() > 0) {
            nav.addClass("sticky");
        } else {
            nav.removeClass("sticky");
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




