let myCard;
const DOWN = 'down';
const UP = 'up';

function setup() {
    createCanvas(900, 900);
    background('aliceblue');
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.show();
    }
    show () {
        if(this.face === DOWN) { // face down
            fill('peru');
            noStroke();
            rect(this.x, this.y, this.width, this.height, 5); 
        } else { // face up
            fill('goldenrod');
            rect(this.x, this.y, this.width, this.height, 5);
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