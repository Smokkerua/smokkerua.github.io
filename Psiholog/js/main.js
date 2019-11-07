$(document).on('ready', function () {
    
    // mask for input phone
    $(".phone-form").mask("+38 (999) 99-99-999");
    
    
    //  modal window 
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