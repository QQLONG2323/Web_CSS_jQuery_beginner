$(function () { 

    /*stop(是否取消連續觸發, 是否馬上結束「前面」的動畫)*/
    /*在html加入<script src="jquery-ui-1.10.4.custom.min.js"></script>，animate的參數就能多增加一個，多增加的那個可以調整animate的速度曲線運動*/

    $('#RRR').click(function () {
        $("#KIDS").stop(true, false).animate({ left: 1000 }, 800, 'easeOutElastic');
    });

    $('#LLL').click(function () {
        $("#KIDS").stop(true, false).animate({ left: 0 }, 800, 'easeOutBounce');
    });









})
