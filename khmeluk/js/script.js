// Чекаємо, поки весь HTML-документ завантажиться
document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM полностью загружен. Запускаем скрипты.");

    // ---------------------------------
    // --- 1. ЛОГИКА ДЛЯ БУРГЕР-МЕНЮ ---
    // ---------------------------------
    const burgerIcon = document.querySelector('.burger-menu-icon');
    const mobileNav = document.querySelector('.nav-mobile');

    // Проверяем, что элементы меню существуют
    if (burgerIcon && mobileNav) {
        // Добавляем "прослушку" клика на иконку бургера
        burgerIcon.addEventListener('click', function () {
            // Переключаем (добавляем/убираем) класс 'active'
            burgerIcon.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // БОНУС: Закрываем меню при клике на ссылку в нем
        const mobileLinks = document.querySelectorAll('.nav-mobile a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Убираем класс 'active' у иконки и меню
                burgerIcon.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    } else {
        console.warn("Элементы бургер-меню (.burger-menu-icon или .nav-mobile) не найдены.");
    }

    // ---------------------------------
    // --- 2. ЛОГИКА ДЛЯ АККОРДЕОНА (Улучшенная версия) ---
    // ---------------------------------
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Проверяем, есть ли аккордеоны на странице
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const icon = this.querySelector('.accordion-icon');
                const isActive = this.classList.contains('active');

                // Сначала закрываем ВСЕ другие открытые аккордеоны
                accordionHeaders.forEach(otherHeader => {
                    if (otherHeader !== this && otherHeader.classList.contains('active')) {
                        otherHeader.classList.remove('active');
                        otherHeader.setAttribute('aria-expanded', 'false');
                        otherHeader.nextElementSibling.style.maxHeight = null;
                        const otherIcon = otherHeader.querySelector('.accordion-icon');
                        if (otherIcon) {
                            otherIcon.textContent = '+';
                        }
                    }
                });

                // Теперь открываем или закрываем текущий
                if (isActive) {
                    // Закрываем
                    this.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = null;
                    if (icon) {
                        icon.textContent = '+';
                    }
                } else {
                    // Открываем
                    this.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) {
                        icon.textContent = '−'; // Используем минус
                    }
                }
            });
        });
    } else {
        console.warn("Элементы аккордеона (.accordion-header) не найдены.");
    }


    // ---------------------------------
    // --- 3. ЛОГИКА ДЛЯ СЛАЙДЕРА "TESTIMONIALS" (Ручной) ---
    // ---------------------------------
    let slideIndex = 1;
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("dot");

    // Главная функция, что показывает слайды
    function showSlides(n) {
        // Проверяем, что слайды и точки вообще есть
        if (slides.length === 0 || dots.length === 0) {
            return; // Выходим, если нечего показывать
        }

        let i;
        // Логика "зацикления"
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

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

    // Эта функция будет вызвана из HTML (onclick="plusSlides(-1)")
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    }
    
    // Эта функция будет вызвана из HTML (onclick="currentSlide(1)")
    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    }

    // Если слайды есть, показываем первый и запускаем таймер
    if (slides.length > 0) {
        showSlides(slideIndex); // Показываем первый слайд

        let slideInterval = setInterval(function () {
            plusSlides(1);
        }, 5000); // 5000 мілісекунд = 5 секунд

        // Переопределяем функции, чтобы они сбрасывали таймер
        window.currentSlide = function (n) {
            clearInterval(slideInterval);
            showSlides(slideIndex = n);
            slideInterval = setInterval(() => plusSlides(1), 5000);
        }
        window.plusSlides = function (n) {
            clearInterval(slideInterval);
            showSlides(slideIndex += n);
            slideInterval = setInterval(() => plusSlides(1), 5000);
        }
    }

   // ---------------------------------
    // --- 7. ЛОГИКА ДЛЯ МОДАЛЬНОГО ОКНА ---
    // ---------------------------------

    console.log("Загрузка скриптов для модального окна...");

    // 1. Находим все нужные элементы
    const modal = document.getElementById('feedback-modal');
    // Находим ВСЕ кнопки, которые должны открывать окно
    const allOpenButtons = document.querySelectorAll('.open-modal-btn'); 
    // Находим кнопку "X" внутри окна
    const closeButton = modal.querySelector('.modal-close');

    // 2. Функция "Открыть окно"
    function openModal() {
        if (modal) { // Проверяем, что окно существует
            modal.classList.add('is-open'); 
            // Добавляем класс 'is-open' (мы его стилизуем в CSS)
        }
    }

    // 3. Функция "Закрыть окно"
    function closeModal() {
        if (modal) { // Проверяем, что окно существует
            modal.classList.remove('is-open');
             // Убираем класс 'is-open'
        }
    }

    // 4. Назначаем обработчики событий

    // A. Открываем по клику на ЛЮБУЮ кнопку .open-modal-btn
    allOpenButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Запрещаем ссылке переход по #
            openModal();
        });
    });

    // Б. Закрываем по клику на крестик 'X'
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // В. Закрываем по клику на темный фон (оверлей)
    if (modal) {
        modal.addEventListener('click', (event) => {
            // Сработает, только если кликнули на сам фон (modal),
            // а не на его "внутренности" (modal-content)
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Г. Закрываем по нажатию клавиши 'Escape' (для удобства)
    document.addEventListener('keydown', (event) => {
        // Проверяем, что нажата 'Escape' И окно сейчас открыто
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    console.log("Модальное окно готово к работе.");

    // ---------------------------------
    // --- 5. ЛОГИКА ДЛЯ СЛАЙДЕРА "SWIPER" (Библиотека) ---
    // ---------------------------------
    // Проверяем, что и библиотека Swiper и элемент .mySwiper существуют
    if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            grabCursor: true,
        });
    } else {
        console.warn("Swiper.js не подключен или элемент .mySwiper не найден.");
    }


    // ---------------------------------
    // --- 6. ЛОГИКА ДЛЯ ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА ---
    // ---------------------------------
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Вспомогательная функция. Добавляет ведущий ноль.
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    /**
     * Принимает оставшееся время (в мс) и отображает его на странице.
     */
    function updateDisplay(distance) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Отображаем значения
        hoursEl.innerText = formatTime(hours);
        minutesEl.innerText = formatTime(minutes);
        secondsEl.innerText = formatTime(seconds);
    }

    /**
     * Главная функция, которая запускается каждую секунду.
     */
    function updateCountdown() {
        const now = new Date();
        const targetDate = new Date(now);
        targetDate.setDate(targetDate.getDate() + 1);
        targetDate.setHours(0, 0, 0, 0);

        const distance = targetDate.getTime() - now.getTime();
        updateDisplay(distance);
    }
    
    // Проверяем, что все элементы таймера на месте
    if (hoursEl && minutesEl && secondsEl) {
        // Запускаем таймер
        setInterval(updateCountdown, 1000);
        // Запускаем сразу, чтобы не ждать первую секунду
        updateCountdown();
    } else {
        console.warn("Элементы таймера (#hours, #minutes, #seconds) не найдены.");
    }

}); 



document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Находим ваш чекбокс по id "check1"
    const checkbox = document.getElementById('check1');
    
    // 2. Находим ваш DIV с кнопкой по классу "button-pay"
    // Используем querySelector, так как у него нет id
    const buttonWrapper = document.querySelector('.button-pay');

    // 3. Добавляем слушатель события 'change' на чекбокс
    checkbox.addEventListener('change', function() {
        
        // 4. Проверяем, стоит ли галочка
        // "this.checked" вернет true (истина), если галочка стоит
        
        if (this.checked) {
            // Галочка ПОСТАВЛЕНА:
            // Убираем класс "disabled" у <div class="button-pay ...">
            buttonWrapper.classList.remove('disabled');
            
        } else {
            // Галочка СНЯТА:
            // Возвращаем класс "disabled" к <div class="button-pay ...">
            buttonWrapper.classList.add('disabled');
        }
    });
});