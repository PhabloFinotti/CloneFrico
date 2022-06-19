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

    $('.open__search--header, .search-absolute__close').on('click', function(){
        $('.search__absolute').toggleClass('-active');
    })

	// Fechar se clicar fora
	$(window).on('click', function(event){
		if($('.search__absolute').hasClass('-active')){
			if($(event.target).closest('.search__absolute').length == 0 && $(event.target).closest('.header__search').length == 0){
                $('.search__absolute').removeClass('-active')
			}
		}
	})

});