//1. Importamos la herramienta express(principal)
const express = require('express');
//2. Creamos niestra aplicacion es decir nuestro servidor
const app = express();

//3. MIDDLEWARE (la linea magica que nos permite recibir datos en formato json)
//Es un traductor que le dice a node que si alguien le envia datos desde fuera
//debe traducirlos a un formato que node pueda entender (format JSON)
//Si falta esto el POST falla 
app.use(express.json());


//NUESTROS DATOS (BASE DE DATOS SIMULADA)
//guardamos informacion temporalmente en la lista array estudiantes
//dentro de la memoria del servidor
let estudiantes = [
    {id: 1, nombre: "Aroa", curso: "React"},
    {id: 2, nombre: "Maria", curso: "Node"}
];

//🚩RUTA GET: Para leer datos
//Cuando alguien pregunta por "/api/estudiantes" le devolvemos la lista de estudiantes

app.get("/api/estudiantes", (req, res) => {
    res.send(estudiantes);
});

//🚩RUTA POST: Para crear datos
//Cuando alguien envia datos a "/api/estudiantes" los guardamos en la lista estudiantes
app.post("/api/estudiantes", (req, res) => {

    //atrapamos los datos que nos envian desde afuera viene dentro de req.body
    const nuevoEstudiante = req.body;
    nuevoEstudiante.id = estudiantes.length + 1; //id autoincremental
    
    //agregamos el nuevo estudiante a la lista estudiantes .push()
    estudiantes.push(nuevoEstudiante);
    // devolvemos el estudiante que acabamos de crear
    res.json({message: "Estudiante creado exitosamente", estudiante: nuevoEstudiante});
});

let profesores = [
    {id: 1, nombre: "Laura", Asignatura: "React"},
    {id: 2, nombre: "Rafal", Asignatura: "Node"}
];

app.get("/api/profesores", (req, res) => {
    res.send(profesores);
});

app.post("/api/profesores", (req, res) => {
    const nuevoProfesor = req.body;
    nuevoProfesor.id = profesores.length + 1;
    profesores.push(nuevoProfesor);
    res.json({message: "Profesor creado exitosamente", profesor: nuevoProfesor});
});

//5.ENCENDER EL MOTOR 💨
//Le decimos al servidor que escuche peticiones en el puerto 3000
app.listen(3000, () => {
    console.log("🥳Servidor Funcionando! URL: http://localhost:3000");
});