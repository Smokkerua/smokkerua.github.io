    //    поиск
    $(".click_search").on("click", function (event) {
        event.preventDefault();
        $(".search").toggleClass("show-search");
    });

    $(".search-screen-overlay").on("click", function (event) {
        event.preventDefault();
        $(".search").toggleClass("show-search");
    });

//    //  вечный скролл
//    for( let i = 0; i < 100; i++ )
//         document.write("<div>Случайный текст или еще, что то</div>");
//
//            window.addEventListener("scroll", function(){
//           
//                var block = document.getElementById('infinite-scroll');
//                var counter = 1;
//               
//                var contentHeight = block.offsetHeight;      // 1) высота блока контента вместе с границами
//                var yOffset       = window.pageYOffset;      // 2) текущее положение скролбара
//                var window_height = window.innerHeight;      // 3) высота внутренней области окна документа
//                var y             = yOffset + window_height;
//               
//                // если пользователь достиг конца
//                if(y >= contentHeight)
//                {
//                    //загружаем новое содержимое в элемент
//                    block.innerHTML = block.innerHTML + "<div>Случайный текст или еще, что то</div>";
//                }
//            });

           //      акордеон
    $(".table-of-contents").on("click", function (event) {
        $(".table-of-contents").toggleClass("open");
    });


    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 170
        }, 700);
    });

        //      скролл фиксированого блока справа
        $(function(){
         var topPos = $('.floating').offset().top;
          $(window).scroll(function() {
          var top = $(document).scrollTop(),
              pip = $('.clear').offset().top, //расстояние до подвала от верха окна браузера
              height = $('.floating').outerHeight(); //получаем значение высоты пл.блока
          if (top > topPos && top < pip - height) {$('.floating').addClass('fixed').fadeIn();} //блок будет виден, если значения соответствуют указанным
          else if (top > pip - height) {$('.floating').fadeOut(100);} //блок скроется когда достигнет заданного расстояния
          else {$('.floating').removeClass('fixed');}
          });
        });

        //      скролл вверх

        function up() {
            var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
          if(top > 0) {
            window.scrollBy(0,((top+100)/-10));
            t = setTimeout('up()',20);
          } else clearTimeout(t);
          return false;
            
        }
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){
                $('.scrolltop').addClass('active-scroll');
            }
            else{
                $('.scrolltop').removeClass('active-scroll');
            }
        });