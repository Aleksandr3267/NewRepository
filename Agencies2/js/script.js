//ПРОКРУТКА ВНИЗ

$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll',function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 250;
		$('body, html').animate({scrollTop: bl_top}, 700)
		return false;	
	
	})

});
//  if ($(window).scrollTop()<=$(document).height()-"900") $("#scroll-to").fadeIn("slow")
//  $(window).scroll(function(){
//   if ($(window).scrollTop()>=$(document).height()-"900") $("#scroll-to").fadeOut("slow")
//    else $("#scroll-to").fadeIn("slow")
//  });
//  $("#scroll-to").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
// });

//бургер меню
function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.menu');
	let links = menu.find('.menu_link');
	let overlay = menu.find('.meny_overfow');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('active');

		if (menu.hasClass('active')) {
			$('body').css('overflow');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.creatives');

