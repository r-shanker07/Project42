hr = hour()
mn = minute()


function setup() {
  createCanvas(800,400);


  angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 

  s = second()
  
  sAngle = map(s,0,60,0,360)

  push()
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,100,0)
  pop();



  drawSprites();
}