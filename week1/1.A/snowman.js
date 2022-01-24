let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "pink")
let stroke2 = prompt("enter another basic color name in lowercase", "gray")
let fill = prompt("enter a final basic color name in lowercase", "white")
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("100px_grid.png")
}
function draw() {
    background(grid);
    fill(fill);
    stroke(stroke1);
    ellipse(350, 650, 200);
    ellipse(650, 650, 200);
    ellipse(500, 450, 350, 400;
    ellipse(500, 200, 200);
    stroke(stroke2);
    strokeWeight(20);
    line(400, 120, 600, 120);
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    noFill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);
}