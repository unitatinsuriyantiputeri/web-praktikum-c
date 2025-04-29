// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Explore Menu Button
const exploreBtn = document.getElementById('explore-btn');
const menuGallery = document.getElementById('menu-gallery');

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        menuGallery.innerHTML = `
            <div class="menu-images">
                <img src="menu1.jpg" alt="Menu 1" />
                <img src="menu2.jpg" alt="Menu 2" />
            </div>
        `;
    });
}
