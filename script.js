const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)
    return choices[choice]
};

// console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {

// };