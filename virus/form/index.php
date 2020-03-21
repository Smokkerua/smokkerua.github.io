<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link media="all" href="files/index.css" type="text/css" rel="stylesheet">
    <link media="all" href="files/css-button/main.css" type="text/css" rel="stylesheet">
        
</head>

<body>
   
                
    <div class="form-container">
        <div class="form-container-text">
            <p class="action-valid">Поздравляем! Вы выйграли</p>
            <p class="action-numb">Скидку <span class="discount"></span></p>
            <p class="form-suptitle">Заполните форму и <span>нажмите красную кнопку !</span></p>
        </div>
        <p class="action-before">Акция действует <span class="rnow" format="day.month.year">
                                <script type="text/javascript">
                                        var d = new Date();
                                        var day = d.getDate();
                                        var month = d.getMonth() + 1;
                                        var year = d.getFullYear();
                                        document.write(day + "." + "0" + month);
                                </script>
                            </span> до <span class="rnow" format="day.month.year">
                                <script type="text/javascript">
                                        var d = new Date();
                                        var hour = d.getHours() + 1;
                                        var min = d.getMinutes() - d.getMinutes() + 30;
                                        document.write(hour + ":" + min);
                                </script>
                            </span> </p>
        <form target="_parent" id="form" class="orderForm orderformcdn" method="POST">
            <input placeholder="Введите Имя" name="name" maxlength="30" id="name" class="name name-black" required="" value="">
            <input placeholder="Введите Телефон" name="phone" id="phone" maxlength="20" class="phone phone-black" required="" type="tel" value="">
            <input type="hidden" name="subid" value=<?php echo $_GET[ 'subid'];?> >
            <input type="hidden" name="campaign" value=<?php echo $_GET[ 'campaign']; echo "-прокладка"; ?> >
            <input type="hidden" name="banner" value=<?php echo $_GET[ 'banner']; ?> >
            <input type="hidden" name="age" value=<?php echo $_GET[ 'age']; ?> >
            <input type="hidden" name="geo" value=<?php echo $_GET[ 'geo']; ?> >
            <input type="hidden" name="ip" value=<?php echo $_GET[ 'ip']; ?> >
            <button class="link-button" type="submit" id="main-link-5">Забрать выигрыш</button>
<!--            <input class="event_order btm-form center" value="Забрать выигрыш" type="submit">-->
            </form>
        <p class="lp-text sfl px20 dgray center">Осталось <span class="sfh px25 white left-pack">27</span> Акционных упаковок!</p>
        <p class="no-risk">Никаких рисков! Мы гарантируем результат или возвращаем деньги на карту!</p>
    </div>
    <p class="price-bottom">*Цена упаковки <span class="contry_money"></span> при покупке курса</p>
    <div id="overlay"></div>
    <div id="modal_form" class="my-popup"> <span id="modal_close">X</span>
        <p style="padding-top: 40px"><b>Поздравляем!</b></p>
        <p>Вы успели забронировать КетоДиета для похудения <b>по минимальной цене</b></p>
        <br>
        <p>Ожидайте звонка оператора в ближайшее время</p>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js" type="text/javascript"></script>
    <script src="files/iframe-186.js"></script>
    <script>
        var country = decodeURIComponent(window.location.search.match(/(\?|&)country\=([^&]*)/)[2]);
        if (country !== undefined && country !== null) {
            showCity({
                countryCode: country
            });
            console.log(country);
        }
    </script>
    <!-- <script src="files/iframe-149.js"></script> -->
</body>

</html>