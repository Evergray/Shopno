$(function () {

    setInterval(changeSlide, 10000);
    count = 1;

    function changeSlide() {
        count++;
        $('.slide').removeClass('slide-active').eq(count - 1).addClass('slide-active');
        $('#slider-img').css('background-image', "url('./images/image_" + count + ".png')");
        if (count === 4) {
            count = 0;
        }
    }

    $('.slide').click(function (e) {
        e.preventDefault();
        count = $(this).parent().index() + 1;
        $('.slide').removeClass('slide-active').eq(count - 1).addClass('slide-active');
        $('#slider-img').css('background-image', "url('./images/image_" + count + ".png')");
        if (count === 4) {
            count = 0;
        }
    });

    $("#team-list a").click(function (e) {
        e.preventDefault();
        $(".team-info").removeClass('team-active');
        $(this).parent().find(".team-info").addClass('team-active');
    });

    $('.team-slide').click(function (e) {
        e.preventDefault();
        $('.team-slide').removeClass('team-slide-active');
        $(this).addClass('team-slide-active');
        $('#team-slider-img').css('background-image', "url('./images/team_" + ($(this).parent().index() + 1) + ".png')");
    });

    $('#pull').on('click', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('menu-open');
        $('#pull').toggleClass('pull_exit');
    });
});