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

function playGame() {

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("What would you like to choose?");

        let roundResult = playRound(playerChoice, computerChoice)

        if (roundResult.includes("win")) {
            console.log(roundResult)
            playerScore++
        }
        else if (roundResult.includes("lose")) {
            console.log(roundResult)
            computerScore++
        }
        else {
            console.log(roundResult)
        }
    }

    if (playerScore > computerScore) {
         console.log(`You win with a score of ${playerScore}-${computerScore}`)
    }
    else if (playerScore < computerScore) {
        console.log(`You lose with a score of ${playerScore}-${computerScore}`)
    }
}

playGame()