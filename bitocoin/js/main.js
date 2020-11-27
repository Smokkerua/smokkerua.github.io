$(document).ready(function () {
    //Скрипт генерации паролей
    function str_rand() {
        var result = '';
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
        for (i = 0; i < 6; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        return result;
    }
    $('.showPassword').click(function () {
        var inputPsw = $('#password');
        if (inputPsw.attr('type') == 'password') {
            event.preventDefault();
            document.getElementById('password').setAttribute('type', 'text');
        } else {
            event.preventDefault();
            document.getElementById('password').setAttribute('type', 'password');
        }
    });
    $('.generatePassword img').click(function () {
        event.preventDefault();
        document.getElementById('password').setAttribute('type', 'text');
        $('#password').attr('value', str_rand());

    });
    $('#buttom-form').click(function () {
        if (document.getElementById('password').value == '') {
            document.getElementById('password').setAttribute('type', 'text');
            $('#password').attr('value', str_rand());
        }
    });
});



 /* видео
     =====================*/
    (function () {
        var youtube = document.querySelectorAll(".youtube");
        for (var i = 0; i < youtube.length; i++) {
            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));
            youtube[i].addEventListener("click", function () {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
                this.innerHTML = "";
                this.appendChild(iframe);
            });
        };
    })();