const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0
let suma = 0

// Método 1: Función recursiva con un límite de iteraciones en variable externa
const sumaRecursiva = (arr) => {
  console.log('Iteración i: ', i)
  suma += arr[i]
  i++
  return i === arr.length ? suma : sumaRecursiva(arr)
}
console.log('Método 1: Función recursiva con un límite en variable externa')

console.time('sumaRecursiva')
console.log(sumaRecursiva(arrayNumbers))
console.timeEnd('sumaRecursiva')

// Método 2: Función recursiva con un límite de iteraciones en parámetro
let suma2 = 0
const sumaRecursiva2 = (arr, i = 0) => {
  // Suma de los elementos del arreglo
  suma2 += arr[i]

  console.log('Iteración i: ', i)
  return i === arr.length - 1 ? suma2 : sumaRecursiva2(arr, i + 1)
}

console.log('Método 2: Función recursiva con un límite')

console.time('sumaRecursiva2')
console.log(sumaRecursiva2(arrayNumbers))
console.timeEnd('sumaRecursiva2')
