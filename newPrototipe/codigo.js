const storageElements = localStorage.getItem('elements')
let elements = []
if (storageElements) {
  elements = JSON.parse(storageElements)
}
renderElements()

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
    // alert('Falta valor systolico')

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Falta valor systolico!'
    })
    return
  }
  if (!valueDis.trim()) {
    // alert('Falta valor distolico')

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Falta valor distolico!'
    })
    return
  }
  if (!valueDate.trim()) {
    // alert('Falta fecha')

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Dato de fecha incorrecta!'
    })
    return
  }
  const entryData = {
    systolic: valueSys,
    diastolic: valueDis,
    date: valueDate
  }
  elements.push(entryData)
  renderElements()
  localStorage.setItem('elements', JSON.stringify(elements))
}

function renderElements () {
  const container = document.getElementById('elements')
  container.innerHTML = ''
  for (const element of elements) {
    //console.log(element)
    const item = document.createElement('li')
    item.textContent = `Systolic:${element.systolic} | Distolic:${element.diastolic} | Fecha: ${element.date}`
    item.className = 'list-group-item'
    container.appendChild(item)
  }
}
