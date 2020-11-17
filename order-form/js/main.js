$(document).ready(function(){
        
   /*     $('tr').click(function(){
            $('tr').removeClass();
            $(this).addClass('selected');
        });*/
        $('.circle').click(function(){
            
            
            var parents = document.querySelectorAll('.row-table');
                for (var i = 0, parent; parent = parents[i]; i++)
                parent.onclick = function(e) {
                  $(this).toggleClass('low-opaciti');
                };
            
            $(this).toggleClass('active-circle');
            
        });
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
        
        $('.btn-burger').click(function(){
            if(this.classList.contains('burger-icon')){
                this.classList.remove('burger-icon');
                this.classList.add('lp-icon');
                $('.btn-hide-lp').addClass('show');
                $('.icon-burger').removeClass('show');
                $('.icon-lp').addClass('show');  
                $('.main-table').removeClass('first-screen'); 
                $('.main-table').addClass('second-screen'); 
            }
            else if(this.classList.contains('lp-icon')){
                this.classList.remove('lp-icon');
                this.classList.add('filer-icon');
                $('.btn-hide-lp').removeClass('show');
                $('.icon-filter').addClass('show');
                $('.icon-lp').removeClass('show'); 
                $('.main-table').removeClass('second-screen'); 
                $('.main-table').addClass('third-screen'); 
            }
            else if(this.classList.contains('filer-icon')){
                this.classList.remove('filer-icon');
                this.classList.add('burger-icon');
                $('.icon-burger').addClass('show');
                $('.icon-filter').removeClass('show');
                $('.main-table').removeClass('third-screen'); 
                $('.main-table').addClass('first-screen'); 

            } 

        });
 
         $(function () {
        $('.switch-btn').click(function () {
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('on.switch');
            } else {
                $(this).trigger('off.switch');
            }
        });
        $('.switch-btn').on('on.switch', function () {
            
        });
        $('.switch-btn').on('off.switch', function () {
            
        });
    });
        
        
        function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);

});