'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let middle = [];
  let rigth = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] === pivot) {
      middle.push(array[i]);
    } else if (array[i] > pivot){
      rigth.push(array[i]);
    }
  }

  return quickSort(left).concat(middle).concat(quickSort(rigth));

}

function conAndOrd(left,right){
  let i = 0;
  let j = 0;
  let result = [];

  while(i < left.length && j <right.length){
    if(left[i] < right[j]){
      result.push(left[i]);
      i++
    } else{
      result.push(right[j])
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;
  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);

  return conAndOrd(mergeSort(left),mergeSort(right))
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
