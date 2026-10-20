// Estructuras = OBJECTOS
// Desestructuras = ABRIR OBJECTOS

const personas = {
  apellidos : "Mendoza Quispe",
  nombre : "Luis ",
  edad:18,
  skills:["PHP", "Java", "JavaScritp"]
}

// Guardar los apellidos, nombres y edad en variables
/*
const apellidos = personas.apellidos
const nombres = personas.nombre
const edad = personas.edad

console.log(nombres, apellidos,edad)
*/
//Desestructurar es separar daos provenientes de un objecto
//Nota: No es necesario recuperar todas la coleccion
// Noa: La variable debem coinciden con las claves

const {nombre,skills,}=personas

console.log(nombre,skills,)


