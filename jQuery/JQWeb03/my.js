$(function () { 
    
    /*顯示/隱藏*/
    /*
    $('#AAA').click(function () { 
        $('img').show(500);
    })

    $('#BBB').click(function () {
        $('img').hide(500);
    })

    $('#CCC').click(function () {
        $('img').toggle(500);
    })
    */

    /*向下滑動顯示/向上滑動隱藏*/
    /*
    $('#AAA').click(function () {
        $('img').slideDown();
    })

    $('#BBB').click(function () {
        $('img').slideUp();
    })

    $('#CCC').click(function () {
        $('img').slideToggle(1500);
    })
    */
    
    /*淡入/淡出*/
    /*
    $('#AAA').click(function () {
        $('img').fadeIn();
    })

    $('#BBB').click(function () {
        $('img').fadeOut();
    })

    $('#CCC').click(function () {
        $('img').fadeToggle();
    })
    */
    
    /*直接調整透明度*/
    $('#AAA').click(function () {
        $('img').fadeTo(500, 1);
    })

    $('#BBB').click(function () {
        $('img').fadeTo(500, 0);
    })

    $('#CCC').click(function () {
        $('img').fadeTo(500, 0.5);
    })

})