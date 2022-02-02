function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('lightblue');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(4);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('lightyellow');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('lightpink');
    strokeWeight(5);
    circle(100, 100, 100);
}

function draw() {
    createTile();
}