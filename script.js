const navbar = document.getElementById("top-nav");

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();