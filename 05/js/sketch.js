// A wind direction vector

var wind;
var position;

function setup () {
  createCanvas(720, 200);

  var button = select('#submit');
  button.mousePressed(askWeather);
  Input = select('#city');

  // Get data from weatherstack.com
  // var url = 'http://api.weatherstack.com/current?access_key=d27a974a8c8182fc9ac197c3aaae788a&query=New%20York';

  var api = 'http://api.weatherstack.com/current?access_key=d27a974a8c8182fc9ac197c3aaae788a&query=New%20York';
  // var city = '';
  var url = api + input.value();

  loadJSON(url, gotWeather);

  position = createVector(width/2, height/2);
  wind = createVector();
}

function draw () {
  background(200);

  // Arrow pointing out the wind direction
  push();
  translate(32, height-32);
  // insert a variable
  rotate(wind.heading()+PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Create a shape following the wind
  position.add(wind);
  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width) position.x = 0;
  if (position.x < 0) position.x = width;
  if (position.y > height) position.x = 0;
  if (position.y < 0) position.x = height;
}

function gotWeather(weather) {
  var angle = radians(Number(weather.current.wind_degree));
  var windmag = Number(weather.current.wind_speed);

  wind = p5.Vector.fromAngle(angle);
}
