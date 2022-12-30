// Get the canvas element
var canvas = document.getElementById("canvas");
// Get the canvas context
var ctx = canvas.getContext("2d");

// Set the size of each snake segment
var segmentSize = 30;
// Set the initial position of the snake
var x = 450;
var y = 450;

var x2 = 650;
var y2 = 650;
// Set the initial direction of the snake
var dx = 0;
var dy = 0;

var dx2 = 0;
var dy2 = 0;

// Set the initial speed of the snake
var speed = 200;

// Create a function to draw the snake
function drawSnake() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Set the color of the user-controlled snake to red
    ctx.fillStyle = "red";
  
    // Set the color of the second snake to blue
    ctx.fillStyle = "blue";
  
    // Check the position of the user-controlled snake and wrap it around to the opposite side of the canvas if it goes outside the boundaries
    if (x < 0) {
      x = canvas.width - segmentSize;
    } else if (x > canvas.width - segmentSize) {
      x = 0;
    }
    if (y < 0) {
      y = canvas.height - segmentSize;
    } else if (y > canvas.height - segmentSize) {
      y = 0;
    }
  
    // Check the position of the second snake and wrap it around to the opposite side of the canvas if it goes outside the boundaries
    if (x2 < 0) {
      x2 = canvas.width - segmentSize;
    } else if (x2 > canvas.width - segmentSize) {
      x2 = 0;
    }
    if (y2 < 0) {
      y2 = canvas.height - segmentSize;
    } else if (y2 > canvas.height - segmentSize) {
      y2 = 0;
    }
  
    // Update the direction of the second snake based on the position of the user-controlled snake
    if (x < x2) {
      dx2 = -segmentSize;
      dy2 = 0;
    } else if (x > x2) {
      dx2 = segmentSize;
      dy2 = 0;
    }
    if (y < y2) {
      dx2 = 0;
      dy2 = -segmentSize;
    } else if (y > y2) {
      dx2 = 0;
      dy2 = segmentSize;
    }
  
    // Draw the user-controlled snake at its current position
    ctx.fillRect(x, y, segmentSize, segmentSize);
  
    // Draw the second snake at its current position
    ctx.fillRect(x2, y2, segmentSize, segmentSize);
  
    // Update the position of the user-controlled snake based on its direction
    x += dx;
    y += dy;
  
    // Update the position of the second snake based on its direction
    x2 += dx2;
    y2 += dy2;
  }
  
  

// Create a function to move the snake
function moveSnake(event) {
  // Set the direction of the snake based on the arrow key pressed
  if (event.keyCode == 37) {
    dx = -segmentSize;
    dy = 0;
  } else if (event.keyCode == 38) {
    dx = 0;
    dy = -segmentSize;
  } else if (event.keyCode == 39) {
    dx = segmentSize;
    dy = 0;
} else if (event.keyCode == 40) {
    dx = 0;
    dy = segmentSize;
  }
}

// Add an event listener to listen for arrow key presses
document.addEventListener("keydown", moveSnake);

// Set an interval to continuously draw and move the snake
setInterval(drawSnake, speed);