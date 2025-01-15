$(document).ready(function () {
    $(".navbar-nav .nav-link").click(function (e) {
        e.preventDefault();
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
        let scrollToElId = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(scrollToElId).offset().top
        }, 500);
    });
});