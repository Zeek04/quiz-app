const API_URL =
  "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";

async function fetchQuestion() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const questionData = data.results[0];
    const questions = questionData.question; //Will get question data from api//
    const correctAnswer = questionData.correct_answer; //Will get correct answer data from api//
    const incorrectAnswers = questionData.incorrect_answers; //Will get incorrect answer data from api//
    const allAnswers = shuffleArray([correctAnswer, ...incorrectAnswers]); //Combine the correct answer data with the incorrect answer array//

    displayQuestion(questions, allAnswers, correctAnswer);
  } catch {
    console.error("Error", error);
  }
}

//Function to display each answer//
function displayQuestion(question, answers, correctAnswer) {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answer");

  questionElement.innerHTML = question;

  answersElement.innerHTML = "";

  //Will create an li & Button element for each answer option fetch from data//
  answers.forEach((answer) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(answer, correctAnswer);
    li.appendChild(button);
    answersElement.appendChild(li);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
        alert("Correct!");
  } else {
        alert("Incorrect Try Again!");
  }

  fetchQuestion();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

fetchQuestion();
