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
        slidesToShow: 4
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
    $('.reviews-slider').slick({
        slidesToShow: 1
        , slidesToScroll: 1
        , arrows: true
        , dots: true
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
    // email
    $(".form_callback, .form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "./mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            document.getElementById('modalForm1').style.display = 'none';
            document.getElementById('modalForm2').style.display = 'none';
            document.getElementById('modalForm3').style.display = 'none';
            document.getElementById('modalForm4').style.display = 'none';
            document.getElementById('modalForm5').style.display = 'none';
            document.getElementById('modalForm6').style.display = 'none';
            document.getElementById('modalForm7').style.display = 'none';
            $("#thanks").show('slow'); setTimeout(function() { $("#thanks").hide('slow'); }, 2000);
            visible = false;
        });
        return false;
    });
    var showed1 = function (state) {
        document.getElementById('modalForm1').style.display = state;
        document.getElementById('filter_modal1').style.display = state;
    }
    var showed2 = function (state) {
        document.getElementById('modalForm2').style.display = state;
        document.getElementById('filter_modal2').style.display = state;
    }
    var showed3 = function (state) {
        document.getElementById('modalForm3').style.display = state;
        document.getElementById('filter_modal3').style.display = state;
    }
    var showed4 = function (state) {
        document.getElementById('modalForm4').style.display = state;
        document.getElementById('filter_modal4').style.display = state;
    }
    var showed5 = function (state) {
        document.getElementById('modalForm5').style.display = state;
        document.getElementById('filter_modal5').style.display = state;
    }
    var showed6 = function (state) {
        document.getElementById('modalForm6').style.display = state;
        document.getElementById('filter_modal6').style.display = state;
    }
    var showed7 = function (state) {
        document.getElementById('modalForm7').style.display = state;
        document.getElementById('filter_modal7').style.display = state;
    }
