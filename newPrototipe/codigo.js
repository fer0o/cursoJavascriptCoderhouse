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
  // metodo notifyStatus
  const status = getStatus(entryData)
  if (status === 'Low') {
    Swal.fire({
      icon: 'error',
      title: 'Nivel de Presion Baja',
      text: 'Recomendable ver indormacion del registro'
    })
  } else if (status === 'Normal') {
    Swal.fire({
      title: 'Nivel de Presion Normal',
      text: 'Sigue cuidandote, ver información de registro para recomendaciones'
    })
  } else if (status === 'Risk') {
    Swal.fire({
      icon: 'error',
      title: 'Presion en Riesgo de prehipertensión',
      text:
        'Recomendaciones en información de registro, sugerencia visitar a un médico'
    })
  } else if (status === 'High') {
    Swal.fire({
      icon: 'error',
      title: 'Niveles altos (Hipertensión)',
      text:
        'Recomendaciones en informe de registro, sugerencia visitar a tu médico lo antes posible'
    })
  }
}

function getStatus ({ systolic, diastolic }) {
  if (systolic < 60 || diastolic < 60) {
    return 'Low'
  } else if (
    (systolic > 90 && systolic <= 120) ||
    (diastolic >= 60 && diastolic <= 80)
  ) {
    return 'Normal'
  } else if (
    (systolic >= 120 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    return 'Risk'
  } else if (systolic >= 140 || diastolic >= 90) {
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

    const item = document.createElement('td')
    const item2 = document.createElement('td')
    const item3 = document.createElement('td')
    item.textContent = element.systolic
    item2.textContent = element.diastolic
    item3.textContent = element.date
    const tr = document.createElement('tr')
    tr.className = `${classes[getStatus(element)]}`
    tr.appendChild(item)
    tr.appendChild(item2)
    tr.appendChild(item3)

    container.appendChild(tr)
    const status = getStatus(element)
    tr.addEventListener('click', () => {
      hideDiv.style.display = 'none'
      hideDiv2.style.display = 'none'
      hideDiv3.style.display = 'none'
      hideDiv4.style.display = 'none'
      if (status === 'Low') {
        hideDiv.style.display = 'block'
      } else if (status === 'Normal') {
        hideDiv2.style.display = 'block'
      } else if (status === 'Risk') {
        hideDiv3.style.display = 'block'
      } else if (status === 'High') {
        hideDiv4.style.display = 'block'
      }
    })
  }
}

// esconder la info cuando se apriete el boton de cerrado
const toggleBtn = document.querySelector('#toggleBtn')
const hideDiv = document.querySelector('.presion-baja')

toggleBtn.addEventListener('click', () => {
  if (hideDiv.style.display === 'none') {
    hideDiv.style.display = 'block'
  } else {
    hideDiv.style.display = 'none'
  }
})
const toggleBtn2 = document.querySelector('#toggleBtn2')
const hideDiv2 = document.querySelector('.presion-normal')

toggleBtn2.addEventListener('click', () => {
  if (hideDiv2.style.display === 'none') {
    hideDiv2.style.display = 'block'
  } else {
    hideDiv2.style.display = 'none'
  }
})

const toggleBtn3 = document.querySelector('#toggleBtn3')
const hideDiv3 = document.querySelector('.presion-riesgo')

toggleBtn3.addEventListener('click', () => {
  if (hideDiv3.style.display === 'none') {
    hideDiv3.style.display = 'block'
  } else {
    hideDiv3.style.display = 'none'
  }
})

const toggleBtn4 = document.querySelector('#toggleBtn4')
const hideDiv4 = document.querySelector('.presion-alta')

toggleBtn4.addEventListener('click', () => {
  if (hideDiv4.style.display === 'none') {
    hideDiv4.style.display = 'block'
  } else {
    hideDiv4.style.display = 'none'
  }
})
