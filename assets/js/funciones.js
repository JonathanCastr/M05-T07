document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('Nombre').value;
    if(usuario.length == 0) {
      alert('El campo nombre está vacío');
      return;
    }
    var apellido = document.getElementById('Apellido').value;
    if (apellido.length == 0) {
      alert('El campo apellido está vacío');
      return;
    }
    var email = document.getElementById('exampleInputEmail1').value;
    if (email.length == 0) {
      alert('El campo correo está vacío');
      return;
    }
    var msj = document.getElementById('mensaje').value;
    if (msj.length == 0) {
      alert('El campo de mensaje está vacío');
      return;
    }
    this.submit();
  }