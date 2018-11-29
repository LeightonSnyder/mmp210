/*
    final project presentation slides
*/
var slide = 0;

var art1, art2;

function preload() {
    art1 = loadImage("art1.svg");
    art2 = loadImage("art2.svg");
    art3 = loadImage("art3.svg");
}

function setup() {
    createCanvas(800, 600);
    textSize(60);
    textFont('century gothic');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        textSize(50);
        text("Final Project", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("2 Player Pong Arcade", width/2, 100);
        image(art1, 200, 150);
        
    } else if (slide == 2) {
        textSize(30);
        text("The P5 Sketch", width/2, 100);
        image(art2, 200, 150);
        textSize(15);
        text("2 player pong with score count and simple power-ups", width/2, 180);
    
    } else if (slide == 3) {
        textSize(30);
        text("The Arduino + Breadboard", width/2, 100);
        image(art3, 200, 150);
        textSize(15);
        text("Board with two potentiometers and one button", width/2, 180);
        
    } else if (slide == 4) {
        textSize(30);
        text("The Project", width/2, 100);
        image(art1, 200, 170);
        textSize(15);
        text("Each player uses a potentiometer to control their paddle, while the button acts as start/serve button", width/2, 143);
    } else if (slide == 5) {
        textSize(30);
        text("That's it", width/2, height/2);
    }
}

function mousePressed() {
    
    if (mouseX > width/2) {
        if (slide < 5) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}