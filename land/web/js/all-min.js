
//// animated massange
const massange = [
    {
        m: 'Приветствую Вас на своем официальном сайте! Я уролог-сексолог Алексей Живов. '
    },
    {
        m: 'В рамках недельной Государственной Программы мужского здоровья я провожу для Вас бесплатную консультацию как для двухсоттысячного гостя моего портала! '
    },
    {
        m: 'Вас привел сюда весьма щекотливый вопрос, касающийся улучшения Вашей сексуальной жизни и повышения потенции. Вы попали к специалисту, поэтому можете рассчитывать на квалифицированную помощь и полную анонимность ваших данных.'
    },
    {
        m: 'Итак, чтобы определить точную степень проблемы, прошу Вас ответить на несколько простых вопросов. '
    },
    {
        m: 'Ваша дата рождения? '
    },
    {
        m: 'Какие симптомы проявляется у вас наиболее выраженно? '
    },
    {
        m: 'Как давно Вас мучает данная проблема? '
    },


]
console.log(massange);


var mass_id = 0;
var length_mass = 0; // tateatr avelacnelu hamar
var lengt_num_mas = 0;// depi ahort smsy
var text = '';
var process = true;
setTimeout(() => {
    const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="../img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
    $('.chat-content-list').append(body_mas);
    const mas_inf = setInterval(function () {
        if(process == true){
            if (lengt_num_mas != massange.length) {
                text += massange[lengt_num_mas].m[length_mass];
                length_mass++
                $('#mass' + lengt_num_mas + '').html(text);
                if (lengt_num_mas === 4 && length_mass === massange[lengt_num_mas].m.length-1) {
                    appAge()
                    process = false;
                    genderNext();
                }
                if (lengt_num_mas === 5 && length_mass === massange[lengt_num_mas].m.length-1) {
                    process = false;
                    Photofoot();
                    setTimeout(()=>{
                        let sc_top = $('#foot1');
                        $('#page_chat').animate({ scrollTop: sc_top[0].offsetTop }, 500);
                    },1000)
                }
                if (lengt_num_mas === 6 && length_mass === massange[lengt_num_mas].m.length-1) {
                    process = false;
                    ProblemLength();

                }

                // if (lengt_num_mas === 11 && length_mass === massange[lengt_num_mas].m.length) {
                //     $('#mass11').append('<img src="img/prod2.jpg" style="display: block; width: 280px">');
                // }
                if (lengt_num_mas === 13 && length_mass === massange[lengt_num_mas].m.length) {
                    $('#mass13').append('<b class="new_price_val"></b> <b class="new_price_sig"></b>.');


                }

                //for closed Set Interval
                if (length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++
                    mass_id++
                    length_mass = 0;
                    text = '';
                    console.log(lengt_num_mas);
                    app();
                    let proc_scroling = lengt_num_mas - 1;
                    let nev_div = $('#mass' + proc_scroling + '')[0].offsetParent.offsetTop;
                    console.log(nev_div)
                    scriplongBody(nev_div);
                }
            } else {
                console.log('verj');
                clearInterval(mas_inf);
                $('#mass' + lengt_num_mas + '').parent().parent().css('display', 'none');
                $('#cont_form').css('display','block');
                // clearInterval(set);
            }
        }else {
            //
        }
    }, 100)
}, 2000)


function app() {
    const body_mas = '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="../img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' + mass_id + '"></p></div></div></div>';
    $('.chat-content-list').append(body_mas);
}
// my massange
function myMassange(userGend) {
    let mass = '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="users_mass">'+userGend+'</p></div></div></div>';
    $('.chat-content-list').append(mass)
}

// gender append

function appGender() {
    $('.chat-content-list').append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Мужчина</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Женщина</span></div></div>');
}

function genderNext() {
    $('.chooseGenderM').click(()=>{
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Мужчина');
        setTimeout(()=>{
            process = true;
        },500)
    })
    $('.chooseGenderW').click(()=>{
        document.querySelector('.chat-content-buttons-gender').style.display = 'none';
        myMassange('Женщина');
        setTimeout(()=>{
            process = true;
        },500)
    })
}

// Age append
function appAge() {
    $('.chat-content-list').append('<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">День</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Месяц</option>undefined<option value="1">январь</option><option value="2">февраль</option><option value="3">март</option><option value="4">апрель</option><option value="5">май</option><option value="6">июнь</option><option value="7">июль</option><option value="8">август</option><option value="9">сентябрь</option><option value="10">октябрь</option><option value="11">ноябрь</option><option value="12">декабрь</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Год</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div></form>');

   
    let data = setInterval(()=>{
            let empty_field = $('.select-day').val();
            let full_month = $('.select-month').val();
            let year = $('.select-year').val();
            if(empty_field != '' && full_month != '' && year != ''){
                let selectS = ''+empty_field+'.'+full_month+'.'+year+'';
                myMassange(selectS);
                $(this).css('display','none');
                process = true;
                clearInterval(data);
            }
            console.log(empty_field,full_month,year)
        },500)

    

}
// append yeas and no

function YsNo() {
    $('.chat-content-list').append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM" id="yeas">ДА</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW" id="no">Нет</span></div></div>');
    $('#yeas').click(()=>{
        $('.chat-content-buttons-gender').css('display','none');
        myMassange('Да');
        process = true;
    })
    $('#no').click(()=>{
        $('.chat-content-buttons-gender').css('display','none');
        myMassange('Нет');
        process = true;
    })
}

