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

// ===================================================
// Manika
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
    // Pastikan DOM sudah dimuat sebelum menjalankan script

    // *** Kode Slideshow Mulai Di Sini ***

    const slideshowWrapper = document.querySelector('.profile-slideshow');

    // Cek apakah elemen slideshow ada di halaman ini (penting jika script.js dipakai di halaman lain)
    if (slideshowWrapper) {
        // Ambil semua elemen gambar dengan kelas .profile-pic di dalam wrapper
        const slides = slideshowWrapper.querySelectorAll('.profile-pic');
        let currentSlide = 0; // Mulai dari gambar pertama

        // Fungsi untuk menampilkan slide berikutnya
        function nextSlide() {
            if (slides.length < 2) return; // Hentikan jika kurang dari 2 gambar

            // 1. Sembunyikan slide saat ini
            slides[currentSlide].classList.remove('active-pic');
            
            // 2. Hitung indeks slide berikutnya
            currentSlide = (currentSlide + 1) % slides.length; // Mengulang ke 0 jika sudah mencapai akhir
            
            // 3. Tampilkan slide berikutnya
            slides[currentSlide].classList.add('active-pic');
        }

        // Atur interval waktu untuk mengganti slide (misalnya, setiap 4 detik)
        // 4000 milidetik = 4 detik
        setInterval(nextSlide, 2000); 
    }

    // *** Kode Slideshow Berakhir Di Sini ***

    // *Jika Anda memiliki kode JS lain, letakkan di atas atau di bawah blok ini *

});