function setup() {
    createCanvas(windowWidth, windowHeight);
    background(random(200), random(200), random(200), 50);

    for (let i=0; i < 2000; i++) {
        fill(random(255), random(255), random(255), random(255));
        noStroke();
        rect(random(windowWidth), random(windowHeight), random(100), random(100), 20)
    }
}
