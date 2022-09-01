function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    /*console.log(randChoice)*/
    return randChoice
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        alert('Draw.');
        return roundResult = 'draw'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`)
        return roundResult = 'win'

    } else  if (playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors'){
        alert(`You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`)
        return roundResult = 'lose'

    } else {
        alert('No correct input')
        return roundResult = 'noinput'
    }
    /*return roundResult*/
}

function game() {
    for (let i = 0; i < 5; i++) {
        let loopPrompt = prompt("What will you be playing?").toLowerCase();
        let computerSelectionLoop = getComputerChoice();
        playRound(loopPrompt, computerSelectionLoop)
        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult === 'lose') {
            computerScore++;
        }

        getComputerChoice()
        console.log('computer selection :', computerSelectionLoop)
        console.log(playerScore, " for player")
        console.log(computerScore, " for computer")

    }
    if (playerScore == computerScore) {
        alert('It\'s a draw, no one won.')
    } else if (playerScore > computerScore) {
        alert('Congratulations! Yon won all round. Your score : ' + playerScore)
    } else {
        alert('Unfortunately, you lost all round. Your score : ' + playerScore)
    }
} 

var playerScore = 0
var computerScore = 0
const computerSelection = getComputerChoice();
game()

