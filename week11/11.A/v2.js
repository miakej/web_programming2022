function setup() { // set up canvas
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); // experimenting with HSL color mode
    noStroke();
    
    drawPattern(20); // size of 'stair' tops
      drawPattern(20); // size of 'stair' sides
  }
  
  function drawPattern(size)
  { // uniform dimensions for shapes
    var a = size;
    var b = size * 2;
    var c = size * 3;
    var d = size * 4; 
      
      var odd = true; // shift start to left
  
    for (var y = 0; y <= height + size; y += c)
    {
      for (var x = 0; x <= width + size; x += d)
      {
        push();
        translate(x, y)
        // shift every other row to the left to
        // fit inside the row above.
        if(odd) {
          translate(-b, 0);
        }
        
        // stair tops
        fill(random(180),100,50); 
        beginShape();
            vertex(0, -b);
            vertex(b, -a);
            vertex(0, 0);
            vertex(-b, -a);
        endShape();
      
        // stair sides
        fill(random(180),100,50); 
        beginShape();
            vertex(-b, -a);
            vertex(0, 0);
            vertex(0, b);
            vertex(-b, a);
        endShape();
        
        pop();
      }
          
          odd = !odd; // keep shapes aligned
    }
  }