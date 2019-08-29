$(function() {

    let header = $("#header");
    let sectionH
    let scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll load resize", function() {
        sectionH = $("#header_logo").innerHeight();
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= sectionH ) {
            $("#nav_bar").addClass("fixed");
        } else {
            $("#nav_bar").removeClass("fixed");
        }
    }

        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            let elementId = $(this).data('scroll');
            let elementOffset = $(elementId).offset().top;

            $("#nav").removeClass('activet');
            $("#nav_toggle").removeClass('activet');

            $("html, body").animate({
               scrollTop: elementOffset - 60
            }, 700);
        });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("activet");
        $("#nav").toggleClass("activet");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* minimized */
    $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
        left: ($(document).width() - $('#magnify').outerWidth())/2,
        // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
      });
    $('#overlay, #magnify').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
