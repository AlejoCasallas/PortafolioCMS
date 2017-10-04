$(document).ready(function(){
  var altura = $('.menu').offset().top;
  
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
		$('.menu').addClass('menu-fixed');
		$('#presentacion').css('padding-bottom','65px');
    } else {
		$('.menu').removeClass('menu-fixed');
		$('#presentacion').css('padding-bottom','0');
    }
  });
 
});
