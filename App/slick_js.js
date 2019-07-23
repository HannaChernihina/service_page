$(document).ready(function () {

    $('.single-slide').slick({
        slidesToShow: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
    });

    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true ,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ],

    });


