// Team Oranges :: Ishraq Mahid, Julia Nelson
// SoftDev pd1
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08
// time spent: 1.7 hours
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

//typing o into the console returns the object with a list
//of its properties
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

//typing addItem will display the function with a list of
//its properties

//typing addItem() will result in undefined being added to
//the list of items (inner HTML)

//typing addItem(a) where a is an undefined variable returns
//a reference error

//typing addItem(n) where n is a defined variable (not) a function
//returns undefined and leads to the value of the variable (no quotes)
//being added to the list

//typing addItem(o) returns undefined and causes [object Object] to be
//added to the list

//typing addItem(f) returns undefiend and causes the function and its
//definition (e.g. function(x) { var j=30; return j+x; }) to be added
//to the list
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

//typing removeItem will display the function with a list of
//its properties

//typing removeItem() or the function without one parameter will
//return an error

//typing removeItem() with any parameter that is not a whole number within
//the indicies of the list of items in the inner HTML or a variable does
//not represent such a whole number (i.e. j) will return an error

//typing removeItem(n) where n is a whole number within the indices of the
//appropriate list will remove the element at that index
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//typing red will display the function with a list of
//its properties

//typing red() adds red to the beginning of the class list for
//all elements, changing the color only of elements that do not have
//a color class
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

//typing stripe will display the function with a list of
//its properties
//typing stripe will change the color of the list items in the
//appropriate location to either red or blue (consecutively) if
//they do not already have a color class (since the class is added
//to the beginning of the class list)
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
//returns an error if any inputs undefined variables
//returns undefined if the input is a decimal
//otherwise returns one if the input is less than or equal to 1
//for positive integers returns the appropriate fibonacci number
//variables corresponding to numbers also work as valid inputs
var fib = (n) => {
  if ((n % 1) != 0) return undefined;
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
};

// FAC
//returns an error if any inputs undefined variables
//returns undefined if the input is a decimal
//otherwise returns one if the input is less than or equal to 1
//for positive integers returns the value of its factorial
//variables corresponding to numbers also work as valid inputs
var fact = function(n) {
  if ((n % 1) != 0) return undefined;
  if (n <= 1) return 1;
  else return n * fact(n - 1);
};

// GCD
//returns an error if any inputs undefined variables
//returns undefined if either of the inputs are not integers
//else returns a positive integer corresponding (the
//greatest common denominator of the inputs)
//variables corresponding to numbers also work as valid inputs
var gcd = function(a, b) {
  if ((a % 1) != 0) return undefined;
  if ((b % 1) != 0) return undefined;
  if (b == 0) return Math.abs(a);
  else return gcd(b, (a % b));
};

addItem("fib(2): " + fib(2));
addItem("fact(5): " + fact(5));
addItem("gcd(22, 11): " + gcd(22, 11));
