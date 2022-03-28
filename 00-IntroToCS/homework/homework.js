'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 
  let bin = 0
  let res;

  let num_arr = num.split('').reverse()
  for(let i = 0; i < num_arr.length; i++){
    res = num_arr[i]*Math.pow(2,i)
    bin += res
  }
  return bin;


}

function DecimalABinario(num) {
  // tu codigo aca

  let bin = [];

  while (num > 0){
    bin.unshift(num%2);
    num = Math.floor(num/2);

  }
  return bin.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}