/* ==== MENU HAMBURGUESA ==== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* Cerrar menú al hacer clic en un enlace */
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

/* ==== SCROLL SUAVE ==== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Evitar bloquear enlaces con solo "#"
        if (href.length > 1) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

/* ==== EFECTO NAVBAR AL HACER SCROLL ==== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});
