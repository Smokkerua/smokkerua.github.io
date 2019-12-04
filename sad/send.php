<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['user_name'];
$forma = $_POST['forma'];
$phone = $_POST['user_phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {

    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'rostikyandex@mail.ru'; // Логин на почте
    $mail->Password   = 'kindergarten1234'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('rostikyandex@mail.ru', 'Rostik'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('myrostik@yandex.ru');  
    // $mail->addAddress('youremail@gmail.com');  Ещё один, если нужен
    // Прикрипление файлов к письму

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заголовок письма';
        $mail->Body    = "
        <b>Имя:</b> $name <br>
        <b>Почта:</b> $phone<br>
        <b>Форма:</b> $forma<br>";
// Проверяем отравленность сообщения
if ($mail->send()) {
    header("Refresh:0 url=index2.php");
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}