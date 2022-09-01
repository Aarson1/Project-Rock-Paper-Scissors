function getComputerChoice() {
    let possibleChoice = ['rock', 'paper', 'scissors'];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    /*console.log(randChoice)*/
    return randChoice
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        
        alert('Equality');
        return roundResult = false
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
        return roundResult = true
    } else  {
        
        alert(`You loose! ${computerSelection} beats ${playerSelection}`)
        return roundResult = false
    }
    /*return roundResult*/
}

function game() {
    for (let i = 0; i < 5; i++) {
        let fiveprompt = prompt("What will you be playing?")
        let computerSelection2 = getComputerChoice();
        playRound(fiveprompt, computerSelection2)
        if (roundResult) {
            score++;
        }
        getComputerChoice()
        console.log(computerSelection2)
        console.log(score)

    }
    
} 

var score = 0


const computerSelection = getComputerChoice();
/*console.log(playRound(playerSelection, computerSelection));*/
game()

