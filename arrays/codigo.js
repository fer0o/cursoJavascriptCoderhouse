document.write('arrays')

// let nombreArray = []
// nombreArray.push(prompt('Escriba su nombre'))

// console.log(nombreArray)

// const numeros = [1, 2, 3, 4, 5]
// for (let index = 0; index < numeros.length; index++) {}

// numeros.shift()
// console.log(numeros)

let data = [
  {
    name: 'Israel',
    lastname: 'Salinas Martínez',
    role: 'Front-End Engineer',
    age: 32,
    address: {
      street: 'San simón',
      extNumber: '45',
      intNumber: '7',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'Mexico'
    },
    skills: ['CSS', 'JS', 'HTML', 'ReactJS', 'NextJS', 'JQuery']
  },
  {
    name: 'Ruben',
    lastname: 'Medellin Cuevas',
    role: 'Full Stack Engineer',
    age: 34,
    address: {
      street: 'Ghilardi',
      extNumber: '802',
      intNumber: '',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico'
    },
    skills: ['JS', 'HTML', 'ReactJS', 'NodeJS', 'MongoDB']
  },
  {
    name: 'Gustavo',
    lastname: 'Martínez',
    role: 'Front-End Engineer',
    age: 30,
    address: {
      street: 'Poniente',
      extNumber: '2511',
      intNumber: '7',
      city: 'Puebla',
      state: 'Pueba',
      country: 'Mexico'
    },
    skills: ['CSS', 'JS', 'HTML', 'ReactJS', 'NextJS', 'GraphQL']
  },
  {
    name: 'Alfonso',
    lastname: 'Velasco Ramirez',
    role: 'Backend Engineer',
    age: 29,
    address: {
      street: 'Acueducto',
      extNumber: '656',
      intNumber: '',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico'
    },
    skills: ['AWS', 'JS', 'HTML', 'ReactJS', 'SQL', 'JQuery']
  },
  {
    name: 'Gerardo',
    lastname: 'Velazco',
    role: 'Project Manager jr',
    age: 30,
    address: {
      street: 'Providencia',
      extNumber: '766',
      intNumber: '12',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'Mexico'
    },
    skills: ['SCRUM', 'Kanban', 'Jira', 'Confluence']
  }
]

// console.log(data)
// let names = data.map(entry => entry.name)
// console.log(names)
for (element of data) {
  if (element.name === 'Ruben') {
    console.log('Hay un elemento')
  } else {
    console.log('No encontre nada')
  }
}

// let nombre = [
//   {
//     name: 'Pedro'
//   },
//   {
//     name: 'Juancho'
//   },
//   {
//     name: 'Pelonchio'
//   }
// ]
// let nombre2 = prompt('escriba su nombre')
// nombre.push({ name: `${nombre2}` })
// console.log(nombre)
