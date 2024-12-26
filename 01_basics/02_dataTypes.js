"use strict"; // use strict mode to treat all JS code as newer version

/*
alert("Hello World!");
alert( 3+5 );

alert is a function that shows a message to the user
we are using Node.js, alert is not defined in Node.js, it is a browser function
ReferenceError: alert is not defined     
*/


console.log(3
    +
    3);
    // code readility is important and should be high


// PRIMITIVE DATATYPES
let name = "Amrit"; // string
let age = 23; // Number
let isLoggedIn = true; // boolean

// 1. number => has a range of -2^53 to 2^53
// 2. bigint => for larger numbers (in wesites like reddit, facebook, etc)
// 2. string => can be used in "" or ''       but      "" is recommended
// 3. boolean => true or false
// 4. undefined => variable is declared but not assigned
// 5. null => standalone value, it is an object
// 6. symbol => unique and immutable value, used as object property keys, used in react (a component is unique than other components, to find uniqueness)

// difference between null and undefined is that 
//          null is a value that represents "nothing" or "empty" or "value unknown" , it can be assigned (like let accountCity = null;) 
//          undefined means that is have declared a variable but not assigned any value (like let accountState;)


// 7. Object


console.log(typeof "Amrit"); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean


console.log(typeof undefined); // undefined
console.log(typeof null); // object
// typeof null is not null, it is object 
// where typeof undefined is undefined(it has a special type)
