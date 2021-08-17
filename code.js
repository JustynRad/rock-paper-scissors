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
    if ((playerSelection == PAPER) && (computerSelection === "Rock")) {
        return ["You win!, Paper beats Rock", 1];
    } else if ((playerSelection == ROCK) && (computerSelection === "Paper")) {
        return ["You lose!, Paper beats Rock" , 0];
    } else if ((playerSelection == PAPER) && (computerSelection === "Paper")) {
        return ["You tied!, Paper can't beat Paper", -1];
    }

    /* Scissors */
    if ((playerSelection == SCISSORS) && (computerSelection === "Paper")) {
        return ["You win!, Scissors beats Paper", 1];
    } else if ((playerSelection == PAPER) && (computerSelection === "Scissors")) {
        return ["You lose!, Scissors beats Paper", 0];
    } else if ((playerSelection == SCISSORS) && (computerSelection === "Scissors")) {
        return ["You tied!, Scissors can't beat Scissors", -1];
    }

    /* Rock */
    if ((playerSelection == ROCK) && (computerSelection === "Scissors")) {
        return ["You win!, Rock beats Scissors", 1];
    } else if ((playerSelection == SCISSORS) && (computerSelection === "Rock")) {
        return ["You lose!, Rock beats Scissors", 0];
    } else if ((playerSelection == ROCK) && (computerSelection === "Rock")) {
        return ["You tied!, Rock can't beat Rock", -1];
    }
}

function getResult(data) {
    return data;
}

function stateWinner(playerScore, computerScore) {
    if(playerScore === 5) {
        console.log("The final score is the Player with " + playerScore + " while AI has a score of " + computerScore + ". The player wins!");
    } else if ( computerScore === 5 ) {
        console.log("The final score is the Player with " + playerScore + " while AI has a score of " + computerScore + ". The AI wins!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    const btn1 = document.querySelector('#rock');
    btn1.addEventListener('click', function(e) {
        let result = playRound(btn1.textContent.toUpperCase(), computerPlay());
        [text, value] = getResult(result);
        console.log(text);
        
        if (value === 1) {
            playerScore += 1;
        } else if (value === 0) {
            computerScore += 1;
        }

        stateWinner(playerScore, computerScore);
    });

    const btn2 = document.querySelector('#paper');
    btn2.addEventListener('click', function(e) {
        let result = playRound(btn2.textContent.toUpperCase(), computerPlay());
        [text, value] = getResult(result);
        console.log(text);
        
        if (value === 1) {
            playerScore += 1;
        } else if (value === 0) {
            computerScore += 1;
        }

        stateWinner(playerScore, computerScore);
    });

    const btn3 = document.querySelector('#scissors');
    btn3.addEventListener('click', function(e) {
        let result = playRound(btn3.textContent.toUpperCase(), computerPlay());
        [text, value] = getResult(result);
        console.log(text);
        playerScore += value;

        if (value === 1) {
            playerScore += 1;
        } else if (value === 0) {
            computerScore += 1;
        } else if (value === -1) {
            playerScore += 0;
            computerScore += 0;
        }

        stateWinner(playerScore, computerScore);
    });

    // for(let i = 0; i < 5; i++ ) {
    //     [result, score] = playRound(prompt("Pick between Rock, Paper, Scissors"),computerPlay());
        
        // if (score === 1) {
        //     playerScore += 1;
        // } else if (score == 0) {
        //     computerScore += 1;
        // }

    //    console.log(result);
    // }
}

game();