
//Para cambiar el color//
function cambiarColor() {
  document.body.style.backgroundColor = "lightblue"; 
}

document.getElementById("cambiarColor").addEventListener("click", cambiarColor);



//Para validar el formulario//

function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;

  if (nombre === "") {
    alert("Ingresa tu nombre.");
    return false;
  }

  if (apellido === "") {
    alert("Ingresa tu apellido.");
    return false;
  }

  return true;
}