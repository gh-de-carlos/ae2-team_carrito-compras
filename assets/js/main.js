"use strict"
/* =====================================
=          CARRITO DE COMPRA           =
===================================== */

/**
 * @author GRUPO 1 (the real one)
 * Natalia Devia
 * Sebastián Gallegos
 * Hernán Barrales
 * Jorge Rodríguez
 * Carlos Pizarro 
 */

/* =====================================
=              CONTEXTO                =
===================================== */
// El siguiente código simula acciones relacionadas a un
// carrito de compras. Se agregan productos en cantidades
// relativamente aleatorias, se quitan productos del carro
// y finalmente se evalúan una serie de condiciones borde
// mostrando mensajes al usuario, para terminar mostrando
// el costo total de la compra y el descuento aplicado si
// corresponde según las reglas de negocio definidas.

/* =====================================
=              OBJETIVOS               =
===================================== */
// - Practicar declaración de variables con const y let
// - Aplicar buenas prácticas de nombrado en las variables
// - Usar if para modificar el control de flujo del programa
// - Manipular tipos simples y complejos según se requiera
// - Controlar el scope de las variables usando funciones(1)
// - Usar operadores ariméticos aplicando precedencia.

/* =====================================
=            REQUERIMIENTOS            =
===================================== */
// DECLARE VARIABLES PARA 
// 1. ✅ Nombre del cliente
// 2. ✅ Un carrito de productos (arreglo de objetos)
// 2.1 Cada objeto debe tener nombre/cantidad/precio
// 3. ✅ Total de la compra
// 4. ✅ Descuento aplicado

// OTRAS VARIABLES RELEVANTES IMPLÍCITAS EN EL ENUNCIADO
// 1. ✅ const para umbral de descuento (10000)
// 2. ✅ const para máximo de productos en carrito (10)
// 3. ✅ const para la tasa de descuento (10)
// 4. ✅ const para subtotal
// 5. ✅ const para cant. máx. a agregar de un prod. por vez (4)

// USO DE IF [ELSE] PARA
// 2. ✅ Controle caso borde: carrito está vacío
// 3. ✅ Controle caso borde: monto supera límite (descuento)
// 4. ✅ Controle caso borde: precios < 1 o cantidad inválida

// MENSAJES AL USUARIO
// 0. Saludar al usuario
// 1. Se ha agregado producto
// 2. Se ha quitado producto
// 3. Productos no cumplen condiciones (precio/cantidad)
// 4. Es elegible para obtener un descuento de ${dRate}
// 5. Carrito está vacío.
// 6. Mostrar totales
// 7. Despedida del usuario.

// OTRAS
// 1. Simule: agregar/quitar productos y terminar compra.
// 2. Aplique nombres significativos a las variables.
// 3. Implemente diagrama de flujo simple ilustrando la
//>> lógica del programa y represente la toma de decisiones.
// 4. Presentar solución y explicar los siguientes puntos:
// 4.1 ¿Cómo evitaron errores en el uso de variables? 
// 4.2 ¿Qué beneficios se obtuvo del uso de objetos?
// 4.3 ¿Cómo manejaron una lógica clara y eficiente if/else? 
// 4.4 ¿Qué condiciones de borde fueron más desafiantes?

/* =====================================
=                CóDIGO                =
===================================== */

// Se crean las variables expresamente solicitadas y además
// aquellas que se deducen del enunciado de la actividad.
// NOTA: se han utilizado nombres semánticamente relevantes
// pero en inglés, apuntando a un balance entre expresividad
// y brevedad para mejorar la legibilidad del código
const customer = getCustomerName();     // el cliente
const catalog = obtenerProductos();     // el catálogo
const discountRate = 10;                // tasa de descuento
const minOrderForDiscount = 10000;      // compra mínima para descuento
const cartMaxProd = 10;                 // máximo de productos por compra
const maxQtyPerProd = 4;                // cantidad máx por produtos x vez
const carrito = [];                     // nuestro carrito de compras
let totalPurchase = 0;                  // total compra
let totalProducts = 0;                  // cant de productos en el carrito
let discount = 0;                       // el descuento a aplicar

// TODO msg.salute(nombreCliente)
console.log(`Bienvenido ${customer}`);

// Esta función es una función de efecto secundario que 
// realiza la simulación del proceso de compra así como 
// solicita la pauta del ejercicio. Se agrega un artículo a
// la vez, se decide si quitarlo o no, y se decide terminar
// la compra, todo en base a valores aleatorios para poder
// ejecutar la función repetidamente y obtener siempre un
// resultado distinto que ilustra alguno de los requisitos
// del ejercicio, y en particular, el control de los casos
// borde solicitados en la pauta. Además, para cada acción
// relevante se entregan mensajes al usuario a través de una
// pequeña factoría de mensajes, que quita las strings de
// los console.log del flujo para enfocarse en la lógica.

