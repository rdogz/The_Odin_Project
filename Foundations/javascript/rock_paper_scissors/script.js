const NUMBERS_TO_GENERATE = 3;

const playerChoice = document.getElementById("player-choices");
const playerId = document.getElementById("player");
const computerId = document.getElementById("computer");
const resultDiv = document.getElementById("game-results");


let humanScore = 0;
let computerScore = 0;

let humanSelection = "";
let computerSelection = "";

const resultText = document.createElement("p");


playerChoice.addEventListener("click", (event) => {
    if (event.target.matches('button[type="button"]')) {
        event.preventDefault();
        const choice = event.target.value;

        let gameResult = playGame(choice, getComputerChoice());

       

        if (gameResult == 0) {
            humanScore++;
            playerId.textContent = `Player score: ${humanScore}`;
        } else if (gameResult == 1) {
            computerScore++;
            computerId.textContent = `Computer score: ${computerScore}`;
        }

        if (humanScore > 4 || computerScore > 4) {
            if (humanScore > computerScore) {
                resetScore();
                playerId.textContent = `Player score: ${humanScore}`;
                computerId.textContent = `Computer score: ${computerScore}`;
                renderResult("You won the game!");
            } else if (humanScore < computerScore) {
                resetScore();
                playerId.textContent = `Player score: ${humanScore}`;
                computerId.textContent = `Computer score: ${computerScore}`;
                renderResult("You lost the game!");
            }
        }
    }
})

function getRandomInt() {
  return Math.floor(Math.random() * NUMBERS_TO_GENERATE);
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function renderResult(str) {
    resultText.textContent = str;   
    resultDiv.appendChild(resultText);
}

function getComputerChoice() {
    let choice = (getRandomInt())

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playGame(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        renderResult("It's a tie!");
        return -1;
    }

    // result:
    // 1 is rock vs paper (negative = computer wins, positive player wins)
    // 3 is paper vs scissors (negative = computer wins, positive player wins)
    // 4 is rock vs scissors (negative = player wins, positive computer wins)
    let result = humanChoice.length - computerChoice.length;
        
    switch (result) {
// Player wins
    case 1:
        renderResult("You win! Paper beats Rock");
        return 0;
    case 3:
        renderResult("You win! Scissors beats Paper");
        return 0;
    case -4:
        renderResult("You win! Rock beats Scissors");
        return 0;
    // Computer wins
    case -1:
        renderResult("You lose! paper beats rock");
        return 1;
    case -3:
        renderResult("You lose! Scissors beats Paper");
        return 1;
    case 4:
        renderResult("You lose! Rock beats Scissors");
        return 1;

    default:
        console.log("Invalid input.")
        break;
    }
}
