const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)
    return choices[choice]
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerInfo = document.querySelector("#player-info");
const computerInfo = document.querySelector("#computer-info");
const log = document.querySelector("#log")

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const roundOutcome = document.createElement("p");

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore++;
            log.appendChild((roundOutcome.textContent = `You won this round, ${playerSelection} beats ${computerSelection}!`, roundOutcome));
        } 
        else if (computerSelection == "Paper") {
            computerScore++;
            log.appendChild((roundOutcome.textContent = `You lost this round, ${computerSelection} beats ${playerSelection}!`, roundOutcome));
        }
        else {
            log.appendChild((roundOutcome.textContent = `It's a draw!`, roundOutcome));
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            log.appendChild((roundOutcome.textContent = `You won this round, ${playerSelection} beats ${computerSelection}!`, roundOutcome));
        } 
        else if (computerSelection == "Scissors") {
            computerScore++;
            log.appendChild((roundOutcome.textContent = `You lost this round, ${computerSelection} beats ${playerSelection}!`, roundOutcome));
        }
        else {
            log.appendChild((roundOutcome.textContent = `It's a draw!`, roundOutcome));
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            playerScore++;
            log.appendChild((roundOutcome.textContent = `You won this round, ${playerSelection} beats ${computerSelection}!`, roundOutcome));
        } 
        else if (computerSelection == "Rock") {
            computerScore++;
            log.appendChild((roundOutcome.textContent = `You lost this round, ${computerSelection} beats ${playerSelection}!`, roundOutcome));
        }
        else {
            log.appendChild((roundOutcome.textContent = `It's a draw!`, roundOutcome));
        }
    }

    if (playerScore == 5) {
        log.textContent = `You won!`
    }
    else if (computerScore == 5) {
        log.textContent = `You lost.`
    }
};

rock.addEventListener("click", () => {
    playRound("Rock");
    playerInfo.textContent = `Player: ${playerScore}`
    computerInfo.textContent = `Computer: ${computerScore}`
});

paper.addEventListener("click", () => {
    playRound("Paper");
    playerInfo.textContent = `Player: ${playerScore}`
    computerInfo.textContent = `Computer: ${computerScore}`
});

scissors.addEventListener("click", () => {
    playRound("Scissors");
    playerInfo.textContent = `Player: ${playerScore}`
    computerInfo.textContent = `Computer: ${computerScore}`
});
