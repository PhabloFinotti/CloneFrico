$(function() {
    new Glide(".banner", {
        perView: 1,
        type: "slider",
        autoplay: 10000,
        gap: 0
    }).mount();



    // Mounts first products carousel listing all items
    new Glide("#todos", {
        perView: 3,
        type: "slider",
        // autoplay: 10000,
        gap: 0,
        perTouch: 1,
        focusAt: 1
    }).mount();
    var alreadyActive = ['#todos']
    
    // Builds the rest, on click, of the products carousel
    $('.products__cats .nav-link').on('click', function(){
        var attrHref = $(this).attr('href');

        if(!alreadyActive.includes(attrHref)){
            alreadyActive.push(attrHref);
            
            new Glide(attrHref, {
                perView: 3,
                type: "slider",
                // autoplay: 10000,
                gap: 0,
                perTouch: 1,
                focusAt: 1
            }).mount();
        }

    })
    
})