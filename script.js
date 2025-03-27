// Animasi fade-in saat web dibuka
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
    
    // Tampilkan modal pop-up
    const modal = document.getElementById("welcomeModal");
    const closeModal = document.getElementById("closeModal");

    modal.style.display = "flex"; // Tampilkan modal saat pertama kali masuk

    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Tutup modal saat tombol "Mulai" ditekan
    });
});

// Event button interaktif
document.getElementById("klikSaya").addEventListener("click", function() {
    document.getElementById("output").innerText = "Tombol sudah diklik!";
});
