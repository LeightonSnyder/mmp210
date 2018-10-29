/*
Meme v 0
by Leighton
mmp 210 wk 5
Animated
*/
var cat1;
var cat2;
var frame;
var cat;
var speed = 25;
var catX = 400;
var catY = 250;
var catspeed = 3;
var Y1 = -10;
var Y2 = -150;
var Y3 = -250;
var X1 = 400;
var X2 = 200;
var X3 = 600;
var score = 0;




function preload() {
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    toffbar = loadImage("toffifay.png");
    toff = loadImage("toff.png");
    backdrop = loadImage("background.jpg");
}

function setup() {
    createCanvas(800, 500);
    frame = 1;
}

function draw() {
    background(80);
    fill(255);
    image(backdrop, 0, 0, 800, 600);

    //controls
    if (keyIsDown(UP_ARROW)){
        catY -= catspeed;
    }
    if (keyIsDown(DOWN_ARROW)){
        catY += catspeed;
    }
    if (keyIsDown(LEFT_ARROW)){
        catX -= catspeed;
    }
    if (keyIsDown(RIGHT_ARROW)){
        catX += catspeed;
    }
    
    //cat animation
    if (frameCount % speed == 0 && frame >= 0) {
        frame--;
    }
    if (frame < 0) {
        frame = 1;
    }
    if (frame == 1) {
        cat = cat1;
    }
    if (frame == 0) {
        cat = cat2;
    }
    image(cat, catX-50, catY-50, 100, 100);
    
    //candy movement
    Y1++;
    Y2++;
    Y3++;
    
    push();
    translate(X1, Y1);
    var r = frameCount / 75*PI;
    rotate(r);
    image(toffbar, -50, -11.34, 100, 22.68);
    pop();
    
    push();
    translate(X2, Y2);
    rotate(r);
    image(toff, -8, -10, 16, 20);
    pop();
    
    push();
    translate(X3, Y3);
    rotate(r);
    image(toff, -8, -10, 16, 20);
    pop();
    
    //candy reset
    if (Y1 > height) {
        Y1 = 0;
        X1 = random(2, width-2);
    }
    
    if (Y2 > height) {
        Y2 = 0;
        X2 = random(2, width-2);
    }
    
    if (Y3 > height) {
        Y3 = 0;
        X3 = random(2, width-2);
    }
    
    //collisions
    if ((dist(X1, Y1, catX, catY) <= 50))  {
        Y1 = 0;
        X1 = random(2, width-2);
        score+=5;
    }
    if ((dist(X2, Y2, catX, catY) <= 50))  {
        Y2 = 0;
        X2 = random(2, width-2);
        score++;
    }
    if ((dist(X3, Y3, catX, catY) <= 50))  {
        Y3 = 0;
        X3 = random(2, width-2);
        score++;
    }
    //score text
    strokeWeight(4);
    stroke(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont("Trebuchet MS");
    text("TOFFIFAY: "+score, 65, 20);
   }
