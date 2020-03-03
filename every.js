let arrayProva = [1, 2, 3, 4, 5]

let everyReduce = arrayProva.reduce(function (a, b) {
    return a + b
}, 0);

for (let i = 0; i < arrayProva.length; i ++){
    if (everyReduce < 10) { 
    console.log('true')
    } else (everyReduce >= 10); {
    console.log('false')
    }
  }

  
  console.log("il valore è di " + everyReduce)


  // seconda parte


function everyBase(arrayProva) {
    
    for (let i = 0; i < arrayProva.length; i++) {
        if (arrayProva < 20) {
            return console.log('true')
        } else {
            return console.log('false')
        }
    }
}

