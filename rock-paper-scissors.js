
buttons = document.querySelectorAll('button');
playerScore = document.querySelector('#player-score');
computerScore = document.querySelector('#computer-score');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        pScore = parseInt(playerScore.textContent);
        cScore = parseInt(computerScore.textContent);

        let computerMove = computerPlay();
        let result = playRound(button.id, computerMove);
        if (result > 0) {
            pScore++;
            updateMessage(`You won the round! 
                    ${capitalize(button.id)} beats ${capitalize(computerMove)}`);
            playerScore.textContent = pScore.toString();
        } else if (result < 0) {
            cScore++;
            updateMessage(`You lost the round!
                    ${capitalize(computerMove)} beats ${capitalize(button.id)}`);
            computerScore.textContent = cScore.toString();
        } else {
            updateMessage(`The round was a draw!
                    Both played ${capitalize(button.id)}`);
        };

        if (checkWin(pScore, cScore)) {
            gameOver(pScore, cScore);
        }
    });
});


// Game Logic

// Randomize Computer Move
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[randInt(0, 2)];
}

// Play a single round
// Returns 1 for player win, -1 for computer win and 0 for draw
function playRound(playerSelection, computerSelection) {
    player = playerSelection;
    computer = computerSelection;

    console.log(playerSelection, computerSelection);

    if (player === computer) {
        return 0;
    } else if ((player === 'rock' &&  computer === 'scissors')
    || (player === 'paper' && computer === 'rock')
    || (player === 'scissors' && computer === 'paper')) {
        return 1;
    } else {
        return -1;
    };
}

// Boolean check for win condition
function checkWin(playerScore, computerScore) {
    console.log(playerScore, computerScore);
    if (playerScore < 5 && computerScore < 5) {
        return false;
    } else {
        return true;
    }
}

// Game Over window with replay option
function gameOver(playerScore, computerScore) {
    console.log(playerScore, computerScore);
    if (playerScore > computerScore) {
        alert('You win!');
    } else {
        alert('You lose!');
    }
}

// Helpers
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMessage(message) {
    const p = document.querySelector('#info-message');
    p.textContent = message;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
