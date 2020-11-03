var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360)

  

  push();
  rotate(scAngle)
  translate(0,0)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  drawSprites();
}