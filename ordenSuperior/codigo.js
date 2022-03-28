function asignarOperacion (op) {
  //funcion qasignar Opracion que recibe como parametro una funcion llamda op
  if (op === 'sumar') {
    //si op es igual a sumar
    return (a, b) => a + b //regresa una funcion que recibe como parametros a, b y regresa la suma de a + b
  } else if (op === 'restar') {
    // si no, si op es igual a restar regresa una funcion que recibe como parametros a,b y regresa la resta de a - b
    return (a, b) => a - b
  }
}

let suma = asignarOperacion('sumar') // definimos la cariable suma con funcion asignarOperacion, funcion anterior que debia recibir 'suma o resta'
let resta = asignarOperacion('restar') // definimos la cariable suma con funcion asignarOperacion, funcion anterior que debia recibir 'suma o resta'

//console.log(suma(4, 6)) //imprimimos en consola la variable suma y le damos como parametros (4, 6) debido a que suma recibe 2 parametros numericos
//console.log(resta(10, 3)) //imprimimos en consola la variable resta y le damos como parametros (6, 7) debido a que resta recibe 2 parametros numericos

//  Recibir funciones por parametro
// Esta funcion recibe un array por primer parametro y una funcion por el segundo
// Recorre el array y por cada elemento hace un llamado a la funcion mencionada
// enviando dicho elemento por parametro

function porCadaUNo (arr, fn) {
  for (const el of arr) {
    fn(el)
  }
}
const numeros = [1, 2, 3, 4, 5]
//porCadaUNo(numeros, console.log)

let total = 0
function acumular (num) {
  total += num
}
porCadaUNo(numeros, acumular)
//console.log(total)

// function regresaFuncion () {
//   return () => {
//     console.log('Hola Mundo')
//   }
// }
// //regresaFuncion()()

const productos = [
  {
    id: 1,
    titulo: 'iPhone',
    precio: 1000,
    stock: 5,
    descuento: 10
  },
  {
    id: 2,
    titulo: 'Xiaomi',
    precio: 200,
    stock: 6,
    descuento: 10
  },
  {
    id: 3,
    titulo: 'Samsung',
    precio: 800,
    stock: 7,
    descuento: 15
  },
  {
    id: 4,
    titulo: 'Motorola',
    precio: 300,
    stock: 10,
    descuento: 30
  }
]
productos.forEach(element => {
  console.log(element.titulo)
  console.log(
    'precio con descuento' +
      prescioConDescuento(element.precio, element.descuento)
  )
})

function prescioConDescuento (precio, descuento) {
  return precio - (precio * descuento) / 100
}

//const nuevoArray

function multiplicarPor (multiplicador) {
  // se crea una funcion que recibe multiplicador
  return numero => {
    //va a regresar un numero y se crea una funcion flecha que va a regresar el numero multiplicado por  el multiplicador
    return numero * multiplicador
  }
}
//el multiplicador aun no tiene un valor
const multiplicarPor10 = multiplicarPor(10) //se crea una constante llamada multiplicarPor10 que va a ser igual a la funcion multiplicarPor con un valor de 10
const multiplicarPor12 = multiplicarPor(12)
console.log(multiplicarPor10(9)) // se va a imprimir en consola la funcion multiplicarPor10 con un valor de 9
console.log(multiplicarPor12(5))
//entonces la funcion multiplicarPor va a recibir el valor que tiene multiplicador, que a su vez multiplicador recibe el valor numero que esta en el valor de la funcion multiplicarPor10
//y la funcion multiplicarPor10 recibe el valor de 9
//10*9

function saludador (nombre) {
  return () => {
    console.log(`Hola ${nombre}`)
  }
}
const saludarFer = saludador(`Fer`)
const saludarPeter = saludador(`Peter`)

saludarFer()
saludarPeter()
