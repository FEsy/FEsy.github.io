(function($){
	
	var scrollLimt = 1000;
	var topElem = $("#jsTotop");
	var scrollSpeed = 500;

	topElem.fadeIn();
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > scrollLimt){
			$(topElem).stop().fadeTo(300, 1);
		}else{
			$(topElem).stop().fadeIn(300, 1);
		}
	})

	$(topElem).click(function(){
		$("html, body").animate({scrollTop: 0},scrollSpeed);
		return false;
	})
})(jQuery)