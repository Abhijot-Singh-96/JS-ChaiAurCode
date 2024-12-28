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
console.log(fruits)                    // [ 'apple', 'banana', 'mango' ]
console.log(typeof fruits)             // object
// Array is a collection of elements


// OBJECT
const person = {
    name: 'Amrit',
    age: 23,
    city: 'Lahore'
}
console.log(person)                    // { name: 'Amrit', age: 23, city: 'Lahore' }
console.log(typeof person)             // object
// Object is a collection of key-value pairs


// FUNCTION
// syntax : function functionName() {}       or     
//          const functionName = function() {}

// Function Expression
const function1 = function() {
    console.log('Hello World!')
}
console.log(function1)                  // [Function: function1]

// Arrow Function
const function2 = () => {
    console.log('Hello World!')
}
console.log(function2)                // [Function: function2]                      

// Function Declaration
function greet() {
    console.log('Hello World!')
}
console.log(greet)                    // [Function: greet]
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


// ______________________________________________________________________________________________________

// MEMORY ALLCOATION IN JS
// Stack Memory : used in primitve data types, we get the copy of declared value.
// Heap Memory :   used in reference data types, we get the reference of the declared original value, Any changes done are done directly to the original value.


let myYTChannel = "CodeWithAmrit"
let myNewChannel = myYTChannel
console.log(myYTChannel)            // CodeWithAmrit
myNewChannel = "CodeWithAmrit Vlogs"
console.log(myYTChannel)            // CodeWithAmrit
console.log(myNewChannel)           // CodeWithAmrit Vlogs
// In the above code, myYTChannel is a primitive data type, so it is stored in the stack memory.
// When we assigned myYTChannel to myNewChannel, we got the copy of myYTChannel value.
// When we changed the value of myNewChannel, it didn't affect the value of myYTChannel.
// So, the value of myYTChannel remained the same.


let user1 = {
    email : "amrit@google.com",
    UPI : "amrit@ybl"
}
let user2 = user1
console.log(user1)            // { email: 'amrit@google.com', UPI: 'amrit@ybl' }
user2.email = "onkar@google.com"
console.log(user1)            // { email: 'onkar@google.com', UPI: 'amrit@ybl' }
console.log(user2)            // { email: 'onkar@google.com', UPI: 'amrit@ybl' }
// In the above code, user1 is a reference data type, so it is stored in the heap memory.
// When we assigned user1 to user2, we got the reference of user1 value.
// When we changed the value of user2, it affected the value of user1.
// So, the value of user1 also changed.
