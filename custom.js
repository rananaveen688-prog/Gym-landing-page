$(document).ready(function () {
   $(window).on('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.main_header').addClass('sticky');
            }
    else {
        $('.main_header').removeClass('sticky');
        }
    });

    $('.hamburger_btn').on('click',function(){
        $('.navbar').slideToggle(400);
        });
    $('.navbar_menu li').on('click',function(){
        $('.navbar').slideUp(300);
    });
});