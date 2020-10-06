var screenWidth;
var frames = 75;
var images = [];

function preloadImages() {
    for (i = 0; i < frames; i++) {
        images[i] = new Image();
        images[i].src = "/BB_Golden_Season/images/ural_000" + i + ".png";
    }
}

function onMouseMove(e) {
    var x = e.pageX;
    var theimg = images[parseInt(x / screenWidth * frames)].src;
    $('.image').css("background-image", "url('" + theimg + "')");
}

function onResize() {
    screenWidth = $(document).width();
}


$(document).ready(preloadImages);
$(window).on('mousemove', onMouseMove);
$(window).resize(onResize);
onResize();