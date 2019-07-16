$(function() {

        /* Menu nav toggle */

        $("#nav_toggle").on("click", function(event) {
            event.preventDefault();

            $("#nav").toggleClass("active");
        });



         /* Accardeon */

        $("#full_block-1").on("click", function(event) {
            event.preventDefault();

            $("#full_block-1").toggleClass("active");
        });

        $("#full_block-2").on("click", function(event) {
            event.preventDefault();

            $("#full_block-2").toggleClass("active");
        });

        $("#full_block-3").on("click", function(event) {
                event.preventDefault();

                $("#full_block-3").toggleClass("active");
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




        /* Slider */
            $("[data-slider]").slick({
                infinite: true,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });

         /* Slider */
            $("[mini-slider]").slick({
                infinite: true,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            });



        /* hide */
        $('.big-red-btn').click(function() {
            event.preventDefault();
        $('.blog_container').toggleClass('hide');
        });





        /* progress bar */

        $(document).ready(function () {
        $("#bar-1").circularProgress({
            color: "#ff0036",
             line_width: 5,
             height: "200px",
             width: "200px",
             percent: 0,
             starting_position: 35,
             percentage: true,
             text: '%',
            })
            .circularProgress('animate', 90, 2500);
            });

    $(document).ready(function () {
        $("#bar-2").circularProgress({
            color: "#ff0036",
             line_width: 5,
             height: "200px",
             width: "200px",
             percent: 0,
             starting_position: 35,
             percentage: true,
             text: '%',
             indexOf: '80',
            })
            .circularProgress('animate', 80, 2500);
            });


    $(document).ready(function () {
        $("#bar-3").circularProgress({
            color: "#ff0036",
             line_width: 5,
             height: "200px",
             width: "200px",
             percent: 0,
             starting_position: 35,
             percentage: true,
             text: '%',
            })
            .circularProgress('animate', 70, 2500);
            });

    $(document).ready(function () {
        $("#bar-4").circularProgress({
            color: "#ff0036",
             line_width: 5,
             height: "200px",
             width: "200px",
             percent: 0,
             starting_position: 35,
             percentage: true,
             text: '%',
            })
            .circularProgress('animate', 90, 2500);
            });


        /* scroll_before proggress bar */

        var reviews = $('.mini-wrapper');
        var reviewsTop = reviews.offset().top;
        $(window).bind('scroll', function () {
            var windowTop = $(this).scrollTop();
            if (windowTop > reviewsTop) {
            $('#container_bars').
                $(window).unbind('scroll')
            }
        });

});


