console.log("¡El cerebro de la web esta funcionando");
// Funcion Saludar
function saludar(){
    let nombre = prompt ("¿Como te llamas?");
    alert ("Holaaaa " + nombre + " ya eres programadora");
}

//Funcion verificar accesos
function VerificarAccesos(){
    let edad = prompt ("Digita tu edad");
    
    if(edad >= 18){
        alert("Acceso permitido");
        console.log("Esado mayor de edad");
 }else{
    alert("Acceso denegado, eres menor de edad");
    console.log ("Estado: No entra por ser menor de edad");
}
}