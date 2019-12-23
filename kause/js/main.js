$(document).on('ready', function () {
    
    /* menu
     =====================*/
    $("#menu").on("click", function (event) {
        event.preventDefault();
        $("#header-top").toggleClass("active");
    });
    
});


