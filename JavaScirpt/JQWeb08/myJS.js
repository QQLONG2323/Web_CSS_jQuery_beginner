$(function () { 

    $('#BBB').click(function () { 
        $('#CON_BOX').css('color', '#00f').css('font-size', '30px')        
    })

    /*上下兩種CSS的方式都可用，看自己用哪個順手*/

    $('#MMM').click(function () {
        $('#CON_BOX').css({
            'color': '',
            'font-size': '22px',
            'text-align':'center',})
    })

    $('#SSS').click(function () {
        $('#CON_BOX').css({
            'color': 'green',
            'font-size': '14px',
            'text-align': 'center',
        })
    })
























})