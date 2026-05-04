class openText {
  constructor() {
    this.active = true;
    this.stage = 0;
    this.opacity = 0;
    this.targetOpacity = 1;
    this.lines = ["SYSTEM RESTORED // YEAR 3026", "In a world of noise, this garden requires your attention to exist."];
    this.lines2 = ["PRESERVATION PROTOCOLS", "🎤 Speak to generate life.\n Move close to weave connections.\n Silence accelerates decay."];
    this.lines3 = ["WHAT REMAINS...", "Is not what was created, but what you choose to preserve."];
  }

  update() {
    if (this.active) {
      this.opacity = lerp(this.opacity, this.targetOpacity, 0.1);
    }
  }

  display() {
    if (this.active) {
      noStroke();
      fill(0, 0, 0, 0.8 * this.opacity);
      rect(0, 0, width, height);

      let current;
      if (this.stage === 0) {
        current = this.lines;
      } else if (this.stage === 1) {
        current = this.lines2;
      } else {
        current = this.lines3;
      }

      textAlign(CENTER, CENTER);
      textSize(28);
      fill(0, 0, 100, this.opacity);
      text(current[0], width / 2, height / 2 - 30);

      textSize(18);
      fill(0, 0, 100, this.opacity);
      text(current[1], width / 2, height / 2 + 30);
    }
  }

  handleInput() {
    if (this.stage === 0) {
      this.stage = 1;
      this.opacity = 0;
      this.targetOpacity = 1;
    } else if (this.stage === 1) {
      this.stage = 2;
      this.opacity = 0;
      this.targetOpacity = 1;
    } else if (this.stage === 2) {
      this.active = false;
      this.opacity = 0;
    }
  }
}
