// Array.from()
var str = "I'm Learning JavaScript.";

var arrFrom = Array.from(str);
console.log(arrFrom);

console.log(Array.from([1,2,3], x => x + x));

// Array.isArray()

console.log(Array.isArray(str)); // False
console.log(isArray(str)); // False

console.log(Array.isArray(arrFrom)); // True
