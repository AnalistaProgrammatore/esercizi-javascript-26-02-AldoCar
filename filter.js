
let arrayProva = [1, 2, 3, 4, 5]




let filterBase = function() {
    let accum = []
    for (let i = 0; i < arrayProva.length; i ++){
        if (filterBase(arrayProva) < 3) {
        accum = [...accum, i]
        } 
    }
        
return console.log(accum)
}
