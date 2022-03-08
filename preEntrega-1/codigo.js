document.write('Sistema de Registro y monitoreo de salud')

// inicio
alert('Bienvenido, esta es una caluladora de Indice de Masa Corporal')

// try {
//   function CalcularIMC (sexo) {
//     redondeo de valores

//     let resultado = ''
//     const tablaMujeres = `tabla de IMC
//     menos de 16 -> Desnutricion
//     20-23.9 -> Normal
//     24-28.9 -> sobrepeso
//     29-37 -> Obesidad
//     mas de 37 -> Obesidad morbida
//   `
//     const tablaHombres = `tabla de IMC
//     menos de 20 -> Desnutricion
//     20-24.9 -> Normal
//     25-29.9 -> sobrepeso
//     30-36 -> Obesidad
//     mas de 37 -> Obesidad morbida`

//     switch (sexo) {
//       case 'F':
//         if (calculo < 16) {
//           resultado = `eso es un Indice de Masa Muscular bajo es signo de desnutricion Informacion de ayuda: ${tablaMujeres}`
//         } else if (calculo >= 20 && calculo <= 23.9) {
//           resultado = `eso es un Indice de Masa Muscular Normal Informacion de ayuda: ${tablaMujeres}`
//         } else if (calculo >= 24 && calculo <= 28.9) {
//           resultado = `eso es un Indice de Masa Muscular Regular y tienes algo de sobrepeso Informacion de ayuda: ${tablaMujeres}`
//         } else if (calculo >= 29 && calculo <= 37) {
//           resultado = `eso es un Indice de Masa Muscular alto y tienes obesidad Informacion de ayuda: ${tablaMujeres}`
//         } else if (calculo > 37) {
//           resultado = `eso es un  Indice de Masa Muscular muy alto y Tienes obesidad morbida Informacion de ayuda: ${tablaMujeres}`
//         }
//         break
//       case 'M':
//         if (calculo < 20) {
//           resultado += `eso es un Indice de Masa Muscular bajo Informacion de ayuda: ${tablaHombres}`
//         } else if (calculo >= 20 && calculo <= 24.9) {
//           resultado += `eso es un Indice de Masa Muscular Normal Informacion de ayuda: ${tablaHombres}`
//         } else if (calculo >= 25 && calculo <= 29.9) {
//           resultado += `eso es un Indice de Masa Muscular Regular y tienes obesidad leve Informacion de ayuda: ${tablaHombres}`
//         } else if (calculo >= 30 && calculo <= 36) {
//           resultado += ` eso es un Indice de Masa Muscular alto y tienes obesidad severa Informacion de ayuda: ${tablaHombres}`
//         } else if (calculo >= 36 && calculo <= 40) {
//           resultado += ` eso es un  Indice de Masa Muscular muy alto y Tienes obesidad severa Informacion de ayuda: ${tablaHombres}`
//         }
//         break
//     }
//     return `El IMC es :${calculo.toFixed(2)} y ${resultado} `
//   }
//   introduce los datos
//   const sexo = prompt(
//     'para iniciar Escriba su sexo M para pasculino F para femenino '
//   )
//   let nombre = prompt('Escriba su nombre')
//   let apellido = prompt('Escriba su apellido')
//   let altura = parseInt(prompt('digite su altura en centimetros'))
//   let peso = parseInt(prompt('Digite su peso en kg'))
//   conversion de datos

//   altura = Math.round(altura) / 100
//   peso = Math.round(peso)
//   let calculo = peso / Math.pow(altura, 2)

//   manejo de excepiones
//   if (altura === '') {
//     if (isNaN(altura)) {
//     alert('no has escrito nada en altura')
//   }// else if (peso === '') {
//     if (isNaN(peso)) {
//     alert('No has escrito nada en peso')
//   } else if (sexo === '') {
//     alert('No has escrito tu sexo')
//   } else {

//     function MostrarResultadoIMC (altura, peso, calculo) {
//       let mensaje = `Mides ${altura / 100} metros y pesas ${peso}KG  ${calculo} `
//       alert(mensaje)
//     }
//     let resultado = CalcularIMC(sexo, altura, peso)
//     MostrarResultadoIMC(altura, peso, CalcularIMC(sexo, altura, peso))

//     let data = [
//       {
//         nombre: 'Predo',
//         apellido: 'Perez',
//         altura: 167,
//         peso: 55,
//         sexo: 'M',
//         imc: 24.9
//       },
//       {
//         nombre: 'Juanita',
//         apellido: 'Gonzales',
//         altura: 170,
//         peso: 40,
//         sexo: 'F',
//         imc: 22.3
//       },
//       {
//         nombre: 'Pamela',
//         apellido: 'Beltran',
//         altura: 169,
//         peso: 49,
//         sexo: 'F',
//         imc: 21.3
//       },
//       {
//         nombre: 'Daniel',
//         apellido: 'Contreras',
//         altura: 187,
//         peso: 87,
//         sexo: 'M',
//         imc: 29.9
//       },
//       {
//         nombre: 'Cristina',
//         apellido: 'Arteaga',
//         altura: 140,
//         peso: 45,
//         sexo: 'F',
//         imc: 22.9
//       }
//     ]

//     data.push({
//       nombre: `${nombre}`,
//       apellido: `${apellido}`,
//       altura: altura,
//       peso: peso,
//       sexo: `${sexo}`,
//       imc: calculo
//     })

//     console.log(data)

//     console.log(calculo)
//     for (const element of data) {
//       if (element.sexo === 'F' && element.imc >= 24 && element.imc <= 28.9) {
//         console.log(`${element.nombre} ${element.apellido} Necesitas una dieta`)
//       } else if (element.sexo === 'M' && element.imc >= 25 && element.imc <= 29.9) {
//         console.log(`${element.nombre} ${element.apellido} Necesitas una dieta`)
//       }
//     }
//   }

// } catch {
//   console.error('datos no validos o faltantes')
// }
