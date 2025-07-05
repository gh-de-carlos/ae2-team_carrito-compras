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

1. blah...✅ ❓

## 📃 INSTRUCCIONES

1. ✅ Crea ....
// 3. Implemente diagrama de flujo simple ilustrando la
//>> lógica del programa y represente la toma de decisiones.
// 4. Presentar solución y explicar los siguientes puntos:
// 4.1 ¿Cómo evitaron errores en el uso de variables? 
// 4.2 ¿Qué beneficios se obtuvo del uso de objetos?
// 4.3 ¿Cómo manejaron una lógica clara y eficiente if/else? 
// 4.4 ¿Qué condiciones de borde fueron más desafiantes?

## REFLEXIÓN

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


## 📁 ESTRUCTURA DEL PROYECTO

```
📁 esta-carpeta/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    │   └── style.css  
    ├── 📁img/  
    ├── 📁js/  
    │   └── main.js
    └── 📁utils/  
        ├── mockuppng
        └── blablah
```

## 👀 NOTAS

- Joe Pino...

## 📖 DOCUMENTACIÓN CONSULTADA
* [][2]
* [][3]
* [][4]
* [][5]

## 🧰 UTILIDADES

* [][6]

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:
[2]:
[3]:
[4]:
[5]:
[6]:

