const numeriPari = []
console.log(numeriPari)

for (i = 0; i < 6; i++){
  numeroUtente = parseInt ( prompt('scrivi un numero') )
  console.log(numeroUtente)
  if (numeroUtente %2 == 0){
    numeriPari.push(numeroUtente)
  }
}
console.log(numeriPari)
