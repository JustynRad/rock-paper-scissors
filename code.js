const spellButtons = document.querySelectorAll('.spell-button');
const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const resetButton = document.querySelector('.reset');

let playerLives = 5;
let computerLives = 5;
let round = 0;

function computerPlay() {
    let computerChoice = "";
    choiceGenerator = Math.floor(Math.random() * 3);
    computerIcon = document.querySelector('.computer-icon');

    if (choiceGenerator === 0) {
        computerChoice = 'Fire';
    } else if (choiceGenerator === 1) {
        computerChoice = 'Nature';
    } else if (choiceGenerator === 2) {
        computerChoice = 'Water';
    }

    computerIcon.classList.remove('fa-book-dead', 'fa-water', 'fa-leaf', 'fa-fire');

    if(computerChoice === 'Fire') {
        computerIcon.classList.add('fa-fire');
        computerIcon.style.color = '#DC143C';
    } else if (computerChoice === 'Nature') {
        computerIcon.classList.add('fa-leaf');
        computerIcon.style.color = '#90EE90';
    } else if (computerChoice === 'Water') {
        computerIcon.classList.add('fa-water');
        computerIcon.style.color = '#0096FF';
    }

    return computerChoice;
}

function countRounds() {
    round += 1;
    rounds.innerText = `Round: ${round}`;
    return round;
}

function playRound(playerSelection, computerSelection) {
    let gameOutput = document.querySelector('.game-info');
    let computerPlay = document.querySelector('.computer-play');

    if (playerSelection === computerSelection) {
        combatText.innerText= `You both cast a ${playerSelection} spell. This results in a draw. Try again!`;
        gameOutput.style.border = '4px solid #8070ac';
        computerPlay.classList.remove('grey-border', 'green-border', 'red-border');
        computerPlay.classList.add('purple-border');
    } else if (
        (playerSelection === "Fire" && computerSelection === "Nature") ||
        (playerSelection === "Nature" && computerSelection === "Water") ||
        (playerSelection === "Water" && computerSelection === "Fire")
    ) {
        combatText.innerText= `The spell hit! The enemy lost one life due to your ${playerSelection} spell being a natural counter to his ${computerSelection} spell!`;
        gameOutput.style.border = '4px solid #62b49c';
        computerPlay.classList.remove('grey-border', 'red-border', 'purple-border');
        computerPlay.classList.add('green-border');
        computerLives -= 1;
    } else {
        combatText.innerText=`Argh!.. You were hit by his ${computerSelection} spell due to it being a natural counter to your ${playerSelection} spell!`;
        gameOutput.style.border = '4px solid #b96b78';
        computerPlay.classList.remove('grey-border', 'green-border', 'purple-border');
        computerPlay.classList.add('red-border');
        playerLives -= 1;
    }

    let currLives = document.querySelector('.lives');
    currLives.innerText = `Lives left: ${playerLives} | Enemy's Lives Remaining: ${computerLives}`;

    return [playerLives, computerLives];
}

function endGame(playerLives, computerLives) {
    if (playerLives === 0 || computerLives === 0) {
        spellButtons.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button', 'opacity');
        });

        let computerIcon = document.querySelector('.computer-icon');
        computerIcon.style.opacity = '0.5';

        const gameEndText = document.querySelector('.game-end-text');
        if(playerLives > computerLives) {
            combatText.innerText = 'The enemy can no longer fight!';
            gameEndText.textContent = 'You won the battle!'
            gameEndText.style.color = '#62b49c';
        } else {
            combatText.innerText = 'You can no longer fight!';
            gameEndText.textContent = 'You lost the battle!';
            gameEndText.style.color = '#b96b78';
        }

        resetButton.style.visibility = 'visible';
    }
}

function resetGame() {
    resetButton.addEventListener('click', () => {
        window.location.reload();
    } );
}

function game() {
    let playerSelection;
    
    console.log("Start")
    spellButtons.forEach((spell) => {
        spell.addEventListener('click', () => {
            let spellIcons = document.querySelectorAll('.spell-button');
            if (spell.classList.contains('fire-button')) {
                spellIcons[0].style.color = '#8070ac';
                spellIcons[1].style.color = '#5e5e5e';
                spellIcons[2].style.color = '#5e5e5e';
                playerSelection = 'Fire';
            } else if (spell.classList.contains('nature-button')) {
                spellIcons[0].style.color = '#8070ac';
                spellIcons[1].style.color = '#5e5e5e';
                spellIcons[2].style.color = '#5e5e5e';
                playerSelection = 'Nature';
            } else {
                spellIcons[0].style.color = '#8070ac';
                spellIcons[1].style.color = '#5e5e5e';
                spellIcons[2].style.color = '#5e5e5e';
                playerSelection = 'Water';
            }

            countRounds();
            playRound(playerSelection, computerPlay());
            endGame(playerLives, computerLives);
            resetGame();
        }); 
    });
}

game();