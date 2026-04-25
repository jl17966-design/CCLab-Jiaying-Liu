class flower2 {
  constructor(x, y, sf, noteObj) {
    this.flowerCenterWidth = x;
    this.flowerCenterHeight = y;
    this.sf = sf;  
    
    // Petal Color
    this.h = random(0, 100);
    this.s = 30;
    this.b = 100;
    
    // Center Color 
    this.h1 = random(0, 100);
    this.s1 = 40;
    this.b1 = 100;
  
    this.p = random(PI / 6, PI / 3);
   
    this.note = noteObj;
    
    this.alpha = 1.0;           
    this.targetAlpha = 1.0;   
    this.isFading = false;      
    
    // Interaction Timer
    this.lastInteractionFrame = frameCount;
    
    // Connection Status
    this.hasConnection = false;
    this.isOut = false;      
  }

  markInteraction() {
    this.lastInteractionFrame = frameCount;
  }
  
  startFade() {
    this.isFading = true;
  }
  
  update() {
    let silenceFrames = frameCount - this.lastInteractionFrame;
    let oneMinuteFrames = 3600; 
    
    //Silence Detection
    if (silenceFrames > oneMinuteFrames && !this.isFading && !this.hasConnection) {
      this.startFade();
      fill(0, 0, 100);
      textSize(16);
      text("🌸 Flower has no interaction for 1 minute, starting fade out",700,300);
    }
    
    //Fade Animation
    if (this.isFading) {
      this.targetAlpha = 0;
      this.alpha = lerp(this.alpha, this.targetAlpha, 0.05);
      
      if (this.alpha < 0.01) {
        this.isOut = true;
      }
    }
  }
  
  //  Draw the flower
  display() {
    for (let i = 0; i < 2 * PI; i += this.p) {
      push();

      translate(this.flowerCenterWidth, this.flowerCenterHeight);
      rotate(i);
      scale(this.sf);
       
      noStroke();

      fill(this.h, this.s, this.b,this.alpha);
      ellipse(20, 20, 30, 45);
      fill(this.h1, this.s1, this.b1,this.alpha);
      circle(0, 0, 50);
      pop();
    }
  }
  
  // Draw vine connections to other flowers
  drawVines(allFlowers, myIndex) {
    let THRESHOLD = 150;  
    
    strokeWeight(10);
    noFill();
    
    for (let j = myIndex + 1; j < allFlowers.length; j++) {
      let other = allFlowers[j];
      let d = dist(
        this.flowerCenterWidth+30*this.sf, this.flowerCenterHeight+30*this.sf,
        other.flowerCenterWidth+30*other.sf, other.flowerCenterHeight+30*other.sf
      );
      
      if (d < THRESHOLD) {
        this.hasConnection = true;
        
        let vineAlpha = map(d, 0, THRESHOLD, 1, 0);
        stroke(120, 60, 50, vineAlpha); 
        
        line(
          this.flowerCenterWidth, this.flowerCenterHeight,
          other.flowerCenterWidth, other.flowerCenterHeight
        );
      }
    }
  }
  mouse(){
    let distance = dist(mouseX, mouseY, this.flowerCenterWidth, this.flowerCenterHeight);
    if (mouseIsPressed && 20<distance && distance < 50){
        this.sf=this.sf*lerp(1, 1.5, 0.05)
        this.markInteraction()
    }else if(mouseIsPressed && 20>distance){
       this.flowerCenterWidth=mouseX
       this.flowerCenterHeight=mouseY
       this.markInteraction() 
    }
    else if(mouseIsPressed && 50<distance){
    this.sf = lerp(this.sf, 0.5, 0.05);
       this.markInteraction() 
    }
  }
}