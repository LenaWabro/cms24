console.log("main.js actions!")

//Fancybox einbinden
document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        buttons: ["close"],
        caption: function (instance, item) {
            return $(this).data('caption') || '';
        }
    });
});


//Download für CV
document.getElementsByClassName('btn btn-info')[0].addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/fileadmin/Website/Wabro-Lena-CV.pdf'; // Pfad zur PDF-Datei
    link.download = 'CV_Lena Wabro'; // Name der heruntergeladenen Datei
    link.click();
});










