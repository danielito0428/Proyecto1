// constiables
const btnAgregar = document.getElementById("btn-agregar"); //Input boton agregar nuevo ayuno
const btnCancelar = document.getElementById("btn-cancelar"); //Input boton cancelar nuevo ayuno

function compararHoras() {
    let error = false;
    const nuevoNombreAyuno = document.getElementById("nombre-nuevo-ayuno"); // Input para el nombre del ayuno
    if (!nuevoNombreAyuno.value) {
        nuevoNombreAyuno.classList.add("input-error");
        error = true;
        console.log("Nombre Invalido");
    } else {
        nuevoNombreAyuno.classList.remove("input-error");
        console.log('Nombre Valido')
    }
    const horaInicio = document.getElementById("hora-inicio").value; //Input para hora de inicio
    horaInicio.type = "time"; //declarar variable como tiempo

    const horaFinal = document.getElementById("hora-final").value; //Input para hora de final
    horaFinal.type = "time"; //declarar variable como tiempo

    const iniciot = horaInicio.replace(":", ""); //format hora de 24h a un numero
    const finalt = horaFinal.replace(":", ""); //format hora de 24h a un numero
    // Validar si la hora final es mayor que la inicial
    if (iniciot > finalt) {
        const inicio = document.getElementById("hora-inicio");
        const meta = document.getElementById("hora-final");
        inicio.classList.add("input-error");
        meta.classList.add("input-error");
        error = true;
        console.log("Invalido");
    }

}