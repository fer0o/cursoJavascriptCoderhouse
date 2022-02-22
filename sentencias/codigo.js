console.log('empezamos con for')

let number = prompt('introduce un numero')
for(let i=0; i<=10; i++){
    const result = number * i
    if(result > 20){
        break
    }
    if(result == 15){
        continue
    }
    console.log(`${number} x ${i} = ${result}`)
}
