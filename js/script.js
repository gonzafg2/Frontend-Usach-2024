// let nombre = ""; // String vacío
let edad = 0 // Número 0
let booleano = false // Booleano false

let foo // Declaración de variable sin valor // Mala práctica declarar variables sin valor
// foo = "Hola"; // Asignación de valor a la variable foo

// console.log("Esta es la variable foo: ", foo);

const persona = {
  nombre: 'Gonzalo',
  edad: 34,
  casado: true,
  hermano: {
    nombre: 'Vicente',
    edad: 14
  },
  saludar: function () {
    console.log('Hola, soy ' + this.nombre)
  },
  hijos: ['Anastasia']
}

// console.log("Objeto persona: ", persona.hermanos?.nombre);

// Arreglos o Arrays
const frutas = ['manzana', 'pera', 'uva', 'sandía', 'mango']

// console.log("Frutas: ", frutas);
//console.log('Primera fruta: ', frutas[3])

// Para saber el índice del último elemento de un arreglo
const longitud = frutas.length

//console.log('Longitud del arreglo: ', longitud)

const indice = longitud - 1

//console.log('Indice: ', indice)

//console.log('Última fruta: ', frutas[frutas.length - 1])

const edades = [23, 45, 67, 89, 12, 34, 56, 78, 90]

//console.log('Edades: ', edades)

//console.log('Primera edad: ', edades[0])
//console.log('Última edad: ', edades[edades.length - 1]);

const booleans = [true, false, true, false, true, false]

//console.log('Booleans: ', booleans)

const pokemones = [
  {
    nombre: 'Pikachu',
    tipo: 'Eléctrico',
    color: 'amarillo'
  },
  {
    nombre: 'Charmander',
    tipo: 'Fuego',
    color: 'naranja'
  },
  {
    nombre: 'Squirtle',
    tipo: 'Agua',
    color: 'azul'
  }
]

//console.log('Pokemones: ', pokemones)

//console.log('Primer pokemon: ', pokemones[0].nombre)

// Funciones anonimas y funciones nombradas

// Función anónima
/*
function() {
  console.log("Hola, soy una función anónima");
}

() => {
  console.log("Hola, soy una función anónima");
}
*/
// saludar()

// Función nombrada
function saludar() {
  console.log('Hola, soy una función nombrada')
}

const saludar2 = function () {}

const saludar3 = () => {
  console.log('Hola, soy una función flecha')
}
const nombre = 'Gonzalo'
// saludar3()

const saludar4 = () => console.log('Hola, soy una función flecha sin llaves')

// saludar4()

const saludar5 = (nombre) => console.log('Hola, soy una función flecha sin llaves y con parámetros', nombre)

//saludar5(nombre)

const sumar = (a, b) => {
  return a + b
}

// Funciones vacías.
// Funciones que retornan algo.

//const resultado = sumar(5, 3)

//console.log('Resultado de la suma: ', resultado)

const restar = (a, b) => a - b

const resultadoResta = restar(5, 3)

console.log('Resultado de la resta: ', resultadoResta)

