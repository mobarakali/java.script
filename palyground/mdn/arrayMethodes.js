/*
Mutator methods
These methods modify the array:
 */

// Array.prototype.copyWithin()

// Array.prototype.fill()

// Array.prototype.pop()
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants);
console.log(plants.pop());


// Array.prototype.push()
plants.push('Potato');
console.log(plants);


// Array.prototype.reverse()
var rev = plants.reverse();
console.log('rev:',rev);

console.log("plants :", plants);
console.log(plants.reverse());

// Array.prototype.shift()
console.log('rev:', rev)
plants.shift();
console.log("rev: ", rev);
// একটা মজার ব্যাপার দেখলাম! এরের যে কোন পরিবর্তনই আমাদের যে
// ভেরিয়েবলে reverse() এর মান সংরক্ষন করেছিলাম তা আপডেট করে
// নিচ্ছে। সম্ভবত এরের রেফারেন্স হিসেবে এটা কাজ করছে!


// Array.prototype.unshift()
plants.unshift('Val-1', 'Val-2');
console.log(plants);

/*
Accessor methods

These methods do not modify the array and return some representation of the array.*/

//Array.prototype.concat()
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

var cncat1 = array1.concat(array2);
var cncat2 = array1.concat(array2,array1,cncat1); // adding more
console.log(cncat1);
console.log(cncat2);

// Array.prototype.includes()
var arr1 = [ 1,2,3];
console.log(arr1.includes(1)); //true

var pets = ['cat', 'dog', 'rat'];

console.log(pets.includes('cat')); // true

console.log(pets.includes('at')); //false


// Array.prototype.indexOf()
var beasts = ['deer', 'bison', 'camel', 'tiger', 'lion', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2));// 5
console.log(beasts.indexOf('deer', 2));// -1

// Array.prototype.join()
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join()); // Fire, Wind, Rain

console.log(elements.join('')); // FireWindRain
console.log(elements.join('-')); // Fire-Wind-Rain


// Array.prototype.lastIndexOf()

var animals = [
    'Deer',
    'Tiger',
    'Lion',
    'Deer'
];

console.log(animals.lastIndexOf('Deer'));// 3
console.log(animals.lastIndexOf('deer'));// -1

// Array.prototype.slice()
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// copy from index 2
// 'camel', 'duck', 'elephant'

console.log(animals.slice())// copy whole array

// Array.prototype.toString()
var names = ['Tamim', 'Tayeba', 'Ryan'];
console.log(names.toString()); // Tamim, Tayeba, Ryan


// Array.prototype.toLocaleString();
var myArray = [1, 'a', new Date()];

var localStrings = myArray.toLocaleString('en', {timeZone:'GMT'});
console.log(localStrings);

var localStrings = myArray.toLocaleString('bn');
console.log(localStrings);
