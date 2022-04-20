// assign question, toggle-btn and text to variables
const questions = document.querySelectorAll('.question');
const toggleBtn = document.querySelector('.question__toggle-btn');

// for each question, show text when toggleBtn is clicked
questions.forEach((question) => {
  toggleBtn.addEventListener('click', () => {
    question.classList.toggle('question__text--open');
  });
});