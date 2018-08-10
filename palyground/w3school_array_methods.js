        //var arr = ["One", "Two", "Three", "Four", "Five", "Six"];
        
        // splice ();
        /*
        * splice() একটা শক্তিশালী মেথড। এটা কোন এরের মাঝে নতুন এক বা একাধিক
         ভ্যালূ যোগ বা বিয়োগ করতে ব্যবহার করতে পারি। এটার মাধ্যমে আমরা এ্যারের 
         যেকোন স্থানেই নতুন ভ্যালু যোগ বা পরিবর্তন অথবা মুছে দিতে পারি। আর এ কাজটা
         করতে এর প্যারামিটার গুলোকে আমাদের ভাল ভাবে বুঝতে হবে। নিচে কয়েকটি 
         উদাহরণ দেখবো এবং আমরা সেখান থেকে বিষয়টা ভালভাবে বুঝার চেষ্টা করবো।
        * */
        console.log(arr.join(" ")); // সকল এ্যারে ভ্যালুকে রিটার্ন করবে।
        arr.splice(0,0, "Zero");  
        show(arr);
        /*প্রথম প্যারামিরটার:
         যে ক্রমানুসারে কোন নতুন ভ্যালুনিয়ে কাজ করবে। এখানে সে কোন ভ্যালূকে
         যোগ বা বিয়োগ করবে। আমাদের উপরের উদহরণে আমরা 0 নিয়েছি, অর্থ্যাৎ আমরা একেবারে 
         এ্যারের শুরুতেই এই ভ্যালু এডের কাজটি করতে চাই। 

         দ্বিতীয় প্যারামিটার:
         এটার দ্বারা আমরা নিয়ন্ত্রন করবো আমরা যেখান থেকে কাজ শুরু করবো সেখানে থেকে পরবর্তী
         কতটি ভ্যালুকে মুছেদিয়ে আমাদের নতুন ভ্যালুটি যোগ করবো। আমরা এখনে 0 দিয়েছ, এর অর্থ
         আমরা আসলে কোন ভ্যালূকে মুছে দিতে চাইনা। 

         তৃতীয় প্যারামিটার: 
         এটি অপশনাল, বা ঐচ্ছিক, আমরা এখানে যে ভ্যালুটা যোগ করতে চাই তা লিখবো। একই ভাবে 
         আমরা একাধিক ভ্যালু আমরা এখানে নিতে পারি। 
        */  
        arr.splice(0,3); // প্রথম তিনটা ভ্যালূ মুছে দেয়া হয়েছে। // Zero, One , Two;
        show(arr);

        arr.splice(0,0, "Zero","One", "Two"); // শুরুতেই আবার ভ্যালুগুলো যোগ করা হল। // Zero, One , Two;
        show(arr);

        arr.splice(1,1,"First"); // এ্যরে ইনডেক্স অনুসারে 1 নং ইনডেক্স বা ২য় ভ্যালুটা মুছে নতুন ভ্যালু 
        // এখানে যোগ করা  হয়েছে। "One" is replaced with "First"
        show(arr);
        //.splice() খুবই শক্তিশালী মেথড, এবং মনে রাখার জন্য পর্যাপ্ত অনুশীলন খুব জরুরী।
        
        
        
        
        /*
        // Concatinate Arrays
        //Note: The concat() method does not change the existing arrays. It always returns a new array.
        */
        var arr2 = [7,8,9];

        var concatArrays = arr.concat(arr2, arr, arr2); 
        // এভাবে আমরা একাধিক এরেকে যোগ করতে পারি।
        show(arr);
        show(concatArrays);

        //Concatinate two array
        var arr2 = [7,8,9];

        var concatArrays = arr.concat(arr2, arr, arr2); 
        // এভাবে আমরা একাধিক এরেকে যোগ করতে পারি।
        show(arr);
        show(concatArrays);

        show(arr2);
        var arr3 = arr2.concat("Seven", "Eight", "Nine"); 
        // এখনে নতুন  একটি এরের মাঝে বর্তমান কোন এ্যরে 
        // এবং তার সাথে নতুন কোন ভ্যালু যোগ করে রাখা যায়।
        show(arr3);
        

        // .slice(), আমরা আগে .splice() নিয়ে কাজ করেছি এখন করবো নতুন .slice() নিয়ে।

        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        console.log(animals);
        // এর কাজও অনেকটা .splice()এর মত, তবে তা splice() এর মত এ্যারের ভ্যালুগুলোকে 
        // মডিফাই করেনা, বরং অক্ষত রাখে।
        console.log("Slicing:", animals.slice(2));
        // expected output: Slicing: Array ["camel", "duck", "elephant"]
        console.log("After Slice:",animals);
        // expected output: After Slice: Array ['ant', 'bison', 'camel', 'duck', 'elephant']

        console.log("Splicing:", animals.splice(2));
        // expected output:Splicing:  Array ["camel", "duck", "elephant"]
        console.log("After Splice:",animals);
        // expected output: After Splice: Array [ "ant", "bison" ]

        /*
         slice() অনেকটা  splice() এর মত কাজ করলেও এটা আসলে এ্যারের আসল ভ্যালুকে
         কোন পরিবর্তন করেনা। পক্ষান্তরে এখানে নতুন কোন ভ্যালু যোগ করারও কোন সুযোগ নেই।
        */

        console.log(animals.slice(2, 4));
        // expected output: Array ["camel", "duck"]

        console.log(animals.slice(1, 5));
        // expected output: Array ["bison", "camel", "duck", "elephant"]

        console.log(animals.slice(-2));
        // expected output: Array ["bison", "camel", "duck", "elephant"]