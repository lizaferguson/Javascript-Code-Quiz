var timerEl = document.querySelector(".timer-el");
var startButton = document.querySelector(".start-button");
var questionListEl = document.querySelector(".question-list");
var questionResultEl = document.querySelector(".question-result");
var questionEl = document.querySelector(".question");



var timer;
var timerCount;
var incorrectAnswers = 0;
var correctAnswers = 0;
var questionIndex = 0;

//initializes game
function init () {

}

//questions array with question objects
var questions = [
  { 
    title: "Which is not a commonly used data type: ",
    choices: ["Number", "Boolean", "String", "Comment"],
    answer: "Comment",
  },

  {
    title: "What type of operator will return true or false? ",
    choices: ["Assignment Operator", "Comparison Operator", "Arithmetic Operator", "String Operator"],
    answer: "Comparison Operator",
  },
  
  {
    title: "What is the correct term for asking a function to complete it's task? ",
    choices: ["Assigning a function", "Activating a function", "Calling a function", "Starting a function"],
    answer: "Calling a function",
  },

  {
    title: "Which is NOT an example of a comparison operator? ",
    choices: ["=", "!==", "==", "==="],
    answer: "=",
  },
];

//registers user click on start button, runs renderQuestion function
startButton.addEventListener("click", renderQuestion);

//start quiz function 
function startQuiz() {
    renderQuestion();
    startTimer();
}

//timer function
function startTimer() {
  //setting time to count down from 60 seconds by 1 sec
  var timerCount = 60;
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount + "  seconds remaining!";
    if (timerCount === 0) {
    clearInterval(timer);
    endQuiz(); }
  }, 1000);
}

//ends game 
function endQuiz() {
    timerEl.textContent = "GAME OVER";
    startButton.disabled = false;
}

//gives user question from the question array
function renderQuestion() {
  startTimer();
  //gets the question from the question object index by title
  questionEl.textContent = questions[questionIndex].title;
  questionListEl.innerHTML = "";
  
  //setting choices to equal answer choices for corresponding question from object
  var choices = questions[questionIndex].choices;
  
  
  for (var i = 0; i < choices.length; i++) {
    var questionListItem = document.createElement("button");
    questionListItem.addEventListener("click", function() { console.log(this.innerText);});

    questionListItem.textContent = choices[i];

    questionListEl.append(questionListItem);
   
  //trying to check users answer with the correct answer from the answer object
    if (questionListItem === questions[questionIndex].answer) {
      correctAnswers++;
      questionResultEl.textContent = "Correct Answer :-) ";
    } else {
      timerCount -= 3;
      questionResultEl.textContent = "Incorrect Answer :-( ";
    }
  }
}
//trying to set a function so the question index increases in order and the next question shows
function nextQuestion() {
  questionResultEl.textContent = "";
  questionIndex++;
  questionEl.textContent = questionIndex.title
  
  if (questionIndex === questions.length) {
    timer = 0;
    endQuiz();
  } else {
    renderQuestion();
  }
}

// questionListEl.addEventListener("click", checkAnswer);

var highScoresDisplay = document.getElementById("highscores-display");

//trying to create a show highscore function
function showHighScores() {
highScoresDisplay.classList.remove("hide");

}