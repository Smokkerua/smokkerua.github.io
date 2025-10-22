// Чекаємо, поки весь HTML-документ завантажиться
document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------
    // --- 1. ЛОГІКА ДЛЯ АКОРДЕОНУ ---
    // ---------------------------------
    // Знаходимо всі кнопки з класом "accordion"
    const accordions = document.getElementsByClassName("accordion");
    // Перебираємо всі кнопки і додаємо кожній слухача події "click"
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            // "this" - це кнопка, на яку натиснули
            // 1. Додаємо/видаляємо клас "active" для кнопки (щоб міняти + на -)
            this.classList.toggle("active");
            // 2. Знаходимо наступний елемент (це наша панель .panel)
            const panel = this.nextElementSibling;
            // 3. Перевіряємо, чи панель ВЖЕ відкрита (чи є у неї max-height)
            if (panel.style.maxHeight) {
                // Якщо так - закриваємо її (ставимо max-height = null)
                panel.style.maxHeight = null;
                a // Чекаємо, поки весь HTML-документ завантажиться
                document.addEventListener("DOMContentLoaded", function () {
                    // Знаходимо нашу форму за її ID
                    const contactForm = document.getElementById("main-contact-form");
                    // Додаємо "слухача" події "submit" (відправка форми)
                    contactForm.addEventListener("submit", function (event) {
                        // Зупиняємо стандартну поведінку (щоб сторінка не перезавантажувалась)
                        event.preventDefault();
                        // Отримуємо значення з полів
                        const name = document.getElementById("name").value;
                        const email = document.getElementById("email").value;
                        const message = document.getElementById("message").value;
                        // Проста перевірка, чи поля не порожні
                        if (name === "" || email === "" || message === "") {
                            alert("Будь ласка, заповніть усі поля.");
                            return; // Зупиняємо виконання, якщо є помилка
                        }
                        // --- Важливе зауваження! ---
                        // Цей код лише перевіряє форму на стороні клієнта.
                        // Для реальної відправки email вам знадобиться серверний скрипт
                        // (наприклад, на PHP, Node.js) або сторонній сервіс (наприклад, Formspree, Netlify Forms).
                        // Оскільки це простий HTML/CSS/JS сайт, ми просто імітуємо успішну відправку.
                        console.log("Дані форми готові до відправки:");
                        console.log("Ім'я:", name);
                        console.log("Email:", email);
                        console.log("Повідомлення:", message);
                        // Повідомляємо користувача про успіх
                        alert("Дякуємо за ваше звернення! Ми зв'яжемося з вами найближчим часом.");
                        // Очищуємо поля форми після "відправки"
                        contactForm.reset();
                    });
                });
            } else {
                // Якщо ні - відкриваємо.
                // Встановлюємо max-height рівний реальній висоті вмісту (scrollHeight)
                // Це потрібно для плавної анімації
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    // ---------------------------------
    // --- 2. ЛОГІКА ДЛЯ СЛАЙДЕРА ---
    // ---------------------------------
    let slideIndex = 1; // Починаємо з першого слайду
    showSlides(slideIndex); // Показуємо перший слайд одразу
    // Встановлюємо таймер для автоматичної прокрутки кожні 5 секунд
    let slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // 5000 мілісекунд = 5 секунд
    // Робимо функції `currentSlide` та `plusSlides` глобальними,
    // щоб їх можна було викликати з HTML (onclick)
    window.currentSlide = function (n) {
        // При ручному натисканні - скидаємо таймер і показуємо слайд
        clearInterval(slideInterval);
        showSlides(slideIndex = n);
        // І запускаємо таймер знову
        slideInterval = setInterval(function () {
            plusSlides(1);
        }, 5000);
    }
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    }
    // Головна функція, що показує слайди
    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("testimonial-slide");
        const dots = document.getElementsByClassName("dot");
        // Логіка "зациклення"
        if (n > slides.length) {
            slideIndex = 1
        } // Якщо дійшли до кінця - на початок
        if (n < 1) {
            slideIndex = slides.length
        } // Якщо пішли назад з першого - в кінець
        // 1. Ховаємо всі слайди
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // 2. Знімаємо клас "active" з усіх крапок
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // 3. Показуємо поточний слайд і робимо активною поточну крапку
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    // ---------------------------------
    // --- 3. ЛОГІКА ДЛЯ ФОРМИ ---
    // ---------------------------------
    // Знаходимо нашу форму за її ID
    const contactForm = document.getElementById("main-contact-form");
    // Додаємо "слухача" події "submit"
    contactForm.addEventListener("submit", function (event) {
        // Зупиняємо стандартну поведінку
        event.preventDefault();
        // Отримуємо значення з полів
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        if (name === "" || phone === "" || message === "") {
            alert("Будь ласка, заповніть усі поля.");
            return;
        }
        // Імітація відправки
        console.log("Дані форми:", {
            name,
            phone,
            message
        });
        alert("Дякую! Ваша заявка прийнята. Я скоро з вами зв'яжуся.");
        // Очищуємо поля форми
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            const isActive = this.classList.contains('active');
            // Закриваємо всі інші відкриті акордеони
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                    otherHeader.querySelector('.accordion-icon').textContent = '+';
                }
            });
            // Відкриваємо/закриваємо поточний
            if (isActive) {
                this.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px'; // Встановлюємо висоту
                icon.textContent = '−'; // Використовуємо мінус
            }
        });
    });
});
// Ждем, пока весь HTML-документ загрузится
document.addEventListener('DOMContentLoaded', function () {
    // Находим иконку бургера по ее классу
    const burgerIcon = document.querySelector('.burger-menu-icon');
    // Находим мобильное меню по его классу
    const mobileNav = document.querySelector('.nav-mobile');
    // Добавляем "прослушку" клика на иконку бургера
    burgerIcon.addEventListener('click', function () {
        // Переключаем (добавляем/убираем) класс 'active' у иконки
        burgerIcon.classList.toggle('active');
        // Переключаем (добавляем/убираем) класс 'active' у мобильного меню
        mobileNav.classList.toggle('active');
    });
    // БОНУС: Закрываем меню при клике на ссылку в нем
    // Находим все ссылки в мобильном меню
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Убираем класс 'active' у иконки
            burgerIcon.classList.remove('active');
            // Убираем класс 'active' у меню
            mobileNav.classList.remove('active');
        });
    });
});
// 'new Swiper' - це команда, яка створює новий слайдер
var swiper = new Swiper(".mySwiper", { // '.mySwiper' - це клас нашого HTML-контейнера
    // --- Налаштування АДАПТИВНОСТІ ---
    slidesPerView: 1, // За замовчуванням (на мобільних) показуємо 1 слайд
    spaceBetween: 30, // Відстань між слайдами
    breakpoints: {
        // Коли ширина екрану >= 768px (планшети)
        768: {
            slidesPerView: 2, // Показувати 2 слайди
            spaceBetween: 30
        }, // Коли ширина екрану >= 1024px (комп'ютери)
        1024: {
            slidesPerView: 3, // Показувати 3 слайди
            spaceBetween: 30
        }
    }, // --- Налаштування ФУНКЦІЙ ---
    loop: true, // Безкінечна прокрутка
    // Вмикаємо крапки (пагінацію)
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Можна натискати на крапки
    }, // Вмикаємо стрілки
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, // Вмикаємо свайп (він ввімкнений за замовчуванням, 
    // але 'grabCursor' додає іконку "руки" при наведенні)
    grabCursor: true,
});


