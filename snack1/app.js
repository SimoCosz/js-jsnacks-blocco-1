const firstNumber = parseFloat ( prompt('inserisci un numero') )
const secondNumber = parseFloat ( prompt('inserisci un altro numero') )

let maggiore = firstNumber

 if(firstNumber < secondNumber) {
  maggiore = secondNumber
 }
 console.log(maggiore)
