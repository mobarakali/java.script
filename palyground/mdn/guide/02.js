"use strict";

// var input;
// if(input === undefined){
//   console.log('TRUE');
// } else {
//   console.log('FALSE')
// }

// var myArray = []
// if(!myArray[0]){
//   console.log("True!")
// }

/*

var a;
console.log(a + 2);  // Return NAN
console.log(a * 2);  // Return NAN

var b;
console.log(b + " Ball"); // undefined Ball


var n = null;
console.log(n+1); // 1
console.log(n + " String") // undefined String
console.log(n * 1); // 0
*/

/*
//////////////////////////////////////
// Variable Scope
//////////////////////////////////////
// using var
if(true){
  var x = 5;
}
console.log(x); // 5

if(true){
  let y = 5;
// let only work inside a block {}
}

console.log(y); // referenceError
*/

/*
//////////////////////////////////////
// Variable hoisting
//////////////////////////////////////

//  Example 01
console.log(x === undefined); // true
var x = 3;

//  Example 2
var myVar = "Global Value";

//A:  variable not decleared inside the function
(function() {
  console.log(myVar); // Global Value
})();

//B:  variable decleared inside the function
(function() {
  console.log(myVar); // undefined
  var myVar = "Local Value";
})();

// //////////////////////////////////////////////////////
// Variable hoisting Another Example
// //////////////////////////////////////////////////////

// Example 01
var xx;
console.log(xx == undefined); // True
xx = 3;

// Example 02

var aVar = "Global";
// Case:A
(function() {
  console.log(aVar); // Global
})();

// Case:B
(function () {
  console.log(aVar); // Global
  aVar = "Local";
})();

// Case:C
(function () {
  console.log(aVar); // undefined
  var aVar = "Local";
})();


//  let dose not hoist
console.log(letVar); // a referenceError
let letVar = 2;
*/


//////////////////////////////////////////////
// Function Hoisting
//////////////////////////////////////////////

// Function Declearation
foo(); // foo!

function foo() {
  console.log('foo!');
}

// Function Expression
baz(); // TypeError: baz is not a function

var baz = function () {
  console.log('baz!');
};

// This is my try!
lorem();// will have same result

(function lorem() {
  console.log("Lorem!");
})();
