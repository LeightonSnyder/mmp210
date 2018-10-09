/*
Meme v 0
by Leighton
mmp 210 wk 5
rough
*/
var cat1; //global
var cat2;

function preload(){
    cat1 = loadImage("cat1.jpg");
    cat2 = loadImage("cat2.jpg");
}
    
function setup() {
    createCanvas(800, 533);
}

function draw() {
    background(80);
    
    image(cat1, 0, 0, 400, 533);
    image(cat2, 400, 0, 400, 533);
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont("Trebuchet MS");
    text("tuition free college", 200, 250, 150, 100);
    text("GAMESHOW THAT PAYS OFF YOUR STUDENT DEBT", 575, 275, 200, 100);
    
}
