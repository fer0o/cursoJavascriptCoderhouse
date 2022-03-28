console.log('funciones por parametro')

const nombres = ['abel', 'esmeralda', 'christian', 'pamela', 'elena', 'marcos']
function transformarNombres (nombres, transformador) {
  let nuevosNombres = []
  for (const nombre of nombres) {
    nuevosNombres.push(transformador(nombre))
  }
  return nuevosNombres
}
const convertirMayusculas = texto => texto.toUpperCase()

//console.log(convertirMayusculas('Hola Mundo'))
const nuevosNombres = transformarNombres(nombres, convertirMayusculas)
console.log(nuevosNombres.join('-'))

const nombresMinus = transformarNombres(nombres, t => t.toLowerCase())
console.log(nombresMinus.join('*'))
