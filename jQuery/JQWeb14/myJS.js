$(function () { 

    $('.main').hover(function () {

        $(this).stop(true, false).animate({ top: -280 }, 600, 'easeOutBounce');



    }, function () {
        
        $(this).stop(true, false).animate({ top: 0 }, 600, 'easeOutBounce');




      })




})