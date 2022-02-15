// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon
// SoftDev pd0
// K31 -- canvas based JS animation
// 2022-02-15t

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
//console.log(c);

var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
// console.log(dotButton);
var stopButton = document.getElementById("buttonStop"); /// GET STOP BUTTON
// console.log(stopButton);

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");
// console.log(ctx);

//set fill color to team color
ctx.fillStyle = "#c3b1e1"// YOUR CODE HERE
// console.log(ctx);

var requestID;  //init global var for use with animation frames
// tells how to connect to next frame
// not enquing double to rate of animation frames every time
// press button

//var clear = function(e) {
var clear = (e) => {
  // do not need to start new stroke because just clearing
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
  console.log("clear invoked...")

  // YOUR CODE HERE
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")

  // YOUR CODE HERE

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

  // YOUR CODE HERE
  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );

while(true) {console.log("sda")};
