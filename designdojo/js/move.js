function fadeAnime() {

    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    });

    $('.afadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('afadeUp');
        } else {
            $(this).removeClass('afadeUp');
        }
    });

    $('.ifadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('ifadeUp');
        } else {
            $(this).removeClass('ifadeUp');
        }
    });

    $('.fadeDownTrigger').each(function () {
        var elemPos = $(this).offset().top - 50; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeDown');
        } else {
            $(this).removeClass('fadeDown');
        }
    });
}

$(window).scroll(function () {
    fadeAnime();
});


$(window).on('load', function () {
    fadeAnime();
});