let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  if (card >= 2 && card <= 6){
    count = count + card
    console.log(`${count} Bet`)

  }else if (card >= 7 && card <= 9){

    console.log(`${count} Bet`)

  }else if (card == 10){
    count = count - card
    console.log(`${count} Hold`)

  
  }else if (card == 'J' || card == 'Q' || card == 'K'){
    count = count - 10
    console.log(`${count} Hold`)

  }else if (card == 'A'){
    count = count - 11
    console.log(`${count} Hold`)
  }

  return "Change Me";
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');