$(document).ready(function(){
        
        // активный/неактивный блок(красный/зеленый круг)
        $('.circle').click(function(){
            $(this).toggleClass('active-circle'); // переключение цвета
            $(this).parents('.row-table').toggleClass('low-opaciti');  // обращение к родителю родителя - смена прозрачности
        });
    
        // подчеркивание флага зеленой полоской в 1-м попап окне
        $('.flag').click(function(){
            $('.flag').removeClass('flag-active');
            $(this).addClass('flag-active');
        });
    
        // подчеркивание типа потока зеленой полоской в 1-м попап окне
        $('.typed').click(function(){
            $('.typed').removeClass('typed-active');
            $(this).addClass('typed-active');
        });
    
        // Попап лендинг - смена фона при выборе лендинга
        $('.lendind__box').click(function(){
            $(this).toggleClass('lendind__box-active');
        });
    
        // Попап лендинг - выпадающее окно - добавить лендинг
          $(".show-btn").click(function(){
            $(".sm-menu").fadeToggle("fast");
          });
    
        // Попап лендинг - добавить лендинг(закрыть)
          $(".sm-menu-link").click(function(){
            $("#modal2").removeClass("open");
            $("#modal2").parents(".overlay").removeClass("open");
            $("#modal1").addClass("open");
            $("#modal1").parents(".overlay").addClass("open");
            $("#modal2").addClass("modal-offer");
            $("#modal2").removeClass("modal-lendind");
            if($("#modal2").hasClass('without-main')){
                $("#modal1").removeClass("open");
                $("#modal1").parents(".overlay").removeClass("open");
                $("#modal2").removeClass("without-main");
            }
          });
    
        // Попап оффер - после выбора 1-го списка - активировать 2й
        $(".item-pp").click(function(){
            $("#two").removeClass("select__head-off");
          });
    
    
        // кнопка назад в главный попап
         $(".back-first").click(function(){
            $("#modal2").removeClass("open");
            $("#modal2").parents(".overlay").removeClass("open");
            $("#modal1").addClass("open");
            $("#modal1").parents(".overlay").addClass("open");
          });
    
        // кнопка назад в выбор оффера
         $(".back-second").click(function(){
            $("#modal2").addClass("modal-offer");
            $("#modal2").removeClass("modal-lendind");
          });
    
        // далее, на попап лендинга
         $(".item-offer").click(function(){
            $("#modal2").removeClass("modal-offer");
            $("#modal2").addClass("modal-lendind");
          });

    
            // если открытие попап 2-го экрана, то не показывать главный попап
            $('.open-modal').click(function(){
                if(this.classList.contains('btn-addlend')){
                    $("#modal2").addClass("without-main");
                }
            });
    
        // Открыть попап оффер
        $(".offer-popap").click(function(){
            $("#modal2").addClass("modal-offer");
            $("#modal2").removeClass("modal-lendind");
            $("#modal2").removeClass("open");
            $("#modal2").parents(".overlay").removeClass("open");
            $("#modal1").addClass("open");
            $("#modal1").parents(".overlay").addClass("open");
          });
    
        // переключение трёх экранов
        $('.btn-burger').click(function(){
            // проверка какой экран активный
            if(this.classList.contains('burger-icon')){
                this.classList.remove('burger-icon');
                this.classList.add('lp-icon');
                $('.btn-hide-lp').addClass('show');
                $('.icon-burger').removeClass('show');
                $('.main-table').removeClass('statistick-on');
                $('.icon-lp').addClass('show');  
                $('.main-table').removeClass('first-screen'); 
                $('.main-table').addClass('second-screen'); 
                $('.date-select').addClass('hide');
            }
            else if(this.classList.contains('lp-icon')){
                this.classList.remove('lp-icon');
                this.classList.add('filer-icon');
                $('.btn-hide-lp').removeClass('show');
                $('.main-table').removeClass('statistick-on');
                $('.icon-filter').addClass('show');
                $('.icon-lp').removeClass('show'); 
                $('.main-table').removeClass('second-screen'); 
                $('.main-table').addClass('third-screen'); 
                $('.date-select').addClass('hide');
                $('.btn-stat').addClass('hide');
            }
            else if(this.classList.contains('filer-icon')){
                this.classList.remove('filer-icon');
                this.classList.add('burger-icon');
                $('.main-table').removeClass('statistick-on');
                $('.icon-burger').addClass('show');
                $('.icon-filter').removeClass('show');
                $('.main-table').removeClass('third-screen'); 
                $('.main-table').addClass('first-screen'); 
                $('.date-select').addClass('hide');
                $('.btn-stat').removeClass('hide');
            } 

        });
    
        // кнопка статистики
        $('.btn-stat').click(function(){
            
            // проверка, если кнопка статистики включена
            if($('.main-table').hasClass('first-screen')){
                    
            
                if($('.main-table').hasClass('statistick-on')){

                    // возвращаем инокнку первого экрана
                    $('.btn-burger').removeClass('lp-icon');
                    $('.btn-burger').removeClass('filer-icon');
                    $('.btn-burger').addClass('burger-icon');
                    $('.icon').removeClass('show');
                    $('.icon-burger').addClass('show');

                    // прячем кнопку дет.статистики и возвращаем на первый экран
                    $('.main-table').removeClass('statistick-on');
                    $('.btn-window').addClass('hide');
                    $('.date-select').addClass('hide');
                    $('.main-table').addClass('first-screen');

                } else {

                    // выводим экран статистки и показываем кнопку дет. статистики
                    $('.main-table').addClass('statistick-on');
                    $('.btn-window').removeClass('hide');
                    $('.date-select').removeClass('hide');

                }
            }
            
            // проверка, если кнопка статистики включена
            if($('.main-table').hasClass('second-screen')){
                    
            
                if($('.main-table').hasClass('statistick-on')){

                    // возвращаем инокнку первого экрана
                    $('.btn-burger').addClass('lp-icon');
                    $('.btn-burger').removeClass('filer-icon');
                    $('.btn-burger').removeClass('burger-icon');
                    $('.icon').removeClass('show');
                    $('.icon-lp').addClass('show');

                    // прячем кнопку дет.статистики и возвращаем на первый экран
                    $('.main-table').removeClass('statistick-on');
                    $('.btn-window').addClass('hide');
                    $('.date-select').addClass('hide');
                    $('.main-table').addClass('second-screen');

                } else {

                    // выводим экран статистки и показываем кнопку дет. статистики
                    $('.main-table').addClass('statistick-on');
                    $('.btn-window').removeClass('hide');
                    $('.date-select').removeClass('hide');

                }
            }
            
        });
    
    // вкл/выкл радио кнопка
    $(function () {
        $('.switch-btn').click(function () {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
            } else {
                $(this).trigger('off.switch');
            }
        });
         // если включить/выключить
        $('.switch-btn').on('on.switch', function () {
            
        });
        $('.switch-btn').on('off.switch', function () {
            
        });
    });
        
     // авто-ширина инпут   
    function resizeInput() {
        $(this).attr('size', $(this).val().length);
    }
    $('input[type="text"]')
        .keyup(resizeInput)
        .each(resizeInput);
  

    // попап окно
    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>');
    });

    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
                modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);

        $(document).on('click', function(e){
            var target = $(e.target);

            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                    $("#modal2").addClass("modal-offer");
                    $("#modal2").removeClass("modal-lendind");
                    
                    
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });
    // попап окно - закрыть
    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");
        setTimeout( function(){	
            $(modal).parents(".overlay").removeClass("open");
        }, 350);

    });
   
     // открыть 2-е попап окно(лендинг/оффер)
    $(".open-new-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");

        $(modal).parents(".overlay").removeClass("open");
        
        var $this = $(this),
                modal = $($this).data("modall");

        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);
    });

});

// смена флагов в попап окне
$(document).ready(function(){
	$("#current_page").click(function(){
		$("#current_menu").slideDown(100);
	});

	$("#current_menu a").click(function(event){
	  event.preventDefault(); 
	  $("#current_menu").slideUp(100);
	  $("#current_page").html($(this).html());
	});
});


// кастомный выпадающий список в попап окне - добавить оффер
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

        // load
        $('.date-select').on('change', function () {
            $('.main-table').addClass('hide');
            $('.load').removeClass('hide');
            setTimeout( function(){	
                $('.main-table').removeClass('hide');
                $('.load').addClass('hide');
            }, 1500);
            
        });

        // выбор потока
         $(".row-table").click(function(){
                 $(this).toggleClass("active");
          });
        

//         $(".lendings__box").click(function(){
//            $(this).toggleClass("active-box");
//          });
