/**
 * rutina (función) que simula el proceso de compras.
 * Agregar productos, quita productos, termina la compra y
 * entrega mensajes al usuario-comprador. 
 * @returns {undefined} Sin retorno explícito.
 */
function comprar() {
  // A COMPRAAAAR!! 
  // hacemos un loop para agregar productos al carrito
  do {
    // agregar un producto al carrito
    const p = catalog[getRnd(catalog.length)];
    // elegimos la cantidad a agregar del producto
    const q = getRnd(maxQtyPerProd);
    // ponemos el producto en el carrito con push más spread
    // operator para hacer manipulación de objetos y le
    // informamos al usuario de la operación realizada.
    carrito.push({ ...p, cantidad: q });
    console.log(`Se ha(n) agregado ${q} ${p.nombre}`)
    // TODO msg.productAdd(q, p.nombre)

    // como debemos simular el comportamiento de un comprador
    // decidimos a la suerte si quitar o no el producto
    if (yOrN()) quitarProducto();

    // decidimos si dejar de agregar productos o agregar otro
  } while (terminarCompra())

  // el comprador ha terminado de agregar productos al carrito
  // por lo que ahora le informamos cuál es su carrito inicial
  // según la pauta, este puede contener condiciones borde como:
  // estar vacío => finalizar compra
  // tener productos con precio negativo => quitar producto
  // tener productos con cantidad 0 => quitar producto
  // por lo que ahora debemos evaluar esas condiciones para
  // limpiar el carrito o terminar la compra según el caso
  console.log("El carrito de compra es...");
  // TODO msg.showOriginalCart(carrito);
  console.table(carrito);

  // ¿El carrito está vacío? avisa al usuario y termina la compra
  if (carrito.length === 0) {
    console.log('El carrito está vacío. La compra ha terminado.');
    // TODO msg.warnEmptyCart();
    return;
  }
  // ¿El carrito tiene productos con precio negativo o con 
  // cantidad = 0? Avisamos de ello y quitamos el producto
  // esta función retorna el carrito sanitizado para poder
  // continuar con el cálculo de totales y descuento.
  const filtrado = carrito.filter(p => {
    if (p.precio < 1)
      console.log(`El producto ${p.nombre} tiene precio ${p.precio}. Será eliminado`);
    // TODO msg.warnRemoveProdNegPrice(p.nombre, p.precio)   
    if (p.cantidad === 0)
      console.log(`El producto ${p.nombre} no puede tener ${p.cantidad} unidades. Será eliminado`);
    // TODO msg.warnRemoveProdZeroQty(p.nombre, p.cantidad)   

    return (p.precio > 0 && p.cantidad > 0);
  })

  // Ahora si, con un carrito corregido, usamos reduce para 
  // obtener el subtotal de la compra y la cantidad de 
  // artículos en el carrito.
  totalPurchase = filtrado.reduce((a, b) => {
    return a + (b.precio * b.cantidad);
  }, 0);

  totalProducts = filtrado.reduce((a, b) => {
    return (a + b.cantidad);
  }, 0);

  // Ahora, evaluamos si la cantidad de productos supera el
  // máximo, tal como sugiere la pauta. Como la pauta no dice`
  // qué hacer cuando sucede esta condición, se ha decidido
  // terminar la compra. Otra opción es eliminar productos,
  // pero se ha elegido "cortar por lo sano". Avisa al usuario
  if (totalProducts > cartMaxProd) {
    console.log(`Su compra tiene ${totalProducts} y supera el máximo de ${cartMaxProd}.\nLa compra será terminada.`);
    // TODO msg.warnQtyOverflow(totalProductos, maxProductos);
    return;
  }

  // Evaluamos si el monto de la compra supera el umbral de
  // descuento, avisa usuario y aplica descuento
  if (totalPurchase > minOrderForDiscount) {
    console.log(`Su compra es elegible para obtener un descuento del ${discountRate}%.`);
    // TODO msg.infoDiscount(totalDescuento)
    discount = (totalPurchase * (discountRate / 100));
  }
  // Finalmente, presentamos el carrito de compra filtrado
  // cant. productos, subtotal, descuento aplicado y total
  console.log(`Subtotal: \t\t$${totalPurchase}\nDescuento: \t\t$${discount.toFixed(0)}\nTotal a pagar: \t$${(totalPurchase - discount).toFixed(0)}`)
  // TODO msg.showTotals(totalCompra, totalDescuento);
  console.log(`Adios ${customer}, no vuelva nunca más.`);
};

