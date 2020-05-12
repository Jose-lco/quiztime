//add event listeners to all elements that will be manipulated in JS.
const startQuiz = document.querySelector("#startQuiz");
const highScores = document.querySelector("#highScores");
let question = document.querySelector("#question");
let options = document.querySelector("#options");
let timer = document.querySelector("#timer");

//put all the quiz data in an array of objects.
let quizQuestions = [
  {
    que: "Which of the following can create a variable?",
    choices: ["5apples", "function", "_season"],
    answer: "_season"
  },
  {
    que: "Which is not a data type?",
    choices: ["String", "Array", "null"],
    answer: "Array"
  },
  {
    que: "Which of the following methods returns a boolean?",
    choices: ["includes", "toUppercase", "indexOf"],
    answer: "includes"
  },
  {
    que: "What does DOM stand for?",
    choices: ["Do Own Model", "Document Object Model", "Document Object Method"],
    answer: "Document Object Model"
  },
];
let currentQuestion = 0;
let timeLeft = 10;
startQuiz.addEventListener("click", function () {
  startQuiz.style.display = "none";
  let timerInterval = setInterval(function () {
    timer.textContent = `Time: ${timeLeft} seconds`;
    timeLeft--
    if (timeLeft < 0) {
      clearInterval(timerInterval);
    }
  }, 1000)
  render();
})
//keep track of which question is displayed on the webpage.
function render() {
  let questionData = quizQuestions[currentQuestion];
  question.textContent = questionData.que;
  let questionChoices = questionData.choices;
  options.textContent = "";
  questionChoices.forEach(function (choice) {
    let listofChoices = document.createElement("button");
    options.classList.add("btn-group-vertical");
    listofChoices.textContent = choice;
    options.appendChild(listofChoices);
  })
  document.addEventListener("click", "#options", function (event) {
    event.preventDefault()
    currentQuestion++
    render();
  });
}
