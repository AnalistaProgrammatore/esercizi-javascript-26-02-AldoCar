/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
const range = (start, stop, step) =>(
    Array.from({length: (stop - start)/ step +1}, (_, i) => start + (i * step))
)

console.log(range( 0, 4, 1))

console.log(range( 0, 4, 1).reduce((a, b) => a + b, 0))
