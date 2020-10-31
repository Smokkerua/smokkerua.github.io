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
        content: "<img class='center-image' src='img/doctor.jpg'>"
    },
    {
        type: "text",
        content: "Здравствуйте, меня зовут Шарман Алмаз Торегельдиевич. Я ревматолог, реаниматолог, специалист в области биомедицинских и медико-демографических исследований, международного здравоохранения и больничного управления, член Американской Ассоциации Здравоохранения. Добро пожаловать на мой инетактивный чат. "
    },
     
    {
        type: "text",
        content: "Здесь я провожу бесплатную онлайн-диагностику и даю личные рекомендации, которые помогли избавиться от болей в спине и суставах сотням женщин и мужчин. "
    },
    {
        type: "text",
        content: "Чтобы получить мои рекомендации по восстановлению суставов, ответьте на несколько вопросов.  "
    },
    {type: "single_choice", content: "Вы знаете свой диагноз?", answers: ["Артрит", "Артроз", "Другое", "Не знаю"]},
    {
        type: "single_choice",
        content: "В каких частях тела испытываете боль в суставах?",
        answers: ["Ноги", "Руки", "Спина", "В разных местах"]
    },
    {
        type: "single_choice",
        content: "Насколько подвижный образ жизни Вы ведете?",
        answers: ["Занимаюсь спортом", "Не тренируюсь, но стараюсь больше двигаться", "Сидячая работа, двигаюсь мало", "В основном сижу дома"]
    },
    {
        type: "single_choice",
        content: "Вы правильно питаетесь?",
        answers: ["Да, ограничиваю соленое, жареное, мучное", "Когда как, где-то 50/50", "Люблю “вредненькое”, фастфуд, жареное", "Питаюсь тем, на что хватает денег"]
    },
    {
        type: "single_choice",
        content: "Ваш возраст?",
        answers: ["До 30 лет", "31-40 лет", "41-50 лет", "51 - 60 лет", "Старше 60 лет"]
    },
    {type: "text", content: "Спасибо за Ваши ответы. "},
    {
        type: "text",
        content: "Проблемы с суставами нельзя запускать. Это чревато развитием необратимых изменений в хрящевой ткани, деформацией суставов и полной потерей подвижности. Поэтому хорошо, что Вы обратились ко мне.  "
    },
    {
        type: "text",
        content: "Первая рекомендация - выпивать не менее 2 литров воды в сутки. Остеохондроз, артрит и артроз - это следствие обезвоживания организма. И чем старше становится человек, тем больше воды ему нужно. Пейте часто, но понемногу.  "
    },
    {type: "text", content: "В Вашем случае обязательно использование наружных средств с целебными природными ядами. Я сделал подборку самых эффективных ядов для лечения суставов. "},
    {type: "text", content: "<img class='center-image' src='img/sostav.jpg'>"},
    {type: "text", content: "Яд кобры быстро снимает боль и воспаление.  "},
    {type: "text", content: "Яд скорпиона разжижает кровь и улучшает кровообращение в суставах.  "},
    {type: "text", content: "Пчелиный яд повышает выработку коллагена и восстанавливает суставы.  "},
    {type: "text", content: "Муравьиный яд защищает суставы от износа и деформации, нормализует гормональный фон."},
    {
        type: "text",
        content: "Еще в древности люди использовали эти яды при болях в спине и суставах, а сегодня ведущие мировые ревматологи признают их наиболее эффективными для восстановления пораженной суставной ткани."
    },
    {
        type: "text",
        content: "Перечисленные яды можно найти по отдельности, но гораздо удобнее и эффективнее использовать их в составе нового средства от боли в суставах “Артрофорс”. Перечисленные природные яды содержатся в нем в виде специальной формулы с максимальной концентрацией полезных веществ. "
    },
    {
        type: "text",
        content: "Для избавления от боли, восстановления хрящевой ткани и подвижности сустава достаточно применять крем “Артрофорс” наружно 1-2 раза в день, и уже через месяц Вы сможете достигнуть своей цели.  "
    },
    {
        type: "text",
        content: "Вот так он выглядит препарат:  <br><br> <img class='center-image' src='../files/product/image-new-2.jpg'>"
    },
    {
        type: "text",
        content: "Вот результаты некоторых моих пациентов, которые восстановили суставы с помощью “Артрофорс”:   "
    },
    {
        type: "text",
        content: "Оптимальная продолжительность курса, которая учитывает Ваш возраст, образ жизни и текущее состояние здоровья, составляет от 30 дней. "
    },
    {
        type: "text",
        content: "За это время произойдет глубокое восстановление хрящевой ткани сустава и синовиальной жидкости.   "
    },
    {
        type: "text",
        content: "А ещё у меня для Вас отличные новости. Вы прошли онлайн-диагностику и стали моим сотым клиентом за сегодня!  "
    },
    {
        type: "text", content: "Только сегодня у Вас есть возможность получить “Артрофорс” по акции за "
    },
  //  + country_money + " ."
    {
        type: "text",
        content: "Чтобы получить “Артрофорс” по акционной цене, заполните онлайн форму и нажмите забронировать. Ваши данные отправляются напрямую производителю, больше никто не имеет к ним доступа."
    },
    {
        type: "text",
        content: "Вам перезвонит специалист в течение 5 минут и после уточнения всех деталей в тот же день Вам будет отправлена посылка с лечебным средством “Артрофорс”. "
    },
    {
        type: "text",
        content: "Количество акционных упаковок по акции ограничено, поэтому рекомендую поспешить. "
    },
    {
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