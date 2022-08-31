function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    console.log(randChoice);
    return randChoice
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        roundResult = false
        alert('Equality');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResult = true
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
    } else  {
        roundResult = false
        alert(`You loose! ${computerSelection} beats ${playerSelection}`)
    }
    return roundResult
}

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        let fiveprompt = prompt("What will you be playing?")
        playRound(fiveprompt, computerSelection)
        
    }
    if (roundResult == true) {
        alert('you won all the round')
    }
    else {
        alert('you loose all')
    }
} 

let playerSelection = prompt("What will you be playing?")

const computerSelection = getComputerChoice();
/*console.log(playRound(playerSelection, computerSelection));*/
game()

