function getComputerChoice () {
    let randomizer = Math.floor(Math.random() * 3) + 1;

    if(randomizer == 1) {
        return "rock"
    } else if(randomizer == 2) {
        return "paper"
    } else if (randomizer == 3) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats rock"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock"
    } else if (playerSelection.toLowerCase() ==  computerSelection) {
        return "Tie!"
    } 

  }

  function game() {
    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Pick rock, paper, or scissors")
        const computerSelection = getComputerChoice();

        console.log("Player picked " + playerSelection + " and computer picked " + computerSelection)
        console.log(playRound(playerSelection, computerSelection));
     }
  }
   
game()