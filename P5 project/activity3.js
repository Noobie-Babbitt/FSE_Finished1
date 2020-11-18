let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  textSize(36);

  button = createButton('Easy');
  button.position(windowWidth/20, windowHeight/3);
  button.mousePressed(easy);

  button = createButton('Medium');
  button.position(windowWidth/20, windowHeight/2.5);
  button.mousePressed(medium);

  button = createButton('Hard');
  button.position(windowWidth/20, windowHeight/2.15);
  button.mousePressed(hard);

}



function draw() {
   stroke('#222222');
  if (mouseIsPressed === true)
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

//  text('Triangle', windowWidth/2.5, windowHeight/5);
//  fill("black");
//  ellipse(windowWidth/2, windowHeight/3, 10);
//  ellipse(windowWidth/2.5, windowHeight/1.75, 10);
//  ellipse(windowWidth/(5/3), windowHeight/1.75, 10);
}

function easy(){

  text('Triangle', windowWidth/2.5, windowHeight/5);
  fill("black");
  ellipse(windowWidth/2, windowHeight/3, 10);
  ellipse(windowWidth/(5/3), windowHeight/1.75, 10);
  ellipse(windowWidth/2.5, windowHeight/1.75, 10);
}

function medium(){
  text('Heart', windowWidth/2.5, windowHeight/5);
  fill("black");
  ellipse(windowWidth/2.15, windowHeight/2.5, 10);
  ellipse(windowWidth/1.5, windowHeight/2.5, 10);
  ellipse(windowWidth/3.5, windowHeight/2.5, 10);
  ellipse(windowWidth/2.15, windowHeight/1.5, 10);


}

function hard(){

}


function resized() {
  resizeCanvas(windowWidth, windowHeight)
}
