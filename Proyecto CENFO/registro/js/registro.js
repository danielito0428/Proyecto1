// Definicion de variables
let correo, nombre, contrasena, confirmarContrasena, fecha, estatura, peso, genero, terminos, formatoCorreo, valid;

// Tomando los valores del DOM
correo = document.getElementById('correo');
nombre = document.getElementById('nombre');
contrasena = document.getElementById('contrasena');
confirmarContrasena = document.getElementById('confirmar-contrasena');
fecha = document.getElementById('fecha');
estatura = document.getElementById('estatura');
peso = document.getElementById('peso');
genero = document.getElementById('genero');
terminos = document.getElementById('terminos');
valid = false;

formatoCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Ejecutar la variable on submit
const validarFormulario = formulario_registro.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {}
    if (valid === true) {
        //swal('Registrado Exitosamente', 'Gracias por registrarte en Celer!!', 'success');
        console.log(data);
        open('../perfil/', '_self');
    }
    if (terminos.checked) {
        valid = true;
        terminos.classList.remove('input-error');
    } else {
        //swal('', 'Confirme que ha leido y acepta nuestros Terminos y Condiciones', 'warning');
        terminos.classList.add('input-error');
    }
    if (genero.value !== '') {
        data.genero = genero.value;
        valid = true;
        genero.classList.remove('input-error');
    } else {
        //swal('', 'Ingrese su genero', 'warning');
        genero.classList.add('input-error');
    }
    if (peso.value !== '') {
        if (!isNaN(peso.value)) {
            data.pesoIdeal = peso.value;
            valid = true;
            peso.classList.remove('input-error');
        } else {
            peso.classList.add('input-error');
            //swal('', 'Ingrese un valor numérico', 'warning');
        }
    } else {
        peso.classList.add('input-error');
        //swal('', 'Ingrese su peso en kilogramos', 'warning');
    }
    if (estatura.value !== '') {
        if (!isNaN(estatura.value)) {
            data.estatura = estatura.value;
            valid = true;
            estatura.classList.remove('input-error');
        } else {
            estatura.classList.add('input-error');
            //swal('', 'Ingrese un valor numérico', 'warning');
        }
    } else {
        estatura.classList.add('input-error');
        //swal('', 'Ingrese su estatura en centimetros', 'warning');
    }
    if (fecha.value !== '') {
        let hoy = new Date();
        let fechaNacimiento = new Date(fecha.value);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        data.fechaNacimiento = fechaNacimiento;
        data.edad = edad;
        valid = true;
        fecha.classList.remove('input-error');
    } else {
        fecha.classList.add('input-error');
        //swal('', 'Ingrese su fecha de nacimiento', 'warning');
    }
    if (contrasena.value !== '') {
        if (contrasena.value === confirmarContrasena.value) {
            data.contrasena = contrasena.value;
            valid = true;
            contrasena.classList.remove('input-error');
            confirmarContrasena.classList.remove('input-error');
        } else {
            contrasena.classList.add('input-error');
            confirmarContrasena.classList.add('input-error');
            //swal('', 'Las contraseñas no coinciden, intenta de nuevo', 'warning');
        }
    } else {
        contrasena.classList.add('input-error');
        confirmarContrasena.classList.add('input-error');
        //swal('', 'Ingrese una contraseña', 'warning');
    }
    if (nombre.value !== '') {
        data.nombre = nombre.value;
        valid = true;
        nombre.classList.remove('input-error');
    } else {
        //swal('', 'Ingrese su nombre', 'warning');
        nombre.classList.add('input-error');
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