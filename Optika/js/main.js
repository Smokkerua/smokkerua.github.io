$(document).on('ready', function () {
    
    /* slider */
    $('.section-1').slick({
        slidesToShow: 4
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 5000
        , arrows: true
        , responsive: [
            {
                breakpoint: 1200
                , settings: {
                    slidesToShow: 3
                , }
	    }
            , {
                breakpoint: 900
                , settings: {
                    slidesToShow: 2
                , }
	    }
            , {
                breakpoint: 620
                , settings: {
                    slidesToShow: 1
                , }
	    }
    ]
    });
    $('.section-2').slick({
        slidesToShow: 4
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 5000
        , arrows: true
        , responsive: [
            {
                breakpoint: 1200
                , settings: {
                    slidesToShow: 3
                , }
	    }
            , {
                breakpoint: 900
                , settings: {
                    slidesToShow: 2
                , }
	    }
            , {
                breakpoint: 620
                , settings: {
                    slidesToShow: 1
                , }
	    }
    ]
    });
    $('.section-3').slick({
        slidesToShow: 3
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 5000
        , arrows: true
        , responsive: [
            {
                breakpoint: 1100
                , settings: {
                    slidesToShow: 2
                , }
	    }
            , {
                breakpoint: 768
                , settings: {
                    slidesToShow: 1
                , }
	    }
    ]
    });
    
    
    
    
    // mask for input phone
    $(".phone-form").mask("+38 (999) 99-99-999");
    
    // Smooth scroll 
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 0
        }, 700);
    });
    
    // scroll lazy load block
    AOS.init();
    
    //  lazy load
    [].forEach.call(document.querySelectorAll("img[data-src]"), function (a) {
        a.setAttribute("src", a.getAttribute("data-src"));
        a.onload = function () {
            a.removeAttribute("data-src");
        };
    });
    
    
    
});
