const marvel_heros = ['Spiderman', 'Ironman', 'Thor', 'Hulk']
const dc_heros = ['flash', 'Wonder', 'Aquaman', 'Cyborg']

marvel_heros.push(dc_heros)                    
// Array can contain objects, functions, arrays, etc.   so here , array is pushed inside another array
// push() => changes the original/existing array(marvel_heros)
console.log(marvel_heros)                                    // [ 'Spiderman', 'Ironman', 'Thor', 'Hulk', [ 'flash', 'Wonder', 'Aquaman', 'Cyborg' ] ]     // nested array =>array within array




// concat() => merges two or more arrays    // does not change the original array(This method returns a new array without modifying any existing arrays.)
const other_marvel_heros = ['Black Widow', 'Captain America', 'Doctor Strange', 'Antman']
const other_dc_heros = ['Superman', 'Batman', 'Green Lantern', 'Martian Manhunter']

other_marvel_heros.concat(other_dc_heros)
console.log(other_marvel_heros)                             // [ 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman' ]     // original array remains same, so store in a new variable/array
console.log(other_marvel_heros.concat(other_dc_heros))      // [ 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman', 'Superman', 'Batman', 'Green Lantern', 'Martian Manhunter' ]
console.log(other_dc_heros.concat(other_marvel_heros))      // [ 'Superman', 'Batman', 'Green', 'Martian', 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman' ]

const all_heros = other_marvel_heros.concat(other_dc_heros)
console.log(all_heros)                                      // [ 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman', 'Superman', 'Batman', 'Green Lantern', 'Martian Manhunter' ]





//## spread operator => ...
const allHeros = [...other_marvel_heros, ...other_dc_heros, ...dc_heros] 
console.log(allHeros)                                       // [ 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman', 'Superman', 'Batman', 'Green Lantern', 'Martian Manhunter', 'flash', 'Wonder', 'Aquaman', 'Cyborg' ]

//can join multiple arrays with ... operator at a time    unlike concat() method which can join only two arrays at a time




 

// flat() => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const nestedArray = [1, 2, [3, 4, [5, 6]] , 7, [8, 9], 10]
console.log(nestedArray.flat(0))                            // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, [ 8, 9 ], 10 ]         // no level deep
console.log(nestedArray.flat())                             // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10 ]                 // only one level deep
console.log(nestedArray.flat(1))                            // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10 ]
console.log(nestedArray.flat(2))                            // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]                     // two levels deep
console.log(nestedArray.flat(3))                            // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]                     // three levels deep
console.log(nestedArray.flat(Infinity))                     // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]                     // all levels deep
console.log(nestedArray.flat(-1))                           // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, [ 8, 9 ], 10 ]         // no level deep

console.log(nestedArray)                                    // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, [ 8, 9 ], 10 ]         // original array remains same, so store in a new variable/array


console.log(other_marvel_heros.concat(other_dc_heros))       // [ 'Black Widow', 'Captain America', 'Doctor Strange', 'Antman', 'Superman




// ## during data scraping

// isArray() => returns boolean value(true/false) if the object is an array
console.log(Array.isArray("Amrit"))                         // false    // string is not an array       
console.log(Array.isArray(['Amrit']))                       // true       // array is an object

// from() => creates a new, shallow-copied Array instance from an array-like or iterable object.        
// array-like => object that has length property and indexed elements
// iterable => object that can be iterated(looped) over
// shallow-copied => whose properties share the same reference point
 
console.log(Array.from("Amrit"))                             // [ 'A', 'm', 'r', 'i', 't' ]     // converts string into array        returns array of characters
console.log(Array.from(100))                                 // []                              // converts number into array        
console.log(Array.from(['Amrit']))                           // [ 'Amrit' ]                     // converts array into array

// ##
console.log(Array.from({name: 'Amrit'}))                    // []                               // converts object into array        can not convert object into array directly         
// keys ka array banau  ya  values ka array banau       when unable to convert, retuns empty array


let score1 = 100
let score2 = 'Amar'
let score3 = [300, 400, 500]
let score4 = {name: 'Amar', age: 25}
// console.log(Array.from(score1, score2, score3, score4))          // TypeError: number 200 is not a function
console.log(Array.from([score1, score2, score3, score4]))           // [ 100, 'Amar', [ 300, 400, 500 ], { name: 'Amar', age: 25 }  ] // converts variables into array
console.log(Array.of(score1, score2, score3, score4))               // [ 100, 'Amar', [ 300, 400, 500 ], { name: 'Amar', age: 25 }  ] // converts variables into array



