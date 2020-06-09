// making array with correct answers from quiz
const correctAnswers = ['C', 'A', 'B', 'A'];
// targetting form from html
const form = document.querySelector('.quiz-form');
// creating addEventListener for submit button and prevent default action
form.addEventListener('submit', e => {
    e.preventDefault();
})