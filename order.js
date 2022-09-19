// For fixzed scroll
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $(".fixed_menu_box").css("background", "green");
    } else {
        $(".fixed_menu_box").css("background", "transparent");
    }
});

// For mavigation
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// wow
$(function(){
    new WOW().init();
});


jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});

// Modal Window
$(".abt_modal_button").click(function() {
    $('.abt_modal').prependTo('body').show();
    $(".abt_modal").css("display", "block");
    $("body").css("overflow", "hidden");
    $(".abt_modal").removeClass("vhidden");
});

$('body').on('click', '.abt_modal_cover, .aws_close', function(){
    setTimeout(function() {$('.abt_modal').appendTo('.abt_modal_section').hide();}, 130);
    $("body").css("overflow", "auto");
    $(".abt_modal").addClass("vhidden");
})

// Phone mask
$(document).ready(function() {
    /*добавляем маску к input с ID = phone*/
    $("#car_order_phone").mask("+380 (99) 999-99-99");
});

// Select car
$('.abt_modal_button').click(function(){
    $('#car_weight').val($(this).data('val')).trigger('change');
})