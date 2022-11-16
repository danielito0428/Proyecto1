const nombre_enfermedad=document.getElementById('nombre_enfermedad');
const descripcion=document.getElementById('descripcion');
const tratamiento=document.getElementById('tratamiento');
const btnAgregar=document.getElementById('btnAgregar');

const validar = () => {
    let error = false;
    if(nombre_enfermedad.value == '') {
        error=true;
        nombre_enfermedad.classList.add('input-error');
        console.log('Invalido')
    }else{
        nombre_enfermedad.classList.remove('input-error');
    }

    if(descripcion.value == '') {
        error=true;
        descripcion.classList.add('input-error');
        console.log('Invalido')
    }else{
        descripcion.classList.remove('input-error');
    }

    if(tratamiento.value == '') {
        error=true;
        tratamiento.classList.add('input-error');
        console.log('Invalido')
    }else{
        tratamiento.classList.remove('input-error');
    }

    if(error == false) {
        console.log('Rellene los campos marcados')   
    }
}

btnAgregar.addEventListener('click', validar);