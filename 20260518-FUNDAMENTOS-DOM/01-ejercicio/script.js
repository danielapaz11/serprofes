//EJERCICIO 1: CONTADOR DE CLICKS (Gestion de Datos)
//1. Identificamos las etiquetas exactas que vamos a manipular

const btnContar = document.querySelector('#countBtn');
const spanCount = document.querySelector('#count');

let contador =0;

btnContar.addEventListener('click',()=>{
    contador++//Incrementa en 1 el valor numerico
    spanCount.textContent=contador;// inyecta el numero en el HTML

    // Cuando llegue a 50, deshabilitamos el boton
    if (contador >= 5) {
        btnContar.disabled = true;
        btnContar.textContent = 'Alcanzaste el Limite';
    }
});


//EJERCICIO 2: TOGGLE MENU (Manipulacion de clases css)

const btnToggle = document.querySelector('#toggleMenu');
const nav = document.querySelector('#mainNav');

btnToggle.addEventListener('click',()=>{
    //ClassList.toggle() es magico: si la clase oculto esta, la quita, si no la pone
    nav.classList.toggle('oculto');
    //Cambiamos el texto del boton dependiendo de si el menu esta oculto o no
    const estaOculto = nav.classList.contains('oculto');
    if(estaOculto){
        btnToggle.textContent ='Mostrar Menu';
    }
    else{
        btnToggle.textContent = 'Ocultar Menu'
    }
});

//EJERCICIO 3, modo oscuro
const toggleOscuro = document.querySelector('#themeToggle');
const textSwitch = document.querySelector ('.switch-text');
const cuerpoWeb = document.body;
// PASO A:Comprobar si el usuario ya tenia el modo oscuro
//guardado al cargar la pagina

const temaGuardado = localStorage.getItem('temaPreferido');
if(temaGuardado ==='oscuro'){
    cuerpoWeb.classList.add(dark);
    toggleOscuro.checked=true;
    textSwitch.textContent = 'Desactivar Modo Oscuro'
}
//Paso B: Escuchar cuando el usuario marca o desmarca el checkbox
toggleOscuro.addEventListener('change',() =>{
if(toggleOscuro.checked){
    //Si checked esta marcado ponemos clase oscura y lo guardamos
    cuerpoWeb.classList.add('dark');
    localStorage.setItem('Tema preferido','Oscuro');
    textSwitch.textContent = 'Desactivar Modo Oscuro';
}else{
    //Si se desmarca, quitamos la clase y guardamos la preferencia clara
    cuerpoWeb.classList.remove('dark');
    localStorage.setItem('temaPreferido','claro');
    textSwitch.textContent = 'Activar Modo Oscuro';
}
});
//
const btnPago = document.querySelector('#btnPago');

btnPago.addEventListener('click', () => {

    // Cambiamos el texto
    btnPago.textContent = 'Procesando pago... ⏳';

    // Deshabilitamos el botón
    btnPago.disabled = true;

});