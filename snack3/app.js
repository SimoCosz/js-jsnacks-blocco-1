const numeri = []

for (i = 0; i < 5; i++){
  let numeroUtente = parseInt( prompt ('Inserisci un numero') )
  numeri.push(numeroUtente)
}
console.log(numeri)

let totale = 0
for(i = 0; i < 5; i++){
  totale += numeri[i]
}
console.log(totale)
// const totale = numeri[0]+numeri[1]+numeri[2]+numeri[3]+numeri[4]
