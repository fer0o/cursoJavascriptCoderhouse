document.write('Hola Prros')
let entrada
let suma = 0
let contador = 0

//funcion flecha
const calcularPromedi = (suma, numCalifas) => {
  return suma / numCalifas
}
while (entrada !== 'fin') {
  entrada = prompt('Dame tu calificacion (escribe fin para terminar)')
  if (parseInt(entrada) >= 0 && parseInt(entrada) <= 10) {
    contador++
    suma += parseInt(entrada)
  } else {
    alert('La calificacion no es valida')
  }
}

console.log(`la suma es ${suma}`)
console.log(`el promedio es ${calcularPromedi(suma, contador)}`)
