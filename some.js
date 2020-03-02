arrayProva = [0, 1, 2, 3, 4]

let someReduce = arrayProva.reduce(function (a, b) {
  return a + b;
}, 0);

if (someReduce < 10) { 
  console.log('true')
} else (someReduce >= 10); {
  console.log('false')
}
console.log(someReduce)

// seconda parte 

function someBase(arrayProva) {
  let sum = 0
  for (let i = 0; i < arrayProva.length; i ++){
    sum = sum + i
  }
  return sum
}

if (someBase < 10) { 
  console.log('false')
} else (someBase >= 10); {
  console.log('true')
}


console.log(someBase(arrayProva))
