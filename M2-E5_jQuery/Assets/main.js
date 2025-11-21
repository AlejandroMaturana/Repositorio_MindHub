// Constantes
const nameInput = $("sobre-mi");
const emailInput = $("proyectos");
const messageInput = $("contacto");
const mensajeEr = $("mensajeError");
const emailEr = $("emailError");
const nombreEr = $("nombreError");
const submitBtn = $("submitBtn");

// Parte 1
nameImput.on("input", function () {
  const imputValue = $(this).val().trim();
  const valueLen = imputValue.length;

  if (valueLen < 3) {
    showError(nombreEr, "El nombre es obligatorio mi Bro.");
  } else {
    hideError(nombreEr);
  }
  checkErrors()
});

emailInput.on("input", function () {
  const imputValue = $(this).val().trim();
  if (!imputValue.includes("@") || !imputValue.includes(".")) {
    showError(emailEr, "El formato debe llevar al menos @ y . mi Bro.");
  } else {
    hideError(emailEr);
  }
  checkErrors()
}); 

messageInput.on("input", function () {
  const imputValue = $(this).val().trim();
  const valueLen = imputValue.length;

  if (valueLen < 20) {
    showError(emailEr, "El mensaje debe contener al menos 20 caracteres mi Bro.");
  } else {
    hideError(emailEr);
  }
  checkErrors()
});

function checkErrors() {
    const nameValidacion = fieldValidacion(nombreEr, nameInput);
    const emailValidacion = fieldValidacion(emailEr, emailInput);
    const messageValidacion = fieldValidacion(mensajeEr, messageInput);
    console.log(nameValidacion, emailValidacion, messageValidacion);

    if (nameValidacion && emailValidacion && messageValidacion) {
        submitBtn.prop("disabled", false);
    } else {
        submitBtn.prop("disabled", true);
    }
}

function fieldValidacion(errorElement, inputElement) {
    return errorElement.hasClass("d-none") && inputElement.val().trim() !== "";
}
function showError(element, message) {
    element.text(message);
    element.removeClass("d-none");
}