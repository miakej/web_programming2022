function setup() {
    createCanvas(900,900);
}
let cards = [];
function draw() {
    background('aliceblue');
    noLoop();
    noStroke();
    fill('peru');
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const newCard = {x: i * 175, y: j * 225, width: 150, height: 200}
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push();
        }
    }
    textSize(30);
    text('score:', 700, 425);
    text('X matches', 700, 475);
}