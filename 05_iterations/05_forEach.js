// forEach loop : inbuilt property of array 
// syntax : arrName.forEach(callbackFunction);                                          // new fctn
//          arrName.forEach(refernce of Existing function(don't execute fctn))          // existing fctn
// callback fctn : no name 
//                 fctn takes all values of array one by one as params, all the values of array are argument for callback fctn
//                 fctn can be an arrow fctn or normal fctn 


// 1. forEach loop on ARRAY
const coding = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
coding.forEach( function(item){                          // normal fctn
    console.log(item);
})

coding.forEach( (item) => console.log(item) );            // arrow fctn


// 2. forEach loop on MAP
const map = new Map([
    ["Name" , "Amrit"],
    ["Age" , 25],
    ["City" , "Chandigarh"]
])
// console.log(map);
map.forEach( (item) => console.log(item))

// 3. forEach loop on OBJECT
const obj = {
    name: "Akaal",
    age: 25,
    city: "Chandigarh"
};
Object.keys(obj).forEach( (key) => {
    console.log(`${key}: ${obj[key]}`);
});
/*
name: Akaal
age: 25
city: Chandigarh
*/

// 4. forEach loop on STRING
const str = "Hello";
str.split('').forEach( (char) => {
    console.log(char);
});
/*
H
e
l
l
o */

// 5. forEach loop on SET
const mySet = new Set([11, 12, 13, 14, 15]);
mySet.forEach( (value) => {
    console.log(value);
});
/*
11
12
13
14
15 */




// EXISTING FCTN
function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe());                           // wrong, don't use () with existing function, it will execute the function instead of passing it as a reference 
coding.forEach(printMe);                                // using existing function
/*
HTML
CSS
JavaScript
React
Node.js
*/


// forEach on ARRAY with index, array list
// coding.forEach((item, index, arr) => console.log(item, index, arr))
coding.forEach((lol, bro, lmao) => console.log(lol, bro, lmao))                 // result same as above
/*
HTML 0 [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ]
CSS 1 [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ]
JavaScript 2 [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ]
React 3 [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ]
Node.js 4 [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ] */


mySet.forEach((item, tingo , bingo) => console.log(item, tingo, bingo))
/*
11 11 Set(5) { 11, 12, 13, 14, 15 }
12 12 Set(5) { 11, 12, 13, 14, 15 }
13 13 Set(5) { 11, 12, 13, 14, 15 }
14 14 Set(5) { 11, 12, 13, 14, 15 }
15 15 Set(5) { 11, 12, 13, 14, 15 } */





// [ {} , {} , {} ]   :   iteration on objexts in ARRAY
//  Used in forEach a lot.

const myCoding = [
    {
        langName : "JS",
        langFileName : "One.js"
    },
    {
        langName : "Java",
        langFileName : "One.java"
    },
    {
        langName : "Python",
        langFileName : "One.py"
    }
]

myCoding.forEach( (bro) => console.log(bro.langName))
/*
JS
Java
Python */

// myCoding.forEach( (bro) => console.log(bro[1].langName))
// TypeError: Cannot read properties of undefined (reading 'langName')