    $(document).ready(function(){
        
   /*     $('tr').click(function(){
            $('tr').removeClass();
            $(this).addClass('selected');
        });*/
        $('.circle').click(function(){
            $(this).toggleClass('active-circle');
        });
        
        $('.btn-burger').click(function(){
            if(this.classList.contains('burger-icon')){
                this.classList.remove('burger-icon');
                this.classList.add('lp-icon');
                $('.icon-burger').removeClass('show');
                $('.icon-lp').addClass('show');  
                $('.main-table').removeClass('first-screen'); 
                $('.main-table').addClass('second-screen'); 
            }
            else if(this.classList.contains('lp-icon')){
                this.classList.remove('lp-icon');
                this.classList.add('filer-icon');
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


    });