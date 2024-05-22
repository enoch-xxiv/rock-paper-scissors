const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)
    return choices[choice]
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Scissors") {
            return `You win! ${playerSelection} beats ${computerSelection}!`
        } 
        else if (computerSelection == "Paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }
        else {
            return `It's a draw!`
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return `You win! ${playerSelection} beats ${computerSelection}!`
        } 
        else if (computerSelection == "Scissors") {
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }
        else {
            return `It's a draw!`
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            return `You win! ${playerSelection} beats ${computerSelection}!`
        } 
        else if (computerSelection == "Rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }
        else {
            return `It's a draw!`
        }
    }
};
