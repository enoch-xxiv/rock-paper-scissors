const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)
    return choices[choice]
};

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock") {
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
    if (playerSelection == "paper") {
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
    if (playerSelection == "scissors") {
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("Rock");
});

paper.addEventListener("click", () => {
    playRound("Paper");
});

scissors.addEventListener("click", () => {
    playRound("Scissors");
});