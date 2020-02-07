// блок со скролом
$(document).ready(function() {
  $('.poragrafs').mouseover(function(event) {
    
    $('body').addClass('locks');
  });
  $('.poragrafs').mouseout(function(event) {
    
    $('body').removeClass('locks');
});
});
// -----------------------------------------------------
// burger
$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger, #main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// 












