$(document).ready(function () {
    $(".sign-up__providers-btn").on("click", function () {
        $(".sign-up__providers-btn.chosen").removeClass('chosen')
        $(this).addClass("chosen")
    })
})