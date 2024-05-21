// Funkcja do ustawiania szerokości elementów galerii na podstawie szerokości obrazka
function setGalleryItemSize() {
    document.querySelectorAll('.gallery-item img').forEach(img => {
        const width = img.clientWidth;
        img.parentElement.style.flexBasis = `${width}px`;
        img.parentElement.style.maxWidth = `${width}px`;
    });
}

// Funkcja do powrotu do strony głównej
function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");
    const closePopup = document.getElementById("closePopup");



        // Dodanie event listenera do otwierania popupu po kliknięciu
        newImg.addEventListener("click", () => {
            popup.style.display = "block";
            popupImg.src = src;
        });

        // Po załadowaniu obrazka, ustaw jego rozmiar
        newImg.onload = () => {
            setGalleryItemSize();
        };
    };

    // Przykład użycia funkcji
    addNewImage("image5.jpg", "Image 5");
    addNewImage("image6.jpg", "Image 6");

    // Zamknięcie popupu
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Zamknięcie popupu po kliknięciu poza obrazkiem
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Dodanie event listenerów do istniejących obrazków
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "block";
            popupImg.src = img.src;
        });
    });

    // Po zmianie rozmiaru okna, ponownie ustaw rozmiary elementów galerii
    window.addEventListener("resize", () => {
        setGalleryItemSize();
    });

    // Ustaw szerokość elementów galerii na podstawie szerokości obrazka po załadowaniu strony
    setGalleryItemSize();
});
