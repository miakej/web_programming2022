const questions = [
    { question: 'question 1 here', answer: 'answer 1 here' },
    { question: 'question 2 here', answer: 'answer 2 here' },
    { question: 'question 3 here', answer: 'answer 3 here' },
]
console.log('all trivia questions', questions);

const randomIdx = Math.round(Math.random() * (questions.length - 1));
const promptGuess = window.prompt(questions[randomIdx].question);

window.alert('You answered ' + promptGuess + 'The correct answer was ' + questions[randomIdx].answer);
