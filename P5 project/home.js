let input, button, greeting, welcome;

let balls = [];

let threshold = 30;
let accChangeX = 0;
let accChangeY = 0;
let accChangeT = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  button = createButton('submit');
  greeting = createElement('h2', 'what is your name?');
  welcome = createElement('h1', 'WELCOME!')

//This code is was from the P5.js library examples.
  for (let i = 0; i < 20; i++) {
    balls.push(new Ball());
  }
}

function draw() {

  background(220);
  textSize(40);
  textAlign(CENTER);

  welcome.position (windowWidth/2 - 95 , windowHeight/2 - 200);
  greeting.position(windowWidth/2 - 100, windowHeight/2 - 150);
  input.position(windowWidth/2 - 100, windowHeight/2 - 100);
  button.position(input.x + input.width, input.y);
  button.mousePressed(greet);
  activityButton1 = select('#button1');
  activityButton1.position(windowWidth*1/4 - 25, windowHeight/2, 75, 25);
  activityButton2 = select('#button2');
  activityButton2.position(windowWidth/2 - 25, windowHeight/2, 75, 25);
  activityButton3 = select('#button3');
  activityButton3.position(windowWidth*3/4 - 25, windowHeight/2, 75, 25);

// This code was from the P5.js library examples.
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }

// I am calling the code that was from the P5.js library examples.
  checkForShake();
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// This code function checkForShake() was from the P5.js library examples. I am using it to give the homepage some life
function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
    for (let i = 0; i < balls.length; i++) {
      balls[i].shake();
      balls[i].turn();
    }
  }
  // If not shake
  else {
    for (let i = 0; i < balls.length; i++) {
      balls[i].stopShake();
      balls[i].turn();
      balls[i].move();
    }
  }
}

// Ball class
class Ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.xspeed = random(-2, 2);
    this.yspeed = random(-2, 2);
    this.oxspeed = this.xspeed;
    this.oyspeed = this.yspeed;
    this.direction = 0.7;
  }

  move() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;
  }

  // Bounce when touch the edge of the canvas
  turn() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    } else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  }

  // Add to xspeed and yspeed based on
  // the change in accelerationX value
  shake() {
    this.xspeed += random(5, accChangeX / 3);
    this.yspeed += random(5, accChangeX / 3);
  }

  // Gradually slows down
  stopShake() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    } else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    } else {
      this.yspeed = this.oyspeed;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
