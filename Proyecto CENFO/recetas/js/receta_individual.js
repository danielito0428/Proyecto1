let Nombre_receta, indientes_receta, foto_receta, preparar_receta, tipo_comida, Categoria;

// Tomando los valores del DOM
Nombre_receta = document.getElementById('nombre');
ingredientes_receta = document.getElementById('ingredientes');
// foto_receta = document.getElementById('foto');
preparar_receta = document.getElementById('preparacion');
tipo_comida = document.getElementById('tipo-comida');
Categoria = document.getElementById('categoria');
valid = false;

// Ejecutar la variable on submit

const validarFormulario = formulario_receta_individual.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {}
    console.log(valid);

    if (valid === true) {
        // swal('', 'Receta agregada exitosamente', 'success');
        console.log(data);
    }
    if (Categoria.value !== '') {
        data.Categoria = Categoria.value;
        valid = true;
        Categoria.classList.remove('input-error');
    } else {
        // swal('', 'Ingrese una categoria', 'warning');
        Categoria.classList.add('input-error');
    }
    if (tipo_comida.value !== '') {
        data.tipo_comida = tipo_comida.value;
        valid = true;
        tipo_comida.classList.remove('input-error');
    } else {
        // swal('', 'Ingrese un tipo de comida', 'warning');
        tipo_comida.classList.add('input-error');
    }
    if (preparar_receta.value !== '') {
        data.preparar_receta = preparar_receta.value;
        valid = true;
        preparar_receta.classList.remove('input-error');
    } else {
        // swal('', 'Ingrese los pasos para realizar la receta', 'warning');
        preparar_receta.classList.add('input-error');
    }
    if (ingredientes_receta.value !== '') {
        data.ingredientes_receta = ingredientes_receta.value;
        valid = true;
        ingredientes_receta.classList.remove('input-error');
    } else {
        // swal('', 'Ingrese los indredientes de la receta', 'warning');
        ingredientes_receta.classList.add('input-error');
    }
    if (Nombre_receta.value !== '') {
        data.Nombre_receta = Nombre_receta.value;
        valid = true;
        Nombre_receta.classList.remove('input-error');
    } else {
        // swal('', 'Ingrese el nombre de la receta', 'warning');
        Nombre_receta.classList.add('input-error');
    }
});