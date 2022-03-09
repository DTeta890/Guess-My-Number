'use strict';

let secretNumber = generateNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    checkScore(guess);
});

document.querySelector('.again').addEventListener('click', function () {
    playAgain();
});

function playAgain() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = generateNumber();
    console.log(secretNumber);
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;
}

function checkScore(guess) {
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'; // No input
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'; // Player wins
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        setHighScore();
        document.querySelector('.check').disabled = true;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!'; // Player gives higher value
        proccessScore();
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!'; // Player gives lower value
        proccessScore();
    }
}

function generateNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function proccessScore() {
    if (score > 1) score--;
    else {
        document.querySelector('.message').textContent = '😔 You lost!';
        score = 0;
    }
    document.querySelector('.score').textContent = score;
}

function setHighScore() {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
