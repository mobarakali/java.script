// Array from MDN


/*
Creats an array
*/
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2

/*
Access (index into) an Array item
*/
var first = fruits[0];
console.log(first); // Apple
var last = fruits[fruits.length - 1];
console.log(last); // Banana

// Loop Over an Array
// TODO: Learn More about forEach
fruits.forEach(function(item, index, array){
  console.log(item,index);
});

// Add to the End of an Array
var push = fruits.push("Orange");
console.log("push:", push, "fruits: ", fruits);
console.log(typeof(push));
// Remove from the end of an Array

var pop = fruits.pop();

console.log("pop:", typeof(pop));
console.log(pop, fruits);

// Remove item from the beginning on an array
var shift = fruits.shift();
console.log(shift, fruits);

// Add item at the beginning of an array
var unShift = fruits.unshift("Apple");
console.log(unShift, fruits);

// Remove an item by index position
var num = [1,2,3,4,5,6,7,8,9];
console.log(num);
var pos = num.indexOf(3);
var removeItem = num.splice(pos,2);
console.log(removeItem, num);

// Copy an array
var copyArray = fruits;
var copyWithSlice = fruits.slice();
console.log(copyArray, copyWithSlice);

var slice  = num.slice(2,5);// copy from indexValue to indexValue
console.log(num, slice);

console.log(num['5'] != num['02']);

var items = [];
items.push('a', 'an', 'the');
console.log(items);

num[8] = 100;
console.log(Object.keys(fruits));
console.log(Object.keys(items));
console.log(Object.keys(num), num.length);
num.length = 3;// deletes array items after that length
console.log(num);
