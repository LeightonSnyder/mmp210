/*
PONG
by Leighton
mmp 210 
Final
*/

var serial;
var portName = "/dev/cu.usbmoderm1421";
var sensorValue;
var LY;
var RY;
var gameon = true;
var ballChangeX = 5;
var ballChangeY = 5;
var ballX = 800;
var ballY = 450;
var diameter = 25;
var scoreL = 0;
var scoreR = 0;
var bounce;
var goal;
var ping;
var pong;
var start;


function preload() {
    paddleL = loadImage("left_paddle.svg");
    paddleR = loadImage("right_paddle.svg");
    bounce = loadSound("bounce.wav");
    goal = loadSound("goal.wav");
    ping = loadSound("ping.wav");
    pong = loadSound("pong.wav");
    start = loadSound("start.wav");
}

function setup() {
    createCanvas(1600, 900);
    
    serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function serverConnected() {
	console.log('Connected');
}

function portOpen() {
	console.log('The serial port opened.');
}

function portClose() {
	console.log('The serial port closed.');
}

function serialError() {
    console.log('Error');
}

function serialEvent() {
    //read string, cut off at return and new line
	var currentString = serial.readStringUntil('\r\n');
    
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
    if(currentString.length > 0) {
        var sensors = split(currentString, ','); //split string at comma
        if (sensors.length > 1) {
            LY = (sensors[0], 0, 1023, 0, height); //left paddle
            RY = (sensors[1], 0, 1023, 0, height); //right paddle
        }
    }
	sensorValue = currentString; // save it for the draw method
}



function draw() {
    
    ballX += ballChangeX;
    ballY += ballChangeY;
    
    //paddle
    var paddleLX = 200;
    var paddleLY = 450;
    var paddleLW = 22.167;
    var paddleLH = 100;
    
    var paddleRX = 1400;
    var paddleRY = 700;
    var paddleRW = 22.167;
    var paddleRH = 100;
    
    
    //background
    background(0);
    fill(255);
    
    textSize(50);
    textFont("Arial");
    text(scoreL, 400, 100);
    text(scoreR, 1200, 100);
    
    //ball
    ellipse(ballX, ballY, diameter);
    if (gameon == false) {
        ballX = 800;
        ballY = 450;
    }
    
    //left out
    if (ballX < diameter/2) {
        scoreR += 1;
        gameon = false;
        ballChangeX = 0;
        ballChangeY = 0;
        goal.play();
    }
    
    //right out
    if (ballX > width - diameter/2) {
        scoreL += 1;
        gameon = false;
        ballChangeX = 0;
        ballChangeY = 0;
        goal.play();
    }
    

    
    //wallbounce
    if (ballY < diameter/2 || ballY > height - diameter) {
        ballChangeY *= -1;
        bounce.play();
    }
    
    //paddles
    image(paddleL, paddleLX, paddleLY, paddleLW, paddleLH);
    image(paddleR, paddleRX, paddleRY, paddleRW, paddleRH);
    
    //collision right
    if ((ballX + diameter/2 > paddleRX) && ballX < (paddleRX + paddleRW) && (ballY + (diameter/2) >= paddleRY)) {
        ballChangeX *= -1;
        ping.play();
        
    }
    
    //collision left
    if (ballX > paddleLX && ballX - diameter/2 < (paddleLX + paddleLW) && (ballY + (diameter/2) >= paddleLY)) {
        ballChangeX *= -1;
        pong.play();
    }
}

function keyPressed() {
	if ((keyCode == 32) && (gameon == true)) {
		gameon = false;
        ballChangeX = 0;
        ballChangeY = 0;
	   }
    else if ((keyCode == 32) && (gameon == false)) {
		gameon = true;
        ballChangeX = 5;
        ballChangeY = 5;
        start.play();
	   }
    }