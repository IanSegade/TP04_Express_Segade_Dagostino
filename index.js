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

    res.send('Ya estoy respondiendo!');

})


app.get('/saludar', (req, res) => {

    res.send('Hello World!');

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})

