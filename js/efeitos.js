$(function(){

    if($(window).width() > 768){
        $(window).scroll(function(){
            if($(this).scrollTop()>50){
                $('.header').each(function(){
                    $(this).addClass("-fixed")
                }
            )}else{
                $('.header').each(function(){
                    $(this).removeClass("-fixed")
                })
            };
        });
    }

});