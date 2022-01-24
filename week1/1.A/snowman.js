let grid = undefined;

function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("100px_grid.png");
}
function draw() {
    background(grid);
    // legs
    fill("white");
    strokeWeight(10);
    stroke("aqua");
    // bottom snowball
    ellipse(500, 550, 350);
    // body
    ellipse(500, 350, 250);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke("yellow");
    strokeWeight(20);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(50);
    strokeWeight(40);
    point(425, 200);
    point(575, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 220, 80, 80, 0, HALF_PI);
    // arms 
    stroke("brown");
    strokeWeight(15);
    line(400, 350, 300, 300);
    line(580, 350, 680, 300);

    fill("white");
    strokeWeight(10);
    stroke("aqua");
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