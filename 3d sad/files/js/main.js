$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
    },
        {
            breakpoint: 840,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
    },
        {
            breakpoint: 600,
            settings: {
                arrows:false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
    }
  ]
});

$(function () {
    /* my skills */
    var reviews = $('#header');
    var reviewsTop = reviews.offset().top;

    let nav = $("#nav");
    let header = $("#header");
    let sectionH
    let scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll load resize", function () {
        sectionH = $("#header").innerHeight();
        scrollOffset = $(this).scrollTop() - 1;
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= sectionH) {
            $("#header_top").addClass("fixed");
        } else {
            $("#header_top").removeClass("fixed");
        }
    }



    /* menu
     =====================*/
    $("#menu").on("click", function (event) {
        event.preventDefault();
        $("#nav").toggleClass("active");
        $("html").toggleClass("active");
        $("#hd_ct").toggleClass("active");
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("active");
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });


});
