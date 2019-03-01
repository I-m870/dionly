$(function() {
	var timer = setInterval(bannerPlay, 3000);
	var index = 0;

	function bannerPlay() {
		index++;
		if(index == $("ol li").size()) {
			index = 0;
		}
		$("ol li").eq(index).css("background-position-x", 0).siblings().css("background-position-x", -13);
		$("#banner ul li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	}

	$("ol li").click(function() {
		clearInterval(timer);
		index = $(this).index();
		$("ol li").eq(index).css("background-position-x", 0).siblings().css("background-position-x", -13);
		$("#banner ul li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		timer = setInterval(bannerPlay, 3000);
		/*clearInterval(timer);
		index = $(this).index() - 1;
		console.log( $(this).index())
		bannerPlay();
		timer = setInterval(bannerPlay, 3000);*/
	})
})