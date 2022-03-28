const productos = [
  {
    id: 1,
    titulo: 'iPhone',
    precio: 1000,
    stock: 5,
    descuento: 10
  },
  {
    id: 2,
    titulo: 'Xiaomi',
    precio: 200,
    stock: 6,
    descuento: 10
  },
  {
    id: 3,
    titulo: 'Samsung',
    precio: 800,
    stock: 7,
    descuento: 15
  },
  {
    id: 4,
    titulo: 'Motorola',
    precio: 300,
    stock: 10,
    descuento: 30
  }
]

productos.forEach(elemento => {
  console.log(elemento.titulo)
  console.log(
    `precio con descuento ${precioConDescuento(
      elemento.precio,
      elemento.descuento
    )}`
  )
})
function precioConDescuento (precio, descuento) {
  //logica para calcular precio final

  return precio - (precio * descuento) / 100
}
