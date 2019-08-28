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

burgerMenu('.navigasia');

