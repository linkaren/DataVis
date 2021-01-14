var circleSizeSec;
var circleSizeMin;
var circleSizeHour; 

function setup() {
  createCanvas(600, 600);
  circleSizeSec = 0;
  circleSizeMin = 0;
  circleSizeHour = 0;
  
  noFill();
}

function draw() {
  background(255);
  
  stroke(75, 37, 109);
  strokeWeight(11);
  circleSizeHour = hour() * 10;
  ellipse(width / 2, height / 2, circleSizeHour);
  
  stroke(160, 158, 214);
  strokeWeight(7);
  circleSizeMin = minute() * 10;
  ellipse(width / 2, height / 2, circleSizeMin);
  
  stroke(111, 84, 149, 50);
  strokeWeight(5)
  circleSizeSec = second() * 10;
  ellipse(width / 2, height / 2, circleSizeSec);
}