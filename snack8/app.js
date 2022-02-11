const numeroUtente = prompt ('scrivi un numero di 4 cifre') ;
console.log(numeroUtente)

const cifre = numeroUtente.split('')
console.log(cifre)
const numeri = []
for (i = 0; i < cifre.length; i++){
  numeri.push(parseInt(cifre[i]))
}
console.log(numeri)

let totale = 0

for (i = 0; i < numeri.length; i++){
  totale += numeri[i]
}
console.log(totale)