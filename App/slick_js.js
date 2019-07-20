$(document).ready(function () {

    $('.single-slide').slick({
        slidesToShow: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
    });


    function windowSize() {
        if (window.matchMedia("(max-width: 520px)").matches) {
            $('.service_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true ,
                autoplaySpeed: 3000,
            });

        } else if (window.matchMedia("(max-width: 768px)").matches) {
            $('.service_slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                // autoplay: true ,
                autoplaySpeed: 3000,
            });

        } else {
            $('.service_slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: true,
                // autoplay: true ,
                autoplaySpeed: 3000,
            });
        }

    }

    $(window).load(windowSize); // при загрузке
    $(window).resize(windowSize); // при изменении размеров


});


