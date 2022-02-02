// p5 dom

let button;
let circleColor = "red";
let input;
let headline;
let question;
let won;
const statements = [
    {question: "Q1", answer: "A1"},
    {question: "Q2", answer: "A2"},
    {question: "Q3", answer: "A3"},
]
function changeCircleColor() {
    circleColor = "blue";
}
function setup() {
    createCanvas(800, 800);
    background("lightblue");
    // button stuff
    button = createButton('Hi, I am a button');
    button.position(400, 400);
/*     button.mousePressed(function (event) {
        if (input.value() === statements[0].answer)
    }); */
    // input stuff
    input = createInput('');
    input.position(200, 400);
    // headline stuff
    headline = createElement("h2", ['type your text here'])
    headline.position (300,50);
    // question
    question = createElement("p", [statements[0].question]);
    question.position(300, 90);
    // feedback stuff
    feedback = createElement("h1", ["You win"]);
    feedback.position(-500, -500);
}

function draw() {
    fill(circleColor);
    circle(150, 150, 150);
    if(won === true) {
        feedback.position(300, 125);
    }
}