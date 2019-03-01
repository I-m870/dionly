window.onload = function() {
	$("a").mouseenter(function() {
		$(this).addClass("ahover");
	}).mouseleave(function() {
		$(this).removeClass("ahover");
	})
	$("a")

	$(".n_menu li").mouseenter(function() {
		$(this).css("background-position", "160px -38px").find(".submenu").css("display", "block")
	}).mouseleave(function() {
		$(this).css("background-position", "160px 0").find(".submenu").css("display", "none")
	})
	$(".n_menu li")

	$(".submenu li").mouseenter(function() {
		$(this).css("background", "#1c1919");
	})
	$(".submenu li:even").mouseleave(function() {
		$(this).css("background", "#383333");
	})
	$(".submenu li:odd").mouseleave(function() {
		$(this).css("background", "#312D2D");
	})

	$(".n_menu li ul li:even").css("background", "#383333");
	$(".n_menu li ul li:odd").css("background", "#312D2D");
	$(".n_menu li ul li a").not(".bold").css({
		fontWeight: "normal",
		width: "50px"
	});
	$(".n_menu li ul li a:last").css("width", "100px");

	$("#footer .p_list").find("div").mouseenter(function() {
		var index = $(this).index();
		$(this).addClass("select")
				.siblings()
				.removeClass("select")
				.end()
				.parent()
				.parent()
				.parent()
				.find(".city")
				.children()
				.eq(index)
				.removeClass("cityhide")
				.addClass("cityshow")
				.siblings()
				.removeClass("cityshow")
				.addClass("cityhide")
				.parent()
				.parent()
				.find("img")
				.eq(index)
				.css("display" , "block")
				.siblings()
				.css("display" , "none");
				
	})

	$("#float").find("a").hover(function() {
		$(this).css("background", "#d0383a");
	}, function() {
		$(this).css("background", "#c11e20");
	})
	
/*	$("cityareas").children().mouseenter(function(){
		$(this).parent().parent().find(".city").children().addClass("cityshow")
	})*/
	
}