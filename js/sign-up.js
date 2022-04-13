$(document).ready(function () {
    $(".sign-up__providers-btn").on("click", function () {
        $(".sign-up__providers-btn.chosen").removeClass('chosen')
        $(this).addClass("chosen")
    })

    $("tr.view-row").on("click", function () {
        $(this).toggleClass("open").next(".fold-row").toggleClass("open");
    });

    $(".mobile-table__btn").on("click", function () {
        const parent = $(this).closest(".mobile-table__box")
        if (parent.hasClass("active")) {
            parent.removeClass("active")
            parent.next(".mobile-table__fold").removeClass("open")
            $(this).text("VIEW MORE")
        } else {
            parent.addClass("active")
            $(this).text("VIEW LESS")
            parent.next(".mobile-table__fold").addClass("open")
        }
    })
})