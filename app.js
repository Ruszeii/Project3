const quizData = {
    quiz1: [
        {
            question: "What is 2 + 2?",
            type: "multiple-choice",
            options: ["3", "4", "5"],
            correctAnswer: "4",
        },
        {
            question: "What is the capital of France?",
            type: "multiple-choice",
            options: ["London", "Berlin", "Paris"],
            correctAnswer: "Paris",
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            type: "multiple-choice",
            options: ["Shakespeare", "Hemingway", "Tolkien"],
            correctAnswer: "Shakespeare",
        },
    
    ],
    quiz2: [
        
    ],
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let answeredQuestions = 0;

// Function to start the quiz
function startQuiz(quizId) {
    currentQuiz = quizData[quizId];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    answeredQuestions = 0;
    showNextQuestion();
}


function showNextQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
        const question = currentQuiz[currentQuestionIndex];
    
    } else {

    }
}

document.getElementById("start-quiz-button").addEventListener("click", () => {
    const selectedQuiz = document.getElementById("quiz-select").value;
    startQuiz(selectedQuiz);
});


