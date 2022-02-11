const listaNumeri = []

for (i = 1; i <= 10; i++){
  const numeri = i;
  console.log(numeri)
  listaNumeri.push(numeri);
}
console.log(listaNumeri)

let totale = 0
for(i = 0; i < listaNumeri.length; i++){
  totale += listaNumeri[i];
}
console.log(totale)

const media = totale/10

console.log(media)