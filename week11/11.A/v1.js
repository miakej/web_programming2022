function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL); // experimenting with HSL color mode
    noStroke();
    
    var size = 50; // square size (min of 45)
  
    for(var x = 0; x < width; x += size) // create repeating pattern
    {
      for(var y = 0; y < height; y += size)
      {
        // base square; blue to red with randomized lightness
        var hue1 = map(x, 0, width, 180, 10);
        fill(hue1, 100, random(40, 70))
        rect(x, y, size, size)

        // square 2; red to blue, slightly lighter, slightly smaller
        var hue2 = map(x, 0, width, 10, 180);
        fill(hue2, 100, random(50, 80))
        rect(x + 10, y + 10, size - 20, size - 20)

        // square 3; blue to red, lighter still, slightly smaller
        var hue3 = map(x, 0, width, 180, 10);
        fill(hue3, 100, random(60, 90))
        rect(x + 15, y + 15, size - 30, size - 30)

        // top square; red to blue, lightest, smallest
        var hue4 = map(x, 0, width, 10, 180);
        fill(hue4, 100, random(70, 100))
        rect(x + 20, y + 20, size - 40, size - 40)
      }
    }
  }
  
  