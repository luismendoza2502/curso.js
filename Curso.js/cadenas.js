// Cadenas = conjunto de caracteres
// 1 solo caracter= char

//Existen 3 formas para crear cadenas js:

const tradicional = "Hola soy un texto"
const simples= 'Un gusto conocerte'
const mensaje = `Soy un texto muy especial`//Backtick


//Backtick permite multilineas + inyeccion
const nombre= 'Jhon'
const carrera= 'Programador'

const historia=`
Esta es la historia de ${nombre}
de un programador ${carrera}
que solo queria Vibecodear
`
//console.log(historia)

//Propiedades
const longitud = carrera.length //Total de caracteres
//console.log(longitud)

// Esra constante no es un arreglo
const amigos = 'Luis, Miguel, Juan , Josem Raul, Ernesto'

console.log('concat', carrera.concat(nombre)) //concatenar (unir)
console.log('repeat', carrera.repeat(3)) // repetir
console.log('replace',carrera.replace('a','@')) //reemplazar primero
console.log('uppercase', carrera.toUpperCase()) // mayusculas
console.log('lowercase', carrera.toLowerCase()) //Minusculas
console.log('replace all', carrera.replaceAll('a','@'))//remplaza todos
console.log('split', amigos.split(',')) // devuelve un array
console.log('trim:', carrera.trim())// quita espacios vacios extremos

// Extraer los 3 primeros caracteres 

console.log('3 primeros', carrera.substring(0,3)) // 0 = index (INDEX), 3 = total 

// Extraer la palabra grama de programador

console.log('caracter internos', carrera.substring(3, 7))