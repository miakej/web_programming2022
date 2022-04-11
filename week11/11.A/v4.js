function setup() { 
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
  } 
  
  function draw()  {
    // base circle 
    for(var i = 0; i < 200; i += 15) {
        fill((mouseX / 2), 100, 50); // fill with x color
        noStroke();
        ellipse(mouseX, mouseY, i);
      }
    // top circle
    for(var i = 0; i < 200; i += 15) {
        fill(mouseY / 2 , 100, 50); // fill with y color
        ellipse(mouseX, mouseY, 100); // keep center
      }
    // squares
    for(var i = 0; i < 80; i += 15) {
        noFill();
        stroke(mouseX / 2 , 100, 50); // fill with x color
        rect(random(windowWidth), random(windowHeight), i + 10) //randomize placement and size;
      }
}