var biu;
var x = 150;
var y = 167;

function preload() {
  biu = loadSound("019.wav");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(200);

  noStroke();
  fill(255);
  rect(50, 200, 200, 200);
  ellipse(150, 200, 200, 200);
  ellipse(150, 230, 280, 40);

  stroke(0);
  strokeWeight(2);
  fill(255, 227, 76);
  ellipse(150, 160, 23, 15);
  ellipse(150, 173, 17, 12);

  fill(0);
  line(102, 165, 118, 165);
  line(182, 165, 198, 165);

  noStroke();
  fill(255, 192, 203);
  ellipse(80, 185, 45, 40);
  ellipse(220, 185, 45, 40);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, x, y);
  if (d < 10) {
    fill(0);
    ellipse(110, 165, 18, 16);
    ellipse(190, 165, 18, 16);
    biu.play();
  }
}
