/* 
Use a for loop in the draw function to draw a number of instances of your class on the canvas. */

let bubble1;
let bubble2;
let bubble3;
let bubble4;

function setup() {
    createCanvas(400,400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();
}

function draw() {
    background('peru');
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
}

class Bubble {
    // properties
    constructor () {
        this.x = 200;
        this.y = 200;
    }
    // methods
    move () {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    
    show () {
        stroke(225);
        strokeWeight(3);
        fill('thistle');
        ellipse(this.x, this.y, 80, 80);
    }
}