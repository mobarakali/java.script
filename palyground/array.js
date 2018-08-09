
// 2
/*
    var first = fruits[0];
    console.log(first);
    // Apple

    var last = fruits[fruits.length-1];
    console.log(last);
    // Banana

    // Loop Over an Array
    fruits.forEach(function(item, index, array){
       console.log(item, index);
    }); 
    / *
    TODO: forEach সম্পর্কে আরো জানতে হবে   
    * /

    //  add at the end of an array
    var newLength = fruits.push("Orange");
    console.log(newLength, fruits);

    // Removes from the end of an array
    var lastOne = fruits.pop();
    console.log(lastOne, fruits);

    // Adds beginning of an array 
    var addFirst = fruits.unshift("Orange");
    console.log("Add First", addFirst, fruits);

    // Removes From beginning of an array
    var removeFirst = fruits.shift();
    console.log("Remove First: ", removeFirst, fruits);

    // Find index of an array value
    console.log(fruits.indexOf("apple")); // shows -1 if not matched
    console.log(fruits.indexOf("Apple")); // shows indexed value if found
    fruits.push("Orange");
    console.log(fruits.indexOf("Orange")); // shows indexed value if found
    fruits.push("Apple");
    console.log(fruits);
    console.log(fruits.indexOf("Apple")); //Shows the first value if found multiple

    var newFruits = fruits.slice();
    console.log(newFruits);


/*
আমরা এখানে একটা টেক্সট নেব এবং সেটাকে উল্টাবো।
* /
var text = "I Love.";
var arr = [];
for (var i=0; i<text.length; ++i){
    arr.push(text[i]);
}

arr.reverse(); // 
console.log(arr.join(''));
*/