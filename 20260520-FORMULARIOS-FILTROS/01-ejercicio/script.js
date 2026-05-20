//PRACTIA 1: FORMULARIO SIN RECARGA

const form= document.querySelector('#suscripcionForm');
const inputNombre= document.querySelector('#nombreInput');
const cajaMensaje = document.querySelector('#mensajeExito');

//Escuchamos el evento 'submit'(cuando se envia el fomulario )

form.addEventListener('submit',(evento)=>{
    //1. La linea magica: evita que la pagina se recargue
    evento.preventDefault();
    //2. Capturamos lo que el usuario escribio con (,trim() este quita el espacio)
    const textoEscrito = inputNombre.value.trim();
    //3. Mostramos el mensaje de exito
    cajaMensaje.textContent=`✅Usuario "${textoEscrito}" registrado correctamente`;
    cajaMensaje.classList.remove('oculto');
});

//PRACTICA 2: BUSCADOR EN TABLA EN TIEMPO REAL
const buscador = document.querySelector('#buscadorUsuarios');
//seleccionamos TODAS las filas que estan dentro del cuerpo de la tabla
const filas = document.querySelectorAll('#tablaUsuario tbody tr');
//El evento 'Input' se dispara CADA VEZ que el usuario pulsa una tecla
buscador.addEventListener('input',()=>{
    //1. Convertimos lo que escribe el usuario a minusculas para evitar problemas de minusculas
    const terminoBusqueda = buscador.value.toLowerCase();
    //2. Usamos el bucle forEach para revisar fila a fila
    filas.forEach(fila => {
    //Obtenemos todo el texto de esa fila en minusculas
    const textoFilas = fila.textContent.toLowerCase();
    //3.Condicional: ¿El texto de la fila incluye lo que buscamos?
    if (textoFilas.includes(terminoBusqueda)){
        //si lo incluye mostramos la fila(dejamos dysplay por defecto)
        fila.style.display = '';
    }else{
        //si no la incluye la ocultamos
        fila.style.display = 'none';
    }
    });
});