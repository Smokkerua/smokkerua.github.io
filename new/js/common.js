$(document).ready(function(){
    
     $('.slider-for1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for1',
      focusOnSelect: true
    });
    
    $('.slider-for2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav2'
    });
    $('.slider-nav2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for2',
      focusOnSelect: true
    });
    
    $('.slider-for3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav3'
    });
    $('.slider-nav3').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for3',
      focusOnSelect: true
    });
    
    if($(".number-input")[0]) {
        $(".number-input").mask("+7 (999) 999-9999");
    }
    
    $(".head-menu span").click(function(){
        if($(".head-menu ul").hasClass("hide")){
            $(".head-menu ul").removeClass("hide");
            $(this).html("Скрыть");
        } else {
            $(".head-menu ul").addClass("hide");
            $(this).html("Показать");
        }
    });
    
    //плавное движение по ссылке
    $(".scroll-menu").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});

$(document).ready(function() {
	$(".form-send").submit(function(){
		var form = $(this);
		var data = form.serialize();
		$.ajax({
		   	type: 'POST',
			url: form.attr('action'),
		   	data: data,
		   	
		   	success: function(){
                $('#callback').modal('hide');
                $('#thx').modal('show');
                var timer = setInterval(function () {
                    $('#thx').modal('hide');
                }, 3000);
			}
		});
		return false;
	});
    
    $(".form-contact-bot").submit(function(){
		var form = $(this);
		var data = form.serialize();
		$.ajax({
		   	type: 'POST',
			url: form.attr('action'),
		   	data: data,
		   	
		   	success: function(){
                $('#thx').modal('show');
                var timer = setInterval(function () {
                    $('#thx').modal('hide');
                }, 3000);
			}
		});
		return false;
	});
});

$(document).ready(function() {
    var pageValue = window.location.href.toString();
    $(".url").attr('value', pageValue);
    $('.but').click(function(){
        $(".name-form").attr('value', $(this).text());
    })
    
});
$(document).ready(function () {
    var scrollBtn = document.getElementById("scroll-to");
    window.onscroll = function () {
        var scrolled = window.pageYOffset;
        scroll.innerHTML = scrolled + 'px';
        if (scrolled > 650) {
            scrollBtn.classList.remove('hide');
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
            scrollBtn.classList.add('hide');
        }
    };
    $('#scroll-to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 1000);
        }
        return false;
    });
});