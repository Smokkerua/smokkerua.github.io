// Чекаємо, поки весь HTML-документ завантажиться
document.addEventListener("DOMContentLoaded", function() {

    // ---------------------------------
    // --- 1. ЛОГІКА ДЛЯ АКОРДЕОНУ ---
    // ---------------------------------
    
    // Знаходимо всі кнопки з класом "accordion"
    const accordions = document.getElementsByClassName("accordion");

    // Перебираємо всі кнопки і додаємо кожній слухача події "click"
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            // "this" - це кнопка, на яку натиснули
            
            // 1. Додаємо/видаляємо клас "active" для кнопки (щоб міняти + на -)
            this.classList.toggle("active");

            // 2. Знаходимо наступний елемент (це наша панель .panel)
            const panel = this.nextElementSibling;

            // 3. Перевіряємо, чи панель ВЖЕ відкрита (чи є у неї max-height)
            if (panel.style.maxHeight) {
                // Якщо так - закриваємо її (ставимо max-height = null)
                panel.style.maxHeight = null;a// Чекаємо, поки весь HTML-документ завантажиться
document.addEventListener("DOMContentLoaded", function() {
    
    // Знаходимо нашу форму за її ID
    const contactForm = document.getElementById("main-contact-form");

    // Додаємо "слухача" події "submit" (відправка форми)
    contactForm.addEventListener("submit", function(event) {
        
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
    let slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // 5000 мілісекунд = 5 секунд

    // Робимо функції `currentSlide` та `plusSlides` глобальними,
    // щоб їх можна було викликати з HTML (onclick)
    window.currentSlide = function(n) {
        // При ручному натисканні - скидаємо таймер і показуємо слайд
        clearInterval(slideInterval);
        showSlides(slideIndex = n);
        // І запускаємо таймер знову
        slideInterval = setInterval(function() { plusSlides(1); }, 5000);
    }
    
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Головна функція, що показує слайди
    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("testimonial-slide");
        const dots = document.getElementsByClassName("dot");

        // Логіка "зациклення"
        if (n > slides.length) { slideIndex = 1 } // Якщо дійшли до кінця - на початок
        if (n < 1) { slideIndex = slides.length } // Якщо пішли назад з першого - в кінець

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
    contactForm.addEventListener("submit", function(event) {
        
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
        console.log("Дані форми:", { name, phone, message });
        alert("Дякую! Ваша заявка прийнята. Я скоро з вами зв'яжуся.");

        // Очищуємо поля форми
        contactForm.reset();
    });

});