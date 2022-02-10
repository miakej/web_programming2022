let rectX = 0;
let rectWidth = 75;
let rectHeight = 75;
let rectY;
let speed;
let clickCount = 0;

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 5);
}

function draw () {
    background('thistle');
    drawShape();
    rectX += speed;
    if (rectX > width) {
        noLoop();
        textSize(30);
        text('Your score was ' + clickCount, 100, 100);
        if (clickCount >= 5) {
            text('Nice!', 100, 50);
        } else {
            text('Try Again!', 100, 150)
        }
    } 
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape () {
    fill('cadetblue');
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight);
    fill('white');
    text('CLICK ME!', rectX + 5, rectY + 35);
}