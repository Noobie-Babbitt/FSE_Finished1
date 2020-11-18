class Target {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.max = s;
    this.size = 1;
    this.color = color(random(255), random(255), random(255));
  }
  show() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  test() {
    return (dist(this.x, this.y, mouseX, mouseY) < (this.size + radius) / 2)
  }
  expand(s) {
    this.size = constrain(this.size + s, 0, this.max)
  }
}
const radius = 10; //mouse circle radius
const circleRate = 200; //how quickly the circles appear
const ballLimit = 1 //max balls on the screen at once
let circles = []
let score = 0;
let mouseClick = 0;
let hitNum = 0;
let accuracy = 100;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
  background(25);
  let size = 25;
  let chance = 10;

  for (let i = 20; i > hitNum; i--){

  if (frameCount % chance == 0) {
    if (circles.length < ballLimit) {
    append(circles, new Target(random(width), random(height), size));
    } else {
      score = constrain(score, 0, Infinity);
    }
  }
}
  fill(255);
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].expand(circleRate);
    circles[i].show()
  }
  fill('rgba(255,255,255,0.25)');
  circle(constrain(mouseX, 0, width), constrain(mouseY, 0, height), radius);
  textAlign(LEFT);
  textSize(32);
  text(score, 5, 25);

  //shows the hit percentage

    for (let i = 20; i > hitNum; i--){
  if (mouseClick != 0) {
    accuracy = hitNum/mouseClick * 100;
  } else {
    accuracy = 0;
  }
    }
  let displayPercentage = round(accuracy, 2);
  textAlign(CENTER);
  text(displayPercentage + '%', width/2, 25);
  previousSize = size;
}

//score counter

function mousePressed() {
  mouseClick++;
  let hit = false;
  for (let i = circles.length - 1; i >= 0; i--) {
    if (circles[i].test() == true) {
      circles.splice(i, 1);
      score++;
      hit = true;
    }
  }
  if (hit == true) {
    hitNum++;
  }
}
function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}
