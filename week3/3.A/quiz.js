let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: "question 1", answer: "answer 1"},
    { question: "question 2", answer: "answer 2"},
    { question: "question 3", answer: "answer 3"},
    { question: "question 4", answer: "answer 4"},
    { question: "question 5", answer: "answer 5"},
    { question: "question 6", answer: "answer 6"},
    { question: "question 7", answer: "answer 7"},
]
function next() {
    if (statements.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // correct condition
        response = 'correct! next question';
        responseColor = 'green';
    } else {
        // wrong condition
        response = 'oops, that wasn\'t quite right. Try another!';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    message = currenQuestion.question;
}

currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.size(250, 24);
    submitAnswerButton.position(100, 250);
}

function draw() {
    background('lightblue');
    fill('peru');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
}