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

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    console.log(humanChoice);

    if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats Rock";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beats Paper";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock";
        computerScore++;
        cScore.textContent = computerScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        cScore.textContent = computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        cScore.textContent = computerScore;
    } else {
        result.textContent = "You tie! try again";
    }

    if (humanScore === 5) {
        result.textContent = "Your win!";
    } else if (computerScore === 5) {
        result.textContent = "Computer win!";
    } else {
        result.textContent = "Tie!";
    }
}

function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {

        });
    });
}

let humanScore = 0;
let computerScore = 0;

const hScore = document.querySelector("#humanScore");
hScore.textContent = humanScore;

const cScore = document.querySelector("#computerScore");
cScore.textContent = computerScore;

const buttons = document.querySelectorAll("button");