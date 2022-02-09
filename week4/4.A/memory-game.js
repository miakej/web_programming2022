// create a grid of card shapes (view demo);
// decide number of cards (ie: 20), create 10 shapes; find image for card back (look at demo 1 week 1 grid for snowman for reference on how to bring images into code); do not yet need to place images within card

function setup() {
    createCanvas(900,900);
}
let cards = [];
function draw() {
    background('#ccc');
    noLoop();
    fill('peru');
    for (let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            const newCard = {x: i * 150, y: j * 150, width: 100, height: 100}
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push();
        }
    }
 
    console.log('cards', cards);
}