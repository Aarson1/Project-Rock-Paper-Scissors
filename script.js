function getComputerChoice() {
    let possibleChoice = ["rock", "paper", "scissors"];
    let randChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    console.log(randChoice);
}

