// Dado el siguiente array, modifique el elemento en la posicion 3
let array1 = ["manzana", "banana", "cereza", "frutilla", "pera", "uva"];
let array1 = [4];
console.log(array1);

array1[3] = "sandia";
console.log(array1);

// Dado el siguiente array, elimine todos los elementos desde la posicion 2 en adelante
let array2 = ["manzana", "banana", "cereza", "frutilla", "pera", "uva"];

array2.splice();
array2.splice(2, array2.length, "sandia");
console.log(array2);

// Dado el siguiente array, elimine todos los elementos desde la posicion 2 hasta la posicion 4 inclusive
let array3 = ["manzana", "banana", "cereza", "frutilla", "pera", "uva"];
console.log(array3);

let posicionPera = array3.indexOf("pera");
array3 = array3.slice(1, 3);
array3.splice(2, posicionPera - 2);
console.log(array3);

// Dado el siguiente array, conviertalo en un string donde los elementos esten separados por guiones medios ej: xxxxxxx - xxxxxxx...
let array4 = ["manzana", "banana", "cereza", "frutilla", "pera", "uva"];
console.log(array4);

console.log(array4.toString());

string4 = array4.join(" - ");
console.log(string4);

// Cree una funcion que reciba dos arrays: uno de nombres y otro de apellidos y que devuelva en un solo string el nombre completo separando el/los nombre/s y el/los apellido/s respectivamente con un espacio, y separando el/los nombre/s del los apellido/s con una coma, comenzando por el/los apellido/s, coma y luego el/los nombre/s ej: xxxx xxxx, xxxx xxxxx xxxx o xxxxx, xxxxx xxxxx. Realizar las verificaciones necesarias para que en caso de haber solo un nombre o solo un apellido, el algoritmo funcione correctamente

let nombres = ["Juan", "Francisco"];
let apellidos = ["Moreno", "Vilches"];

function unirArray(array) {
  if (array.length > 1) {
    return array.join(" ");
  } else return array.toString();
}

function devolverNombres(arrayNombres, arrayApellidos) {
  let nombreCompleto;
  let apellidos;
  let nombres;
  apellidos = unirArray(arrayApellidos);
  nombres = unirArray(arrayNombres);
  nombreCompleto = `${apellidos}, ${nombres}`;
  return nombreCompleto;
}

//-----------------------------------------------------
const unirArray = (array) =>
  array.length > 1 ? array.join(" ") : array.toString();

const devolverNombres = (arrayNombres, arrayApellidos) =>
  `${unirArray(arrayApellidos)}, ${unirArray(arrayNombres)}`;

console.log(devolverNombres(nombres, apellidos));

// Dadas las siguientes variables, unirlas en un solo array ordenandolas alfabeticamente de manera descendente
let var1 = "manzana";
let var2 = "banana";
let var3 = "cereza";
let var4 = "frutilla";
let var5 = "pera";
let var6 = "uva";

let array5 = [var1, var2, var3, var4, var5, var6];
let array5 = new Array(var1, var2, var3, var4, var5, var6).sort().reverse();

console.log(array5);

// --------------------------------------------------------------------------
