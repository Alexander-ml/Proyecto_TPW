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

/* ==== SCROLL SUAVE ==== */
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

/* ==== ANIMACIÓN AL HACER SCROLL (Fade-Up) ==== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

/* ==== EFECTO PEQUEÑO A LAS CARDS AL HACER CLICK ==== */
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousedown", () => {
        card.style.transform = "scale(0.97)";
    });
    card.addEventListener("mouseup", () => {
        card.style.transform = "";
    });
});

/* ==== EFECTO NAVBAR AL HACER SCROLL ==== */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});
