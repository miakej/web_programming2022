let rotateBy = 8;
let r, g, b;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    r = random(255);
    g = random(255);
    b = random(225);
    background(r, g, b);
}

function makeArm() {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(200, 200 / alt, 200 * alt, 150)
}

function draw() {
    translate(windowWidth / 2, windowHeight / 2);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 8;
}

function mousePressed() {
    background(r, b, g) // refreshes spiro
}