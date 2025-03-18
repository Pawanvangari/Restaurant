$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    function newDate() {
        return new Date().getFullYear();
    }

    // Corrected line: Set the innerHTML directly within the ready function
    $("#autodate").html(newDate());
});