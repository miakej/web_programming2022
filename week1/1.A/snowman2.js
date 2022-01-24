let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case with no spaces for the body", "lightblue");
let stroke2 = prompt("enter a basic color name for the hat", "red");
let stroke3 = prompt("enter a basic color for the arms", "brown")
let stroke4 = prompt("enter a final basic color name for the body fill", "white")
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("100px_grid.png");
}
function draw() {
    background(grid);
    // legs
    fill(stroke4);
    strokeWeight(20);
    stroke(stroke1);
    // left leg
    ellipse(350, 650, 200);
    // right leg
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    // mouth
    noFill()
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);
    // arms 
    stroke(stroke3);
    strokeWeight(20);
    line(350, 400, 200, 300);
    line(650, 400, 800, 300);
}