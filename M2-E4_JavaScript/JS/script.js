// Archivo_E4M2.js - Manuel González Lozano

// Creación de variables para los elementos del formulario

const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

// Magia para mostrar mensajes al usuario
const msj = document.createElement("p");
msj.id = "estado-form";
form.appendChild(msj);

form.addEventListener("submit", function (RellenoF) {
    RellenoF.preventDefault();

    if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
        msj.textContent = "Completa todos los campos antes de enviar.";
    } else {
        msj.textContent = " Gracias por ese mensaje. Estaremos pronto en contacto.";
        msj.style.color = "black";

        form.reset();// Limpiar el formulario
    }
});