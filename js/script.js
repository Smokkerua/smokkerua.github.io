$(function() {

            /* my skills */
        var reviews = $('#header');
        var reviewsTop = reviews.offset().top;
        $(window).bind('scroll', function() {
            var windowTop = $(this).scrollTop();
            if (windowTop > reviewsTop) {
                $(".skills_java").toggleClass("act");
                $(".skills_jquery").toggleClass("act");
                $(".skills_css").toggleClass("act");
                $(".skills_html").toggleClass("act")
            }
        });

    let nav = $("#nav");
    let header = $("#header");
    let sectionH
    let scrollOffset = $(window).scrollTop();

        /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll load resize", function() {
        sectionH = $("#header").innerHeight();
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= sectionH ) {
            $("#header_top").addClass("fixed");
        } else {
            $("#header_top").removeClass("fixed");
        }
    }

             /* Smooth scroll */
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            let elementId = $(this).data('scroll');
            let elementOffset = $(elementId).offset().top;

            nav.removeClass("active");

            $("html, body").animate({
                scrollTop: elementOffset - 60
            }, 700);
        });



    /* social
    =====================*/
      $(".show-btn").click(function(){
        $(".sm-menu").fadeToggle("fast");
      });


    /* menu
     =====================*/
       $("#menu").on("click", function(event) {
             event.preventDefault();

            $("#nav").toggleClass("active");
            $("#hd_ct").toggleClass("active");
        });


     $('.cards_block').on('click', function() {
    $('.cards_container').toggleClass('container-origin');
     })

    $('.block-1').on('click', function() {
    $('.block-1').toggleClass('active');
     })
    $('.block-2').on('click', function() {
    $('.block-2').toggleClass('active');
     })
    $('.block-3').on('click', function() {
    $('.block-3').toggleClass('active');
     })

    /* slider
    =====================*/
    var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });

             /* Slider */
            $("[mini-slider]").slick({
                infinite: true,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            });

    /* E-mail */
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./php/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

      /* Accardeon */

        $("#full_block-1").on("click", function(event) {
            event.preventDefault();
            $(".full_block-1").toggleClass("show");
        });
        $(".full_block-1").on("click", function(event) {
            event.preventDefault();
            $(".full_block-1").toggleClass("show");
        });

        $("#full_block-2").on("click", function(event) {
            event.preventDefault();
            $(".full_block-2").toggleClass("show");
        });
        $(".full_block-2").on("click", function(event) {
            event.preventDefault();
            $(".full_block-2").toggleClass("show");
        });
        $("#full_block-3").on("click", function(event) {
                event.preventDefault();
                $(".full_block-3").toggleClass("show");
        });
        $(".full_block-3").on("click", function(event) {
            event.preventDefault();
            $(".full_block-3").toggleClass("show");
        });
        $("#full_block-4").on("click", function(event) {
            event.preventDefault();
            $(".full_block-4").toggleClass("show");
        });
        $(".full_block-4").on("click", function(event) {
            event.preventDefault();
            $(".full_block-4").toggleClass("show");
        });


        /* active section */
    jQuery(window).scroll(function(){
         var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
 });


});

