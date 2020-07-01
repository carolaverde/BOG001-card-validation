# Agencia de Viajes: Turiscol

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Interfaz de usuario (UI)](#4-interfaz-de-usuario)


***

## 1. Preámbulo

Para el desarrollo de este proyecto utilizamos el algoritmo de Luhn, el cual nos ayudo para la verificación de la tarjeta de crédito; como tambien se aplico el proceso de convertir un string a un array para poder aplicar dicho algoritmo, el proceso de uso de comandos GIT y la actualización de un repositorio en la página github.



## 2. Resumen del proyecto
 
 En este proyecto se desarrollo una página web para una agencia de viajes: Turiscol, la cual busca incentivar el turismo en Colombia una vez el gobierno permita el desplazamiento por el pais. El grupo objetivo son hombres y mujeres mayores de edad, que deseen viajar y  tengan una tarjeta de credito  disponible para la compra, la cual pueden hacerla desde la comodidad de su casa, brindandole al usuario la tranquilidad de una compra segura debido al óptimo manejo de datos con el enmascarado en el número de tarjeta de crédito.

## 3. Objetivos de aprendizaje

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario
* [x] Crear prototipos para obtener feedback e iterar
* [x] Aplicar los principios de diseño visual

### HTML y CSS

* [x] Uso correcto de HTML semántico
* [x] Uso de selectores de CSS
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores de nodos del DOM
* [ ] Manejo de eventos del DOM
* [ ] Manipulación dinámica del DOM

### Javascript

* [ ] Manipulación de strings
* [x] Uso de condicionales
* [ ] Uso de bucles
* [ ] Uso de funciones
* [ ] Datos atómicos y estructurados
* [ ] Utilizar ES Modules (`import` | `export`).

### Testing

* [x] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)

### Git y GitHub

* [x] Comandos de git (`add` | `commit` | `pull` | `status` | `push`).
* [x] Manejo de repositorios de GitHub (`clone` | `fork` | `gh-pages`).

### Buenas prácticas de desarrollo

* [ ] Organizar y dividir el código en módulos (Modularización).
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica).
* [ ] Uso de linter para seguir buenas prácticas (ESLINT).



## 4. Interfaz de usuario (UI)

La interfaz le permite al usuario ingresar el número de la tarjeta de crédito el cual queremos validar; en el proceso de validación esta arrojara el mensaje si es válida o no y al mismo tiempo se ocualtara los números de tarjeta menos los cuatro últimos caracteres.

### UX (Diseño de experiencia de usuario)

* Se realizo el primer sketch a lápiz, el cual constaba de 4 vistas:

     - La primera vista es el index, en donde el usuario encontrara un banner sobre los sitios turisticos que maneja la agencia de viajes, dos fotos mas pequeñas y al frente de estas, textos explicativos de los sitios, con su respectivo botón para ampliar información.

     - Segunda vista, es la página de apoyo, donde se amplia la información del sitio seleccionado acompañado de fotos, tambien encontramos el precio total del plan y botón de compra.

     - Tercera vista, es la página de compra  y formulario de validación, en donde se solicita al usario el ingreso de número de tarjeta de crédito; por medio de mensaje se informara si el número ingresado es válido o no, como también la funcion de ocultar los número de la tarjeta con excepción de los 4 últimos caracteres.

     - Cuarta vista, página de agradecimiento por la compra y fotos y textos con sitios de interes al lugar donde eligio viajar. 

![Sketch Inicial](/BOG001-card-validation/imgreadme/prototipoagencia1.jpg)

* Luego de recibir feedback, se realizó el prototipo final.

![Prototipo](/BOG001-card-validation/imgreadme/prototipoagencia1.jpg)

* Al revisar los principios básicos de diseño y al hacer benchmarking fuimos conscientes que la página no presentaba todos los requerimientos para los usuarios y se decide  cambiar la cantidad de vistas a dos, permitiendo una mejora en el manejo de estetica y tiempo de lectura del usuario, permitiendo que el proceso de selección de plan de viaje y compra sea ágil.

  - Primera vista o Index, se encuentra  en el header banner con información de contacto. Luego se tiene un banner con foto y dentro de este dos cajas de selección que permiten escoger las fechas de salida y llegada.
  En el main esta la información relevante, en donde se encuentra foto y cuatro planes turisticos con botón de compra.

- Segunda vista, se encuentra la página de compra y validación de la tarjeta de crédito con los requerimientos del proyecto.

![Prototipo](/BOG001-card-validation/imgreadme/prototipoagenciafinal1.jpg)

![Prototipo](/BOG001-card-validation/imgreadme/prototipoagenciafinal2.jpg)



  
  
  
  
  


