$(function () {
    
    $('#MENU li').hover(function () {
        /*$(this).stop(true, false).animate({ top: 0 }, 600);
        $(this).siblings().stop(true, false).animate({ top: 60 }, 600);*/

        $(this).stop(true, false).animate({ top: 0 }, 600);
        $(this).prev().stop(true, false).animate({ top: 60 }, 600);
        $(this).next().stop(true, false).animate({ top: 60 }, 600);
        




    }, function () {
        $('#MENU li').stop(true, false).animate({ top: 100 }, 600);












    });

































})