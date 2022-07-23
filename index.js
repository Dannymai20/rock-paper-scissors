function getComputerChoice () {
    let randomizer = Math.floor(Math.random() * 3) + 1;

    if(randomizer == 1) {
        console.log("rock")
    } else if(randomizer == 2) {
        console.log('paper')
    } else if (randomizer == 3) {
        console.log('scissors')
    }
}

function playRound(playerSelection, computerSelection) {
    
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));