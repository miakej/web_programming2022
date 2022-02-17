let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 200 ; i++) {
        let x = random(width);
        let y = random(height);
        let s = random(1, 30);
        // bubble pastel and transparency
        let r = random(200, 250);
        let b = random(200, 250);
        let g = random(200, 250);
        let t = random(20, 100);
        let c = color(r, b, g, t);
        bubbles[i] = new Bubble(x, y, s, c);
    }
}

function draw() {
    background('cadetblue');
    for (let i = 0; i < 200; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    // properties
    constructor (x, y, s, c) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.c = c;
    }
    // methods
    move () {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-3, 0);
    }
    
    show () {
        stroke(this.c);
        strokeWeight(3);
        fill(this.c);
        ellipse(this.x, this.y * 2, this.s * 5);
    }
}