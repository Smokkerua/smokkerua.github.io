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
            event.preventDefault()
            document.getElementById('password').setAttribute('type', 'text');
        } else {
            event.preventDefault()
            document.getElementById('password').setAttribute('type', 'password');
        }
    });
    $('.generatePassword img').click(function () {
        event.preventDefault()
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
