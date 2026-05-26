import { callAPI } from "./api.js";

//Atrapamos los elementos de la interfaz
const pantalla = document.getElementById('pantallaResultados');
const btnBuscar = document.getElementById('btnBuscar');
const inputId = document.getElementById('inputId');
const btnError = document.getElementById('btnError');
const formCrear = document.getElementById('formCrear');

//GET DINAMICO (Buscar publicacion)
btnBuscar.addEventListener('click',async()=>{
    const id = inputId.value.trim();
    //Seguridad: Que no nos envien campos vacios
    if (id ===""){
        pantalla.textContect = "⚠️Por favor, Escribe un numero de ID";
        return;
    }
    pantalla.textContent = "⏳ Viajando a internet ...";

    try{
        //Llamamos a nuestro cartero con la ruta dinamica
        const post = await callAPI (`/posts/${id}`);
        //Pintamos el objeto pantalla de forma bonita
        //JSON.stringfy (objeto,null,2)le da el formato de linea y espacios
        pantalla.textContent = JSON.stringify(post,null,2);
    }catch (error){
        pantalla.textContent = "❌ No se encontro la publicacion o hubo un error"
    }
})