//Creamos nuestra "Caja grande" (Array)
let carrito =["🍏 Manzana","🍌 Platano"];
//Imprimir el carrito nada mas al cargar la pagina

document.getElementById('pantalla-cesta').textContent = carrito.join("-");
//La funcion para agregar cosas nuevas a la lista
function AñadirAlCarrito(){
    //Atrapamos lo que escribe el usuario
    let item = document.getElementById('nuevo-item').value;
    //Magia de Array .push() mete el nuevo elemento al final de la lista
    carrito.push(item);
    //Volvemos a pintar la cesta para que se ariaValueMax
    document.getElementById('pantalla-cesta').textContent = carrito.join("-");
    //Limpiamos el input
    document.getElementById('nuevo-item').value ="";

}