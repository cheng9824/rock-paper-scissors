function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors: ")
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper")
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        } else {
            console.log("You tie! try again");
        }
    }

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log("You win!")
} else if (humanScore < computerScore) {
    console.log("You lose!")
} else {
    console.log("You tie!")
}