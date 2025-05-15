// script.js

// Función para activar/desactivar secciones tipo acordeón
const toggleButtons = document.querySelectorAll(".boton");

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("visible");
  });
});
