'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
const secretDiv = document.querySelector(`.number`);
// secretDiv.innerHTML = secretNumber;


const message = document.querySelector(`.message`);
const scoreDiv = document.querySelector(`.score`);
let score = scoreDiv.textContent;

const highScoreDiv = document.querySelector(`.highscore`);

const check = document.querySelector(`.check`);
let highScore = null;
highScore = localStorage.getItem(`highKey`);

const infoHigh = `Too high!`;
const infoLow = `Too low!`;



check.addEventListener(`click`, function () {
    let guess = document.querySelector(`.guess`).value;
    guess = Number(guess);

    if (guess) {
        if (guess > secretNumber) {
            checkWin(infoHigh);

        } else if (guess < secretNumber) {
            checkWin(infoLow);
        
        } else if (guess === secretNumber) {
            message.innerHTML = `You won! Secret number is ${secretNumber}`;
            document.querySelector(`body`).style.backgroundColor = `#60b347`;

            if (score > highScore) {
                localStorage.setItem(`highKey`, score);
                highScoreDiv.innerHTML = localStorage.getItem(`highKey`);
            }
        }
    }

})


highScoreDiv.innerHTML = localStorage.getItem(`highKey`);


const again = document.querySelector(`.again`);
again.addEventListener(`click`, function() {
    window.location.reload();
})

const reset = document.querySelector(`.reset`);
reset.addEventListener(`click`, function() {
    localStorage.clear();
    window.location.reload();
})


function checkWin(info) {
    message.innerHTML = info;
    score = score - 1;
    scoreDiv.innerHTML = score;
}