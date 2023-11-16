fetch('quiz1.json')
  .then(response => response.json())
  .then(data => {
   
const question = data[0];
const questionText = question.text;
const answerOptions = question.answerOptions;

const questionElement = document.getElementById('question-text');
questionElement.textContent = questionText;

const answerOptionsElement = document.getElementById('answer-options');
for (const answerOption of answerOptions) {
  const answerOptionElement = document.createElement('input');
  answerOptionElement.type = 'radio';
  answerOptionElement.value = answerOption.value;
  answerOptionElement.textContent = answerOption.text;

  answerOptionsElement.appendChild(answerOptionElement);
}
