/*
Meme v 0
by Leighton
mmp 210 wk 5
interactive
*/
var cat1; //global
var cat2;

function preload() {
    cat1 = loadImage("cat1.jpg");
    cat2 = loadImage("cat2.jpg");
    cat1gray = loadImage("cat1gray.jpg");
    cat2color = loadImage("cat2color.jpg");
}

function setup() {
    createCanvas(400, 533);
}

function draw() {
    background(80);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont("Trebuchet MS");
    
    noStroke();
    
    var alpha = map(mouseY, 0, height, 0, 255);
    
    if (mouseIsPressed) {
        noTint();
        image(cat2, 0, 0, 400, 533);
        tint(255, 255, 255, alpha);
        image(cat2color, 0, 0, 400, 533);
        fill(0);
        rect(200, 275, 200, 100);
        fill("#ffffff");
        text("GAMESHOW THAT PAYS OFF YOUR STUDENT DEBT", 200, 275, 200, 100);
    } else {
        noTint();
        image(cat1, 0, 0, 400, 533);
        tint(255, 255, 255, alpha);
        image(cat1gray, 0, 0, 400, 533);
        fill(0);
        rect(200, 270, 150, 65);
        fill("#ffffff");
        text("tuition free college", 200, 250, 150, 100);
    
    }


    

}
