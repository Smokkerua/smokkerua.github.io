$(document).ready(function(){
        
        // активный/неактивный блок(красный/зеленый круг)
        $('.circle').click(function(){
            $(this).toggleClass('active-circle'); // переключение цвета
            $(this).parents('.row-table').toggleClass('low-opaciti');  // обращение к родителю родителя - смена прозрачности
        });
    
        $('.flag').click(function(){
            $('.flag').removeClass('flag-active');
            $(this).addClass('flag-active');
        });
    
        $('.typed').click(function(){
            $('.typed').removeClass('typed-active');
            $(this).addClass('typed-active');
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
            }
            else if(this.classList.contains('filer-icon')){
                this.classList.remove('filer-icon');
                this.classList.add('burger-icon');
                $('.main-table').removeClass('statistick-on');
                $('.icon-burger').addClass('show');
                $('.icon-filter').removeClass('show');
                $('.main-table').removeClass('third-screen'); 
                $('.main-table').addClass('first-screen'); 

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
                    $('.btn-burger').removeClass('lp-icon');
                    $('.btn-burger').removeClass('filer-icon');
                    $('.btn-burger').addClass('burger-icon');
                    $('.icon').removeClass('show');
                    $('.icon-burger').addClass('show');

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
        $(this).wrap('<div class="overlay"></div>')
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
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

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
    
});