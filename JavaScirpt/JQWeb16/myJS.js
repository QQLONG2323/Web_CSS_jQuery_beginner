$(function () { 

    $('#M01').click(function (event) { 
        $('html,body').stop().animate({ scrollTop: 0 }, 600)
        event.preventDefault();
    })

    $('#M02').click(function (event) {
        var tt = $('#BBB').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        event.preventDefault();
    })

    $('#M03').click(function (event) {
        var tt = $('#CCC').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        event.preventDefault();
    })

    $('#M04').click(function (event) {
        var tt = $('#DDD').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        event.preventDefault();
    })






































})
