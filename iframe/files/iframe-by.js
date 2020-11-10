var price = {"BY": "4 бел. руб.", "KZ": "1133 тенге", "KG": "1690 сом", "RU": "186 рублей", "UA":"69 гривен", "AM":"12500s драм"};
var old_price = {"BY": "69 бел. руб.", "KZ": "13000 тенге", "KG": "3400 сом", "RU": "2000 рублей", "UA":"600 гривен", "AM":"14000 драм"};
var phone = {"BY": "+375xxxxxxxxxx", "RU": "+7xxxxxxxxxxx", "KZ": "+7xxxxxxxxxxx", "KG": "+996xxxxxxxxxx", "AM" : "+374xxxxxxxxx", "UA":"+380xxxxxxxxxx"};
var phoneLength = {"BY": 7, "KZ": 7, "KG": 7, "RU": 7, "AM": 7, "UA": 7};
var primer = {"BY": "+375294911911", "KZ": "+77710009998", "KG": "+996700123456", "RU": "+79123456789", "AM":"+37477123456", "UA":"+380391234567"};
var country;

var product_name_r = "Гипертонина";
var product_name_v = "Гипертонин Нано";
var garant         = "Гарантию того, что вы забудете о гипертонии";
var for_what       = "для лечения гипертонии"; 

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
/*              var submited = false;*/
            var $forms = $('.orderForm'); //все формы заказов
                      


        //обработка отправки формы
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
