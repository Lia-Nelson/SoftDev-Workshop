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
        mode = "circ"
    }
    else if (mode == "circ"){
        mode = "rect";
    }
    else{
        console.log("houston, we've got a problem");
    }

}

var drawRect = function(e){
  ctx.beginPath();
  let x = e.offSetX;
  let y = e.offSetY;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, 5, 10);
}

var drawCircle = function(e){
    //////
}

var draw = function(e){
    ///////
}

var wipeCanvas = () => {
    /////
}

c.addEventListener('click',draw);
var bToggler
