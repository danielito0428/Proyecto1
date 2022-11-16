// Definicion de variables
let correo, nombre, consulta, formatoCorreo, valid;

// Tomando los valores del DOM
correo = document.getElementById('correo');
nombre = document.getElementById('nombre');
consulta = document.getElementById('consulta');
valid = false;

formatoCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Ejecutar la variable on submit
const validarFormulario = formulario_contacto_inicio.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {}
    if (consulta.value !== '') {
        consulta.classList.remove('input-error');
    } else {
        consulta.classList.add('input-error');
        //swal('', 'Ingrese su consulta', 'warning');
    }
    if (nombre.value !== '') {
        nombre.classList.remove('input-error');
    } else {
        nombre.classList.add('input-error');
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
});