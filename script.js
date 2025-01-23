const API_URL = 'https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple';

async function fetchQuestion() {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        const questionData = data.results[0]
        const questions = questionData.question; //Will get question data from api//
        const correctAnswer = questionData.correct_answer;  //Will get correct answer data from api//
        const incorrectAnswers = questionData.incorrect_answers;    //Will get incorrect answer data from api//


    }catch{
        console.error("Error", error);
    }
}

//Function to display each answer//
function displayQuestion(question, answers){                       
    const questionElement = document.getElementById("question")
    const answersElement = document.getElementById('answer')

    questionElement.innerHTML = question

    answersElement.innerHTML = "";

    //Will create an li & Button element for each answer option fetch from data//
    answers.forEach(answer => {
        const li = document.createElement('li')
        const button = document.createElement('button')

        button.innerText = answer

        li.appendChild(button)
        answersElement.appendChild(li)

    });
    
}

fetchQuestion()