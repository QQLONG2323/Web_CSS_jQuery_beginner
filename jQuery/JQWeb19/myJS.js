$(function () {
    
    $('.AA').click(function () {

        //$(this).siblings().css({ 'background-color': 'yellow' });
        //$(this).siblings().first().css({ 'background-color': 'yellow' });
        //$(this).siblings().last().css({ 'background-color': 'yellow' });
        //$(this).siblings().eq(1).css({ 'background-color': 'yellow' });

        //$(this).next().css({ 'background-color': 'yellow' });
        //$(this).nextAll().css({ 'background-color': 'yellow' });
        //$(this).nextUntil('.ll').css({ 'background-color': 'yellow' });

        //$(this).parent().css({ 'background-color': 'yellow' });
        //$(this).parents().css({ 'background-color': 'yellow' });
        //$(this).parentsUntil('body').css({ 'background-color': 'yellow' });

        //$(this).parent().siblings().css({ 'background-color': 'yellow' });
        //$(this).parent().siblings().first().css({ 'background-color': 'yellow' });
        //$(this).parent().siblings().last().css({ 'background-color': 'yellow' });
        //$(this).parent().siblings().eq(1).css({ 'background-color': 'yellow' });

        //$(this).parent().siblings().eq(0).children().css({ 'background-color': 'yellow' });
        //$(this).parent().siblings().eq(0).find('li').css({ 'background-color': 'yellow' });

        //$(this).nextAll().not('p').add('body').css({ 'background-color': 'yellow' });
        //$(this).nextAll().slice(5).css({ 'background-color': 'yellow' });
        //$(this).nextAll().slice(5, 7).css({ 'background-color': 'yellow' });

        $(this).siblings().filter(':lt(5)').css({ 'background-color': 'yellow' });











    });



























})