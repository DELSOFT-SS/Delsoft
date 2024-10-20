// Función para mostrar el formulario de contacto al hacer clic en el botón "Solicitar Información"
document.getElementById("btnSolicitarInfo").addEventListener("click", function () {
    document.getElementById("contacto").style.display = "block";
    document.getElementById("btnSolicitarInfo").style.display = "none";
    document.getElementById("btnCerrarContacto").style.display = "block";
  });
  
  // Función para ocultar el formulario de contacto al hacer clic en el botón "Cerrar"
  document.getElementById("btnCerrarContacto").addEventListener("click", function () {
    document.getElementById("contacto").style.display = "none";
    document.getElementById("btnSolicitarInfo").style.display = "block";
    document.getElementById("btnCerrarContacto").style.display = "none";
  });
  