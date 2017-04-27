var ballX;
var ballY;
var speedX;
var speedY;
var rectHeight;
var score;
var finalScore;
var finished;

function setup() {
	createCanvas(windowWidth, windowHeight);
	setupBall();
	rectHeight = 150;
	speedX = random(3, 5);
	speedY = random(3, 5);
	score = 0;
	time = 0;
	finished = false;
	background(0);
}

function setupBall() {
	ballX = 75;
	ballY = 75;
}

function endGame() {
	clear();
	text("Final Score: " + score, windowWidth / 2, windowHeight / 2);
}

function draw() {
	background(0);
	textSize(32);
	if (!finished) {
		fill(255, 0, 255);
		text("Score: " + score, windowWidth / 2, 50);
		
		ballX += speedX;
		ballY += speedY;

		fill(255, 0, 0);
		ellipse(ballX, ballY, 20, 20);
		
		fill(255, 255, 255, 10);

		fill(0, 255, 0);
		rect(width-30, mouseY, 20, rectHeight);

		if (ballX > width-30 && ballX < width-20 && ballY > mouseY && ballY < mouseY+rectHeight) {
			speedX *= -1.1;
			score += 10;
			ballX += speedX;
		}

		if (ballX < 20) {
			speedX *= -1.1;
			//score += 10;
			ballX += speedX;
		}

		if (ballY > height || ballY < 0) {
			speedY *= -1.1;
			//score += 10;
			ballY += speedY;
		}

		if (ballY > height || ballX > width) {
			finished = true;
		}
	} else {
		finalScore = score;
		endGame();
	}
}
