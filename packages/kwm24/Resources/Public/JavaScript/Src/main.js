console.log("main.js actions!")

//https://fancyapps.com/fancybox/plugins/toolbar/#download-button
document.addEventListener('DOMContentLoaded', function () {
    // Fancybox wird gebunden, sobald das DOM vollständig geladen ist
    Fancybox.bind('[data-fancybox="gallery"]', {

        // Toolbar-Konfiguration (zeigt die Toolbar an)
        Toolbar: {
            display: {
                left: ["infobar"],  // Links: Zeigt Infobar (Bildnummer)
                middle: [],         // Keine Buttons in der Mitte
                right: ["download", "close"], // Rechts: Buttons für Download und Schließen
            },
        },

        // Konfiguration für Thumbnails (zeigt Miniaturansichten)
        thumbs: {
            autoStart: true,  // Thumbnails starten automatisch
        },

        // Download-Button-Konfiguration
        download: function (instance, item) {
            // Der Download-Button lädt das Bild basierend auf dem "data-src"-Attribut
            return item.$trigger.getAttribute('data-src');
        },
    });
});



//Download für CV
document.getElementsByClassName('btn btn-info')[0].addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/fileadmin/Website/Wabro-Lena-CV.pdf'; // Pfad zur PDF-Datei
    link.download = 'CV_Lena Wabro'; // Name der heruntergeladenen Datei
    link.click();
});














