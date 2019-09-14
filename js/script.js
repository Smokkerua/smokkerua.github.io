
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

        /* video */
         $("#play").on("click", function(event) {
             event.preventDefault();

            $("#video-id").addClass("show");
         var video = $('#video-id').get(0);
         if (video.classList.contains("show")) {
             video.play();
             setTimeout(function(){
                 $("#video-id").removeClass("show");
            }, 8000);
         }
        });
   

});

/* modal window */
  $(function () {
    var c = {
        self: $("#modal")
        , showModal: function (d) {
            this.self.find("#innerModal").html(d);
            this.self.fadeIn(200)
        }
        , hideModal: function () {
            this.self.fadeOut(200);
            this.self.find("#innerModal").html("")
        }
    };
    $(".showModal").on("click", function (f) {
        var g = $(this).data("id");
        var d = $("#cont" + g).html();
        c.showModal(d)
    });
    $("#modal").on("click", function (d) {
        if ($(d.target).attr("id") === "modal" || $(d.target).hasClass("closeModal")) {
            c.hideModal()
        }
    });
      /* mail.php */
      $(document).ready(function () {
        $("#footer").submit(function () {
            var e = $(this);
            var d = false;
            e.find("input").each(function () {
                if ($(this).val() == "") {
                    alert("Зaпoлнитe все пoля!!");
                    d = true;
                    return false
                }
            });
            if (!d) {
                var f = e.serialize();
                $.ajax({
                    type: "POST"
                    , url: e.attr("action")
                    , data: f
                    , success: function () {
                        $("#callback").modal("hide");
                        $("#thx").modal("show");
                        var g = setInterval(function () {
                            $("#thx").modal("hide")
                        }, 3000)
                    }
                })
            }
            return false
        })
    });
      $(document).ready(function () {
        $("#footer").submit(function () {
            var d = $(this);
            var e = d.serialize();
            $.ajax({
                type: "POST"
                , url: d.attr("action")
                , data: e
                , success: function () {
                    $("#thx").modal("show");
                    var f = setInterval(function () {
                        $("#thx").modal("hide")
                    }, 3000)
                }
            });
            return false
            })
        });
    
});  