// Create Countdown
var Countdown = {
    // Backbone-like structure
    // $el: $(".countdown"), // <-- УДАЛЕНО: Не ищем элемент здесь
    // Params
    countdown_interval: null,
    total_seconds: 0,

    // Initialize the countdown
    init: function () {

        this.$el = $(".countdown");

        // DOM
        this.$ = {
            hours: this.$el.find(".bloc-time.hours .figure"),
            minutes: this.$el.find(".bloc-time.min .figure"),
            seconds: this.$el.find(".bloc-time.sec .figure")
        };

        // --- НАЧАЛО: НОВАЯ ЛОГИКА РАСЧЕТА ВРЕМЕНИ ---

        // 1. Устанавливаем "эпоху" (начальную точку)
        //    Это дата в прошлом, от которой будут отсчитываться 48-часовые циклы.
        //    Я поставлю 22 октября 2025 г., полночь.
        //    (Ты можешь изменить эту дату на любую, какая тебе нужна)
        var epoch = new Date('2025-10-22T00:00:00');

        // 2. Устанавливаем длительность цикла (48 часов)
        var cycleDurationMs = 2 * 24 * 60 * 60 * 1000; // 2 дня в миллисекундах

        // 3. Получаем текущее время
        var now = new Date();

        // 4. Считаем, сколько времени прошло с "эпохи"
        var elapsedMs = now.getTime() - epoch.getTime();

        // (Защита, если эпоха установлена в будущем)
        if (elapsedMs < 0) {
            elapsedMs = 0;
        }

        // 5. Находим, сколько времени прошло в *текущем* 48-часовом цикле
        var elapsedInCycleMs = elapsedMs % cycleDurationMs;

        // 6. Считаем, сколько времени *осталось* в этом цикле
        var remainingMs = cycleDurationMs - elapsedInCycleMs;

        // 7. Конвертируем оставшееся время в общее количество секунд
        this.total_seconds = Math.floor(remainingMs / 1000);

        // 8. Теперь, когда у нас есть total_seconds, разбиваем их 
        //    на часы, минуты и секунды для инициализации
        var remainingSeconds = this.total_seconds;

        var hours = Math.floor(remainingSeconds / 3600);
        remainingSeconds = remainingSeconds % 3600; // остаток секунд после часов

        var minutes = Math.floor(remainingSeconds / 60);

        var seconds = remainingSeconds % 60; // остаток секунд

        // 9. Инициализируем this.values
        //    (Старый код, который брал 'data-init-value', нам больше не нужен)
        this.values = {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        // --- КОНЕЦ: НОВАЯ ЛОГИКА РАСЧЕТА ВРЕМЕНИ ---


        // --- НАЧАЛО: УСТАНОВКА НАЧАЛЬНЫХ ЗНАЧЕНИЙ В DOM ---
        // (Это нужно, чтобы при загрузке страницы не было "прыжка"
        //  от значений в HTML к рассчитанным значениям)

        // Вспомогательная функция для быстрой (неанимированной) установки цифры
        var setInitialFigure = function ($el, value) {
            $el.find(".top, .bottom, .top-back, .bottom-back")
                .find("span")
                .html(value);
        };

        // Рассчитываем, какая цифра в каком блоке (с нулем впереди)
        var h1 = (this.values.hours >= 10) ? this.values.hours.toString().charAt(0) : '0';
        var h2 = (this.values.hours < 10) ? this.values.hours.toString().charAt(0) : this.values.hours.toString().charAt(1);

        var m1 = (this.values.minutes >= 10) ? this.values.minutes.toString().charAt(0) : '0';
        var m2 = (this.values.minutes < 10) ? this.values.minutes.toString().charAt(0) : this.values.minutes.toString().charAt(1);

        var s1 = (this.values.seconds >= 10) ? this.values.seconds.toString().charAt(0) : '0';
        var s2 = (this.values.seconds < 10) ? this.values.seconds.toString().charAt(0) : this.values.seconds.toString().charAt(1);

        // Устанавливаем цифры в DOM
        setInitialFigure(this.$.hours.eq(0), h1);
        setInitialFigure(this.$.hours.eq(1), h2);
        setInitialFigure(this.$.minutes.eq(0), m1);
        setInitialFigure(this.$.minutes.eq(1), m2);
        setInitialFigure(this.$.seconds.eq(0), s1);
        setInitialFigure(this.$.seconds.eq(1), s2);

        // --- КОНЕЦ: УСТАНОВКА НАЧАЛЬНЫХ ЗНАЧЕНИЙ ---

        // Animate countdown to the end
        this.count();
    },

    count: function () {
        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);

        this.countdown_interval = setInterval(function () {
            if (that.total_seconds > 0) {
                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {
                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {
                    that.values.minutes = 59;
                    --that.values.hours;
                }

                // Update DOM values
                // Hours
                that.checkHour(that.values.hours, $hour_1, $hour_2);

                // Minutes
                that.checkHour(that.values.minutes, $min_1, $min_2);

                // Seconds
                that.checkHour(that.values.seconds, $sec_1, $sec_2);

                --that.total_seconds;
            } else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);
    },

    animateFigure: function ($el, value) {
        var that = this,
            $top = $el.find(".top"),
            $bottom = $el.find(".bottom"),
            $back_top = $el.find(".top-back"),
            $back_bottom = $el.find(".bottom-back");

        // Before we begin, change the back value
        $back_top.find("span").html(value);

        // Also change the back bottom value
        $back_bottom.find("span").html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
            rotationX: "-180deg",
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                $top.html(value);

                $bottom.html(value);

                TweenMax.set($top, {
                    rotationX: 0
                });
            }
        });

        TweenMax.to($back_top, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: "all"
        });
    },

    checkHour: function (value, $el_1, $el_2) {
        // <-- ИСПРАВЛЕНО: Добавил "value || 0", чтобы избежать ошибки,
        // если value вдруг станет undefined
        var s_value = (value || 0).toString(),
            val_1 = s_value.charAt(0),
            val_2 = s_value.charAt(1),
            fig_1_value = $el_1.find(".top").html(),
            fig_2_value = $el_2.find(".top").html();

        if (value >= 10) {
            // Animate only if the figure has changed
            if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
            if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        } else {
            // Если у нас меньше 10, ставим 0 в первую цифру
            // (val_1 здесь - это единственная цифра, т.е. "9", "8" и т.д.)
            if (fig_1_value !== "0") this.animateFigure($el_1, "0");
            if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }
    }
};

// Let's go !
// <-- ИСПРАВЛЕНО: Оборачиваем запуск в $(document).ready()
// Это гарантирует, что HTML-страница полностью загрузилась
// перед тем, как мы вызовем Countdown.init()
$(document).ready(function () {
    Countdown.init();
});
