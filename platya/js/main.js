$(document).on('ready', function () {
    
    /* slider */
    $('.popular-1').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });
    
    $('.dress-first').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });
    
    $('.second-first').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });
    
    $('.trith-first').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });
    
    $('.fouth-first').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });
    
    $('.rew-slider').slick({
          dots: true,
          speed: 500,
          fade: true,
          infinite: false,
          cssEase: 'linear'
        
    });

    // Smooth scroll 
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700);
    });
    
    //  lazy load
    [].forEach.call(document.querySelectorAll("img[data-src]"), function (a) {
        a.setAttribute("src", a.getAttribute("data-src"));
        a.onload = function () {
            a.removeAttribute("data-src");
        };
    });

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = ('0' + t.days);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline="January 01 2018 00:00:00 GMT+0300"; 
    var deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); 


    initializeClock('countdown', deadline);
    
});

    var showed1 = function (state) {
        document.getElementById('modalForm1').style.display = state;
        document.getElementById('filter_modal1').style.display = state;
    }
    var showed2 = function (state) {
        document.getElementById('modalForm2').style.display = state;
        document.getElementById('filter_modal2').style.display = state;
    }
    
    var showed3 = function (state) {
        document.getElementById('modalForm3').style.display = state;
        document.getElementById('filter_modal3').style.display = state;
    }
    var showed4 = function (state) {
        document.getElementById('modalForm4').style.display = state;
        document.getElementById('filter_modal4').style.display = state;
    }
    var showed6 = function (state) {
        document.getElementById('modalForm6').style.display = state;
        document.getElementById('filter_modal6').style.display = state;
    }
    
    var showed7 = function (state) {
        document.getElementById('modalForm7').style.display = state;
        document.getElementById('filter_modal7').style.display = state;
    }
    var showed8 = function (state) {
        document.getElementById('modalForm8').style.display = state;
        document.getElementById('filter_modal8').style.display = state;
    }

