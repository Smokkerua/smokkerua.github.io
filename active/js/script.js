$(function() {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


    /* Menu nav toggle */
    $("#nav_togle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav__bar").toggleClass("active");
        $("#header").toggleClass("active");
    });



        /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
