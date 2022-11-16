// Funcion que corre tras presionar id="btn-agregar"
function agregarObjetivo() {
    //   Nombre Objetivo
    let error = false;
    const nombreObjetivo = document.getElementById("nombre-Objetivo"); //Variable nombre de objetivo
    if (!nombreObjetivo.value) {
        // Validacion si el objetivo tiene nombre
        nombreObjetivo.classList.add("input-error");
        error = true;
        console.log("Nombre Invalido");
    } else {
        nombreObjetivo.classList.remove("input-error");
        console.log('Nombre bien');
    }
    //   Tipo de objetivo
    const tObjetivo = document.getElementById("listado-objetivo"); // Tipo de objetivo
    if (!tObjetivo.value) {
        tObjetivo.classList.add("input-error");
        console.log("Objetivo Invalido");
    } else {
        tObjetivo.classList.remove("input-error");
        console.log("Objetivo valido");
    }
    //Meta
    const metaV = document.getElementById("input-meta");
    if (!metaV.value) {
        metaV.classList.add("input-error");
        console.log("Meta Invalida");
    } else {
        metaV.classList.remove("input-error");
        console.log('Meta bien');
    }

    //Fechas
    const fechainicio = document.getElementById("fInicio").value; //Fecha inicio
    const fechameta = document.getElementById("fMeta").value; //Fecha meta
    const ffinicio = fechainicio.replace("-", ""); //Remover simbolos de Fecha inicio
    const ffmeta = fechameta.replace("-", ""); //Remover simbolos de Fecha meta
    //Validar fecha
    error = false;
    if (ffinicio, ffmeta == '') {
        fInicio.classList.add("input-error");
        fMeta.classList.add("input-error");
        error = true;
        console.log("Fecha Invalido");
    } else {
        fInicio.classList.remove("input-error");
        fMeta.classList.remove("input-error");
        console.log('Fecha bien');
    }
}