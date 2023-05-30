$(function () { 

    /*stop(是否取消連續觸發, 是否馬上結束「前面」的動畫)*/

    $('#RRR').click(function () {
        $("#KIDS").stop(true,false).animate({ left: 1000 }, 600);
    });

    $('#LLL').click(function () {
        $("#KIDS").stop(true, false).animate({ left: 0 }, 5000);
    });









})
