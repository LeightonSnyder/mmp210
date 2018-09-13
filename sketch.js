function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(80);
    rectMode(CENTER);
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
    fill('#ffdbac')
    rect(200, 250, 200, 275, 0, 0, 70, 70);
    
    //eyes
    fill('#00b78f')
    ellipse(160, 195, 20, 30);
    ellipse(240, 195, 20, 30);
    
    //brows
    fill('#DEBC99')
    triangle(220, 170, 300, 170, 220, 150);
    triangle(180, 185, 100, 185, 180, 165);
    
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
