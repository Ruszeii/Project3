// Define the quiz data
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

// Global variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let answeredQuestions = 0;

// Function to start the quiz
async function startQuiz(quizId) {
  try {
    // Fetch quiz data from the API
    const response = await fetch(`https://my-json-server.typicode.com/Ruszeii/Project3/${quizId}`);
    const quizDataFromAPI = await response.json();

    // Check if quiz data is valid
    if (quizDataFromAPI) {
      currentQuiz = quizDataFromAPI; // Update current quiz data
      currentQuestionIndex = 0;
      correctAnswers = 0;
      answeredQuestions = 0;
      showNextQuestion(); // Display the first question
    } else {
      console.error('Error loading quiz data:', error);
      alert('Invalid quiz ID. Please select a valid quiz.');
    }
  } catch (error) {
    console.error('Error loading quiz data:', error);
    alert('An error occurred while fetching the quiz data. Please try again later.');
  }
}

// Function to display the next question
function showNextQuestion() {
  if (currentQuestionIndex < currentQuiz.length) {
    // Extract question data
    const question = currentQuiz[currentQuestionIndex];
    const questionText = question.text;
    const answerOptions = question.answerOptions;

    // Update question text
    const questionElement = document.getElementById('question-text');
    questionElement.textContent = questionText;

    // Clear existing answer options
    const answerOptionsElement = document.getElementById('answer-options');
    answerOptionsElement.innerHTML = '';

    // Create and append answer options
    for (const answerOption of answerOptions) {
      const answerOptionElement = document.createElement('input');
      answerOptionElement.type = 'radio';
      answerOptionElement.value = answerOption.text; // Use "text" property for option value
      answerOptionElement.textContent = answerOption.text; // Use "text" property for option text

      answerOptionsElement.appendChild(answerOptionElement);
    }

    // Increment question index
    currentQuestionIndex++;
  } else {
    showCompletionView(); // Display quiz completion view
  }
}

// Event listener for the start quiz form submission
document.getElementById("start-quiz-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission default behavior

  // Get the selected quiz ID
  const selectedQuiz = document.getElementById("quiz-select").value;

  // Start the quiz with the selected quiz ID
  startQuiz(selectedQuiz);
});
