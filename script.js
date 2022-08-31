function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    console.log(randChoice);
    return randChoice
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert('Equality');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
    } else  {
        alert(`You loose! ${computerSelection} beats ${playerSelection}`)
    }
}



const playerSelection = prompt("What will you be playing?")
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection)