/* =====================================
=            UTILIDADES                =
===================================== */
/**
 * Elige aleatoriamente el nombre de un cliente 
 * desde un array con distintas opciones.
 * @returns {string} el nombre de un cliente
*/
function getCustomerName() {
  const customers = ['Carlos', 'Hernán', 'Jorge', 'Nati', 'Seba'];
  return customers[getRnd('C')];
}
/**
 * Esta función retorna un entero elegido de forma aleatoria
 * El parámetro val recibe el valor máximo + 1 que puede
 * retornar la función. Los rangos actuales están definidos
 * según la función que la invoca o utiliza y actualmente son:
 * getCustomerName() -> el largo del arreglo customers (5)
 * p = catalog[] -> pasa el largo del arreglo catalog (20)
 * q -> pasa maxQtyPerProd (4);
 * TODO continuar acá con valores
 * @param {number} val - El techo del rango [0:val] solicitado. Default 0.
 * @returns {number} un entero dentro del rango [0:val]
 */
function getRnd(val = 0) {
  return Math.floor(Math.random() * val);
}

/**
 * Esta función determina si la función comprar() terminará el proceso
 * de agregar productos o continuará con uno más. Utiliza a su vez la
 * función yOrN() para "tirar una moneda" y enviar un mensaje de usuario
 * @returns {boolean} que es utilizado para dejar de agregar productos
 */
function terminarCompra() {
  if (yOrN()) {
    console.log("Ha finalizado de agregar productos.");
    // TODO msg.cartFinished();
    return false;
  }
  
  return true;
}

/**
 * Esta función, de manera similar a la anterior, "tira una moneda"
 * haciendo uso de yOrN() para decidir si quitar el último producto
 * agregado o no simulando a un comprador indeciso. Es una función
 * de efecto secundario sin retorno, sólo muestra un mensaje al usuario
 * y elimina el último producto agregado usando Array.pop()
 * @returns {undefined} sin retorno explícito
*/
function quitarProducto() {
  if (yOrN()) {
    const p = carrito.pop();
    console.log(`Se ha quitado el producto ${p.nombre}`)
    // TODO msg.popLastProd();
  }
}

/**
 * Esta función hace uso de la cualidad de ser truthy o falsy
 * de los valores en Javascript para lanzar una moneda con 
 * posibilidades calibradas. En este caso se estable la
 * posibilidad de que el valor generado sea 0, 1 ó 2 a través
 * del valor default de su parámetro, pero puede ser pasado
 * para probar diferentes comportamientos. Luego la decisión
 * se produce al forzar el número generado a un valor booleano.
 * Por las reglas de truthiness de JS, 1 y 2 retornarán un true,
 * mientras que 0 retornará un false. En el retorno, este valor
 * es negado con ! para otorgar más posibilidades de seguir
 * comprando y mantener el producto en el carro que 
 * de terminar / eliminarlo.
 * @param {number} x - un valor que cambia el ratio win/lose 
 * @returns {boolean} q 
 */
function yOrN(x = 2) {
  const q = Math.round(Math.random() * x)
  return !q;
}

/**
 * Esta función es una utilidad que retorna un arreglo de 
 * objetos que representan cada uno un producto con nombre y
 * precio unitario.
 * @returns un arreglo con objetos que representan productos
 */
function obtenerProductos() {
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

/**
 * TODO factoría en desarrollo
 * @returns {string} un mensaje de usuario
 */
function messages() {
  return {
    salute: (name) => console.log(`Bienvenido ${name}`),
    productAdd: (q, p) => console.log(`Bienvenido ${name}`),
    showOriginalCart: (cart) => console.table(cart),
    showCleansedCart: (cleansedCart) => console.table(cleansedCart),
    warnEmptyCart: () => console.log(`El carrito está vacío. La compra será finalizada`),
    warnRemoveProdNegPrice: (name, price) => console.log(`El producto ${name} tiene precio ${price}. Será eliminado`),
    warnRemoveProdZeroQty: (name, qty) => console.log(`El producto ${name} no puede tener ${qty} unidades. Será eliminado`),
    warnQtyOverflow: (qty, max) => console.log(`Su compra tiene ${qty} y supera el máximo de ${max}.\nLa compra será terminada.`),
    infoDiscount: (discount) => console.log(`Su compra es elegible para obtener un descuento del ${discount}%.`),
    showTotals: (total, discount) => console.log(`Subtotal: \t\t$${totalPurchase}\nDescuento: \t\t$${total.toFixed(0)}\nTotal a pagar: \t$${(total - discount).toFixed(0)}`),
  }
}