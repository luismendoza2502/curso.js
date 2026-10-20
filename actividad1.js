//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "Senati" -> "itanes"
/*
const texto = 'Senati'


console.log('Texto inverso:', texto.split('').reverse().join(''))
*/

const texto = 'Senati'
const longitud = texto.length

for(let i = longitud -1; i>=0;i--){
  console.log(texto.substring(i,i +1))
}


//crear una variable donde almacene una direccion de correlo electronico
//verificar si el correo es valido cuando tiene un solo @ 
// Ejemplo: Jhon@gmail.com [correcto]
// luis@gamil@.com [incorrecto]
// mariagmail.com[incorrecto]

const correo = "luismend@za@gmail.com"
let total = 0

for (let i = 0; i < correo.length; i++){
  if (correo.substring(i, i + 1) == "@"){
    total = total + 1
  }
}

if (total === 1){
  console.log("Correo correcto")
}else{
  console.log("Correo incorrecto")
}