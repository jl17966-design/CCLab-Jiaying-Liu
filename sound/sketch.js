
let mic
let sound
let sound1
let x=0
let speedx=5
let s=50

function setup() {
  createCanvas(400, 400);
  mic=new p5.AudioIn()
  mic.start()
  x=s/2
  //sound.loop()
}

function draw() {
  background(220);
  let level=mic.getLevel()
  let f=map(level,0,1,0,10)
  text(level,width/2,height/2)
 // if (mouseIsPressed){
circle(x,height/2,50)
 // }
  x+=speedx*f
  if (x>width-s/2){
    sound.play()
    speedx=-speedx
  }
  if (x<s/2){
    sound1.play()
    speedx=-speedx
  }
}

function preload(){
sound=loadSound("sounds/kick.mp3")
sound1=loadSound("sounds/beat.mp3")
}



function mousePressed(){
  if(sound.isPlaying()==false){
    sound.play()
  }else{
    sound.pause();
  }
}