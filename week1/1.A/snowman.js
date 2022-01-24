//let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case with no spaces for the body", "lightblue");
let stroke2 = prompt("enter a basic color name for the hat", "black");
let stroke3 = prompt("enter a basic color for the arms", "brown")

let fill1 = prompt("what color is your snow cat?", "orange")

function setup() {
    createCanvas(1000, 800);
    background(240);
    //grid = loadImage("100px_grid.png");
}
function draw() {

    // legs
    fill("white");
    strokeWeight(10);
    stroke(stroke1);
    // bottom snowball
    ellipse(500, 550, 350);
    // body
    ellipse(500, 350, 250);
    // head
    ellipse(500, 200, 200);
    // hat brim
    fill(stroke2)
    stroke(stroke2);
    strokeWeight(20);
    line(400, 120, 600, 120);
    // hat body
    rect(425, 20, 150, 100, 20, 20, 5, 5);
    // eyes
    stroke(40);
    strokeWeight(30);
    point(435, 200);
    point(565, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 220, 80, 80, 0, HALF_PI);
    // arms 
    stroke(stroke3);
    strokeWeight(10);
    line(390, 350, 300, 300);
    line(590, 350, 680, 300);

    fill("white");
    strokeWeight(10);
    stroke(fill1);
    // cat body
    ellipse(200, 650, 200, 150);
    // cat head
    ellipse(250, 550, 100, 100);
    // cat tail
    noFill();
    strokeWeight(10);
    arc(100, 600, 60, 60, HALF_PI, PI);
    // cat ears
    triangle(200, 500, 200, 530, 230, 500)
    triangle(300, 500, 300, 530, 270, 500);
    // cat face
    stroke(50);
    strokeWeight(10);
    point(225, 550);
    point(275, 550);
    // cat nose
    fill("red");
    noStroke();
    triangle(245, 570, 255, 570, 250, 560);
    // cat mouth
    noFill();
    stroke("red");
    strokeWeight(2);
    arc(240, 570, 20, 20, HALF_PI, PI);
}