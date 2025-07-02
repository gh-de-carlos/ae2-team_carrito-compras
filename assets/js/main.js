console.log('Comenzando rutina del carrito de compra');

// para trabajar con valores hardcodeados y simular situaciones
// vamos a trabajar con una función comprar que probará los 
// casos solicitados.

// valores fijos para todos los casos
const nombreCliente = "Seba";
const listaProductos = obtenerProductos();
const descuento = 10;
const minMonto = 10000;
const maxProductos = 15;

// valor del carrito de compras
let totalCompra = 0;

// comprar simula una situación completa de compra.
// se simula un ciclo de valor random en el que el cliente
// agrega productos y podría quitar algunos.
// terminar define si completar el proceso de llenado 
// del carrito para comenzar la evaluación de las condiciones
function comprar(){
// limpiamos carrito
carrito = [];
// Parte 1 comprando
do {
  // simulamos la acción del usuario de:
  // agregar un producto al carrito
  const p = listaProductos[getRnd()];
  const q = getRnd(1);
  carrito.push({...p, cantidad: q});
  console.log(`Se ha(n) agregado ${q} ${p.nombre}`)
  
  // quitar o no el producto
  yOrN() ? quitarProducto() : 0;

  // en la condición se pregunta si terminar la compra o no
} while (terminarCompra())

  console.log("El carrito de compra es...");
  console.table(carrito);
  // Parte 2 evaluando condiciones
  // evalua si carrito vacio
  // se avisa al usuario y termina la ejecución
  if (carrito.length === 0) {
    console.log('El carrito está vacío. La compra ha terminado.');
    return;
  }
  // evalua si a) precio negativo b) cantidad 0
  // se avisa al usuario y se quitan del carrito
  const filtrado = carrito.filter(p => {
    if (p.precio < 1)
      console.log(`El producto ${p.nombre} tiene precio ${p.precio}. Será eliminado`);
    if (p.cantidad === 0)
      console.log(`El producto ${p.nombre} no puede tener ${p.cantidad} unidades. Será eliminado`);

    return (p.precio > 0 && p.cantidad > 0);
  })

  // calcula subtotal y cantidad de productos
  totalCompra = filtrado.reduce((a, b) => { 
    return a + (b.precio * b.cantidad);
  }, 0);
  const totalProductos = filtrado.reduce((a, b) => {
    return (a + b.cantidad);
  }, 0);
  console.log(totalCompra);
  console.log(totalProductos);
  // evalua si cantidad productos supera maximo
  // avisa usuario y termina ejecución
  if (totalProductos > maxProductos) {
    console.log(`Su compra tiene ${totalProductos} y supera el máximo de ${maxProductos}.\nLa compra será terminada.`);
    return;
  } 
  
  // evalua si monto total supera umbral de descuento
  // avisa usuario y aplica descuento
  let totalDescuento = 0;
  if (totalCompra > minMonto) {
    console.log(`Su compra es elegible para obtener un descuento del ${descuento}%.`);
    totalDescuento = (totalCompra * (descuento/100));
  }
  // presenta total real carro y total precio
  console.log(`Subtotal: \t\t$${totalCompra}\nDescuento: \t\t$${totalDescuento.toFixed(0)}\nTotal a pagar: \t$${(totalCompra - totalDescuento).toFixed(0)}`)
  console.log("******************************************************************")
};

/* =====================================
=            UTILIDADES                =
===================================== */
function terminarCompra() {
  if (yOrN(1)) {
    console.log("Ha finalizado de agregar productos.");
    return false;
  }

  return true;
}


function quitarProducto() {
  if (yOrN()) {
    const p = carrito.pop();
    console.log(`Se ha quitado el producto ${p.nombre}`)
  }
}

function yOrN(x) {
  // obtiene un valor 0 o 1 para decidir si terminar la 
  // compra o no, y también para quitar o no el último producto
  const q = Math.round(Math.random() * 2)
  // retorna el valor booleano de q (0 = false, 1 = true)
  // console.log(`yorn es ${q} === ${!!q}`)
  return !q;
}

function getRnd(max){
  // utilidad para obtener un valor aleatorio para las
  // las cantidades de productos, y
  max = max === 1 ? 5 : 20;
  return Math.floor(Math.random() * max);
}

function obtenerProductos(){
  return [
  { nombre: "Pan molde", precio: 1800 },
  { nombre: "Leche entera", precio: 1200 },
  { nombre: "Huevos (docena)", precio: 2800 },
  { nombre: "Queso mantecoso", precio: -3600 },
  { nombre: "Jamón de pavo", precio: 2500 },
  { nombre: "Arroz (1 kg)", precio: 1500 },
  { nombre: "Fideos spaghetti", precio: 1000 },
  { nombre: "Aceite vegetal (1L)", precio: 2800 },
  { nombre: "Azúcar (1 kg)", precio: 1350 },
  { nombre: "Sal fina", precio: 600 },
  { nombre: "Harina (1 kg)", precio: -1100 },
  { nombre: "Café instantáneo", precio: 3200 },
  { nombre: "Té (caja 20 bolsas)", precio: 900 },
  { nombre: "Detergente ropa (1L)", precio: 2500 },
  { nombre: "Papel higiénico (6 rollos)", precio: 2800 },
  { nombre: "Pasta de dientes", precio: -1300 },
  { nombre: "Shampoo", precio: 2700 },
  { nombre: "Manzanas (kg)", precio: 1900 },
  { nombre: "Plátanos (kg)", precio: 1200 },
  { nombre: "Tomates (kg)", precio: -1600 }
];
}