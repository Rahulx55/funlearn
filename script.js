// Define canvas and context
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Pac-Man properties
var pacRadius = 20;
var pacX = canvas.width / 2;
var pacY = canvas.height / 2;
var pacSpeed = 2;

// Ghost properties
var ghostRadius = 15;
var ghostX = Math.random() * canvas.width;
var ghostY = Math.random() * canvas.height;
var ghostSpeed = 1;

// Event listeners for Pac-Man movement
document.addEventListener("keydown", keyDownHandler, false);

// Track keyboard state
var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;

function keyDownHandler(e) {
    if (e.key == "ArrowUp") {
        upPressed = true;
    } else if (e.key == "ArrowDown") {
        downPressed = true;
    } else if (e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacX, pacY, pacRadius, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacX, pacY);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawGhost() {
    ctx.beginPath();
    ctx.arc(ghostX, ghostY, ghostRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawMessage() {
    document.getElementById("message-container").classList.remove("hidden");
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacMan();
    drawGhost();
    movePacMan();
    moveGhost();
    collisionDetection();
    requestAnimationFrame(draw);
}

function movePacMan() {
    if (upPressed && pacY - pacSpeed > 0) {
        pacY -= pacSpeed;
    }
    if (downPressed && pacY + pacSpeed < canvas.height) {
        pacY += pacSpeed;
    }
    if (rightPressed && pacX + pacSpeed < canvas.width) {
        pacX += pacSpeed;
    }
    if (leftPressed && pacX - pacSpeed > 0) {
        pacX -= pacSpeed;
    }
}

function moveGhost() {
    var directionX = Math.random() > 0.5 ? 1 : -1;
    var directionY = Math.random() > 0.5 ? 1 : -1;
    ghostX += ghostSpeed * directionX;
    ghostY += ghostSpeed * directionY;
}

function collisionDetection() {
    var distance = Math.sqrt(Math.pow(pacX - ghostX, 2) + Math.pow(pacY - ghostY, 2));
    if (distance < pacRadius + ghostRadius) {
        drawMessage();
    }
}

draw();
