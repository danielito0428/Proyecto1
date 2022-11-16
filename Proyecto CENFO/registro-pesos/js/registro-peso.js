const nuevo_peso = document.getElementById('nuevo-peso');
const peso_anterior = document.getElementById('peso-anterior');
const peso_actual = document.getElementById('peso-actual');
const peso_ideal = document.getElementById('peso-ideal');
const agregar = document.getElementById('agregar');


const validar = formulario_registro_peso.addEventListener('submit', (event) => {
    event.preventDefault();
    let error = false;
    if (nuevo_peso.value == '') {
        error = true;
        nuevo_peso.classList.add('input-error');
        console.log('Invalido')
    } else {
        nuevo_peso.classList.remove('input-error');
    }

    if (peso_anterior.value == '') {
        error = true;
        peso_anterior.classList.add('input-error');
        console.log('Invalido')
    } else {
        peso_anterior.classList.remove('input-error');
    }

    if (peso_actual.value == '') {
        error = true;
        peso_actual.classList.add('input-error');
        console.log('Invalido')
    } else {
        peso_actual.classList.remove('input-error');
    }

    if (peso_ideal.value == '') {
        error = true;
        peso_ideal.classList.add('input-error');
        console.log('Invalido')
    } else {
        peso_ideal.classList.remove('input-error');
    }

    if (error == false) {
        console.log('Rellene los campos marcados')
    }
});