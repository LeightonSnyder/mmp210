/*
Meme v 0
by Leighton
mmp 210 wk 5
rough
*/
var bird; //global

function preload(){
    bird = loadImage("dove.jpg");
}
    
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(80);
    
    image(bird, 0, 0, width, height)
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);

}
