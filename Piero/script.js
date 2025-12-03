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

/* ==== AGREGAR COMENTARIOS DINÁMICAMENTE ==== */
const commentForm = document.querySelector(".feedback-form");
const commentsList = document.getElementById("commentsList");

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    if (!rating || !comment.trim()) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Crear tarjeta de comentario
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");

    commentCard.innerHTML = `
        <p class="comment-rating">Calificación: <strong>${rating}</strong></p>
        <p>${comment}</p>
    `;

    // Eliminar mensaje "no hay comentarios"
    const noCommentsMsg = commentsList.querySelector(".no-comments");
    if (noCommentsMsg) noCommentsMsg.remove();

    // Agregar comentario a la lista
    commentsList.appendChild(commentCard);

    // Limpiar formulario
    commentForm.reset();
});
