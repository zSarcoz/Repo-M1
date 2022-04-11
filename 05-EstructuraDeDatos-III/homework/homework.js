'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(info){
  let newTree = new BinarySearchTree(info);
  
  if(info < this.value){
    if(!this.left) return this.left = newTree;
    else this.left.insert(info)
  }

  if(info >= this.value){
    if(!this.right) return this.right = newTree;
    else return this.right.insert(info);
  }

}

BinarySearchTree.prototype.contains = function(search){
  if(this.value === search) return true;
  if(this.value < search){
    if(this.right) return this.right.contains(search);
  } else{
    if(this.left) return this.left.contains(search)
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'pre-order') cb(this.value)
  if(this.left) this.left.depthFirstForEach(cb, order)
  if(!order || order === 'in-order') cb(this.value)
  if(this.right) this.right.depthFirstForEach(cb, order)
  if(order === 'post-order') cb(this.value)
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr=[]){
  cb(this.value)
  if(this.left) arr.push(this.left)
  if(this.right) arr.push(this.right)
  if(arr.length) arr.shift().breadthFirstForEach(cb,arr)
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right) return 1;
  if(this.left && !this.right) return 1 + this.left.size()
  if(this.right && !this.left) return 1 + this.right.size()
  return 1 + this.left.size() + this.right.size();
}
   

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
