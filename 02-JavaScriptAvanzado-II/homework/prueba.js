// var creaFuncion = function(){
//     var arreglo = [];
  
//     for ( let i=0; i < 3; i++){
//       arreglo.push(
//         function(){
//           console.log(i);
//         }
//       )
//     }
//     return arreglo;
//   }
  
//   var arr = creaFuncion();
  
//   arr[0]() // 3 sale un 3, qué esperaban ustedes??
//   arr[1]() // 3


// var creaFuncion = function(){
//     var arreglo = [];
//     for ( var i=0; i < 3; i++){
//       arreglo.push(
//         (function(j){
//           return function() {console.log(j);}
//         }(i))
//       )
//     }
//     return arreglo;
//   }
  
//   var arr = creaFuncion();
  
//   arr[0]() // 1
//   arr[1]() // 2
//   arr[2]() // 3

// function counter() {
//   // Retorna una funcion que cuando sea invocada retorne un valor creciente.
//   // el primer valor deberia ser 1.
//   // Vas a tener que usar closures.
//   // ejemplo: const newCounter = counter();
//   // newCounter(); // 1
//   // newCounter(); // 2
//   let cont = 1;

//   return function(){
//     console.log(cont);
//     cont++;
    
    
//   }

// }
// var newCounter = counter();

// newCounter();
// newCounter();
// newCounter();
// newCounter();
// newCounter();


