 class Rain {
  constructor(x, y, f) {
    //declaring variables
    this.x = x + random(-20, 20);
    this.y = y;
    this.isOut = false;
    this.f=f
  }
  displayRain() {
    push()
    //everything that will display the rain
    colorMode(HSB,100)
    stroke(this.f,30,100)
    strokeWeight(5);
    line(this.x, this.y, this.x, this.y + 5);
    pop()
  }
  updateRain() {
    //updating the Y position
    this.y = this.y + 5;
    if(this.y > height){
      this.isOut = true;
    }
  }
}

