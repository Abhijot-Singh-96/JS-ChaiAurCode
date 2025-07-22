// map() : mainly used to iterate over arrays, but can also be used with other iterable objects like strings, sets, and maps.
// It creates a new array populated with the results of calling a provided function on every element in the calling array.

// Syntax: arrName.map((element) => newValue);

// It returns a new array with the results of calling the provided function on every element in the original array.

// Better than forEach()
// returns value to variable
// unlike filter(), map iterate on all values of array


// map() with ARRAY
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNums = nums.map((num) => num * 2);
console.log(doubledNums);                                       // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// map() with STRING
const str = "Hello";
// const upperStr = str.split('').map((char) => char.toUpperCase());                // [ 'H', 'E', 'L', 'L', 'O' ]
// const upperStr = str.split('').map((char) => char.toUpperCase()).join('');       // HELLO
const upperStr = str.split('').map((char) => char.toUpperCase()).join("");          // HELLO
console.log(upperStr);


// MULTIPLE MAP()
// chaining
// 1st ka result ,passed to 2nd map, result of it passed to 3rd map

const chaining = nums
    .map((num) => num * 2)                     // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    .map((num) => num + 1)                     // [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
    // .map((num) => num > 10)                 // [false, false, false, false, true, true, true, true, true, true]
    .filter((num) => num > 10)                 // [11, 13, 15, 17, 19, 21]

console.log(chaining);                         // [11, 13, 15, 17, 19, 21]
    

