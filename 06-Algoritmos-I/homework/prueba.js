function fact(num){
    let factores = [1];
  var factorAct = 2;

  while(num !== 0){
    if(num % factorAct === 0){
      factores.push(factorAct);
      num = num / factorAct;
    } else {
      factorAct++;
    }
  }
  return factores;
}

fact(180)