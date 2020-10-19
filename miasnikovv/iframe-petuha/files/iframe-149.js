var price = {"BY": "5 бел. руб.", "KZ": "830 тенге", "RU": "149 рублей", "UA":"149 рублей", "AM":"1 драм", "AZ":"5 манат", "GE":"15 лари", "KG":"1900 сом"};
var old_price = {"BY": "70 бел. руб.", "KZ": "13000 тенге", "RU": "2000 рублей", "UA":"2000 рублей", "AM":"18000 драм", "AZ":"50 манат", "GE":"15 лари", "KG":"50000 сом"};
var phone = {"BY": "+375xxxxxxxxxx", "RU": "+7xxxxxxxxxxx", "KZ": "+7xxxxxxxxxxx", "KG": "+996xxxxxxxxxx", "AM" : "+374xxxxxxxxx", "UA":"+7xxxxxxxxxxx", "AZ":"+994xxxxxxxxx", "GE":"+995xxxxxxxxx", "KG":"+996xxxxxxxxx"};
var phoneLength = {"BY": 7, "KZ": 9, "KG": 9, "RU": 9, "AM": 9, "UA": 9, "AZ": 9, "GE": 9, "KG": 9};
var primer = {"BY": "+375294911911", "KZ": "+77710009998", "KG": "+996700123456", "RU": "+79123456789", "AM":"+37477123456", "UA":"+79123456789", "AZ":"+994503778822", "GE":"+995322144111", "KG":"+996312900900"};
var country;

var product_name_r = "Алитабса"; // Родительный падеж нет Кого? Чего? Пример - Кетодиеты
var product_name_v = "Алитабс"; // Винительный падеж Кого? Что? Пример - Кетодиету
var garant         = "Гарантию того, половая жизнь станет яркая и насыщенная!"; // Гарантию того, что вы %вылечите/избавитесь от болезни
var for_what       = "для улучшения потенции и увеличения влечения";  // от чего продукт? для избавления от лишнего веса/диабета и тд


 function showCity(o){
    country = o.countryCode;
    var contry_name;
    var contry_name2;
    var contry_name3;
    
    switch (country) {
              case "KZ": {
                contry_name = "Казахстана";
                contry_name2 = "Казахстан";
                contry_name3 = "Казахстане";
                break;
              }
              case "RU": {
                contry_name = "России";
                contry_name2 = "Россия";
                contry_name3 = "России";
                break;
              }

              case "BY": {
                contry_name = "Беларуси";
                contry_name2 = "Беларусь";
                contry_name3 = "Беларуси";
                break;
              }

              case "KG": {
                contry_name = "Кыргызстана";
                contry_name2 = "Кыргызстан";
                contry_name3 = "Кыргызстане";
                break;
              }

               case "AM": {
                contry_name = "Армении";
                contry_name2 = "Армения";
                contry_name3 = "Армении";
                break;
              }

               case "UA": {
                contry_name = "Украины";
                contry_name2 = "Украина";
                contry_name3 = "Украине";
                break;
              }

               case "AZ": {
                contry_name = "Азербайджана";
                contry_name2 = "Азербайджан";
                break;
              }
              case "GE": {
                contry_name = "Грузии";
                contry_name2 = "Грузия";
                break;
              }
    }
            
            $(".contry_money").text(price[country]);
            $(".contry_old_money").text(old_price[country]);
            $(".contry_name").text(contry_name);    
            $(".contry_name2").text(contry_name2);       
            $(".contry_name3").text(contry_name3);             
            
    }

            $(".product_name_r").text(product_name_r); 
            $(".product_name_v").text(product_name_v); 
            $(".garant").text(garant); 
            $(".for_what").text(for_what); 
        
  
      $(function() {
            var $forms = $('.orderForm'); //все формы заказов

        $forms.on('submit', function() {

            var $form = $(this);

            //сюда можно добавить валидацию
            var $fio = $(':input[name="name"]', $form);
            $fio.val($.trim($fio.val()));

            if (!$fio.val()) {
                 alert("Укажите корректные Имя!");
                return false;
            }

            var $phone = $(':input[name="phone"]', $form);

            var reg1 = new RegExp("[^0-9]*","g")
                , reg2 = new RegExp("[^0-9-+ ()]","g");
            var phone_txt = $phone.val().replace(reg1, "");
            if ($phone.val().search(reg2) != -1) {
                 alert('Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы');
                return false;
            }
      
            if (!phone_txt || phone_txt.length < phoneLength[country]) {
                return false;
            }

              console.log($form.serialize())

            var checkPhone = sessionStorage.getItem("phone");

            if (checkPhone !== $phone.val()) {
 
                sessionStorage.setItem("phone", $phone.val());

                $.ajax({
                    url: '../../order.php',
                    data: $form.serialize(),
                    type: 'post'
                }).done(function(data) {
                      $('#overlay').fadeIn(400,
                        function(){
                          $('#modal_form') 
                            .css('display', 'block') 
                            .animate({opacity: 1, top: '30%'}, 200); 
                      });
                }).fail(function(error) {
                    alert('При отправке заказа произошла ошибка. Перезагрузите форму и попробуйте еще раз.');
                }).always(function() {

                });

            }else{
                alert("На этот номер телефона уже создана заявка!")
            }

  return false;
        });

var number_objects;
  var displayObject = $('.left-pack');
  function loadRandom() {
    number_objects = 27 + Math.floor(Math.random() * 1);
  }
  function decreaseRandom() {
    number_objects -= Math.floor(Math.random() * 2) + 1;        
  }
  function showRandom() {    
    displayObject.text(number_objects);
  }
  loadRandom(); // load the value
  showRandom(); // initial display
  var interval = setInterval(function () {
    decreaseRandom();
    showRandom();
    if(number_objects <= 5) {
      clearInterval(interval);   
    }
  }, 7500);
        });


$('#overlay , #modal_close').click( function(){ 
  $('#modal_form')
    .animate({opacity: 0, top: '55%'}, 200,
      function(){ 
        $(this).css('display', 'none'); 
        $('#overlay').fadeOut(400);
      }
    );
});