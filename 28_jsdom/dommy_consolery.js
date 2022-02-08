/*
   your PPTASK:

   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.

    		Write with your future self or teammates in mind.

    		If you find yourself falling out of flow mode, consult
    		other teams
    		MDN

   A few comments have been pre-filled for you...

   (delete this block comment once you are done)
*/

// Team Oranges :: Ishraq Mahid, Julia Nelson
// SoftDev pd1
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)

//console returns the contents of the string as output
console.log("AYO");

//typing i into the console returns "hello"
var i = "hello";
// typing j into the console returns 20
var j = 20;

//typing a variable that is not defined into the
//console returns a reference error

//typing a literal into the console returns that
//literal


//assign an anonymous fxn to a var

//typing f into the console returns function(x) as
//well as a collapsed list of its properties
//typing f() returns NaN

//typing f(n) where n is a literal returns the
//literal achieved by applying f to n

//typing f(a) where a is an undefined variable
//returns a reference error

//typing f(j) returns that appropriate literal
//achieved by applying f to j, 50

//typing f(i) returns "30hello", the output
//achieved by applying f to the value of i
//because "hello" functions as a string, the two get appended
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
var fib = (n) => {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
};

// FAC
var fact = function(n) {
  if (n <= 1) return 1;
  else return n * fact(n - 1);
};

// GCD
