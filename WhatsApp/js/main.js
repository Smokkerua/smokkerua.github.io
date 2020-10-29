$(document).on('ready', function () {

    
    //  подключение доктора
    setTimeout(function() {
        
       $(".header__loader").addClass("hide");
       $(".chat__foreword-loader").addClass("hide"); 
       $(".keyboard").addClass("hide");
       $(".author").removeClass("hide");
       $(".chat__foreword-load").removeClass("hide"); 

    }, 5000)
    
    //   загрузка чата
    setTimeout(function() {
        $(".chat__container").removeClass("hide");
        $(".social__input").removeClass("hide");
    }, 8000)

     
    //    Модальное окно
    $(".author-info").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").removeClass("hide-modal");
    });
    
    $(".back").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").addClass("hide-modal");
    });
    
    

});
