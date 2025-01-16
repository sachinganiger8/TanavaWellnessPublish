$(document).ready(function () {
    debugger;
    let navElmnts = ["#body", "#products", "#about-us", "#contact-us"];
    let hasNavEl = false;
    for (let index = 0; index < navElmnts.length; index++) {
        const navEl = navElmnts[index];
        if (window.location.href.includes(navEl)) {
            hasNavEl = true;
            $(".navbar-nav .nav-link").removeClass("active");
            $(".nav-link[href='" + navEl + "']").addClass("active");
            break;
        }
    }
    $(".navbar-nav .nav-link").click(function (e) {
        let scrollToElId = $(this).attr("href");

        if ($(scrollToElId).length > 0) {
            e.preventDefault();
            $(".navbar-nav .nav-link").removeClass("active");
            $(this).addClass("active");
            $('html, body').animate({
                scrollTop: $(scrollToElId).offset().top
            }, 500);
        }
    });
});