// append photos foot

function Photofoot() {
    $('.chat-content-list').append('<div class="foot"><p class="symptom" id="foot1">Снижение сексуального влечения</p><p class="symptom" id="foot2">Слабая эрекция или ее отсутствие</p><p class="symptom" id="foot3">Непродолжительный половой акт</p><p class="symptom" id="foot4">Слабовыраженный оргазм</p></div>');
    Photofot();
}
function Photofot() {
    $('#foot').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        process = true;
    })
    $('#foot1').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        process = true;
    })
    $('#foot2').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        process = true;
    })
    $('#foot3').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        process = true;
    })
    $('#foot4').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        process = true;
    })
}

function ProblemLength() {
    $('.chat-content-list').append('<div class="foot"><p class="problem" id="foot11">Год или менее</p><p class="problem" id="foot22">1-3 года</p><p class="problem" id="foot33">Более 3-х лет</p></div>');
    sendImg();
}

// клики для нажали картикнку
var ostr2 = '';
function sendImg(){
    $('#foot11').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        addArray();
        process = true;
    })
    $('#foot22').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        addArray();
        process = true;
    })
    $('#foot33').click(function ( ){
        let th_title = $(this).text();
        myMassange(th_title);
        addArray();
        process = true;
    })
}
var today = new Date();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
function addArray(){
    end_massange1 = {m: 'Не буду зря обнадеживать Вас — Ваш случай показывает осложненные системные последствия и является предвестником скорой импотенции. В данном случае рассчитывать на помощь рядовых некомпетентных врачей и классических методов лечения бессмысленно. '};
    end_massange2 = {m: 'Должен предупредить Вас, что только высокоэффективное направленное действие может решить Вашу проблему быстро и качественно. '};
    end_massange3 = {m: 'Учитывая сложность Вашей ситуации и значимость ее решения в самые короткие сроки, я не стану предлагать Вам бесполезные препараты, стоящие на аптечных полках. Среди них нет ни одного, способного по-настоящему помочь в Вашем случае.' };
    end_massange4 = {m: 'Самым эффективным решением для повышения выработки тестостерона и восстановления потенции МЕНЬШЕ ЧЕМ ЗА 2 НЕДЕЛИ на сегодняшний день является только один препарат —  «Алитабс». '};
    end_massange5 = {m: 'Его особенность заключается в полностью натуральном составе и особой формуле действия на мужской организм. Клинические исследования прошлого года показывают, что даже такие тяжелые случаи, как Ваш, решаются с помощью всего одного курса приема «Алитабс». '};
    end_massange6 = {m: '94,9% мужчин, принимавших «Алитабс», подтвердили его эффективность уже с первого применения, а также в несколько раз более стойкую эрекцию и длительный половой акт. '};
    end_massange7 = {m: 'Остальные же опрошенные признались, что прекратили прием препарата досрочно. Но даже они после возобновления курсового приема просто забыли о своих сексуальных проблемах навсегда! '};
    end_massange8 = {m: 'Таким образом, регулярность применения и соблюдение курсового приема дадут Вам полноценную и насыщенную сексуальную жизнь. «Алитабс» эффективен в любом возрасте и при этом совершенно безопасен для мужского организма. Об этом же говорит и тот факт, что «Алитабс» совместим с алкоголем (при необходимости). '};
    end_massange9 = {m: 'Но должен Вас предупредить: При слишком ярко выраженном эффекте рекомендуется временно сократить дозировку препарата —  в некоторых индивидуальных случаях действие компонентов «Алитабс» настолько быстро восстанавливало выработку тестостерона, что мужчина в течение нескольких часов не мог отделаться от настойчивого внимания женщин :) '};
    end_massange10 = {m: 'Поскольку Вы уже являетесь участником Программы мужского здоровья, то получить курс препарата «Алитабс» Вы можете совершенно бесплатно до '+date+'. для этого нужно заполнить форму, вписав свое имя и контактный телефон.'};
    end_massange11 = {m: 'Чтобы получить “Алитабс”, укажите Ваше имя и номер телефона в форме заказа. '};
    massange.push(end_massange1,end_massange2,end_massange3,end_massange4,end_massange5,end_massange6,end_massange7,end_massange8,end_massange9,end_massange10, end_massange11);
    console.log(massange);
}

// for scroll on button
let top_scroling = 0;
function scriplongBody(x){
    let ekac_x = x+70;
    top_scroling += ekac_x;
    var set = setTimeout(()=>{
        // let objDiv = document.getElementById('page_chat');
        // objDiv.scrollTop.animate =  5000;
        $('#page_chat').animate({ scrollTop: top_scroling }, 1000);
    },300)
}





setInterval(()=>{
    let val = $('#val').text();
    let cur = $('#cur').text();
    $('.new_price_val').text(val);
    $('.new_price_cur').text(cur);
    $('.new_price_sig').text();
},200)

setInterval(function (){
    let user_mass = $('.users_mass');
    var user_full_info = '';
    user_mass.map((e)=>{
        let full_info = user_mass[e].innerText+'/';
        user_full_info += full_info;
    })
    $('input[name=comments]').val(''+user_full_info+''+ostr2+'');
},500)









