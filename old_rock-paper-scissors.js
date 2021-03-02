
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[randInt(0, 2)];
}

function playRound(playerSelection, computerSelection) {

    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player === computer) {
        return `Draw: Both chose ${player}.`;
    } else if ((player === 'rock' &&  computer === 'scissors')
    || (player === 'paper' && computer === 'rock')
    || (player === 'scissors' && computer === 'paper')) {
        return `Win: ${player} beats ${computer}.`;
    } else {
        return `Loss: ${player} loses to ${computer}.`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++) {
        let playerInput = prompt("Rock, Paper or Scissors?:", "Rock");
        let result = playRound(playerInput, computerPlay());
        console.log(result)
        if (result.indexOf('Win') !== -1) {
            playerScore++;
        } else if (result.indexOf('Loss') !== -1) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win! ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`It's a draw! ${playerScore} to ${computerScore}`);
    }
}

playGame()