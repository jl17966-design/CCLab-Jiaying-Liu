let notes = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  349.23, // F4
  392.0, // G4
  440.0, // A4
  493.88, // B4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  698.46, // F5
  783.99, // G5
  880.0, // A5
  987.77, // B5
  1046.5, // C6
  1174.66, // D6
  1318.51, // E6
  1396.91, // F6
  1567.98, // G6
  1760.0, // A6
  1975.53, // B6
  2093.0, // C7
];
class note {
  constructor() {
    this.osc=new p5.TriOsc()
  }
  update() {
     
  }
  playKey(){
    this.osc.start() 
    this.osc.amp(1, 0.05);
     let randomIndex = floor(random(notes.length));
  this.osc.freq(notes[randomIndex]);
    
   
  }
  stopKey(){
    this.osc.amp(0,0.5)
  }
}