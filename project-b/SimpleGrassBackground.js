class SimpleGrassBackground {
  constructor() {
    colorMode(HSB, 360, 100, 100, 1);
  }

  display() {
    background(70, 70, 70);
    
    
    for (let x = 0; x < width; x += 5) {
      for (let y = -1; y <= height; y += 10) {
        strokeWeight(5)
        stroke(80, 100, 60,0.5);
        let grassHeight = 8 + (x + y) % 8;
        let sway = noise(frameCount * 0.05 + x * 0.05) * 2;
        line(x, y, x + sway, y - grassHeight);
      }
    }
    strokeWeight(1.5);
    for (let x = 1; x < width; x += 10) {
      for (let y = -1; y <= height; y += 25) {
        stroke(75, 100, 50);
        let grassHeight = 8 + (x + y) % 8;
        let sway = noise(frameCount * 0.03 + x ) * 5;
        line(x, y, x + sway, y - grassHeight);
      }
    }
    for (let x = 1; x < width; x += 8) {
      for (let y = -1; y <= height; y += 23) {
        stroke(85, 100, 60);
        let grassHeight = 8 + (x + y) % 8;
        let sway = -noise(frameCount * 0.03 + x ) * 6;
        line(x, y, x + sway, y - grassHeight);
      }
    }
    
    
    for (let x = -3; x < width; x += 8) {
      for (let y = -3; y <= height; y += 24) {
        stroke(85, 100, 60);
        let grassHeight = 6 + (x + y) % 8;
        let sway = noise(frameCount * 0.05 + x * 0.03) * 3;
        line(x, y, x + sway, y - grassHeight);
      }
    }
    
    for (let x = 6; x < width; x += 12) {
      for (let y = -8; y <= height; y += 36) {
        stroke(90, 100, 70);
        let grassHeight = 7 + (x + y) % 8;
        let sway = -noise(frameCount * 0.02 + x * 0.03) * 5;
        line(x, y, x + sway, y - grassHeight);
      }
    }
    
    for (let x = 6; x < width; x += 12) {
      for (let y = -8; y <= height; y += 24) {
        stroke(80, 100, 60);
        let grassHeight = 7 + (x + y) % 8;
        let sway = noise(frameCount * 0.02 + x * 0.03) * 10;
        line(y, x, y + sway, x - grassHeight);
      }
    }
  }
}