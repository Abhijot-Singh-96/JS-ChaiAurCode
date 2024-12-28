/*

Difference on the basis of how data is stored in memory and how it is accessed
1. Primitive Data Types
2. Reference Data Types

Primitive Data Types : 
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol : unique value
7. bigint : for larger numbers (in wesites like reddit, facebook, etc)

call by value : memory reference of the original data is copied to the new variable, changes are made to the copy of the variable



Reference Data Types : memory reference of the original data is copied to the new variable, changes are made to the original data(not sure)
1. arrays
2. object literals
3. functions


Primitive Data Types are stored in the stack
Reference Data Types are stored in the heap
Stack is a small memory space, where the data is stored in a linear way
Stack is faster than heap
Stack is limited in size
Stack is used for static memory allocation
Heap is a large memory space, where the data is stored in a random way
Heap is slower than stack
Heap is larger in size
Heap is used for dynamic memory allocation



JS is a dynamically typed language, so we don't have to specify the datatype of the variable
JS is a weakly typed language, so we can change the datatype of the variable
JS is a single threaded language, so it can do one thing at a time
JS is a synchronous language, so it executes the code line by line
JS is a non-blocking language, so it can do other things while waiting for a response

TS is a statically typed language, so we have to specify the datatype of the variable
TS is a strongly typed language, so we can't change the datatype of the variable
TS is a multi-threaded language, so it can do multiple things at a time
TS is an asynchronous language, so it doesn't wait for a response
TS is a blocking language, so it waits for a response

*/


// ## PRIMITIVE DATA TYPES
let score = 33             // number
let name = "Amrit"         // string
let isLoggedIn = true      // boolean
let outsideTemp = null     // null

let userEmail;             // undefined
let useremail = undefined  // undefined


// SYMBOL
const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id === anotherId) // false

let sym1 = Symbol('sym1')
let sym2 = Symbol('sym1')
console.log(sym1 === sym2) // false

// symbols are unique and immutable values
// what are immuatble values?
// Immutable values are values that cannot be changed once they are created


// BIGINT
const bigIntValue = 123456789012345678901234567890123456789067855643678909885443577685756n
console.log(bigIntValue)
console.log(typeof bigIntValue)             // bigint 
// BigInt is used for larger numbers
// BigInt is a new primitive data type in JavaScript
// BigInt is used for numbers greater than 2^53 - 1


// ## REFERENCE DATA TYPES
// ARRAY
const fruits = ['apple', 'banana', 'mango']
console.log(fruits)
console.log(typeof fruits)             // object
// Array is a collection of elements


// OBJECT
const person = {
    name: 'Amrit',
    age: 23,
    city: 'Lahore'
}
console.log(person)
console.log(typeof person)             // object
// Object is a collection of key-value pairs


// FUNCTION
// syntax : function functionName() {}       or     
//          const functionName = function() {}

// Function Expression
const function1 = function() {
    console.log('Hello World!')
}
console.log(function1)

// Arrow Function
const function2 = () => {
    console.log('Hello World!')
}
console.log(function2)

// Function Declaration
function greet() {
    console.log('Hello World!')
}
console.log(greet)
console.log(typeof greet)             // function

// Function is a block of code that can be called by name
// Function can accept parameters




// ## TYPEOF OPERATOR
console.log(typeof outsideTemp)            // object         => null is an object
console.log(typeof bigIntValue)            // bigint         
console.log(typeof userEmail)              // undefined      
console.log(typeof anotherId)              // symbol        

console.log(typeof fruits)                 // object         => array is an object
console.log(typeof person)                 // object         => object is an object
console.log(typeof function1)              // function       => function is a function


