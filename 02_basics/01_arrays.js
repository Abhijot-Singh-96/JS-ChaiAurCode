/*

Arrays
Arrays are a type of data structure that allows you to store multiple values in a single variable.
Arrays are objects
a special type of object with a length property and methods that allow you to manipulate the array.

JS arrays => 0 based index, resizable, contain elements of different data types, can contain objects, functions, arrays, etc.

JS  array-copy-operations    create shallow copies.
shallow copies => whose properties share the same reference point
deep copies => whose properties do not share the same reference point

*/

const myArr = [1, 2 ,3 ,4 ,5]                   // one way to declare array
const myArr2 = new Array (5,3,4,6,3)            // other way to declare array           // square brackets are not used

const myArr3 = [2, 4, "Spiderman",'Batman', true]        // different data types in array

console.log(myArr)                              // [ 1, 2, 3, 4, 5 ]
console.log(myArr[3])                           // 4
console.log(myArr2)                             // [ 5, 3, 4, 6, 3 ]
console.log(myArr3)                             // [ 2, 4, 'Spiderman', 'Batman', true ]

console.log()

// Array Methods
// push() , pop() , shift() , unshift() , splice() , slice() , concat() , includes() , indexOf() , lastIndexOf() , isArray() , join() , toString() , reverse() , sort() , fill() , copyWithin() , find() , findIndex() , filter() , map() , reduce() , some() , every() , forEach() , entries() , keys() , values() , from() , of() , toString() , toLocaleString()

// push() => adds one or more elements to the end of an array and returns the new length of the array.
// pop() => removes the last element 
// unshift() => adds one or more elements to the beginning      Saari array ki index shift karni padti hai,    so it is slower than push(),   time consuming operation(like in case of 1000 elements in array)
// shift() => removes the first element

console.log(myArr.push(10))                      // 6
console.log(myArr.push(20,30,40))                // 9
console.log(myArr)                               // [ 1, 2, 3, 4, 5, 10, 20, 30, 40 ]

console.log(myArr.pop())                         // 40                                       // no parameter required in brackets
console.log(myArr)                               // [ 1, 2, 3, 4, 5, 10, 20, 30 ]

console.log(myArr.unshift(90))                   // 8
console.log(myArr)                               // [ 90, 1, 2, 3, 4, 5, 10, 20, 30 ]

console.log(myArr.shift())                       // 90                                       // no parameter required in brackets
console.log(myArr)                               // [ 1, 2, 3, 4, 5, 10, 20, 30 ]


// Questionable methods
console.log(myArr.includes(10))                  // true            Questionable methods      returns boolean value(true/false)

console.log(myArr.indexOf(10))                   // 5               Questionable methods      returns index of element
console.log(myArr.indexOf(9))                    // -1              Questionable methods      returns -1 if element not found/exists


// join() => joins all elements of an array into a string            
const newArr = myArr.join()

console.log(myArr)                               // [ 1, 2, 3, 4, 5, 10, 20, 30 ]
console.log(typeof myArr)                        // object     
console.log(newArr)                              // 1,2,3,4,5,10,20,30                  bind bhi kar diya + datatype bhi change kar diya
console.log(typeof newArr)                       // string                


// slice() 
// splice() 

console.log("A " , myArr)                    // A  [ 1, 2, 3, 4, 5, 10, 20, 30 ]

const myn1 = myArr.slice(2,4)                // 2nd index to 4th index      // 4th index is not included
console.log(myn1)                            // [ 3, 4 ]
console.log("B " , myArr)                    // B  [ 1, 2, 3, 4, 5, 10, 20, 30 ]                     // original array is not changed

const myn2 = myArr.splice(2,4)               // 2nd index to 4th index     // 4th index is included
console.log(myn2)                            // [ 3, 4, 5, 10 ]
console.log("C " , myArr)                    // C  [ 1, 2, 20, 30 ]                                     // original array is changed


// difference in slice() and splice() =>
// slice() does not change the original array and last index is not included
// splice() changes the original array and last index is included