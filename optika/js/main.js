$(document).on('ready', function () {
    
    
    var reviews = $("#about");
    var reviewsTop = reviews.offset().top;
    $(window).bind("scroll", function () {
        var a = $(this).scrollTop();
        if (a > reviewsTop) {
            $("#video-on").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/x5hyW10Qij0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
            $(window).unbind("scroll")
        }
    });
    
    
    
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
    
    
        
        	//validation
	var locale = document.documentElement.getAttribute('lang');

    var validationName = "Обов'язково для заповнення";
    //var validationAlpha = "Введіть вірне ім'я";
    var validationNameMax = "Від 2 до 16 літер";
    var validationPhone = "Введіть вірний номер";
    var validationEmail = "Введіть вірний E-mail";
	

	$('#service1Form').validate({
		rules: {
			nameUserField: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			emailUserField: {
				required: true,
				email: true
			},
			phoneUserField: {
				required: true
			}
		},
		messages: {
			nameUserField: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			emailUserField: {
				required: validationName,
				email: validationEmail
			},
			phoneUserField: {
				required: validationPhone
			}
		}
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
    
    $(".map-button-1").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-1").addClass("active-map");
    });
    $(".map-button-2").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-2").addClass("active-map");
    });
    $(".map-button-3").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-3").addClass("active-map");
    });
    $(".map-button-4").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-4").addClass("active-map");
    });
    $(".map-button-5").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-5").addClass("active-map");
    });
    $(".map-button-6").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-6").addClass("active-map");
    });
    $(".map-button-7").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-7").addClass("active-map");
    });
    $(".map-button-8").on("click", function (event) {
        event.preventDefault();
        $(".map").removeClass("active-map");
        $("#map-8").addClass("active-map");
    });
    

    /* модальное окно */
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
    });


        	//validation

		var validationName = "Обов'язково для заповнення";
		var validationAlpha = "Введіть вірне ім'я";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введіть вірний E-mail";


    

