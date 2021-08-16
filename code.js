function computerPlay() {
    choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {

    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";
    /* Paper */
    if ((playerSelection.toUpperCase() == PAPER) && (computerSelection === "Rock")) {
        return ["You win!, Paper beats Rock", 1];
    } else if ((playerSelection.toUpperCase() == ROCK) && (computerSelection === "Paper")) {
        return ["You lose!, Paper beats Rock" , 0];
    } else if ((playerSelection.toUpperCase() == PAPER) && (computerSelection === "Paper")) {
        return ["You tied!, Paper can't beat Paper", -1];
    }

    /* Scissors */
    if ((playerSelection.toUpperCase() == SCISSORS) && (computerSelection === "Paper")) {
        return ["You win!, Scissors beats Paper", 1];
    } else if ((playerSelection.toUpperCase() == PAPER) && (computerSelection === "Scissors")) {
        return ["You lose!, Scissors beats Paper", 0];
    } else if ((playerSelection.toUpperCase() == SCISSORS) && (computerSelection === "Scissors")) {
        return ["You tied!, Scissors can't beat Scissors", -1];
    }

    /* Rock */
    if ((playerSelection.toUpperCase() == ROCK) && (computerSelection === "Scissors")) {
        return ["You win!, Rock beats Scissors", 1];
    } else if ((playerSelection.toUpperCase() == SCISSORS) && (computerSelection === "Rock")) {
        return ["You lose!, Rock beats Scissors", 0];
    } else if ((playerSelection.toUpperCase() == ROCK) && (computerSelection === "Rock")) {
        return ["You tied!, Rock can't beat Rock", -1];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++ ) {
        [result, score] = playRound(prompt("Pick between Rock, Paper, Scissors"),computerPlay());
        
        if (score === 1) {
            playerScore += 1;
        } else if (score == 0) {
            computerScore += 1;
        }

        console.log(result);
    }
    
    if(playerScore > computerScore) {
        console.log("The final score is the Player with " + playerScore + " while AI has a score of " + computerScore + ". The player wins!");
    } else {
        console.log("The final score is the Player with " + playerScore + " while AI has a score of " + computerScore + ". The AI wins!");
    }
}

game();