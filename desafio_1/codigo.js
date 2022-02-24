// inicio
alert('Bienvenido, esta es una caluladora de Indice de Masa Corporal')
// introduce los datos
const sexo = prompt(
  'para iniciar Escriba su sexo M para pasculino F para femenino '
)
// let edad = prompt('Digite su edad')
let altura = prompt('digite su altura, ejemplo 1m 80 cm es igual a 1.80cm')
let peso = prompt('Digite su peso en kg')
// conversion de datos
altura = parseFloat(altura)
peso = parseInt(peso)
// edad = parseInt(edad)
// manejo de excepiones
try {
  if (altura === '') {
    alert('no has escrito nada en altura')
  } else if (peso === '') {
    alert('No has escrito nada en peso')
  } else if (sexo === '') {
    alert('No has escrito tu sexo')
  }
} catch {
  console.error('datos no validos o faltantes')
}
// calculo con formula peso (kg) / estatura **2
let calculo = peso / altura ** 2

switch (sexo) {
  case 'F':
    if (calculo < 20) {
      alert('Indice de Masa Muscular bajo')
    } else if (calculo >= 20 && calculo <= 23.9) {
      alert('Indice de Masa Muscular Normal')
    } else if (calculo >= 24 && calculo <= 28.9) {
      alert('tienes obesidad leve')
    } else if (calculo >= 29 && calculo <= 37) {
      alert('Tienes obesidad severa')
    } else if (calculo > 37) {
      alert('Tienes obesidad severa')
    }
    break
  case 'M':
    if (calculo < 20) {
      alert('Indice de Masa Muscular bajo')
    } else if (calculo >= 20 && calculo <= 24.9) {
      alert('Indice de Masa Muscular Normal')
    } else if (calculo >= 25 && calculo <= 29.9) {
      alert('tienes obesidad leve')
    } else if (calculo >= 30 && calculo <= 40) {
      alert('Tienes obesidad severa')
    } else if (calculo > 40) {
      alert('Tienes obesidad severa')
    }
    break
}
