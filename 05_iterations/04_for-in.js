// 1.  for-in loop on OBJECT

const obj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "python"
}

for ( const key in obj) {
    console.log(key);
}
/*js
cpp
rb
py */


for ( const key in obj) {
    console.log(obj[key]);
}
/*Javascript
C++
Ruby
python */


for ( const key in obj) {
    console.log(`${key} is shortcut for ${obj[key]}`);
}
/*js is shortcut for Javascript
cpp is shortcut for C++
rb is shortcut for Ruby
py is shortcut for python */


// 2.  for-in loop on ARRAY

const array = [1,3,4,6]

for(const index in array){
    console.log(index);
}
/*
0
1
2
3  */


for (const index in array){
    console.log(array[index]);
}
/*
1
3
4
6 */




// 3.  for-in loop on STRING
const myString = "Hello";
for (const index in myString) {
    console.log(index);
}
// This will print the indices of the string
/*
0
1
2
3
4
*/

for (const index in myString) {
    console.log(myString[index]);
}
// This will print the characters of the string
/*
H
e
l
l
o
*/




// 4.  for-in loop on MAP
 
const myMap = new Map([
    ["name", "Akaal Singh"],
    ["age", 25],
    ["city", "Chandigarh"]
]);

for (const key in myMap) {
    console.log(key);
}
for (const [key, value] in myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
// no error, no output for both loops
// This will not work as expected, as for-in loop is not suitable for Maps. MAPS should be iterated using forEach or for..of



// 5.  for-in loop on SET
const mySet = new Set([1, 2, 3, 4]);
for (const key in mySet) {
    console.log(key);
}   
// no error, no output

