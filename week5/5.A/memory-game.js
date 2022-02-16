const DOWN = 'down';
const UP = 'up';
let startingX = 25;
let startingY = 25;
let cards = [];
let cardfaceImg;
const gameState = {

}
let cardFaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('cards/front.png');
    cardFaceArray = [
        loadImage('cards/arches.png'),
        loadImage('cards/bryce.png'),
        loadImage('cards/canyonlands.png'),
        loadImage('cards/capitolreef.png'),
        loadImage('cards/glacier.png'),
        loadImage('cards/grandcanyon.png'),
        loadImage('cards/yellowstone.png'),
        loadImage('cards/zion.png'),
    ]
}
function setup() {
    createCanvas(1000, 1000);
    background('aliceblue');
    // myCard = new Card();
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            cards.push(new Card(startingX, startingY, cardFaceArray[0]));
            startingX +=175;
        }
        startingY += 225;
        startingX = 25;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}

class Card {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardfaceImg = cardfaceImg;
        this.show();
    }
    show () {
        if(this.face === DOWN) { // face down
            noStroke();
            rect(this.x, this.y, this.width, this.height, 5);
            image(cardBack, this.x, this.y, this.width, this.height) 
        } else { // face up
            rect(this.x, this.y, this.width, this.height, 5);
            image(this.cardfaceImg, this.x, this.y, this.width, this.height) 
        }
       }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN; // technically might not need this
        }

        this.show();
    }
}