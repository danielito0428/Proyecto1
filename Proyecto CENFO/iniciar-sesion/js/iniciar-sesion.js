// Definicion de variables
let correo, nombre, contrasena, formatoCorreo, valid;

// Tomando los valores del DOM
correo = document.getElementById('correo');
contrasena = document.getElementById('contrasena');
valid = false;

formatoCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Ejecutar la variable on submit
const validarFormulario = formulario_inicio_sesion.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {}
    if (contrasena.value !== '') {
        valid = true
        contrasena.classList.remove('input-error');
    } else {
        contrasena.classList.add('input-error');
        //swal('', 'Ingrese su contraseña', 'warning');
    }
    if (correo.value !== '') {
        if (correo.value.match(formatoCorreo)) {
            data.correo = correo.value;
            valid = true;
            correo.classList.remove('input-error');
        } else {
            //swal('', 'Ingrese un correo válido', 'warning');
            correo.classList.add('input-error');
        }
    } else {
        //swal('', 'Ingrese un correo válido', 'warning');
        correo.classList.add('input-error');
    }
    if (valid === true) {
        open('../perfil/', '_self');
    }
});