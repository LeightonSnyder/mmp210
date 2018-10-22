/*
Meme v 0
by Leighton
mmp 210 wk 5
Animated
*/
var cat1; //global
var cat2;
var frame;
var cat;
var speed = 25;
var catX = 200;
var catY = 50;
var catspeed = 3;


function preload() {
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
}

function setup() {
    createCanvas(800, 500);
    frame = 1;


}

function draw() {
    background(80);

    
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

    //cat control
    //catX += (keyleft + keyright);
    //catY += (keyup + keydown);

}
