<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link media="all" href="files/index.css" type="text/css" rel="stylesheet">
                    <link
                        media="all"
                        href="files/css-button/main.css"
                        type="text/css"
                        rel="stylesheet">
                </head>
                <body>
<div id="order" class="boxit">
                        <div class="frame-container">
                            <div class="row-form">
                                <form target="_parent" id="form" class="orderForm orderformcdn" method="POST">
                                    <div id="order-frame-3" class="head-form">
                                        <span>Введите ваши данные в форму, чтобы забронировать
                                            <span class="product_name_v"></span>
                                            по акции</span>
                                        <img src="files/img/down.png">
                                    </div>
                                    <div class="discount">
                                        <div style="line-height:26px;" class="date">Акция действует <br>
                                            <strong>
                                                <script type="text/javascript">
                                                    var d = new Date();
                                                    var day = d.getDate();
                                                    var month = d.getMonth() + 1;
                                                    var year = d.getFullYear();
                                                    document.write(day + ".0" + month);
                                                </script>
                                                до
                                                <span class="rnow" format="day.month.year">
                                                    <script type="text/javascript">
                                                        var d = new Date();
                                                        var hour = d.getHours() + 1;
                                                        var min = d.getMinutes() - d.getMinutes() + 30;
                                                        document.write(hour + ":" + min);
                                                    </script>
                                                </span>
                                            </strong>
                                        </div>
                                        <div class="price">
                                            <span class="old-price contry_old_money">3900 руб.</span>
                                            <span class="new-price contry_money">149 руб.</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 name">
                                        <input
                                            placeholder="Введите Имя"
                                            name="name"
                                            maxlength="30"
                                            id="name"
                                            required=""
                                            value="">
                                    </div>
                                    <div class="col-md-12 phone">
                                        <input
                                            placeholder="Введите Телефон"
                                            name="phone"
                                            id="phone"
                                            minlength="10"
                                            maxlength="20"
                                            class="phone phone-black"
                                            required=""
                                            type="tel"
                                            value="">
                                    </div>
                                    <input type="hidden" name="subid" value=<?php echo $_GET[ 'subid'];?>>
                                    <input type="hidden" name="campaign" value=<?php echo $_GET[ 'campaign']; echo "-прокладка"; ?>>
                                    <input type="hidden" name="banner" value=<?php echo $_GET[ 'banner']; ?>>
                                    <input type="hidden" name="age" value=<?php echo $_GET[ 'age']; ?>>
                                    <input type="hidden" name="geo" value=<?php echo $_GET['country']; ?>>
                                    <input type="hidden" name="ip" value=<?php echo $_GET[ 'ip']; ?>>
                                    <input type="hidden" name="landingId" value=<?php echo $_GET['landingId']; ?>>
                                    <button type="submit"><img src="files/img/submit.png">ЗАБРОНИРОВАТЬ</button>
                                    <span class="under-button">
                                        <i>*</i>
                                        Ваши данные отправляются напрямую официальном производителю. Никто, кроме него,
                                        не имеет к ним доступ.
                                        <br><i>*</i>Акция действует при покупке курса.</span>
                                    <div class="footer">Спешите! Осталось
                                        <span class="left-pack">27</span>
                                        упаковок по акции!</div>
                                </form>
                            </div>
                        </div>
                        <div id="overlay"></div>
                        <div id="modal_form" class="my-popup">
                            <span id="modal_close">X</span>
                            <p style="padding-top: 40px">
                                <b>Поздравляем!</b>
                            </p>
                            <p>Вы успели забронировать
                                <span class="product_name_v"></span>
                                <span class="for_what"></span>
                                <b>по минимальной цене</b>
                            </p><br>
                            <p>Ожидайте звонка оператора в ближайшее время</p>
                        </div>
                    </div>

                    <script src="https://ajax.googIeaqis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"
                        type="text/javascript"></script>
                    <script src="files/iframe-149.js"></script>
                    <script>
                        var country = decodeURIComponent(window
                            .location
                            .search
                            .match(/(\?|&)country\=([^&]*)/)[2]);
                        if (country !== undefined && country !== null) {
                            showCity({countryCode: country});
                            console.log(country);
                        }
                    </script>
                </body>
            </html>