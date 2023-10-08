/**
 * Variables
 * formas de definir variables
 * var
 * let
 * const
 */
//var
var nombre='Gabriel';
console.log(nombre);

var edad = 27;
console.log(27);

var persona = {
    nombre:'pepe',
    apellidos:'pepe apellidos',
    edad: 27,
    dirección: {
        calle:'nombre de calle',
        numero: 5
    },
    ciudades: [
        "ciudad1",
        "diuidad2",
        "ciudad3",
        "ciudad4"
    ]    
};
console.log(persona);

//si no lo definimos, obtenemos undefined
var ciudad; 
console.log(ciudad);

//let  - en este caso, va a funcionar solo dentro de un bloque de código en el que lo declaremos, en cambio var es a nivel global.
let nombre2 = 'Gabriel2';
console.log(nombre2);

{
    let saludo = 'Hola mundo';
    var saludo2 = 'Hola mundo en var';
    console.log(saludo);
}

//console.log(saludo); da un error  
console.log(saludo2);

//variable con const  -no cambia en la ejecución-   en mayusculas y separado por guiones bajos, no pueden estar vacias, debemos inicializarlas.
const PI = 3.1415;
const NUMERO_PI = 3.1415;
console.log(PI);

//const PI_2 ; da error 


//usar variables en otras  se usan las comillas ``
var nombre_compuesto = `Hola soy ${nombre}`;
console.log(nombre_compuesto);
