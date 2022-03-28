// array vacio
// const elementSys = []
// const elementDis = []
// const elementDate = []
const elements = []

//declarar funcion
function addElementToList () {
  //capturar el valor del input
  const inputSys = document.getElementById('sys')
  const inputDis = document.getElementById('dis')
  const inputDate = document.getElementById('date')

  const valueSys = inputSys.value
  const valueDis = inputDis.value
  const valueDate = inputDate.value
  event.preventDefault()

  if (!valueSys.trim()) {
    alert('Falta valor systolico')
    return
  }
  if (!valueDis.trim()) {
    alert('Falta valor distolico')
    return
  }
  if (!valueDate.trim()) {
    alert('Falta fecha')
    return
  }
  const entryData = {
    systolic: valueSys,
    diastolic: valueDis,
    date: valueDate
  }
  elements.push(entryData)
  renderElements()
}

function renderElements () {
  //   const container = document.getElementById('elements')
  //   const item = document.createElement('li')
  //   item.className = 'list-group-item'
  //   container.appendChild(item)
  const container = document.getElementById('elements')
  for (const element of elements) {
    console.log(element)
    const item = document.createElement('li')
    item.textContent = `Systolic:${element.systolic} | Distolic:${element.diastolic} | Fecha: ${element.date}`
    item.className = 'list-group-item'
    container.appendChild(item)
  }
}
