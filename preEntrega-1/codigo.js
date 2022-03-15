// 90/60 mmHg y 120/80 mmHg

let data = [
  {
    systolic: 100,
    diastolic: 80,
    date: '2022-03-08'
  },
  {
    systolic: 120,
    diastolic: 89,
    date: '2022-03-07'
  },
  {
    systolic: 122,
    diastolic: 80,
    date: '2022-03-06'
  },
  {
    systolic: 80,
    diastolic: 60,
    date: '2022-02-07'
  },
  {
    systolic: 100,
    diastolic: 80,
    date: '2022-02-19'
  },
  {
    systolic: 130,
    diastolic: 86,
    date: '2022-01-28'
  },
  {
    systolic: 90,
    diastolic: 80,
    date: '2022-03-01'
  },
  {
    systolic: 120,
    diastolic: 89,
    date: '2021-12-24'
  },
  {
    systolic: 60,
    diastolic: 55,
    date: '2021-12-24'
  },
  {
    systolic: 141,
    diastolic: 90,
    date: '2021-12-24'
  }
]

function Record (systolic, diastolic, date) {
  this.systolic = systolic
  this.diastolic = diastolic
  this.date = date
}

data = data.map(
  record => new Record(record.systolic, record.diastolic, record.date)
)

// const sys = parseInt(prompt('enter systolic value'))

// const dis = parseInt(prompt('enter diastolic value'))

// const datePrompt = prompt(
//   'enter the date to register with this format YYYY-MM-DD'
// )

function validation () {
  const sys = document.getElementById('sys').value
  const dis = document.getElementById('dis').value
  const datePrompt = document.getElementById('datePrompt').value

  const registerPrompt = new Record(sys, dis, datePrompt)
  // console.log(registerPrompt)

  const allData = data.concat(registerPrompt)
  // console.log(allData)

  const status = (systolic, diastolic) => {
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
  }
  const lowStatus = allData.filter(
    record => status(record.systolic, record.diastolic) === 'Low'
  )
  console.log(lowStatus)
  const textNodeLowStatus = document.createTextNode(JSON.stringify(lowStatus))
  document.getElementById('result').appendChild(textNodeLowStatus)

  const normalStatus = allData.filter(
    record => status(record.systolic, record.diastolic) === 'Normal'
  )
  console.log(normalStatus)
  const textNodeNormalStatus = document.createTextNode(
    JSON.stringify(normalStatus)
  )
  document.getElementById('result').appendChild(textNodeNormalStatus)

  const highStatus = allData.filter(
    record => status(record.systolic, record.diastolic) === 'Risk'
  )
  console.log(highStatus)
  const textNodeHighStatus = document.createTextNode(JSON.stringify(highStatus))
  document.getElementById('result').appendChild(textNodeHighStatus)

  const riskStatus = allData.filter(
    record => status(record.systolic, record.diastolic) === 'High'
  )
  console.log(riskStatus)
  const textNodeRiskStatus = document.createTextNode(JSON.stringify(riskStatus))
  document.getElementById('result').appendChild(textNodeRiskStatus)
  event.preventDefault()
}
