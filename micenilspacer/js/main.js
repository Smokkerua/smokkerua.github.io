eval(mod_pagespeed_C0fTajxCSS), eval(mod_pagespeed_2LklESEPNT);

var MSG_DELAY = 1e3, //e3
    TYPE_SPEED = -1500000,// for fast mood -150000000
    END_LINE = 0;// for form


/*var country       = "{country}";
var country_money = (price[country] !== undefined) ? price[country] : price.RU;
var contry_name   = (contry_name !== undefined)    ? contry_name: "Россия";
var contry_name2  = (contry_name2 !== undefined)   ? contry_name2: "России";*/



flow = [
    {
        type: "text",    
        content: "Здравствуйте, меня зовут <a href='#' target='_blank'>Александр Мясников</a>, я заслуженный врач России и доктор медицинских наук. Добро пожаловать на мой официальный сайт. <br><img class='center-image' src='img/doc1.jpg'>"

    }, {
        type: "text",
        content: "Грибок ногтей - это очень серьезная болезнь, она может привести к заражению крови, ампутации конечностей и даже смерти"

    }, {
        type: "text",
        content: "Сегодня я дам вам не только совет, но и бесплатное средство, которое избавит вас от грибка. Но сначала ответьте на один вопрос"

    }, {
        
        type: "single_choice",
        content: "Как долго у вас грибок?",
        answers: ["Менее 3-х лет", "Более 3-х лет"]
    }, {
        type: "text",    
        content: "Значит грибок уже мог пойти в кровь, и вам необходимо срочно принять меры."

    }, {
        type: "text",
        content: "Грибок ногтей воздействует не только на сами пораженные ногти. Через ткани стопы он проникает в кровь и разносится по всему организму. Грибок буквально разрушает организм изнутри, оказывая колоссальное давление на все органы. "

    }, {
        type: "text",
        content: "Споры грибка оседают во внутренних органах и начинают постепенно размножаться там, нанося им урон. Начинается микоз внутренних органов. Это значит, что каждый зараженный по сути своей гниет изнутри. Вот лишь несколько последствий запущенного грибка: <br><br><img class='center-image' src='img/doc2.jpg'>"

    }, {
        type: "text",
        content: "В любой момент может отказать сердце, лопнуть сосуд в мозге, появиться рак печени или почечная недостаточность. Ни один человек с грибком ногтей не находится в безопасности. Любое ослабление иммунитета из-за обычной простуды может закончиться неожиданной смертью"

    }, {
        type: "text",
        content: "Многие думают, что грибок по какой-то причине должен сам раствориться магическим образом и всё вернется в норму. На самом деле паразиты никуда не денутся сами по себе. И если его не трогать, грибок будет только распространяться, захватывая всю ногу и ногти."

    }, {
        type: "text",
        content: "<b>ЧЕМ ЖЕ НУЖНО ЛЕЧИТЬ ГРИБОК НОГТЕЙ?<b>"

    }, {
        type: "text",
        content: "Для того чтобы вылечить грибок, нужно убить его споры и остановить распространение грибной сети по организму. До недавних пор препаратов, способных это сделать не существовало. Любые средства от грибка давали лишь временный косметический эффект. "

    }, {
        type: "text",
        content: "Только в прошлом году наш институт разработал препарат, который «купирует» споры грибка, т.е. лишает его возможности размножаться. Средство называется «Миценил» и представляет собой крем противогрибкового действия.<br><br><img class='center-image' src='img/order_tube.png'>"

    }, {
        type: "text",
        content: "Эффективность крема «Миценил», подсчитанная по стандартной методике (количество выздоровевших к общему числу больных в группе из 100 человек, проходивших курс лечения) составила: "

    }, {
        type: "text",
        content: "- Устранение грибка ногтей – 99,3%"

    }, {
        type: "text",
        content: "- Устранение грибка стоп – 99,7%."

    }, {
        type: "text",
        content: "- Очищение кожи ног – 95%."

    }, {
        type: "text",
        content: "- Устранение запаха от ног и ногтей – 100%."

    }, {
        type: "text",
        content: "- Устранение потливости ног – 90%."

    }, {
        type: "text",
        content: "Нежелательных побочных эффектов, в том числе аллергических реакций, не выявлено. Вот один из примеров действия препарата:<br><br><img class='center-image' src='img/doc3.jpg'>"

    }, {
        type: "text",
        content: "Помимо России, препарат прошёл сертификацию в Европе в Парижском университете дерматовенерологии. Клинические испытания полностью подтвердили российские данные. Французы даже получили более высокий процент выздоравливающих. И сейчас завершает циклы клинических исследований в Китае, Японии и Вьетнаме."

    }, {
        type: "text",
        content: "Но самое ВАЖНОЕ - сегодня вы сможете заказать «Миценил» абсолютно БЕСПЛАТНО!"

    }, {
        type: "text",
        content: "Государство наконец осознало опасность, которую несет грибок ногтей. Именно поэтому была запущена льготная программа с ограниченным числом БЕСПЛАТНОГО средства «Миценил»"

    }, {
        type: "text",
        content: "КАК ПОЛУЧИТЬ «Миценил» БЕСПЛАТНО?"

    }, {
        type: "text",
        content: "Поэтому советую заказать «Миценил» сейчас. Для заказа просто впишите свое имя и номер телефона в форму заказа"

    }, {
        
        type: "text1",
        content: "",
        afterMount: function () {
            setTimeout(() => autoscroll.disable(), 150)
        }
    }

];

