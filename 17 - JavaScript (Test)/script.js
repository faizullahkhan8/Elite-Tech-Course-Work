import { questions } from "./questions.js";

const nextBtn = document.getElementById("next-btn");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");
const progressNumbers = document.getElementById("progress-numbers");
const errorDiv = document.getElementById("error");

let currentQuestionIndex = 0;
let passingCeriteria = 5;
let scores = [];

const displayQuestion = () => {
    question.innerHTML = questions[currentQuestionIndex].question;

    if (answers.innerHTML) {
        answers.innerHTML = "";
    }

    questions[currentQuestionIndex].answers.map((ans, idx) => {
        // creating answer main container.
        const answerContainer = document.createElement("div");
        answerContainer.classList.add("answer");

        // creating anwer p tag
        const answerPTag = document.createElement("p");
        answerPTag.innerText = ans.text;

        // creating check box
        const checkBox = document.createElement("div");
        checkBox.classList.add("checkbox");

        // creating checkbox icon
        const iTag = document.createElement("i");

        answerContainer.appendChild(answerPTag);
        answerContainer.appendChild(checkBox);
        checkBox.appendChild(iTag);
        answers.appendChild(answerContainer);

        answerContainer.addEventListener("click", (e) => {
            if (ans.correct) {
                answerContainer.classList.add("answer-correct");
                iTag.classList.add("fa-solid", "fa-check");

                if (scores[currentQuestionIndex] === undefined) {
                    let scoreObject = {
                        questionIdx: idx,
                        isSuccess: true,
                    };
                    scores[currentQuestionIndex] = scoreObject;
                }
            } else {
                answerContainer.classList.add("answer-error");
                iTag.classList.add("fa-solid", "fa-xmark");
                answerContainer.classList.add("shake");

                if (scores[currentQuestionIndex] === undefined) {
                    let scoreObject = {
                        questionIdx: idx,
                        isSuccess: false,
                    };
                    scores[currentQuestionIndex] = scoreObject;
                }
            }
        });
    });
};

nextBtn.addEventListener("click", (e) => {
    if (currentQuestionIndex !== questions.length - 1) {
        if (scores[currentQuestionIndex] !== undefined) {
            errorDiv.style.display = "none";

            currentQuestionIndex++;
            displayQuestion();

            progressBar.style.width = `${
                ((currentQuestionIndex + 1) / questions.length) * 100
            }%`;

            progressNumbers.innerText = `${currentQuestionIndex + 1} / ${
                questions.length
            }`;
        } else {
            errorDiv.style.display = "flex";
        }
    } else {
        question.innerHTML = "";
        answers.innerHTML = "";

        let corrected = 0;
        let isPass = false;

        scores.map((scr) => {
            if (scr.isSuccess) {
                corrected++;
            }
        });

        if (corrected >= passingCeriteria) {
            isPass = true;
        }

        question.innerHTML = `Correct Answers: ${corrected} <br><br> Wronge Answers: ${
            questions.length - corrected
        } <br><br> Status: ${
            isPass
                ? "Congragulations You're pass"
                : "Sorry you're Fail! better lock next time."
        }`;

        answers.innerHTML =
            "<h1 style='text-align: center;'>Developed By Faiz Ullah Khan with &hearts;";
    }
});

displayQuestion();
