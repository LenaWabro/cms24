/*!
 * kwm24 v1.0.0 (https://fh-ooe.at/campus-hagenberg?gad_source=1&amp;gclid=Cj0KCQiAire5BhCNARIsAM53K1hjaypTgeCZEpva1P2od3nmaiBO0-Z7J28UW2fgYu8Im13wbofom4gaAqyrEALw_wcB)
 * Copyright 2017-2024 Anna Scheuchenpflug
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");
console.log("JS ist geladen");

const swiper = new Swiper('.swiper', {
    // Autoplay-Option deaktivieren, da manuelle Navigation gewünscht ist
    autoplay: false,

    // Anzeigen von 3 Slides gleichzeitig
    slidesPerView: 3,
    spaceBetween: 10, // Abstand zwischen den Slides


    // Optional: Übergangseffekt ändern (z. B. "fade" oder "slide" für sanfte Bewegung)
    effect: 'slide',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Optional: Pagination entfernen, wenn sie nicht benötigt wird
    pagination: false,

    // Scrollbar optional lassen
    scrollbar: false,

    // Fortschritt um nur 1 Bild
    slidesPerGroup: 1,
});

