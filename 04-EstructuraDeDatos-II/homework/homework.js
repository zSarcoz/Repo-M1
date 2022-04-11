'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular
/*  de una lista de un solo nodo y de una lista vacía)
 */// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  //creamos un nuevo nodo
  var node = new Node(value);
  //creamos un almacenamiento de la posicion, como un puntero actual, usaremos el dato!
  var current = this.head;

  //--- Si esta vacio guarda el primer dato ---
  //si esta vacio va a guardar el nodo que creamos
  if(!current){
    //guarda el nodo en el head, cabecera de mi lista
    this.head = node;
    //suma el contador de nodos
    this._length++;
  } else {

  //--- bloque para recorrer todos los nodos existentes hasata llegar al final ---
  //recorre con un while, preguntando si en current.next tengo un nodo, si lo tiene sigo recorriendo el proximo nodo
    while(current.next){
    //como lo tiene, mi nuevo valor de current es el proximo nodo
      current = current.next;
    }
  //termino de recorrer el while, osea que encontro el ultimo nodo
  //ahora se gaurda el valor de la ultima posicion para usarlo para guardar mi proximom nodo
    current.next = node;
    this._length++;
  }
};




LinkedList.prototype.remove = function () {
  let current = this.head;
  
  //if(!current) return null;
  if(this._length === 0) return null

  //if(!current.next)
  if(this._length === 1){
    let lastValue = this.head.value;
    this.head = null;
    this._length--;
    return lastValue;
  }

  while(current.next.next){
    current = current.next;
  }
  //caundo llegue aca es porque el current esta en la anteultima posicion
  let lastValue = current.next.value;
  current.next = null
  this._length--;
  return lastValue;
  
}


LinkedList.prototype.search = function (arg) {
  let current = this.head;

  if(!this.head)return null;
  while(current){
    if(current.value === arg) return current.value; //return value;
    
    else if(typeof arg === 'function'){
      if(arg(current.value)){
        return current.value;
      }
    }
    current = current.next;
  }
  return current;
}



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){
  let sum  = 0;
  for(let i = 0; i < key.length; i++){
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}

HashTable.prototype.set = function(key,value){
  if(typeof key !== 'string') throw new TypeError ('Keys must be strings');

  // me devuelve el valor del modulo de la funcion hashfanshion
  let index = this.hash(key);

  //si no hay nada en esa posicion, crea la clase contenedora en esa posicion
  if(!this.buckets[index]){
    this.buckets[index] = {};
  }

  //guarda el valor en la posicion [{key1: value1 , key2: value2}]
  this.buckets[index][key] = value;
}

HashTable.prototype.get = function(key){
  let index = this.hash(key);
  //si esta devuelve el valor, sino lo encvuentra devuelve null 
  return this.buckets[index][key];

}

HashTable.prototype.hasKey = function(key){

  let index = this.hash(key);
  // !!  = me da valores booleanos de los valores y no los datos del elemento
  return !!this.buckets[index][key];
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
