/*
Self Portrait
v 2
by Leighton
mmp 210
adding variables
*/

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(80);
    rectMode(CENTER);
    
    var eyeWidth = 20;
    var eyeHeight = 30;
    var leftEyeX = 160;
    var rightEyeX = 240;
    var eyeY = 195;
    var headWidth = 200;
    var headLength = 275;
    var headX = 200;
    var headY = 250;
    var chin = 70;
    
    //left eyebrow
    var browL1x = 180;
    var browL1y = 185;
    var browL2x = 100;
    var browL2y = 185;
    var browL3x = 180;
    var browL3y = 165;
    
    //right eyebrow
    var browR1x = 220;
    var browR1y = 170;
    var browR2x = 300;
    var browR2y = 170;
    var browR3x = 220;
    var browR3y = 150;
    
    //color vars
    var skinColor = "#ffdbac";
    var eyeColor = '#00b78f';
    
    //hair
    noStroke();
    fill('#c19f7c')
    ellipse(120, 110, 140, 140);
    ellipse(200, 80, 140, 140);
    ellipse(280, 110, 140, 140);
    ellipse(100, 190, 100, 100);
    ellipse(300, 190, 100, 100);
    ellipse(290, 250, 75, 75);
    ellipse(110, 250, 75, 75);
    
    //head
    fill(skinColor)
    rect(headX, headY, headWidth, headLength, 0, 0, chin, chin);
    
    //eyes
    fill(eyeColor)
    ellipse(leftEyeX, eyeY, eyeWidth, eyeHeight);
    ellipse(rightEyeX, eyeY, eyeWidth, eyeHeight);
    
    //brows
    fill('#DEBC99')
    triangle(browR1x, browR1y, browR2x, browR2y, browR3x, browR3y);
    triangle(browL1x, browL1y, browL2x, browL2y, browL3x, browL3y);
    
    //nose
    stroke('#c19f7c');
    strokeWeight(1);
    fill('#ffc1a3')
    arc(200, 245, 65, 60, 0, PI);
    
    //mouth
    strokeWeight(2);
    line(126, 300, 275, 300);
    noStroke();
    arc(125, 300, 30, 30, PI * 1.5, PI * 0.5);
    arc(276, 300, 30, 30, PI * 0.5, PI * 1.5);
    
    //front hair
    fill('#c19f7c')
    noStroke();
    ellipse(120, 120, 100, 100);
    ellipse(280, 110, 100, 100);
    ellipse(195, 90, 100, 100);
}
