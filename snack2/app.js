const parole = []
while (parole.length !==2){
  
  const parolaA = prompt('scrivi una parola')
  parole.push(parolaA)
  const parolaB = prompt('scrivi un\'altra parola')
  parole.push(parolaB)
  
  let maggiore = `${parolaA} è maggiore di ${parolaB}`

  if (parolaB.length > parolaA.length){
    maggiore = `${parolaB} è maggiore di ${parolaA}`
  } else if( parolaA.length === parolaB.length ){
    maggiore = 'identiche'
  }
  console.log(maggiore)
} 