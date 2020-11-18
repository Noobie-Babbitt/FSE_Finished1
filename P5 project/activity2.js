function setup() {
  createCanvas(500, 500);
  randomColor = color(random(255),random(255),random(255));
  randomColor2 = color(random(255),random(255),random(255));
  randomColor3 = color(random(255),random(255),random(255));
  randomColor4 = color(random(255),random(255),random(255));
  overCircle1 = true;
  circle1 = circle (110,430,70);
}

function draw() {
  background(220);
  textSize(32);
  text ('Match the colors', 140, 100, 800, 200);
  fill(randomColor);
  circle1 = circle (110,430,70);
  fill(randomColor2);
  circle (110,230,70);
  fill(randomColor3);
  circle (390,230,70);
  fill(randomColor);
  circle (390,430,70);
  fill(randomColor2);
  circle (250,430,70);
  fill(randomColor4);
  circle (250,230,70);
  fill(randomColor3);
  circle (185,330,70);
  fill(randomColor4);
  circle (320,330,70);
  var d1 = dist(mouseX, mouseY, 110, 430);
  if (d1 < 35)
       overCircle1 = true
      }


function mousePressed() {
  if (overCircle1) {
    fill (randomColor2);
    circle1;
  }
}

let circle1;
var circlePositionX = [110, 390, 390, 250, 250, 185, 320];
var circlePositionY = [230, 230, 430, 430, 230, 330, 330];

function setup() {
  // All possible positions of the cards/shapes

  createCanvas(500, 500);
  //instantiate object
  circle1 = new Shape();

}

function draw() {
  background(220);
  textSize(32);
  text('Match the colors', 140, 100, 800, 200);
  circle1.show();
}

class Shape {
  constructor() {
    // this.p = color(random(225), random(225), random(225));
    this.x = circlePositionX[random(1, 5)];
    this.y = circlePositionY[random(1, 5)];
  }
  show() {
    fill('green');
    circle(this.x, this.y, 70);
  }
}
