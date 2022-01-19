$(document).scroll(function(){
    var topWindow = $(window).scrollTop();
    if(topWindow > 60){
        $("header").addClass('header_fixed');
    }else {
        $("header").removeClass('header_fixed');
    }
});

$(document).ready(function(){
    $(".menu").mouseover(function(){
        $(".nav-itens").addClass("nav-show");
    });
    
    $(".menu").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");
    });
});