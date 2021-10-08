var timerEl = document.querySelector('#timer-count');
var startBtn = document.querySelector('.start-button');
var questionEl = document.querySelector('.question');
var introEl = document.querySelector('.intro');
var scoreEl = document.querySelector('#highscores');

var timerCount = 30;
var question = ["Who was the first male tennis player to win 20 grand slams?", "Which female American tennis player has won the most Grand Slams?"];

function startTimer() {
    var timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function startGame() {
    introEl.style.visibility = 'hidden';
    scoreEl.style.visibility = 'hidden';
    questionEl.textContent = question[0];
    startTimer();
}

startBtn.addEventListener('click', startGame);