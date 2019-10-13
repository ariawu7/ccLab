var myString = "I recommend skipping Just a pinch Yup that tasted purple Zippy You'll see more with your eyes closed Whoa... dizzy Nosey dewdrop... Never look a tulip in the eye... Delightify That squirrel looks familiar Tremendo Let's put on our thinking caps ah I got it Enormibus They aren't gonna like this I could go for a twirl... Whoa whoa whoa ah wooh Let's go around again Ha";

var splitString;

var word = 0;

var xpos = 100;
var ypos = 200;

var xOff = 0;
var yOff = 0;

function setup() {
  createCanvas(700, 700);
  splitString = split(myString, " ");
}

function draw() {
  background(211, 158, 219);
  fill(84, 9, 87);
  textSize(40);
  text(splitString[word], xpos + xOff, ypos + yOff);
  xOff = random(-5, 5);
  yOff = random(-5, 5);
}

function mousePressed() {
  word++;
  if (word >= splitString.length) {
    word = 0;
  }
  xpos = random(0, 700 - 100);
  ypos = random(0, 700 - 100);
}
