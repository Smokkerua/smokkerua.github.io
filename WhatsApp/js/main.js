$(document).on('ready', function () {
    

    //  подключение доктора
    setTimeout(function() {
        
       $(".header__loader").addClass("hide");
       $(".chat__foreword-loader").addClass("hide"); 
       $(".keyboard").addClass("hide");
       $(".author").removeClass("hide");
       $(".chat__foreword-load").removeClass("hide"); 

         //   загрузка чата
            setTimeout(function() { 
                $(".online").addClass("hide");
                $(".write").removeClass("hide");
                $('.message').first().removeClass("hide");
                
                //   цикл вывода сообщений
                setInterval(function () {
                    if($('.message').hasClass('hide')) {
                        $('.chat__container .hide').first().removeClass("hide");
                    }    
                }, 2500);
                
                //   когда первые три сообщения отобразились
                setTimeout(function() {                                                 $(".social__input").removeClass("hide");
                    $(".online").removeClass("hide");
                    $(".write").addClass("hide");
                }, 6000)
                
            }, 1000)

    }, 2000)

    //    Модальное окно
    $(".author-info").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").removeClass("hide-modal");
    });
    
    $(".back").on("click", function (event) {
        event.preventDefault();
        $(".modal-window").addClass("hide-modal");
    });
    
    //   подключиться к соц. сети - показать клавиатуру
    $(".soc-but").on("click", function (event) {
        event.preventDefault();
        $(".social__input").addClass("hide");
        $(".keyboard").removeClass("hide");
    });
    
    /* создать блок сообщения пользователя */ 
    butt.onclick = function() {

        var val = document.getElementById('elem1').value;
        var $messagesContainer = $('.chat__container')   
        var $answerContainer = $(`<div class="user-message">
            <p class="message-content">${val}</p>
            <p class="message-time"></p></div>`);

        var $answer = $(`<div class="message">
        <p class="message-user"><span>Вы</span>
        ${val}</p>
        <p class="message-content">Подождите, отвечу на все вопросы после косультации</p>
        <p class="message-time"></p></div> `);

        $messagesContainer.append($answerContainer);
        
        var h = new Date();
        $(".message-time").last().html(h.getHours() +":"+ h.getMinutes());
        
        $(".online").addClass("hide");
        $(".write").removeClass("hide");

        /* ответ */       
        setTimeout(() => $messagesContainer.append($answer), 4000); 

        setTimeout(function() {   

            $(".online").removeClass("hide");
            $(".write").addClass("hide");  
            /* Скролл в самый низ после ответа */
            $("html, body").animate({
                scrollTop: 9999
            }, 700);
            $(".user-message").addClass("hide");
             /* сброс клавиатуры */   
            document.getElementById("elem1").value = "";  
            $(".message-time").last().html(h.getHours() +":"+ h.getMinutes());

        }, 4000)

    };
    
         /*время */
        var h = new Date();
        $(".message-time").html(h.getHours() +":"+ h.getMinutes());
    
});

    /* Скролл к якорю */
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    $("html, body").animate({
        scrollTop: elementOffset
    }, 700);
});

/* Скрыть/показать кнопку скролла */
 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $("#scroll_id").addClass("hide");
    }  else {
        $("#scroll_id").removeClass("hide");
    }
});  
    






