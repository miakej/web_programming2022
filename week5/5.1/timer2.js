let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
const distance = 5;

function setup () {
    createCanvas(500, 500);
    background('olive');
}

function drawBlock(x, y, color) {
    fill(color || 255);
    ellipse(x, y, 100);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    } else {

    }

    keyToNumber = map(keyToNumber, 0, 9, 1, 225);
    console.log('converted number', keyToNumber)
    blockColor = keyToNumber;
}

drawTimer = window.setInterval(() => {
    if(blockX - 100 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockX += distance;
    } else {
        blockY += 100;
        blockX = 0;
    }

    if(blockX - 100 > height && blockY - 100 > width) {
        window.clearInterval(drawTimer);
        alert('done');
        console.log('done!');
    }
}, speed);