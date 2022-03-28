// crear TODO LIST
// SE DEBEN AGREGAR ELEMENTOS DESDE UN INPUT
// SE DEBEN ACTIVAR O DESACTIVAR ELEMENTOS CON UN CLICK
// DEBE MOSTRAR EL TOTAL DE LOS ITEMS ACTIVOS
// GUARDAR LA LISTA EN EL STORAGE
const storedElements = localStorage.getItem('elements')
let elements = []
if (storedElements) {
  elements = JSON.parse(storedElements)
} else {
  console.log('nada')
}
//console.log(localStorage.getItem('elements'))
renderElements()

function addElementToList () {
  // primer paso cpaturar elemento del input
  const inputRef = document.getElementById('input')
  //solo necesitamos el value
  const value = inputRef.value
  if (value.trim()) {
    elements.push(value)
    // console.log(elements)
    inputRef.value = ''
    renderElements()
    //agregarlo al locale storage
    //locale storage solo acepta strings o json se tiene que parsear
    localStorage.setItem('elements', JSON.stringify(elements))
  } else {
    alert('ingresa una tarea')
  }
}

function renderElements () {
  const container = document.getElementById('elements')
  container.innerHTML = ''
  for (const element of elements) {
    const item = document.createElement('li')
    item.className = 'list-group-item'
    item.addEventListener('click', e => {
      e.target.remove()
      const index = elements.findIndex(el => el === e.target.textContent)
      elements.splice(index, 1)
      localStorage.setItem('elements', JSON.stringify(elements))
    })
    item.textContent = element
    container.appendChild(item)
  }

  //agregando solo el ultimo elemento del input
  //   const lastElement = elements[elements.length - 1]
  //   const item = document.createElement('li')
  //   item.className = 'list-group-item'
  //   item.textContent = lastElement
  //   container.appendChild(item)
  const active = document.getElementById('active')
  active.textContent = `Activos: ${elements.length}`
}
