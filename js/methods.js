const pokemons = [
  { name: 'Pikachu', type: 'Electric', level: 1 },
  { name: 'Charmander', type: 'Fire', level: 1 },
  { name: 'Squirtle', type: 'Water', level: 1 },
  { name: 'Bulbasaur', type: 'Grass', level: 1 },
  { name: 'Jigglypuff', type: 'Fairy', level: 1 },
  { name: 'Psyduck', type: 'Water', level: 1 },
  { name: 'Vulpix', type: 'Fire', level: 1 },
  { name: 'Meowth', type: 'Normal', level: 1 },
  { name: 'Snorlax', type: 'Normal', level: 1 },
  { name: 'Magikarp', type: 'Water', level: 1 }
]

for (let i = 0; i < pokemons.length; i++) {}

// forEach
pokemons.forEach(function () {})

// console.log('Arreglo antes del forEach: ', pokemons)

const pokemons2 = pokemons.forEach((element, index, array) => {
  element.name.toUpperCase()
  return element.name.toUpperCase() // No se puede retornar un valor en un forEach: Retorna undefined
})

// console.log('Arreglo después del forEach: ', pokemons2)

// map
const pokemons3 = pokemons.map((element, index, array) => {
  element.name.toUpperCase()
  return {}
})
// console.log('Arreglo de pokemons: ', pokemons)

// console.log('Arreglo después del map: ', pokemons3)

pokemons.map(() => {})
pokemons.map(function (element, index, array) {})

// filter
const pokemonsWaterType = pokemons.filter(element => element.type === 'Water' && element.type === 'Fire')
console.log('Pokemons todos: ', pokemons)
// console.log('Pokemons de tipo agua: ', pokemonsWaterType)

// some
const pokemonsFireType = pokemons.some(element => element.type === 'Fire')
// console.log('Pokemons de tipo fuego: ', pokemonsFireType)

// every
const pokemonsEveryLevel = pokemons.every((element) => element.level > 0)
console.log('Pokemons de nivel 1 o más: ', pokemonsEveryLevel)