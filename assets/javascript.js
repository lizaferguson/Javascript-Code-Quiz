var timerEl = document.querySelector(".timer-el");
var startButton = document.querySelector(".start-button");
// var showQuestion = document.querySelector(".show-question");
var questionListEl = document.querySelector(".question-list");
var questionResultEl = document.querySelector(".question-result");
var questionEl = document.querySelector(".question");



var timer;
var timerCount;
var isWin = false;
var incorrectAnswers = 0;

function init () {

}

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

startButton.addEventListener("click", renderQuestion);

//start quiz function 
function startQuiz() {
    renderQuestion();
    startTimer();
}

//timer function
function startTimer() {
  //setting time to count down from 60 seconds
  var timerCount = 60;
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount + "  seconds remaining!";
    if (timerCount === 0) {
    clearInterval(timer);
    endQuiz(); }
  }, 1000);
}

function endQuiz() {
    timerEl.textContent = "GAME OVER";
    incorrectAnswers++
    startButton.disabled = false;
    setLosses()
}

var questionIndex = 0;
var correctAnswers = 0;

//gives user question from the question array
function renderQuestion() {
  startTimer();
  questionEl.textContent = questions[questionIndex].title;
  questionListEl.innerHTML = "";
  
  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;
  
  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("button");
    questionListItem.addEventListener("click", function() { console.log(this.innerText);});

    questionListItem.textContent = choices[i];

    questionListEl.append(questionListItem);
  }
}

function checkAnswer() {
var selectedChoice = "";
  //   console.log(Event.arguments);
  // clearInterval(intervalId);

  // // Store the user's click as a variable, 'target'.
  // var target = Event.target;

  // // // validate that the user clicked on a valid li element.
  // if (target.("li") {

  //   // Store the actual text content of the li element in variable, 'selectedChoice'.
    
  if (selectedChoice === questions[questionIndex].answer) {
    correctAnswers++;
    questionResultEl.textContent = "Correct Answer :-) ";
    } 
    else {
    correctAnswers--;
    timer -= 3;
    questionResultEl.textContent = "Incorrect Answer :-( ";
    }
  };



function nextQuestion() {
  // Clear our questionResultEl value.
  questionResultEl.textContent = "";

  // Increment our question index variable by 1.
  questionIndex++;

  // Call our renderQuestion() function if there are questions left to ask
  // If not, just end the quiz.
  if (questionIndex === questions.length) {
    timer = 0;
    endQuiz();
  } else {
    renderQuestion();
  }
}

questionListEl.addEventListener("click", checkAnswer);