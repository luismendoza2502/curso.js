//Objeto se define con una clave: valor 
const Automovil={
  marca:"Toyota",
  modelo: "Rav4",
  anio:2005,
  operativo:true,
  valor:120000,
  placa:"ABC-123",
  propietarios:[
    {titular:"Roxana", fecha:"2025-01-10", precio:118000},
    {titular:"Hugo", fecha:"2025-11-15", precio:115000},
    {titular:"Pedro", fecha:"2026-06-05", precio:119000}
    
    ]
}

//¿Es posible actulizar la informacion ?
Automovil.anio=2024
Automovil["anio"]=2024
Automovil.propietarios[0].titular="Patricia"// error
Automovil.propietarios[2].precio="122000"

//¿Sera posible agregar una nueva clave valor?

Automovil["Color"] ="Blanco"
Automovil["equipado"]="Full"

console.log(Automovil);
