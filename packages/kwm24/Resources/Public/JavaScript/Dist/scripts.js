
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

