$(document).ready(function() {
    fullScreenContainer();
    setTimeout(function() {
        fullScreenContainer();
    }, 100);



});

function fullScreenContainer() {
    var screenWidth = $(window).width() + "px";
    if ($(window).height() > 500) {
        var screenHeight = $(window).height() + "px";
    } else {
        var screenHeight = "500px";
    }

    $("#home").css({
        width: screenWidth,
        height: screenHeight
    });
}
