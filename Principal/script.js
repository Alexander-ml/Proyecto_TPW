/* ==== MENU HAMBURGUESA ==== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("open");
});

/* Cerrar menú al hacer clic en un enlace */
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("open");

        const spans = navToggle.querySelectorAll("span");
        spans[0].classList.remove("rotate1");
        spans[1].classList.remove("hide");
        spans[2].classList.remove("rotate2");
    });
});

/* ==== SCROLL ==== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ==== HERO SLIDER ==== */

// Lista de imágenes
const heroImages = [
    "https://i.pinimg.com/1200x/d9/75/68/d97568d55332bd8e62821b0236fdcf3a.jpg",
    "https://i.pinimg.com/736x/75/de/07/75de0749aa17d31912274fc15ba4545e.jpg",
    "https://i.pinimg.com/736x/a2/1e/b3/a21eb31c3276ef1e3fad303d407d3549.jpg"
];

let currentHero = 0;
const heroSection = document.querySelector(".hero");

// Función que cambia la imagen
function updateHero() {
    heroSection.style.background = `url('${heroImages[currentHero]}') center/cover no-repeat`;
}

// Cambiar imagen automáticamente cada 30s
setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;
    updateHero();
}, 30000);

// Botones manuales
document.getElementById("nextHero").addEventListener("click", () => {
    currentHero = (currentHero + 1) % heroImages.length;
    updateHero();
});

document.getElementById("prevHero").addEventListener("click", () => {
    currentHero = (currentHero - 1 + heroImages.length) % heroImages.length;
    updateHero();
});

// Inicializar imagen
updateHero();
