function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    /*console.log(randChoice)*/
    return randChoice
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        
        alert('Equality');
        return roundResult = 0
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
        return roundResult = 1
    } else  {
        
        alert(`You loose! ${computerSelection} beats ${playerSelection}`)
        return roundResult = 0
    }
    /*return roundResult*/
}

function game() {
    for (let i = 0; i < 5; i++) {
        let fiveprompt = prompt("What will you be playing?")
        let computerSelection2 = getComputerChoice();
        playRound(fiveprompt, computerSelection2)
        getComputerChoice()
        console.log(computerSelection2)

        
    }
    /*if (roundResult == true) {
        alert('you won all the round')
    }
    else {
        alert('you loose all')
    }*/
} 


const computerSelection = getComputerChoice();
/*console.log(playRound(playerSelection, computerSelection));*/
game()

