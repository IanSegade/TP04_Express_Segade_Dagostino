import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"
import express  from "express";
import cors     from "cors";

const app  = express();
const port = 3000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {

    res.status(200).send(`Ya estoy respondiendo!`)

})

app.get('/saludar/:nombre', (req, res) => {

    const nombre = req.params.nombre;
    res.status(200).send(`Hola ${nombre}`);

})
app.get('/validarfecha/:anio/:mes/:dia', (req, res) => {
    const anio =req.params.anio;  
    const mes = req.params.mes;  
    const dia = req.params.dia;  
    var fechaIng = new Date(anio, mes, dia); 

    if(Number.isNaN(Date.parse(fechaIng))) 
    {
        res.status(400).send(`Fecha Invalida`); 
    } 
    else 
    {      
        res.status(200).send(`Fecha Valida`)
    }
})   


app.get('/matematica/sumar', (req, res) => {             
   
    const num1 =parseInt(req.query.num1); 
    const num2 =parseInt(req.query.num2); 
    const resultado = sumar(num1, num2);
    res.status(200).send({resultado});

})

app.get('/matematica/restar', (req, res) => {             
   
    const num1 = parseInt(req.query.num1); 
    const num2 = parseInt(req.query.num2); 
    const resultado = restar(num1, num2);
    res.status(200).send({resultado});

})  
app.get('/matematica/multiplicar', (req, res) => {             
   
    const num1 =parseInt(req.query.num1); 
    const num2 =parseInt(req.query.num2); 
    const resultado = multiplicar(num1, num2);
    res.status(200).send({resultado});

})  
app.get('/matematica/dividir', (req, res) => {             
   
    const num1 =parseInt(req.query.num1); 
    const num2 =parseInt(req.query.num2); 
    
    if(num2 == 0)
    {
        res.status(400).send(`El divisor no puede ser 0`);
    } 
    else 
    {
        const resultado = dividir(num1, num2); 
        res.status(200).send({ resultado });
    }
    

})  

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18)); 

app.get('/alumnos', (req, res) => {
    res.status(200).json(alumnosArray);
  });
  app.get('/alumnos/:dni', (req, res) => {
    const dniBuscado = req.params.dni;
    const alumnoEncontrado = alumnosArray.find(alumno => alumno.dni === dniBuscado);
  
    if (alumnoEncontrado) {
      res.status(200).json(alumnoEncontrado);
    } else {
      res.status(404).json({ error: "Alumno no encontrado" });
    }
  }); 
app.use(express.json());
app.post('/alumnos', (req, res) => {

    const { username, dni, edad } = req.body; 
    if (!username || !dni || !edad)
    {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    
    const nuevoAlumno = new Alumno(username, dni, edad);
    alumnosArray.push(nuevoAlumno);
    res.status(201).json(nuevoAlumno);
})

app.get('/', (req, res) => {

    res.status(200).send('Ya estoy respondiendo!');

})


app.get('/saludar', (req, res) => {

    res.send('Hello World!');

})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})