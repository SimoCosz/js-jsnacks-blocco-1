const listaNomi = [
  'simone',
  'mario',
  'mario',
  'ciccio',
  'claudio'
]

const nomeInvitato = prompt('come ti chiami?');
// console.log(nomeInvitato)
let check = false;

for (i = 0; i < listaNomi.length; i++){
  const element = listaNomi[i]
  console.log(element)
  if (element === nomeInvitato){
    check = true;
  }
  console.log(check)
}

if (check == true){
  alert('Puoi entrare')
} else {
  alert('non puoi entrare')
}