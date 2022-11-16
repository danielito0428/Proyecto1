const nuevaActividad = document.getElementById('nueva-actividad');
const HorasInicio = document.getElementById('inicio');
const HorasFinales = document.getElementById('final');
const fechaRealizada = document.getElementById('fecha');
const btnAgregar = document.getElementById('btn-agregar');
const actividadFisica = document.getElementById('actividad-fisica');
const horasTotales = document.getElementById('horas-totales');

const calcularHorasTotales = () => {
    let horaInico = HorasInicio.value;
    let horaFinal = HorasFinales.value;
    let horasTotales = horaFinal - horaInico

    return horasTotales;
};

const leerActividad = () => {
    let actividad = nuevaActividad.value;
    return actividad;
};

const imprimirActividad = (actividad) => {
    actividadFisica.value = actividad;
};

const imprimirHorasTotales = (horas) => {
    horasTotales.value = horas;
};



const validar = () => {
    let error = false;



    if (fechaRealizada.value == '') {
        error = true
        fechaRealizada.classList.add('input-error');
        // swal('', 'Ingrese la fecha en que se realizo', 'warning');


    } else {
        fechaRealizada.classList.remove('input-error');
    }
    if (HorasFinales.value == '') {
        error = true
        HorasFinales.classList.add('input-error');
        // swal('', 'Ingrese la hora de finalización', 'warning');


    } else {
        HorasFinales.classList.remove('input-error');

    }
    if (HorasInicio.value == '') {
        error = true
        HorasInicio.classList.add('input-error');
        // swal('', 'Ingrese la hora de inicio', 'warning');


    } else {
        HorasInicio.classList.remove('input-error');

    }
    if (nuevaActividad.value == '') {
        error = true

        nuevaActividad.classList.add('input-error');
        //swal('', 'Ingrese una actividad', 'warning');
        console.log("invalido")


    } else {
        nuevaActividad.classList.remove('input-error');
    }
    if (error == false) {
        console.log('si')
        let actividad = leerActividad();
        imprimirActividad(actividad);
        let horaTotal = calcularHorasTotales();
        imprimirHorasTotales(horaTotal);

    } else {
        console.log("Rellene todo los campos resaltados en rojo");

    }
}
btnAgregar.addEventListener('click', validar);