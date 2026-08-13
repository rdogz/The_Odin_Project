function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let choice = (getRandomInt())

    switch (choice) {
        case 0:
            //console.log("rock");
            return "rock";
        case 1:
            //console.log("paper");
            return "paper";
        case 2:
            //console.log("scissors");
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Your choice: ");
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = "";
    let computerSelection = "";
    let gameResult = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
            return 0;
        }

        // result:
        // 1 is rock vs paper (negative = computer wins, positive player wins)
        // 3 is paper vs scissors (negative = computer wins, positive player wins)
        // 4 is rock vs scissors (negative = player wins, positive computer wins)
        let result = humanChoice.length - computerChoice.length;
        
        switch (result) {
            // Player wins
            case 1:
                console.log("You win! Paper beats Rock")
                humanScore++;
                return 1;
            case 3:
                console.log("You win! Scissors beats Paper")
                humanScore++;
                return 1;
            case -4:
                console.log("You win! Rock beats Scissors")
                humanScore++;
                return 1;
            // Computer wins
            case -1:
                console.log("You lose! Paper beats Rock")
                computerScore++;
                return -1;
            case -3:
                console.log("You lose! Scissors beats Paper")
                computerScore++;
                return -1;
            case 4:
                console.log("You lose! Rock beats Scissors")
                computerScore++;
                return -1;
        
            default:
                console.log("Invalid input.")
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        }

    console.log("\nGame result:")
    if (humanScore > computerScore) {
        console.log("\tYou won the game!");
    } else if (humanScore < computerScore) {
        console.log("\tYou lost the game!");
    } else {
        console.log("\tNo winners or losers here! It's a tie!");
    }

    return;
}
