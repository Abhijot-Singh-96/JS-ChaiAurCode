// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It allows you to loop through the values of an iterable object without needing to access the index.

// Syntax:
// for (variable of iterable) { code to be executed }
// for (const varName of object) {
    // varName = value of each iteration (USED IN BLOCK)
    // object = iterable object like array, string, map, set, etc. (INITIALIZED OUTSIDE BLOCK)
    // NOTE : object here, doesn't mean JS object
// }

// used for: 
// array - prints values of array
// string - prints each n every word of string
// map - prints each key-value pair of map in the form of [key, value] array
// set - prints each value of set in the form of value

// NOT used for : object


// There are 2 types of data retrives from database
// i)  ["" , "" , ""]
// ii) [{} , {} , {}]

// Starting from :
// ["" , "" , ""]

// 1. for of loop on ARRAY
const array = [1, 2 ,3 ,4, 5];
for (const arr of array) {
    console.log(arr);
}
// 1
// 2
// 3
// 4
// 5

``
// 2. for of loop on STRING
const greeting = "Hello World";
for (const greet of greeting) {
    if (greet === " ") continue; // skip space character
    console.log(`Each char of greeting is: ${greet}`);
}
/* 
Each char of greeting is: H
Each char of greeting is: e
Each char of greeting is: l
Each char of greeting is: l
Each char of greeting is: o
Each char of greeting is: W
Each char of greeting is: o
Each char of greeting is: r
Each char of greeting is: l
Each char of greeting is: d
*/


// 3. for of loop on MAP

/* MAP
1. Object
2. Key-value pairs and remember insertion order
3. Keys and values can be of any type (primitive or object)
4. Keys are unique , can NOT be duplicate
5. Values can be duplicate
6. Iteration order is based on insertion order
7. Can be iterated using for-of loop

map.set(key, value) - adds a new key-value pair
map.get(key)        - retrieves the value associated with the key
map.has(key)        - checks if the key exists in the map
map.delete(key)     - removes the key-value pair from the map
map.size            - returns the number of key-value pairs in the map
map.clear()         - removes all key-value pairs from the map
map.keys()          - returns an iterator for the keys in the map
map.values()        - returns an iterator for the values in the map
map.entries()       - returns an iterator for the key-value pairs in the map

*/

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));      // 1

console.log(map.has("b"));      // true

console.log(map.get("b"));      // 2
map.set("b", 40);               // update value of key "b"
console.log(map.get("b"));      // 40

console.log(map.size);          // 3
map.delete("b");                // remove key "b"
console.log(map.size);          // 2

console.log(map.keys());        // MapIterator { 'a', 'c' }
console.log(map.values());      // MapIterator { 1, 3 }
console.log(map.entries());     // MapIterator { [ 'a', 1 ], [ 'c', 3 ] }

map.clear();                    // remove all key-value pairs
console.log(map.size);          // 0



const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
// Key: name, Value: John
// Key: age, Value: 30
// Key: city, Value: New York



const myMap2 = new Map()

myMap2.set("IN" , "India")
myMap2.set("US" , "United States")
myMap2.set("US" , "United States of America") // updating value for key "US"
myMap2.set("UK" , "United Kingdom")
console.log(myMap2);
/*
Map(3) {
  'IN' => 'India',
  'US' => 'United States of America',
  'UK' => 'United Kingdom'
}
*/



for (const key of myMap2) {
    console.log(key);
}
// This will print each key-value pair as an array
// [ 'IN', 'India' ]
// [ 'US', 'United States of America' ]
// [ 'UK', 'United Kingdom' ]


for (const key of myMap2) {
    console.log(`Key: ${key[0]}, Value: ${key[1]}`);
    // key[0] is the key, key[1] is the value
}
// Key: IN, Value: India
// Key: US, Value: United States of America 
// Key: UK, Value: United Kingdom


for (const key of myMap2.keys()) {
    console.log(`Key: ${key}`);
}
// Key: IN
// Key: US
// Key: UK


for (const values of myMap2.values()) {
    console.log(`Value: ${values}`);
}
// Value: India
// Value: United States of America
// Value: United Kingdom


// You can also use destructuring to get key and value directly
for (const [key, value] of myMap2.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}
// Key: IN, Value: India
// Key: US, Value: United States of America
// Key: UK, Value: United Kingdom


for (const [key, value] of myMap2) {
    console.log(key , ":-", value);
}
// IN :- India
// US :- United States of America
// UK :- United Kingdom



// 4. for of loop on SET
/* SET
1. Object
2. Collection of unique values (no duplicates)
3. Values can be of any type (primitive or object)
4. Iteration order is based on insertion order
5. Can be iterated using for-of loop

set.add(value)       - adds a new value to the set
set.has(value)       - checks if the value exists in the set
set.delete(value)    - removes the value from the set
set.size             - returns the number of values in the set
set.clear()          - removes all values from the set
set.values()         - returns an iterator for the values in the set
*/

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);  // duplicate value, will not be added
console.log(mySet.size);  // 3
mySet.add(4);
console.log(mySet.size);  // 4
mySet.delete(2);
console.log(mySet.size);  // 3

for (const value of mySet) {
    console.log(value);
}   
// 1
// 3
// 4

// 2 is not printed because it was deleted




// 5. (i)  for of loop on OBJECT
// NOT used for objects, use for-in loop instead    
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in obj) {                            // for-in loop
    console.log(`${key}: ${obj[key]}`);
}
// name: John
// age: 30
// city: New York



// 5. (ii)  for of loop on OBJECTS (not recommended)
// You can use for-of loop on Object.values() or Object.entries() to iterate over the values or key-value pairs of an object, but it's not recommended for general use.
const obj2 = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};


// Using Object.keys() to iterate over keys
for (const key of Object.keys(obj2)) {
    console.log(key);
}
// name
// age
// city


// Using Object.values() to iterate over values
for (const value of Object.values(obj2)) {
    console.log(value);
}
// Alice
// 25
// Wonderland


// Using Object.entries() to iterate over key-value pairs
for (const [key, value] of Object.entries(obj2)) {
    console.log(`${key}: ${value}`);
}
// name: Alice
// age: 25
// city: Wonderland

// Note: Using for-of loop on objects is not a common practice and can lead to confusion, as objects are not inherently iterable like arrays or maps.   
// It's better to use for-in loop or Object methods like Object.keys(), Object.values(), or Object.entries() for iterating over objects.
