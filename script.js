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
    if (humanChoice === "rock" && computerChoice === "scissors") {
        answer.textContent = "You win! Rock beats Scissors";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        answer.textContent = "You win! Paper beats Rock";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        answer.textContent = "You win! Scissors beats Paper";
        humanScore++;
        hScore.textContent = humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        answer.textContent = "You lose! Paper beats Rock";
        computerScore++;
        cScore.textContent = computerScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        answer.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        cScore.textContent = computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        answer.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        cScore.textContent = computerScore;
    } else {
        answer.textContent = "You tie! try again";
    }

    if (humanScore === 5) {
        result.textContent = "Your win!";
    } else if (computerScore === 5) {
        result.textContent = "Computer win!";
    }
}

let humanScore = 0;
let computerScore = 0;

const hScore = document.querySelector("#humanScore");
hScore.textContent = humanScore;

const cScore = document.querySelector("#computerScore");
cScore.textContent = computerScore;

const buttons = document.querySelectorAll("button");

const answer = document.querySelector("#answer");

const result = document.querySelector("#result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let human = button.textContent;
        let computer = getComputerChoice();
        playRound(human, computer);
    });
});