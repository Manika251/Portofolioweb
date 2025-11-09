document.addEventListener("DOMContentLoaded", function() {
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // 1. Muat Header
    const loadHeader = fetch("header.html")
        .then(response => {
            if (!response.ok) {
                console.error("Gagal memuat header.html. Pastikan file ada di folder yang sama.");
                throw new Error("File header.html tidak ditemukan");
            }
            return response.text();
        })
        .then(data => {
            if (headerPlaceholder) headerPlaceholder.innerHTML = data;
        });

    // 2. Muat Footer
    const loadFooter = fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                console.error("Gagal memuat footer.html. Pastikan file ada di folder yang sama.");
                throw new Error("File footer.html tidak ditemukan");
            }
            return response.text();
        })
        .then(data => {
            if (footerPlaceholder) footerPlaceholder.innerHTML = data;
        });

    // 3. Setelah Header Selesai Dimuat, Aktifkan Logika Hamburger
    // Kita harus menunggu header.html selesai dimuat SEBELUM kita bisa
    // mencari tombol #hamburger-button.
    loadHeader.then(() => {
        const hamburgerButton = document.getElementById("hamburger-button");
        const navLinks = document.getElementById("nav-links");

        if (hamburgerButton && navLinks) {
            hamburgerButton.addEventListener("click", () => {
                // Toggle kelas 'active' pada tombol dan menu
                hamburgerButton.classList.toggle("active");
                navLinks.classList.toggle("active");
            });
        } else {
            // Ini akan muncul jika ada kesalahan ketik di ID di header.html
            console.warn("Tombol hamburger atau menu navigasi tidak ditemukan.");
        }
    }).catch(error => console.error("Error memuat header atau setup hamburger:", error));
    
    // Tangani error jika footer tidak ditemukan
    loadFooter.catch(error => console.error("Error memuat footer:", error));

});