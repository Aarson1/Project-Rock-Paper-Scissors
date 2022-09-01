function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    /*console.log(randChoice)*/
    return randChoice
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        
        alert('Equality');
        return roundResult = 'equality'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
        return roundResult = 'win'
    } else  {
        
        alert(`You loose! ${computerSelection} beats ${playerSelection}`)
        return roundResult = 'loose'
    }
    /*return roundResult*/
}

function game() {
    for (let i = 0; i < 5; i++) {
        let fiveprompt = prompt("What will you be playing?").toLowerCase();
        let computerSelection2 = getComputerChoice();
        playRound(fiveprompt, computerSelection2)
        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult === 'loose') {
            computerScore++;
        }

        getComputerChoice()
        console.log(computerSelection2)
        console.log(playerScore, " for player")
        console.log(computerScore, " for computer")

    }
    if (playerScore == computerScore) {
        alert('No one won.')
    } else if (playerScore > computerScore) {
        alert('Congratulations! Yon won all round.')
    } else {
        alert('Unfortunately, you loose all round.')
    }
} 

var playerScore = 0
var computerScore = 0


const computerSelection = getComputerChoice();
/*console.log(playRound(playerSelection, computerSelection));*/
game()

