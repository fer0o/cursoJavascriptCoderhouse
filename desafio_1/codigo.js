//inicio
alert("Bienvenido, esta es una caluladora de Indice de Masa Corporal")
//introduce los datos
const sexo = prompt("para iniciar Escriba su sexo M para pasculino F para femenino ")
let edad = prompt("Digite su edad")
let altura = prompt ("digite su altura, ejemplo 1m 80 cm es igual a 1.80cm")
let peso = prompt("Digite su peso en kg")
// conversion de datos
altura = parseFloat(altura) 
peso = parseInt(peso)
edad = parseInt(edad)
// manejo de excepiones
try{
    if(altura === ''){
        alert("no has escrito nada en altura")
    }
    else if (peso === ''){
        alert("No has escrito nada en peso")
    }
    else if (sexo === ''){
        alert("No has escrito tu sexo")
    }
}catch{
    console.error("datos no validos o faltantes")
}
// calculo con formula peso (kg) / estatura **2
let calculo = (peso /(altura**2))

switch (sexo){
    case 'F':
         if(edad >20){
            if(calculo <20){
                alert("Usted tiene un peso inferior al normal")
            }
         else if(calculo >=20 && calculo <24){
                alert("Peso normal")
            }
        else if (calculo >=24 && calculo <29){
                alert("peso superior a lo nromal")
            }
        else{
                alert("Tienes sobrepeso")
            }
        }
        break
    case 'M':
        if(calculo <21){
            alert()
        }

}