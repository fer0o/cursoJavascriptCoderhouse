// array vacio
const elementSys = []
const elementDis = []
const elementDate = []

//declarar funcion
function addElementToList () {
  //capturar el valor del input
  const inputSys = document.getElementById('sys')
  const inputDis = document.getElementById('dis')
  const inputDate = document.getElementById('date')

  const valueSys = inputSys.value
  const valueDis = inputDis.value
  const valueDate = inputDate.value

  if (valueSys.trim()) {
    elementSys.push(valueSys)
    //console.log(elementSys)
    renderElements()
  } else {
    alert('Falta valor systolico')
  }
  if (valueDis.trim()) {
    elementDis.push(valueDis)
    //console.log(elementDis)
  } else {
    alert('Falta valor distolico')
  }
  if (valueDate.trim()) {
    elementDate.push(valueDate)
  } else {
    alert('Falta fecha')
  }

  event.preventDefault()
}

function renderElements () {
  const container = document.getElementById('elements')
  const item = document.createElement('li')
  item.className = 'list-group-item'
  item.textContent = 'Hola mundo'
  item.appendChild(item)
}
