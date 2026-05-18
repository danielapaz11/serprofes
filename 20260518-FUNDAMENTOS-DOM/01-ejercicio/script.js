//EJERCICIO 1: CONTADOR DE CLICKS (Gestion de Datos)
//1. Identificamos las etiquetas exactas que vamos a manipular

const btnContar = document.querySelector('#countBtn');
const spanCount = document.querySelector('#count');

let contador =0;

btnContar.addEventListener('click',()=>{
    contador++//Incrementa en 1 el valor numerico
    spanCount.textContent=contador;// inyecta el numero en el HTML
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
