// Team Apples Oranges :: Ishraq Mahid, Naomi Naranjo, Julia (Lia)
// Nelson
// SoftDev pd1
// K30 -- canvas based JS drawing
// 2022-02-14

//rerieve node in DOM via ID
var c = document.getElementById("slate");
console.log(c);
//instantiate a CanvassRenderingContext2D object
var ctx = c.getContext("2d");
console.log(ctx)
//init global state variable
var mode = "rect";

var toggleMode = (e) => {
    console.log("original mode: " + mode);
    if(mode == "rect"){
        mode = "circ";
        bToggler.innerHTML = "Circle";
    }
    else if (mode == "circ"){
        mode = "rect";
        bToggler.innerHTML = "Rectangle";
    }
    else{
        console.log("houston, we've got a problem");
    }

};

var drawRect = function(e){
  console.log("making rect");
  ctx.beginPath();
  let x = e.offsetX;
  console.log("x: " + x);
  let y = e.offsetY;
  console.log("y: " + y);
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'red';
  console.log(ctx);
  ctx.fillRect(x, y, 50, 100);
};

var drawCircle = function(e){
  console.log("making circ");
  ctx.beginPath();
  let x = e.offsetX;
  console.log("x: " + x);
  let y = e.offsetY;
  console.log("y: " + y);
  ctx.arc(x, y, 25, 0, 360);
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'red';
  console.log(ctx);
  ctx.fill();
  ctx.stroke();
};

var draw = function(e){
  if (mode === "rect") {
      drawRect(e);
  } else {
      drawCircle(e);
  }
};

var wipeCanvas = () => {
  console.log("wiping canvas...");
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
};

c.addEventListener("click", draw);
let bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode);
let clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
