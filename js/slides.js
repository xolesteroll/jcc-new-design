$(document).ready(function ($) {
    // $('.team-inner').slick();
    // $(window).resize(function () {
    //     if ($(window).width() < 450) {
    //         $('.team-inner').slick({
    //         });
    //     } else {
    //         console.log('more');
    //         $('.team-inner').unslick();
    //         $('.team-inner').removeClass('slick-initialized').removeClass('slick-slider');
    //     }
    // });

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            // infinite: false,
            dots: $dots,
            arrows: $arrows,
            nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    }

    mobileOnlySlider(".main-info__slider", true, true, 767);
    mobileOnlySlider(".steps-slider", true, true, 767);

    // $('.team-slider .team-inner').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     prevArrow: '<button type="button" class="slick-prev" style="display: none">Previous</button>',
    //     nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1025,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 arrows: false,
    //                 dots: true
    //             } 
    //         }
    //     ]
    // })
});
