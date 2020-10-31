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
        content: "Здравствуйте, меня зовут Юлия Бастригина. Я диетолог, нутрициолог, специалист функциональной и интегративной медицины. Добро пожаловать в мой онлайн чат. "
    },
    {
        type: "text",
        content: "Здесь я провожу бесплатную онлайн-диагностику и даю личные рекомендации, которые помогли избавиться от лишнего веса сотням женщин и мужчин. "
    },
    {
        type: "text",
        content: "Чтобы получить мои рекомендации по похудению, ответьте на несколько вопросов. "
    },
    {
        type: "single_choice",
        content: "На сколько килограмм Вы хотите похудеть?",
        answers: ["До 5 кг", "От 5 до 10 кг", "От 10 до 15 кг", "Больше 15 кг"]
    },
    {
        type: "single_choice",
        content: "Какие части Вашего тела требуют коррекции?",
        answers: ["Талия и живот", "Бедра и ягодицы", "Руки или ноги", "Я хочу похудеть везде"]
    },
    {
        type: "single_choice",
        content: "Насколько активный образ жизни Вы ведете?",
        answers: ["Тренируюсь 3-5 раз в неделю", "Тренируюсь 1-3 раза в неделю", "Не тренируюсь, но стараюсь ходить пешком", "Малоподвижный образ жизни"]
    },
    {
            type: "single_choice",
            content: "Вы правильно питаетесь?",
            answers: ["Да, считаю калории, не ем сладкое и мучное", "Где-то 50/50", "Люблю “вредненькое”, фастфуд, сладости", "Питаюсь тем, на что хватает денег"]
        }, {
            type: "single_choice",
            content: "Ваш возраст?",
            answers: ["До 20 лет", "20-30 лет", "31-40 лет", "41-50 лет", "Старше 50 лет"]
        }, {
            type: "single_choice",
            content: "Ваш текущий вес?",
            answers: ["До 60 кг", "От 60 до 70 кг", "От 71 до 80 кг", "От 81 до 90 кг", "Более 90 кг"]
        }, {
            type: "single_choice",
            content: "Ваш рост?",
            answers: ["Ниже 150 см", "150-160 см", "161-170 см", "171-180 см", "Выше 180 см"]
        }, {
            type: "text",
            content: "Спасибо. У Вас действительно есть лишний вес, но Вы вполне можете добиться желаемой цели в похудении. "
        }, {
            type: "text",
            content: "Рекомендация лично для Вас. Пейте отвар из молодых плодов ягоды годжи и добавьте в рацион тихоокеанскую спирулину, но только не сушеную. "
        }, {
            type: "text",
            content: "В ягоде годжи содержатся катехины, которые активируют обмен веществ в организме и выводят шлаки и соли тяжелых металлов. Спирулина способствует снижению уровня липидов и холестерина. "
        }, {
            type: "text",
            content: "Для запуска процесса жиросжигания обязательно нужен L-карнитин – он доставляет жирные кислоты в митохондрии и помогает перерабатывать их в энергию."
        }, {
            type: "text",
            content: "Перечисленные компоненты можно употреблять по отдельности, но гораздо удобнее и эффективнее в составе био-комплекса КетоДиета. И спирулина, и ягоды годжи в нем присутствуют в виде интенсивных экстрактов с максимальной концентрацией полезных веществ. "
        }, {
            type: "text",
            content: "Для заметного снижения массы тела достаточно выпивать 2 капсулы этого средства в день, и уже через месяц Вы сможете достигнуть своей цели.  "
        },
        {
        type: "text",
        content: "<img class='center-image' src='../files/product/image-new-1.jpg'>"
    },
     {
            type: "text",
            content: "В средстве содержатся сухие экстракты природных жиросжигателей, которые смешиваются при употреблении. Таким образом, удается сохранить 100% биологическую ценность и эффективность препарата. "
        }, {
            type: "text",
            content: "Поэтому КетоДиета весьма эффективно расщепляет и выводит висцеральный жир, который обволакивает стенки внутренних органов и мешает им нормально функционировать, разблокирует метаболизм за счет очищения организма от шлаков и токсинов. "
        }, {
            type: "text",
            content: "В результате организм начинает сам избавляться от лишнего жира, используя его как источник энергии. Вы начинаете меньше есть, не ощущая при этом голода, что еще больше усиливает эффект похудения!"
        }, {
            type: "text",
            content: "Вот результаты моих клиенток, которые успешно похудели с помощью моих рекомендаций: <br> <img src='./img/c1.jpg'> <br> <img src='./img/c2.jpg'> <br> <img src='./img/c3.jpg'>"
        }, {
            type: "text",
            content: "Оптимальная продолжительность курса, которая учитывает Ваш возраст, текущий индекс массы тела и образ жизни, составляет от 30 дней. "
        }, {
            type: "text",
            content: "За это время произойдет глубокое очищение организма и нормализация метаболизма.  "
        }, {
            type: "text",
            content: "А ещё у меня для Вас отличные новости. Вы прошли онлайн-диагностику и стали моим сотым клиентом !"
        }, {
            type: "text",
            content: "Чтобы получить КетоДиета по акции за , впишите своё имя и номер телефона в форму заказа ниже. Ваши данные отправляются напрямую производителю, больше никто не имеет к ним доступа."
           // "+country_money+"
        }, {
            type: "text",
            content: "Вам перезвонит специалист в течение 5 минут и после уточнения всех деталей в тот же день Вам будет отправлена посылка с курсом КетоДиеты.     "
        }, {
            type: "text",
            content: "Количество упаковок по акции ограничено, поэтому рекомендую поспешить с заказом."
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