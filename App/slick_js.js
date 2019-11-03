
$( document ).ready(function() {

    $('.single-slide').slick({
        slidesToShow: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="prevTop"></div>',
        nextArrow: '<div class="nextTop"></div>',
        fade: true,
    });

    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true ,
        arrows: true,
        prevArrow: '<div class="prevServise"></div>',
        nextArrow: '<div class="nextService"></div>',

        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true ,
                    infinite: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true ,
                    infinite: true,
                }
            }
        ],

    });

    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1200,
            easing: "swing"
        });
        return false;
    });



$('.titleSlider').hide(0, function(){
    setTimeout(function(){
        $('.titleSlider').slideDown(800);
    }, 500);
});


$('.nextTop').click(function(){
        $('.titleSlider').hide(100, function() {
            $('.titleSlider').slideDown(800) ;
        });
    });
    $('.prevTop').click(function(){
        $('.titleSlider').hide(100, function() {
            $('.titleSlider').slideDown(800) ;
        });
    });

// menu
    $(function() {
        $(document).on("click", ".mobile_menu_container .parent", function(e) {
            e.preventDefault();
            $(this).siblings("ul").addClass("loaded");
        });
        $(document).on("click", ".mobile_menu_container .back", function(e) {
            e.preventDefault();
            $(this).parent().parent().removeClass("loaded");
        });
        $(document).on("click", ".mobile_menu", function(e) {
            e.preventDefault();
            $(".mobile_menu_container").addClass("loaded");
            $(".mobile_menu_overlay").fadeIn();
        });
        $(document).on("click", ".mobile_menu_overlay", function(e) {
            $(".mobile_menu_container").removeClass("loaded");
            $(this).fadeOut();
        });
    });


    });




