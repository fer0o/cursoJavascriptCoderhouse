const storageElements = localStorage.getItem('elements')
let elements = []
if (storageElements) {
  elements = JSON.parse(storageElements).map(entry => new Record(entry))
  renderElements()
} else {
  fetch('/newPrototipe/data.json')
    .then(response => response.json())
    .then(data => data.map(e => new Record(e)))
    .then(records => {
      elements = records
      renderElements()
    })
}

function Record ({ systolic, diastolic, date }) {
  this.systolic = systolic
  this.diastolic = diastolic
  this.date = date
}

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

  const entryData = new Record({
    systolic: valueSys,
    diastolic: valueDis,
    date: valueDate
  })
  elements.push(entryData)
  renderElements(elements)
  localStorage.setItem('elements', JSON.stringify(elements))
}

function getStatus ({ systolic, diastolic }) {
  if (systolic < 60 || diastolic < 60) {
    // console.log('Low levels, its necessary to visit a doctor your are hypotense')
    return 'Low'
  } else if (
    (systolic > 90 && systolic <= 120) ||
    (diastolic >= 60 && diastolic <= 80)
  ) {
    // console.log('Normal levels, Its not necessary to visit a doctir but still care')
    return 'Normal'
  } else if (
    (systolic >= 120 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    // console.log('You have risk levels of hypertension, you need to visit a doctor to confirm and treatment')
    return 'Risk'
  } else if (systolic > 140 || diastolic > 90) {
    // console.log('You have high levels, Its necessary to visit a doctor and have an property treatment')
    return 'High'
  } else {
    return 'invalid data'
  }
  return 'High'
}

function renderElements () {
  let classes = {
    High: 'high',
    Normal: 'normal',
    Low: 'low',
    Risk: 'risk'
  }

  const container = document.getElementById('elements')
  container.innerHTML = ''
  for (const element of elements) {
    //console.log(element)
    const item = document.createElement('li')

    item.textContent = `Systolic:${element.systolic} | Distolic:${element.diastolic} | Fecha: ${element.date}`
    item.className = `list-group-item ${classes[getStatus(element)]}`
    container.appendChild(item)
  }
}
