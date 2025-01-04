console.log("main.js actions!")

document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        buttons: ["close"],
        caption: function (instance, item) {
            return $(this).data('caption') || '';
        }
    });
});



