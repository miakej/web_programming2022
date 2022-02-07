let angle = 0;
let rotateBy = 5;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke('white');
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 / alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateby += 5;
}

function mousePressed() {
    noLoop();
}


