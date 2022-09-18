$(function () {
    $("#Gallery-3D").click(function () {
        $('.First').addClass('Active').removeClass('First');
        $('.Second').addClass('First').removeClass('Second');
        $('.Third').addClass('Second').removeClass('Third');
        setTimeout(function () {
            $('.Active').css('transition','0ms').removeClass('Active').addClass('inactive')

        },250)
        setTimeout(function () {
            $('.inactive').attr('style','').addClass('Third').removeClass('inactive');

        },300)

    })})
