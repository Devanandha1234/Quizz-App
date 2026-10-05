"use strict";
//Data
let question = [
    {
        question: "Capital of India?",
        options: ["Delhi", "Mumbai"],
        answer: "Delhi"
    },
    {
        question: "2+2 ?",
        options: ["4", "6"],
        answer: "4"
    },
    {
        question: "TypeScript is ______ language?",
        options: ["Statically type", "Dyanamic type"],
        answer: "Statically type"
    },
    {
        question: "What does 'URL' stand for??",
        options: ["uniform resource locator", "uniform relavanat locator "],
        answer: "uniform resource locator"
    },
    {
        question: "What does 'API' stand for in software development?",
        options: ["Application Programming Interface", "Application Protocol Interface "],
        answer: "Application Programming Interface"
    }
];
//type logic
let current = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || "0";
document.getElementById("highScore").textContent = "HighScore:" + highScore;
function loadQuestion() {
    let q = question[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("option1").textContent = q.options[0];
    document.getElementById("option2").textContent = q.options[1];
}
function checkAnswer(answer) {
    if (answer === question[current].answer) {
        score++;
    }
    current++;
    if (current < question.length) {
        loadQuestion();
    }
    else {
        alert('end of the Quiz');
        document.getElementById("score").textContent = "final Score:" + score;
        if (score > Number(highScore)) {
            localStorage.setItem("highScore", score.toString());
        }
    }
}
// Event Listener & inital load
document.getElementById("option1").addEventListener("click", function () {
    checkAnswer(question[current].options[0]);
});
document.getElementById("option2").addEventListener("click", function () {
    checkAnswer(question[current].options[1]);
});
loadQuestion();
