homeBackgroundImageChange = () => {
    var images = [".backgroundOne-logo", ".backgroundTwo-logo", ".backgroundThree-logo"];
    var i = 0;
    setInterval(function () {
        $(images[i]).fadeOut(1000);
        ++i;
        if (i == images.length) {
            i = 0;
        }
        $(images[i]).fadeIn(1000);
    }, 3000);
 }

window.onload = function () {
    homeBackgroundImageChange();
}