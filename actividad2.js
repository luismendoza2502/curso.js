//Crear un objecto que almacene datos de una mascota 
//desestructurar utilizando un minimo de 4 variables 
// Mostrar en consolo 

const mascota = {
  nombre: "Boby",
  especie: "Perro",
  raza: "Labrador",
  edad: 3,
  esVacunado: true
};

const {nombre, raza, edad, especie} = mascota
console.log(nombre,raza,edad,especie)

