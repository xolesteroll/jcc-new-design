$(document).ready(function () {


    $(".header-nav__toggle-btn").click(function () {
        $(".mobile-nav").removeClass("hidden");
        $(".mobile-nav").addClass("active");
    });

    $(".mobile-nav__close-btn").click(function () {
        $(".mobile-nav").removeClass("active");
        $(".mobile-nav").addClass("hidden");
    });

});