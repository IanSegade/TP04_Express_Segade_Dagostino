export default class Alumno
{
    constructor(username, dni, edad)
    {
    this.username = username,
    this.dni = dni,
    this.edad = edad
    }


    ToString()
    {
        return "Username: " + this.username + ", DNI: " + this.dni + ", Edad: " + this.edad + ".";
    }
}