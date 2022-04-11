function setup() { 
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    noStroke();
    drawCircle(windowWidth/2, windowHeight/2, 1000);
  } 
  
  function drawCircle(x, y, size)
  {
    // draw initial circle
    fill(random(180), 100, 50);
    ellipse(x, y, size, size);
  
    // if statement keeps it from going on forever
    if(size > 10)
    {
      drawCircle(x, y, size - 30);
    }
  }