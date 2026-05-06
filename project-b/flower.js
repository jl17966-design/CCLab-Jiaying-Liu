class Flower {
  constructor(x, y, petalCount, petalLen, petalW, centerSize, h, sf, freq, layer,petalLayers) {
    this.flowerCenterWidth = x;
    this.flowerCenterHeight = y;
    //this.type = type;
    this.sf = sf;
    this.petalCount = petalCount;
    this.petalLen = petalLen;
    this.petalW = petalW;
    this.centerSize = centerSize;
    this.h = h;
    this.note = new note(freq);
    this.note.playKey();
    this.layer=layer;
     if (petalLayers < 1) {
      this.petalLayers = 1;
    } else {
      this.petalLayers = petalLayers;
    }

    this.s = 40; 
    this.b = 100;
    this.alpha = 1.0; 
    this.isFading = false; 
    this.hasConnection = false;
    this.lastInteractionFrame = frameCount;
  }
  markInteraction() {
    this.lastInteractionFrame = frameCount;
  }

  update() {
    if (frameCount - this.lastInteractionFrame > 3600 && !this.isFading && !this.hasConnection) {
      this.isFading = true;
    }
    if (this.isFading) {
      this.alpha = lerp(this.alpha, 0, 0.05);
      if (this.alpha < 0.01) {
        this.dead = true;
      } else {
        this.dead = false;
      }
    }
  }

  display() {
    push();
    translate(this.flowerCenterWidth, this.flowerCenterHeight);
    scale(this.sf);
    noStroke();
    
    for (let layer = 0; layer < this.petalLayers; layer = layer + 1) {
      let layerOffset = layer * (TWO_PI / this.petalCount / 2);
      let layerScale = 1 - layer * 0.15;
      let layerS = this.s + layer * 8;
      let layerB = this.b + layer * 6;

      for (let i = 0; i < this.petalCount; i = i + 1) {
        push();
        rotate(map(i, 0, this.petalCount, 0, TWO_PI) + layerOffset);
        scale(layerScale);
        fill(this.h, layerS, layerB, this.alpha);
        ellipse(0, this.petalLen * 0.6, this.petalW, this.petalLen);
        pop();
      }
    }
    fill(this.h, this.s + 20, this.b - 10, this.alpha);
    circle(0, 0, this.centerSize);
    pop();
  }

  drawVines(allFlowers, myIndex) {
    let THRESHOLD = 150;
    strokeWeight(6);
    noFill();
    for (let j = myIndex + 1; j < allFlowers.length; j++) {
      let other = allFlowers[j];
      let d = dist(
        this.flowerCenterWidth + 30 * this.sf, this.flowerCenterHeight + 30 * this.sf,
        other.flowerCenterWidth + 30 * other.sf, other.flowerCenterHeight + 30 * other.sf
      );

      if (d < THRESHOLD) {
        this.hasConnection = true;

        let vineAlpha = map(d, 0, THRESHOLD, 1, 0);
        stroke(150, 80, 80, vineAlpha);

        line(
          this.flowerCenterWidth, this.flowerCenterHeight,
          other.flowerCenterWidth, other.flowerCenterHeight
        );
      }
    }
  }

  // mouse() {
  //   let distance = dist(mouseX, mouseY, this.flowerCenterWidth, this.flowerCenterHeight);
  //   if (mouseIsPressed && 20 < distance && distance < 50) {
  //     this.sf = this.sf * lerp(1, 1.5, 0.05)
  //     this.markInteraction()
  //   } else if (mouseIsPressed && 20 > distance) {
  //     this.flowerCenterWidth = mouseX
  //     this.flowerCenterHeight = mouseY
  //     this.markInteraction()
  //   }
  //   else if (mouseIsPressed && 50 < distance) {
  //     this.sf = lerp(this.sf, 0.5, 0.05);
  //     this.markInteraction()
  //   }
  // }
  
  handControl() {
    
    if (hands.length > 0) {
      let hand = hands[0]; // Use the first detected hand
      let p1 = hand.keypoints[0]; // Thumb or index finger tip
      let p2 = hand.keypoints[12]; // Another finger
      let p3 = hand.keypoints[9];
      //circle(p3.x, p3.y, 50);
      //let distance = dist(p1.x, p1.y, this.flowerCenterWidth, this.flowerCenterHeight);
      let fingerDist = dist(p1.x, p1.y, p2.x, p2.y);

      console.log(fingerDist);
      //console.log(distance);

      if (fingerDist > 400) {
        this.flowerCenterWidth = lerp(this.flowerCenterWidth, p3.x, 0.05);
        this.flowerCenterHeight = lerp(this.flowerCenterHeight, p3.y, 0.05);
        this.markInteraction();
      }
      if (fingerDist < 180) {
        this.sf = lerp(this.sf, 0.5, 0.05);
      } else if (fingerDist < 400) {
        this.sf = lerp(this.sf, 1.5, 0.05);
      }
      this.markInteraction();
    }
  }
}