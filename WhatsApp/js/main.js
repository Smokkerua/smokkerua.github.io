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
    
    //   подключиться к соц. сети
    $(".soc-but").on("click", function (event) {
        event.preventDefault();
        $(".social__input").addClass("hide");
        $(".keyboard").removeClass("hide");
    });
    

butt.onclick = function() {
    
var val = document.getElementById('elem1').value;
var $messagesContainer = $('.chat__container')   
var $answerContainer = $(`<div class="message user-message">
    <p class="message-content">${val}</p>
    <p class="message-time">16:07</p></div>`);
    
var $answer = $(`<div class="message">
    <p class="message-user"><span>Вы</span>
    ${val}</p>
    <p class="message-content">Подождите, отвечу на все вопросы после косультации</p>
    <p class="message-time">16:09</p></div> `);
        
$messagesContainer.append($answerContainer);
    
 $(".online").addClass("hide");
$(".write").removeClass("hide");   
    
setTimeout(() => $messagesContainer.append($answer), 4000); 
                
setTimeout(function() {                                                             
    $(".online").removeClass("hide");
    $(".write").addClass("hide");   
}, 4000)
  
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});













