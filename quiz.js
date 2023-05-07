const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const outputMessage = document.querySelector("#output-message");

const correctAnswers = ["90°","right angled","12, 16, 20","one right angle","Equilateral triangle","a + b + c","no"];

function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1
    }

    outputMessage.innerText = "Your score is " + score;

}



submitButton.addEventListener("click", calculateScore)