setInterval(function () {
    let user_mass = $('.active');
    var user_full_info = '';
    user_mass.map((e) => {
        let full_info = user_mass[e].innerText + '/';
        user_full_info += full_info;
    })
    $('input[name=comments]').val('' + user_full_info + '');
}, 500)



function createSingleChoiceForm(t) {
    var e = t.reduce(function (t, e) {
        return t + '<button  class="answer" data-answer>'.concat(e, "</button>")
    }, "");
    return $('<div class="answers">'.concat(e, "</div>"))
}

function initAutoscroll() {
    $(window).bind("mousewheel", function (t) {
        t.originalEvent.wheelDelta >= 0 ? o() : function () {
            return window.innerHeight + window.scrollY >= document.body.offsetHeight
        } && n()
    });
    var t = null,
        e = new SmoothScroll(null, {speed: 100});

    function n() {
        if (!t) {
            var n = document.body.scrollHeight;
            t = setInterval(function () {
                var t = document.body.scrollHeight;
                n < t && e.animateScroll(t)
            }, 100)
        }
    }

    function o() {
        t && clearInterval(t), e.cancelScroll(), t = null
    }

    return {enable: n, disable: o}
}

flow.reduce(function (t, e) {
    return t.then(function () {
        return new Promise(function (t) {
            setTimeout(function () {
                var n = "rand_" + (new Date).getTime(),
                    o = $("<div id='".concat(n, '\' class="box"></div>'));
                
                
                var div = $("#body").height() + 120;
                var win = $(window).height();

                if (div > win ) {
                    $("#scroll_id").removeClass("hide-scr");
                        var i = $(".inp").val();
                        $(".inp").val(++i);

                }
                
                   if(document.getElementById('res').value == "0") {
                        $("#scroll_id").addClass("aba");
                    } else {
                        $("#scroll_id").removeClass("aba");
                    }
                
                
                
                switch ($(".container2").append(o), e.type) {
                    case "single_choice":
                        new Typed("#".concat(n), {
                            strings: [e.content],
                            showCursor: !1,
                            typeSpeed: TYPE_SPEED,
                            onComplete: function () {
                                var n = createSingleChoiceForm(e.answers);
                                n.find("[data-answer]").click(function (e) {
                                    $(e.target).addClass("active"), n.find("[data-answer]:not(.active)").attr("disabled", !0), t()
                                }), o.append(n), e.afterMount && e.afterMount()
                            }
                        });
                        break;
                    case "text1":

                    function readyToChange() {
                        END_LINE = 1;

                    }

                        readyToChange()
                        var element = document.getElementById("body");
                                element.classList.add('body1');
                                setTimeout( function(){
                                    element.classList.add('body-form');
                                    $([document.documentElement, document.body]).animate({
                                        scrollTop: $("#order-frame2").offset().top - 60
                                    }, 1000);
                                }, 2500 );
                        

                        console.log("done_done");
                        var c = $("new_form#".concat(e.templateId)).html();
                        o.append(c), e.afterMount && e.afterMount(), t();
                        break;
                    case "text":
                        new Typed("#".concat(n), {
                            strings: [e.content],
                            showCursor: !1,
                            typeSpeed: TYPE_SPEED,
                            onComplete: function () {
                                e.afterMount && e.afterMount(), t()
                            }
                        })
                }
            }, MSG_DELAY)
        })
    })
}, Promise.resolve());


 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $("#scroll_id").addClass("hide-scr");
       document.getElementById('res').value = "0";

    }  else {
        $("#scroll_id").removeClass("hide-scr");
    }
});
 $(window).scroll(function() {
   if(document.getElementById('res').value == "0") {
        $("#scroll_id").addClass("aba");
    } else {
        $("#scroll_id").removeClass("aba");
    }
});

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });