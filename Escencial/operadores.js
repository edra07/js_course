"use strict"

//*****************************
//**** Operadores de asignación

var datoA = 10;

//Asignación simple
var igual = datoA;
console.log("El resultado de la asignación simple es:"+ igual);

//Sumar y Asignar

var masIgual = 10;

masIgual += datoA;
//masIgual = masIgual + datoA;
console.log("El resultado de la asignación += simple es:" + masIgual)

//Restar y Asignar

var menosIgual = 10;
menosIgual += datoA;
console.log("El resultado de la asignación -= simple es:" + menosIgual);

//Multiplicar y Asignar

var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= simple es:" + porIgual);

//Dividir y Asignar

var entreIgual = 10;
entreIgual /= datoA;
console.log("El resultado de la asignación /= simple es:" + entreIgual);
