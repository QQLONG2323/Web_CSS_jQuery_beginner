$(function () {
    
    $(window).scroll(function () { 

        var HH = $(window).scrollTop();

        if (HH < 100) {
            $('#top-bar').stop().animate({ top: -65 }, 600)
        }

        else { $('#top-bar').stop().animate({top: 0}, 600)}




    })































})