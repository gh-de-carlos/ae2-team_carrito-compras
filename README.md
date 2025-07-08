# <img src="favicon.svg" width=25/> Módulo 3 - AE2_ABPRO - "Carrito de compra" <img src="favicon.svg" width=25/>

![mockup o entrega del ejercicio][0]

## 😶‍🌫️ GRUPO 1 somos:
* Hernán Barrales
* Jorge Rodríguez
* Natalia Devia
* Sebastián Gallegos
* Carlos Pizarro

## 🚀 OBJETIVO

En este ejercicio individual, se debe ...

## 👉 REQUISITOS

### TODO copiar requerimientos acá.
1. blah...✅ ❓

## 📃 OTROS REQUISITOS:
 
1. ✅ Implemente diagrama de flujo simple ilustrando la lógica del programa y represente la toma de decisiones.

Abajo se observa un screenshot del diagrama que puedes revisar completo [**acá**](https://drive.google.com/file/d/1X4VOjS_AQ536Sqd5A2d0BKhNoRwlmu2b/view).

![Captura del diagrama][1]

2. ✅ Presentar solución y explicar los siguientes puntos:
    1. ¿Cómo evitaron errores en el uso de variables? 
    1. ¿Qué beneficios se obtuvo del uso de objetos?
    1. ¿Cómo manejaron una lógica clara y eficiente if/else? 
    1. ¿Qué condiciones de borde fueron más desafiantes?

## 🤔 REFLEXIÓN

### ¿Cómo evitaron errores en el uso de variables? 

En este caso, como un recurso didáctico se definieron en un
solo bloque al comienzo del código todas las variables que
eran relevantes para su ejecución, para hacerlas globales. Una
estrategia válida sería declarar este archivo como un module
dentro del elemento `<script src="path-to" type="module"></script>`
para que las variables sean globales sólo al scope del módulo,
pero para el objetivo de este ejercicio se consideró una buena
estrategia. 

### ¿Qué beneficios se obtuvo del uso de objetos?

Agrupar de forma consistente datos relacionados que de otra
manera tendrían que realizarse en muchas variables. Ejemplo:

```Javascript
const producto1 = {
  nombre: "Pan de molde",
  precio: 1200,
  cantidad: 10
}

producto1.nombre;     // "Pan de molde"
const subtotal = producto1.precio * producto1.cantidad;

// este código transmite de forma organizada y clara la 
// información que porta y nos permite trabajar con ella.
// Y en cambio, si quisiéramos manipular estos mismos datos
// sin un objeto tendríamos que realizar algo como: 

const producto1Nombre = "Pan de molde";
const producto1Precio = 1200;
const producto1Cantidad = 10;

// ahora, aunque podemos realizar las mismas operaciones, 
// debemos estar concientes y pendientes de todas las variables
// que crearemos, además de que si escalamos esta situación
// a 20 productos, se vuelve un caos. En un solo concepto
// muy importante, los objetos proveen un ESPACIO DE NOMBRES,
// un prefijo desde el que podemos invocar muchos datos sin
// colisionar con otros objetos que almacenan datos similares
// incluso si estos se llaman igual dentro de cada objeto.
```

### ¿Cómo manejaron una lógica clara y eficiente if/else?

El ejercicio mismo no requiere manejar una lógica eficiente
porque no presenta bifurcaciones de lógica: no hay situaciones
en el requerimientos en que necesitamos decidir qué haremos 
SI sucede A y qué SI sucede B. Todas son validaciones que
implican realizar algo solo cuando sucede A y si no, siguen
el flujo regular del proceso.

### ¿Qué condiciones de borde fueron más desafiantes?

Ninguna. Todas son evaluaciones directas de un solo valor, 
sin evaluaciones booleanas compuestas.


## 📁 ESTRUCTURA GENERAL DEL PROYECTO

```
📁 m3.2.t-carrito/  
├── README.md  
├── index.html  
├── favicon.png  
├── .gitignore  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    ├── 📁js/  
    └── 📁utils/  
```

## 👀 NOTAS

- Se ha implementado una pequeña función que emite mensajes al usuario para liberar la vista del programa de `console.log`'s muy largos. Los mensajes tienen nombres que indican claramente cuál es el tipo de mensaje que se le dará al usuario en cada momento del flujo del programa y está completamente documentada en el código mismo.
- Se han utilizado comentarios en modo _verbose_ para apoyarnos como equipo y que los que no trabajaron tanto en una parte puedan aprender de lo que hicieron los demás.

## 📖 DOCUMENTACIÓN CONSULTADA
* No aplica en esta ocasión.

## 🧰 UTILIDADES

* Nada por acá.

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:./assets/utils/screenshot-diagram.png
<!-- [2]: -->

