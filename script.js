var ballPosition; // Position of the cup with the ball
var gameEnded = false; // Track if the game has ended

// Function to shuffle cups
function shuffleCups() {
    var cups = document.getElementById("cups-container");
    for (var i = cups.children.length; i >= 0; i--) {
        cups.appendChild(cups.children[Math.random() * i | 0]);
    }
    // Randomly select the cup with the ball
    ballPosition = Math.floor(Math.random() * 3) + 1;
}

// Function to check if the selected cup contains the ball
function checkCup(cupNumber) {
    if (gameEnded) return; // Game already ended, ignore clicks
    if (cupNumber === ballPosition) {
        showMessage("Congratulations! You found the ball!");
    } else {
        showMessage("Oops! Try again!");
    }
    gameEnded = true;
}

// Function to display messages
function showMessage(message) {
    var messageContainer = document.getElementById("message-container");
    var messageText = document.getElementById("message");
    messageText.textContent = message;
    messageContainer.classList.remove("hidden");
}

// Initialize the game
shuffleCups();
