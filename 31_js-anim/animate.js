// Team Apples Oranges :: Ishraq Mahid, Naomi Naranjo, Julia
// (Lia) Nelson
// SoftDev pd1
// K31 -- Paint Paint Paint...
// 2022-02-16
// time spent: 1.3 hours

// model for HTML5 canvas-based animation

//rerieve node in DOM via ID
var c = document.getElementById("playground");
console.log(c);

let move = document.getElementById("buttonCircle");
let stop = document.getElementById("buttonStop");

//instantiate a CanvassRenderingContext2D object
var ctx = c.getContext("2d");

console.log(ctx)
//init global state variable
let frame = 0;
let direction = 1;
let formerDirection = 1;

//https://developer.mozilla.org/en-US/docs/Web/API/
//Canvas_API/Tutorial/Basic_animations

let draw = () => {
    drawCircle();

    window.requestAnimationFrame(draw);
};

let drawCircle = () =>{
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    if (frame > c.width/2 || frame < 0) {
        direction *= -1;
        if(frame < 0){
            frame *= -1;
        }
    }
    console.log(frame);
    ctx.arc(c.width/2, c.height/2, frame, 0, 2 * Math.PI);
    ctx.fillStyle = "#C3B1E1";
    ctx.fill();
    frame += 1 * direction;
    if(direction != 0){
        formerDirection = direction;
    }
};

let pause = () => {
    direction = 0;
};

let unpause = () => {
    direction = formerDirection;
};

let leMove = () => {
    if(direction == 0){
        unpause();
    }
};

move.addEventListener('click',leMove);
stop.addEventListener('click',pause);
draw();
