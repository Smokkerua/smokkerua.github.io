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


// --- 1. Настройка ---

// Находим наши три элемента на странице
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// --- 2. Основные функции ---

/**
 * Главная функция, которая запускается каждую секунду.
 */
function updateCountdown() {
    
    // 1. Получаем текущее время
    const now = new Date();

    // 2. Устанавливаем целевое время — это полночь СЛЕДУЮЩЕГО дня.
    // (Это самый простой способ посчитать "до конца дня")
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + 1); // Устанавливаем "завтра"
    targetDate.setHours(0, 0, 0, 0); // Устанавливаем на 00:00:00

    // 3. Вычисляем разницу (в миллисекундах)
    // targetDate.getTime() - это время в мс до полуночи завтрашнего дня
    // now.getTime() - это текущее время в мс
    const distance = targetDate.getTime() - now.getTime();

    // 4. Обновляем отображение на странице
    updateDisplay(distance);
}

/**
 * Принимает оставшееся время (в мс) и отображает его на странице.
 * (Эта функция не изменилась)
 * @param {number} distance - Оставшееся время в миллисекундах.
 */
function updateDisplay(distance) {
    // Вычисляем общее кол-во часов, и остаток минут/секунд
    // Когда до полуночи останется 1 секунда, distance будет 1000мс,
    // и Math.floor(1000 / (1000 * 60 * 60)) будет 0.
    // Когда наступит полночь, `distance` станет 86,400,000 (24 часа).
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображаем значения
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}

/**
 * Вспомогательная функция. Добавляет ведущий ноль.
 * (Эта функция не изменилась)
 * @param {number} time - Число.
 * @returns {string} - Отформатированное строковое значение.
 */
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// --- 3. Запуск таймера ---

// 1. Запускаем функцию updateCountdown() каждую секунду (1000 мс)
setInterval(updateCountdown, 1000);

// 2. Также запускаем ее один раз сразу при загрузке страницы,
//    чтобы не ждать первую секунду до появления цифр.
updateCountdown();