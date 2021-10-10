//defining variables
var timerEl = document.querySelector('#timer-count');
var startBtn = document.querySelector('.start-button');
var questionEl = document.querySelector('#question');
var choiceA = document.querySelector('#A');
var choiceB = document.querySelector('#B');
var choiceC = document.querySelector('#C');
var introEl = document.querySelector('.intro');
var scoreEl = document.querySelector('#highscores');
var quizEl = document.querySelector('#quiz');
var progressEl = document.querySelector('#progress');
var highscoreBtn = document.querySelector('.highscore-link');
var roundEl = document.querySelector('#roundScore');
var noticeEl = document.querySelector('#scoreNotice');
var restartBtn = document.querySelector('#restart-button');
var backBtn = document.querySelector('#back-button');

var timerCount = 30;

var questions = [
    {
        question: "Which part of the court does a player serve into?",
        choiceA: "Service Box",
        choiceB: "Alley",
        choiceC: "No Man's Land",
        correct: "A"
    }, {
        question: "What is the right half of the court called?",
        choiceA: "Ad Side",
        choiceB: "Near Side",
        choiceC: "Deuce Side",
        correct: "C"
    }, {
        question: "What type of spin would make a ball bounce backwards?",
        choiceA: "Sidespin",
        choiceB: "Backspin",
        choiceC: "Topspin",
        correct: "B"
    }
];

var currentQuestion = 0;
var lastQuestion = questions.length - 1;
var score = 0;
var initials;
var timer;
var highscores = [];
var scores = [];

//function to start timer countdown from 30 seconds
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestion <= lastQuestion) {
    var quest = questions[currentQuestion];
    questionEl.textContent = quest.question;
    choiceA.textContent = quest.choiceA;
    choiceB.textContent = quest.choiceB;
    choiceC.textContent = quest.choiceC;
    } else {
        clearInterval(timer);
        displayScore();
    }
}

startBtn.addEventListener('click', startQuiz);
highscoreBtn.addEventListener('click', displayHighscores);

//function to start quiz
function startQuiz() {
    introEl.style.display = 'none';
    scoreEl.style.display = 'none';
    quizEl.style.display = 'block';
    backBtn.style.display = 'none';
    displayQuestion();
    startTimer();
}

//checks answer user logs
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        score++;
    } else {
        answerIsWrong();
    }
    count = 0;
    if(currentQuestion <= lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer);
        displayScore();
    }
}

//subtracts time if answer is wrong
function answerIsWrong() {
    timerCount = timerCount - 3;
}

//displays high scores if button is clicked
function displayHighscores() {
    introEl.style.display = 'none';
    scoreEl.style.display = 'block';
    quizEl.style.display = 'none';
    roundEl.style.display = 'none';
    backBtn.style.display = 'block';
    for(i=0; i < scores.length; i++) {
        console.log(scores[i]);
        scoreEl.innerHTML = '<p>' + highscores[i] + ' scored ' + scores[i] + '</p>';
    }
}

backBtn.addEventListener('click', goBack);

function goBack() {
    introEl.style.display = 'block';
    scoreEl.style.display = 'none';
}

//displays player score at the end of the quiz round
function displayScore() {
    introEl.style.display = 'none';
    quizEl.style.display = 'none';
    scoreEl.style.display = 'none';
    roundEl.style.display = 'block';
    noticeEl.textContent = 'your score is: ' + score;
    initials = prompt('Your score was ' + score + '. Please enter initials:');
    highscores.push(initials);
    scores.push(score);
}

restartBtn.addEventListener('click', restartQuiz);

//restarts the quiz if the user clicks restart
function restartQuiz() {
    roundEl.style.display = 'none';
    currentQuestion = 0;
    timerCount = 30;
    startQuiz();
}