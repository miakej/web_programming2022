const DOWN = 'down';
const UP = 'up';
let startingX = 25;
let startingY = 25;
let cards = [];
const gameState = {

}
let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('cards/front.png');
    cardfaceArray = [
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
    let selectedFaces = []; // could do this in preload, but makes sense in setup
    for (let m = 0; m < 8; m++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }        
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
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
    constructor (x, y, cardfaceImg) {
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
            fill('goldenrod');
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

function shuffleArray (cardArray) {
    let counter = cardArray.length;
    while (counter > 0) {
        // pick random idx - need to use Math. because this is not in the setup function
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        // swap with last element
        const temp = cardArray[counter];
        cardArray[counter] = cardArray[idx];
        cardArray[idx] = temp;
    }
    return cardArray;
}