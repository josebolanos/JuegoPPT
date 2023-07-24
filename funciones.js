let playerScore = 0;
let computerScore = 0;

// Crea los elementos en el DOM
const scoreContainer = document.createElement('div');
scoreContainer.innerHTML = `
    <p>Puntuación:</p>
    <p>Jugador: <span id="player-score">0</span></p>
    <p>Computadora: <span id="computer-score">0</span></p>
`;
document.body.appendChild(scoreContainer);

const resultElement = document.createElement('div');
resultElement.id = 'result';
document.body.appendChild(resultElement);

const gameResultElement = document.createElement('div');
gameResultElement.id = 'game-result';
document.body.appendChild(gameResultElement);

// Función para actualizar la puntuación en el DOM
function updateScore() {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}



// Función para mostrar los resultados en el DOM
function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}

// Función para finalizar el juego y mostrar el resultado final en el DOM
function endGame() {
    let winner;
    if (playerScore > computerScore) {
        winner = '¡Ganaste el juego!';
    } else if (playerScore < computerScore) {
        winner = '¡Perdiste el juego!';
    } else {
        winner = 'Empate';
    }

    const gameResultElement = document.getElementById('game-result');
    gameResultElement.textContent = winner;

    // Restablecer el resultado de cada ronda a un espacio en blanco
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';


    //Deshabilitar los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.disabled = true;
    });


    // Mostrar un texto de aviso antes de reiniciar el juego
    const restartTextElement = document.createElement('p');
    restartTextElement.textContent = 'El juego se reiniciará en 5 segundos...';
    document.body.appendChild(restartTextElement);

    // Esperar 5 segundos antes de reiniciar el juego
    setTimeout(function () {
        restartTextElement.remove();
        restartGame();
    }, 5000);
   
}

function restartGame() {
    // Reiniciar los puntajes
    playerScore = 0;
    computerScore = 0;
    updateScore();

    // Habilitar los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = false;
    });

    // Limpiar los resultados
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    const gameResultElement = document.getElementById('game-result');
    gameResultElement.textContent = '';
}


// Función para jugar una ronda
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result;

    if (
        (playerSelection === 'Tijera' && computerSelection === 'Papel') ||
        (playerSelection === 'Piedra' && computerSelection === 'Tijera') ||
        (playerSelection === 'Papel' && computerSelection === 'Piedra')
    ) {
        result = 'Ganaste esta ronda!';
        playerScore++;
    } else if (playerSelection === computerSelection) {
        result = 'Empate!';
    } else {
        result = 'Perdiste esta ronda!';
        computerScore++;
    }

    updateScore();
    displayResult(result);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

// Función para obtener la selección aleatoria de la computadora
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'Piedra';
    } else if (randomNumber === 1) {
        return 'Papel';
    } else {
        return 'Tijera';
    }
}

// Obtén referencias a los botones y añade event listeners
const rockButton = document.createElement('button');
rockButton.textContent = 'Piedra';
rockButton.addEventListener('click', function () {
    playRound('Piedra');
});
document.body.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Papel';
paperButton.addEventListener('click', function () {
    playRound('Papel');
});
document.body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Tijera';
scissorsButton.addEventListener('click', function () {
    playRound('Tijera');
});
document.body.appendChild(scissorsButton);
