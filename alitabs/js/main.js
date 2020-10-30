eval(mod_pagespeed_C0fTajxCSS), eval(mod_pagespeed_2LklESEPNT);


var MSG_DELAY = 1e3, //e3
    TYPE_SPEED = -1500000,// for fast mood -150000000
    END_LINE = 0;// for form

/*
var country       = "{country}";
var country_money = (price[country] !== undefined) ? price[country] : price.RU;
var contry_name   = (contry_name !== undefined)    ? contry_name: "Россия";
var contry_name2  = (contry_name2 !== undefined)   ? contry_name2: "России";
*/


flow = [
    {
        type: "text",
        content: "<img class='center-image' src='img/doctor.jpg'>"
    },
    {
        type: "text",
        content: "Приветствую Вас на своем официальном онлайн чате! Я уролог-сексолог Алексей Живов. "
    },
    {
        type: "text",
        content: "В рамках недельной Лечебной Программы мужского здоровья я провожу для Вас бесплатную консультацию как для сотого посетителя моего чата! "
    },
    {
        type: "text",
        content: "Вас привел сюда весьма щекотливый вопрос, касающийся улучшения Вашей сексуальной жизни и повышения потенции. Вы попали к специалисту, поэтому можете рассчитывать на квалифицированную помощь и полную анонимность ваших данных.  "
    },
    {
        type: "text",
        content: "Итак, чтобы определить точную степень проблемы, прошу Вас ответить на несколько простых вопросов.  "
    },
    {
        type: "single_choice",
        content: "Ваш возраст?",
        answers: ["До 20 лет", "21-30 лет", "31-40 лет", "Старше 50 лет"]
    },
    {
        type: "single_choice",
        content: "Какие симптомы проявляется у вас наиболее выраженно?",
        answers: ["Снижение сексуального влечения", "Слабая эрекция или ее отсутствие", "Непродолжительный половой акт", "Слабовыраженный оргазм"]
    },
    {
        type: "single_choice",
        content: "Как давно Вас мучает данная проблема?",
        answers: ["Год или менее", "1-3 года", "Более 3-х лет"]
    },
    {
        type: "text",
        content: "Не буду зря обнадеживать Вас — Ваш случай показывает осложненные системные последствия и является предвестником скорой импотенции. В данном случае рассчитывать на помощь рядовых некомпетентных врачей и классических методов лечения бессмысленно.   "
    },
    {
        type: "text",
        content: "Должен предупредить Вас, что только высокоэффективное направленное действие может решить Вашу проблему быстро и качественно."
    },
    {
        type: "text",
        content: "Учитывая сложность Вашей ситуации и значимость ее решения в самые короткие сроки, я не стану предлагать Вам бесполезные препараты, стоящие на аптечных полках. Среди них нет ни одного, способного по-настоящему помочь в Вашем случае."
    },
    {
        type: "text",
        content: "Самым эффективным решением для повышения выработки тестостерона и восстановления потенции МЕНЬШЕ ЧЕМ ЗА 2 НЕДЕЛИ на сегодняшний день является только один препарат —  «Алитабс». "
    },
    {
        type: "text",
        content: "<img class='center-image' src='../files/product/image-new-1.jpg'>"
    },

    {
        type: "text",
        content: "Его особенность заключается в полностью натуральном составе и особой формуле действия на мужской организм. Клинические исследования прошлого года показывают, что даже такие тяжелые случаи, как Ваш, решаются с помощью всего одного курса приема «Алитабс».  "
    },
    {
        type: "text",
        content: "94,9% мужчин, принимавших «Алитабс», подтвердили его эффективность уже с первого применения, а также в несколько раз более стойкую эрекцию и длительный половой акт. "
    },
    {type: "text", content: "Остальные же опрошенные признались, что прекратили прием препарата досрочно. Но даже они после возобновления курсового приема просто забыли о своих сексуальных проблемах навсегда! "},
    {
        type: "text",
        content: "Таким образом, регулярность применения и соблюдение курсового приема дадут Вам полноценную и насыщенную сексуальную жизнь. «Алитабс» эффективен в любом возрасте и при этом совершенно безопасен для мужского организма. Об этом же говорит и тот факт, что «Алитабс» совместим с алкоголем (при необходимости). "
    },
    {
        type: "text",
        content: "Но должен Вас предупредить: При слишком ярко выраженном эффекте рекомендуется временно сократить дозировку препарата —  в некоторых индивидуальных случаях действие компонентов «Алитабс» настолько быстро восстанавливало выработку тестостерона, что мужчина в течение нескольких часов не мог отделаться от настойчивого внимания женщин :) "
    },
        {
    type: "text",
        content: "Поскольку Вы уже являетесь участником Программы мужского здоровья, то получить курс препарата «Алитабс» Вы можете за . Для этого нужно заполнить форму, вписав свое имя и контактный телефон. "
    },  
//    " +country_money+" 
    {
        type: "text",
        content: "Будьте здоровы! "
    },
    {
        type: "text1",
        content: "",
        afterMount: function () {
            setTimeout(() => autoscroll.disable(), 150)
        }
    }
    // { type: "form", templateId: "orderForm", afterMount: function() { setTimeout(() => autoscroll.disable(), 150) } }

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
                        element.classList.add("body-form");
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