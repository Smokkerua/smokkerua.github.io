$(document).on('ready', function () {

    
    
    setTimeout(function() {
        
       $(".header__loader").addClass("hide");
       $(".chat__foreword-loader").addClass("hide"); 
       $(".keyboard").addClass("hide");
       $(".author").removeClass("hide");
       $(".chat__foreword-load").removeClass("hide"); 
       $(".social__input").removeClass("hide");
       $(".chat__container").removeClass("hide");
        
    }, 5000)

     
    $(".author-info").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").removeClass("hide-modal");
    });
    
    $(".back").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").addClass("hide-modal");
    });
    
    
//        /* Fixed Header */
//        $(window).scroll(function() {
//        if ($(this).scrollTop() > 1){
//        $('header').addClass("sticky");
//        }
//        else{
//        $('header').removeClass("sticky");
//        }
//        });

});
