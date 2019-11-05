var maping = [];
var input;
var position = [];
var count = 70;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < count; i++) {
  	let pokedex = Math.round(random(0, width/2));
    maping[i] = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokedex + ".png");
    position[i] = createVector(width/2 + random(-width/2, width/2), height/2 + random(-height/2, height/2));
  }
}

function draw() {
  clear()
  fill(255, 12);
  rect(0, 0, width, height);
  for (let i = 0; i < count; i++) {
  	position[i].x--;
    pg = createGraphics(100, 100);
    pg.background(maping[i]);

    fill(200, 100);
    stroke(random(100, 255), random(100, 255), random(100, 255));
    ellipse(position[i].x + 30, position[i].y + 30, 100, 100);
    image(pg, position[i].x, position[i].y, 60, 60);
    if (position[i].x > width) position[i].x = 0;
    if (position[i].x < 0) position[i].x = width;
    if (position[i].y > height) position[i].x = 0;
    if (position[i].y < 0) position[i].x = height;
  }
}
