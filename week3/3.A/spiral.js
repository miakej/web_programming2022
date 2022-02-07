let rotateBy = 8;
let r, g, b;
let spiro = window.prompt("select spiral size");

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
    stroke(255);
    strokeWeight(2);
    // shapes with custom spiral design size
    ellipse(spiro, spiro / alt, spiro * alt, spiro * 2); 
    rect(spiro, spiro / alt, spiro * alt, spiro);
}

function draw() {
    translate(windowWidth / 2, windowHeight / 2); // keeps centered to screen
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 8;
}f

function mousePressed() {
    background(r, b, g); // changes background color
    // spiro refreshes
}