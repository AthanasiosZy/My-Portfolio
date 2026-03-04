// Guess the Number Game

let randomNumber;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    message.className = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100!';
        message.className = 'message-wrong';
        return;
    }
    
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
    
    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You got it in ${attempts} attempts!`;
        message.className = 'message-correct';
        guessInput.disabled = true;
        guessBtn.disabled = true;
    } else if (attempts >= maxAttempts) {
        message.textContent = `💀 Game Over! The number was ${randomNumber}`;
        message.className = 'message-wrong';
        guessInput.disabled = true;
        guessBtn.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = '📈 Too low! Try a higher number.';
        message.className = 'message-hint';
    } else {
        message.textContent = '📉 Too high! Try a lower number.';
        message.className = 'message-hint';
    }
    
    guessInput.value = '';
    guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

restartBtn.addEventListener('click', initGame);

initGame();
