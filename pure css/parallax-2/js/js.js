jQuery(document).ready(function ($) {

    //инициализация Stellar.js
    $(window).stellar();

    //Кэш некоторых переменных
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    //Установка плагина waypoints
    slide.waypoint(function (event, direction) {

        //кэш переменной параметра data-slide 
        dataslide = $(this).attr('data-slide');

        //Если пользователи переходят вверх по сайту, то изменять внешний вид навигации
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else Если пользователи переходят вниз по сайту, то изменять внешний вид навигации and
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //Отменяем waypoints для первого слайда
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Анимация перехода между слайдами
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    //Когда пользователь нажимает на ссылку в навигации, получаем значение параметра data-slide слайда и передаем его функции goToByScroll
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //Когда пользователь нажимает на кнопку перехода, получаем значение параметра data-slide кнопки и передаем его функции goToByScroll
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

});