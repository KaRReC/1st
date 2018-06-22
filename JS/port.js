$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('blue');
    } else {
        $('nav').removeClass('blue');

    }
});
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('.menu-icon').addClass('blue');
    } else {
        $('.menu-icon').removeClass('blue');

    }
});
$(function() {
    var $el = $('.parallax');
    $(window).on('scroll', function() {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position': '50% ' + (-.8 * scroll) + 'px'
        });
    });
});
$(function() {
    var $el = $('.parallax2');
    $(window).on('scroll', function() {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position': '50% ' + (-.05 * scroll) + 'px'
        });
    });
});
$(function() {
    var $el = $('.parallax3');
    $(window).on('scroll', function() {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position': '50% ' + (-.02 * scroll) + 'px'
        });
    });
});
