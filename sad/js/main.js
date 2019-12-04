$(document).ready(function(){
	$('.header-button').on("click", function(){
  $('.call-back__popup').show();

	});
 
 $('.call-back__close').on("click", function(){
  $('.call-back__popup').hide()
 });

 $('.call-back__close').on("click", function(){
  $('.thanks__popup').hide()
 });

	$('.button-entry').on("click", function(){
  $('.entry-popup').show();

	});
 
 $('.entry__close').on("click", function(){
  $('.entry-popup').hide()
  });

 $(".input-tel").mask("+7(999)999-99-99");
    
       
    
 });

