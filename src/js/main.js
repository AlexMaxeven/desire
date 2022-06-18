import $ from "jquery";
import "slick-carousel";

$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.article-slider__box').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft "><img src="img/blog-arrowleft-bg.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright "><img src="img/blog-arrowright-bg.svg" alt="arrow"></button>',
        fade: true,
        autoplay: true
    });
})