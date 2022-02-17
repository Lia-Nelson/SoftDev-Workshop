// Team IDon'tKnow :: Michael Borczuk, Julia (Lia) Nelson
// SoftDev pd1
// K32 -- More Moving Parts
// 2022-02-17
// time spent:

// model for HTML5 canvas-based animation


//access canvas and buttons via DOM
var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");// YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = "aqua";// YOUR CODE HERE

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0,0,500,500);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  clear(null);
  ctx.beginPath();
  ctx.arc(250, 250, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if(radius == 250) {
    growing = false;
  }
  if(radius == 0) {
    growing = true;
  }
  if(growing) {
    radius += 1;
  } else {
    radius -= 1;
  }
  window.cancelAnimationFrame(requestID);
  requestID = window.requestAnimationFrame(drawDot);

  /*
    ...to
    Wipe the canvas,
    Repaint the circle,
    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()
   */
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
  /*
    ...to
    Stop the animation
    You will need
    window.cancelAnimationFrame()
  */
};

//For DVD
//Make var imgWidth and var imgHeight
//Also imgX imgY
var dirX = -1;
var dirY= -1;
var displacement = 5;
//Not sure about the plus one
var imgX = Math.floor(Math.random() * (c.width - imgWidth + 1));
var imgY = Math.floor(Math.random() * (c.height - imgHeight + 1));
// then at intervales
imgX += displacement * dirX;
imgY += displacement * dirY;
if ((imgX <= 0) || ((imgX + imgWidth) >= c.width)) {
  dirX *= -1;
  imgX *= -1;
}
if ((imgY <= 0) || ((imgY + imgHeight) >= c.height)) {
  dirY *= -1;
  imgY *= -1;
}


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
stopButton.addEventListener( "click",  stopIt );
