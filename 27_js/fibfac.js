// Team Apples Oranges :: Ishraq Mahid, Naomi Naranjo, Julia Nelson
// SoftDev pd1
// K27 -- Basic functions in JavaScript
// 2022-02-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

var fact = function(n) {
  if (n <= 1) return 1;
  else return n * fact(n - 1);
};

var fib = (n) => {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
};
