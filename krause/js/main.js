$(document).on('ready', function () {
    
    /* menu
     =====================*/
    $("#menu").on("click", function (event) {
        event.preventDefault();
        $("#header-top").toggleClass("active");
    });
    
    $('.gallery-slided').slick({
          dots: true,
          speed: 500,
          infinite: false,
            customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+(i+1)+'</a>';
        }
    });
    
        $('.rew-slided').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
    });

});   
    /* видео
     =====================*/
    (function () {
        var youtube = document.querySelectorAll(".youtube");
        for (var i = 0; i < youtube.length; i++) {
            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));
            youtube[i].addEventListener("click", function () {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
                this.innerHTML = "";
                this.appendChild(iframe);
            });
        };
    })();

  AOS.init();
