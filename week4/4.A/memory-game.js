// create a grid of card shapes (view demo);
// decide number of cards (ie: 20), create 10 shapes; find image for card back (look at demo 1 week 1 grid for snowman for reference on how to bring images into code); do not yet need to place images within card

function setup() {
    createCanvas(900,900);
}
let cards = [];
function draw() {
    background('peru');
    noLoop();
    fill('aliceblue');
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const newCard = {x: i * 200, y: j * 225, width: 150, height: 175}
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push();
        }
    }

    console.log('cards', cards);
}