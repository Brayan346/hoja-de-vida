// Mostrar/ocultar secciones tipo acordeón
document.querySelectorAll(".boton").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const contenido = document.querySelectorAll(".contenido")[index];
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
  });
});

// Crear un formulario dinámicamente y agregarlo al final del panel izquierdo
const formContainer = document.getElementById("formulario");

const formulario = document.createElement("form");

formulario.innerHTML = `
  <h2>Contacto</h2>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  
  <label for="correo">Correo:</label>
  <input type="email" id="correo" name="correo" required>
  
  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
`;

formContainer.appendChild(formulario);
