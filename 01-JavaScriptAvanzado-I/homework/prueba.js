// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {
//   var x = 10;
//   console.log(x); // 10 porque lo esta declarando en la linea anterior y esta dentro de la funcion
//   console.log(a); // 8 porque lo declaro la c()
//   var f = function(a, b, c) {
//     b = a;
//     console.log(b); // 8 porque b toma el valor de a que lo declaro c()
//     b = c;
//     var x = 5;
//   }
//   f(a,b,c);
//   console.log(b); // 9 porque la c() lo declaro
// }
// c(8,9,10);
// console.log(b); // 10 porque esta afuera de toda la funcion
// console.log(x); // 1 porque esta afuera de toda la funcion


// ----------------------------------
// console.log(bar);
// console.log(baz);
// foo();
// function foo() { console.log('Hola!'); }
// var bar = 1;
// baz = 2; // Da error, detecta la funcion
            // y le asigna su espacio en memoria
//----------------------------------

// var instructor = "Tony";
// if(true) {
//    var instructor = "Franco";
// }
// console.log(instructor); // el var es global por 
                            //ende lo detecta

//----------------------------------

// var instructor = "Tony";
// console.log(instructor);
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor);
//    }
// })();
// console.log(instructor);
//----------------------------------

// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//     var instructor = "The Flash";
//     let pm = "Reverse Flash";
//     console.log(instructor);
//     console.log(pm);
// }
// console.log(instructor);
// console.log(pm);

//---------------------------------

// num = [3]
// nu = [3]
// n = 1

// resul = num + nu
// console.log(resul)

// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// {}[0]
// parseInt("09")
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// [3]+[3]-[10]
// 3>2>1
// [] == ![]
//----------------------------------

// function test() {
//    console.log(a);
//    console.log(foo());

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test(); // sale undifined y 2
//----------------------------------

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // no sale nada por que no se cumple
                  // ni se llama a la variable snack
                  
//----------------------------------

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test());
//----------------------------------

// function printing() {
//    console.log(1);
//    setTimeout(function() { console.log(2); }, 1000);
//    setTimeout(function() { console.log(3); }, 0);
//    console.log(4);
// }

// printing();

//----------------------------------