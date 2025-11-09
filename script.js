document.addEventListener("DOMContentLoaded", function() {
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // 1. Muat Header
    // Path diperbaiki: /header.html
    const loadHeader = fetch("/header.html")
        .then(response => {
            if (!response.ok) {
                console.error("Gagal memuat header.html. Pastikan file ada di folder utama.");
                throw new Error("File header.html tidak ditemukan");
            }
            return response.text();
        })
        .then(data => {
            if (headerPlaceholder) headerPlaceholder.innerHTML = data;
        });

    // 2. Muat Footer
    // Path diperbaiki: /footer.html
    const loadFooter = fetch("/footer.html")
        .then(response => {
            if (!response.ok) {
                console.error("Gagal memuat footer.html. Pastikan file ada di folder utama.");
                throw new Error("File footer.html tidak ditemukan");
            }
            return response.text();
        })
        .then(data => {
            if (footerPlaceholder) footerPlaceholder.innerHTML = data;
        });

    // 3. Setelah Header Selesai Dimuat, Aktifkan Logika Hamburger
    loadHeader.then(() => {
        const hamburgerButton = document.getElementById("hamburger-button");
        const navLinks = document.getElementById("nav-links");

        if (hamburgerButton && navLinks) {
            hamburgerButton.addEventListener("click", () => {
                hamburgerButton.classList.toggle("active");
                navLinks.classList.toggle("active");
            });
        } else {
            console.warn("Tombol hamburger atau menu navigasi tidak ditemukan.");
        }
    }).catch(error => console.error("Error memuat header atau setup hamburger:", error));
    
    loadFooter.catch(error => console.error("Error memuat footer:", error));

});