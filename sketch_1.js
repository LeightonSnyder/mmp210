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

    //eye vars
    var eyeWidth = 20;
    var eyeHeight = 30;
    var leftEyeX = 160;
    var rightEyeX = 240;
    var eyeY = 195;

    //head
    var headWidth = 200;
    var headLength = 275;
    var headX = 200;
    var headY = 250;
    var chin = 70;
    var headCrown = 0;

    //left eyebrow vars
    var browL1x = 180;
    var browL1y = 185;
    var browL2x = 100;
    var browL2y = 185;
    var browL3x = 180;
    var browL3y = 165;

    //right eyebrow vars
    var browR1x = 220;
    var browR1y = 170;
    var browR2x = 300;
    var browR2y = 170;
    var browR3x = 220;
    var browR3y = 150;

    //nose vars
    var noseX = 200;
    var noseY = 245;
    var noseWidth = 65;
    var noseHeight = 60;
    var noseStart = 0;
    var noseEnd = PI;

    //color vars
    var skinColor = "#ffdbac";
    var skinColor2 = '#ffc1a3';
    var eyeColor = '#00b78f';
    var lineColor = '#c19f7c';
    var browColor = '#DEBC99';
    var hairColor = '#c19f7c';

    //mouth vars
    var mouthWeight = 2;
    var mouth1x = 126;
    var mouth1y = 300;
    var mouth2x = 275;
    var mouth2y = 300;

    //cheek1 vars
    var cheek1x = 125;
    var cheek1y = 300;
    var cheek1Width = 30;
    var cheek1Height = 30;
    var cheek1Start = PI * 1.5;
    var cheek1End = PI * 0.5;

    //cheek2 vars
    var cheek2x = 276;
    var cheek2y = 300;
    var cheek2Width = 30;
    var cheek2Height = 30;
    var cheek2Start = PI * 0.5;
    var cheek2End = PI * 1.5;
    
    //hair vars
    var hair1x = 120;
    var hair1y = 110;
    var hair1width = 140;
    var hair1height = 140;
    
    var hair2x = 200;
    var hair2y = 80;
    var hair2width = 140;
    var hair2height = 140;
    
    var hair3x = 280;
    var hair3y = 110;
    var hair3width = 140;
    var hair3height = 140;
    
    var hair4x = 100;
    var hair4y = 190;
    var hair4width = 100;
    var hair4height = 100;
    
    var hair5x = 300;
    var hair5y = 190;
    var hair5width = 100;
    var hair5height = 100;
    
    var hair6x = 290;
    var hair6y = 250;
    var hair6width = 75;
    var hair6height = 75;
    
    var hair7x = 110;
    var hair7y = 250;
    var hair7width = 75;
    var hair7height = 75;
    
    //front hair vars
    var fHair1x = 120;
    var fHair1y = 120;
    var fHair1width = 100;
    var fHair1height = 100;
    
    var fHair2x = 280;
    var fHair2y = 110;
    var fHair2width = 100;
    var fHair2height = 100;
    
    var fHair3x = 195;
    var fHair3y = 90;
    var fHair3width = 100;
    var fHair3height = 100;
    
    //hair
    noStroke();
    fill(hairColor)
    ellipse(hair1x, hair1y, hair1width, hair1height);
    ellipse(hair2x, hair2y, hair2width, hair2height);
    ellipse(hair3x, hair3y, hair3width, hair3height);
    ellipse(hair4x, hair4y, hair4width, hair4height);
    ellipse(hair5x, hair5y, hair5width, hair5height);
    ellipse(hair6x, hair6y, hair6width, hair6height);
    ellipse(hair7x, hair7y, hair7width, hair7height);

    //head
    fill(skinColor);
    rect(headX, headY, headWidth, headLength, headCrown, headCrown, chin, chin);

    //eyes
    fill(eyeColor);
    ellipse(leftEyeX, eyeY, eyeWidth, eyeHeight);
    ellipse(rightEyeX, eyeY, eyeWidth, eyeHeight);

    //brows
    fill(browColor);
    triangle(browR1x, browR1y, browR2x, browR2y, browR3x, browR3y);
    triangle(browL1x, browL1y, browL2x, browL2y, browL3x, browL3y);

    //nose
    stroke(lineColor);
    strokeWeight(1);
    fill(skinColor2);
    arc(noseX, noseY, noseWidth, noseHeight, noseStart, noseEnd);

    //mouth
    strokeWeight(mouthWeight);
    line(mouth1x, mouth1y, mouth2x, mouth2y);
    noStroke();
    arc(cheek1x, cheek1y, cheek1Width, cheek1Height, cheek1Start, cheek1End);
    arc(cheek2x, cheek2y, cheek2Width, cheek2Height, cheek2Start, cheek2End);

    //front hair
    fill(hairColor);
    noStroke();
    ellipse(fHair1x, fHair1y, fHair1width, fHair1height);
    ellipse(fHair2x, fHair2y, fHair2width, fHair2height);
    ellipse(fHair3x, fHair3y, fHair3width, fHair3height);
}
