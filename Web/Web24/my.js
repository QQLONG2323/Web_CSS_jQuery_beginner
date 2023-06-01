$(function () { 

    if ($(window).width() <= 768) {
        $('.header ul').hide();
    }

    $('.header h3').click(function () { 
        $('.header ul').show()
    })

    $('.header .close').click(function () {
        $('.header ul').hide();
    })

    $(window).resize(function () { 
        var N = $(window).width();
        if (N >= 768) {
            $('.header ul').show();
        }
        else { $('.header ul').hide()}
     
    })
})