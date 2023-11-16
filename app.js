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
        // Add questions for quiz2 as needed
    ],
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let answeredQuestions = 0;

// Function to start the quiz
async function startQuiz(quizId) {
    try {
        const response = await fetch(`https://my-json-server.typicode.com/ruszeii/Project3/${quizId}`);
        currentQuiz = await response.json();
        currentQuestionIndex = 0;
        correctAnswers = 0;
        answeredQuestions = 0;
        showNextQuestion();
    } catch (error) {
        console.error('Error loading quiz data:', error);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
        const question = currentQuiz[currentQuestionIndex];
        const questionText = question.question; // Use "question" instead of "text"
        const answerOptions = question.options;

        const questionElement = document.getElementById('question-text');
        questionElement.textContent = questionText;

        const answerOptionsElement = document.getElementById('answer-options');
        answerOptionsElement.innerHTML = ''; // Clear existing answer options

        for (const answerOption of answerOptions) {
            const answerOptionElement = document.createElement('input');
            answerOptionElement.type = 'radio';
            answerOptionElement.name = 'answer'; // Ensure the radio buttons are in the same group
            answerOptionElement.value = answerOption;
            answerOptionElement.textContent = answerOption;

            answerOptionsElement.appendChild(answerOptionElement);
        }
        currentQuestionIndex++;
    } else {
        showCompletionView();
    }
}

document.getElementById("start-quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedQuiz = document.getElementById("quiz-select").value;
    startQuiz(selectedQuiz);
});
