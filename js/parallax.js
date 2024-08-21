document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.banner-image');
            new simpleParallax(images, {
                scale: 1.5
            });
});