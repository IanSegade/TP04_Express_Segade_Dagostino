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

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    const { ano, mes, dia } = req.params;

    const fecha = `${ano}-${mes}-${dia}`;
    
    const fechaValida = Date.parse(fecha);

    if (isNaN(fechaValida)) {
        res.status(400).send('Bad Request');
    } else {
        res.status(200).send('OK');
    }
});

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})