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

//function to start timer countdown from 30 seconds
function startTimer() {
    var timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function displayQuestion() {
    var quest = questions[currentQuestion];
    questionEl.innerHTML = "<p>" + quest.question + "</p";
    choiceA.textContent = quest.choiceA;
    choiceB.textContent = quest.choiceB;
    choiceC.textContent = quest.choiceC;
    choiceA.addEventListener('click', checkAnswer);
    choiceB.addEventListener('click', checkAnswer);
    choiceC.addEventListener('click', checkAnswer);
}

function showProgress() {
    for(var i=0; i<=lastQuestion; i++) {
        progressEl.innerHTML += '<div class="prog" id='+ i +'></div>';
    }
}

startBtn.addEventListener('click', startQuiz);

//function to start quiz
function startQuiz() {
    introEl.style.display = 'none';
    scoreEl.style.display = 'none';
    quizEl.style.display = 'block';
    displayQuestion();
    startTimer();
    showProgress();
}

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        scoreEl++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer);
        displayScore();
    }
}


function answerIsCorrect() {
    document.querySelector(currentQuestion).style.backgroundColor = "green";
}

function answerIsWrong() {
    document.querySelector(currentQuestion).style.backgroundColor = "red";
    timerCount = timerCount - 3;
}
