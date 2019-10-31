// сервисы
$(document).ready(function() {



$('body').on('click','.spoller',function(event) {
	if($(this).hasClass('closeall') && !$(this).hasClass('active')){
	
	}
	$(this).toggleClass('active').next().slideToggle(300,function(index, val) {
			if($(this).parent().find('.slick-slider').length>0){
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
	});
});


 });	
//бургер меню
function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.menu_burger');
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

burgerMenu('.meny');