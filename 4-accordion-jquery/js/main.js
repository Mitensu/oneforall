$(document).ready(function () {
    $(".accordion-item").click(function () {
        if ($(this).hasClass("clicked")) {
            $(this).removeClass("clicked")
            $(this).find(".accordion-content").slideUp()
        } else {
            $(this).addClass("clicked")
            $(this).find(".accordion-content").slideDown()
        }
    });
})