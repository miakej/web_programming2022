const questions = [
    { question: 'red + yellow =', answer: 'orange' },
    { question: 'yellow + blue =', answer: 'green' },
    { question: 'blue + red =', answer: 'purple' },
]
console.log('all trivia questions', questions);

const randomIdx = Math.round(Math.random() * (questions.length - 1));
const promptGuess = window.prompt(questions[randomIdx].question);

window.alert('You answered ' + promptGuess + '. The correct answer was ' + questions[randomIdx].answer);