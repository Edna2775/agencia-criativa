function mostrarFormulario() {
  const form = document.getElementById("formulario");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
}
