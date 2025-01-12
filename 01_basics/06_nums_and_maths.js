const score = 100;
console.log(score)                             // 100        automatically defined as a number type

const balance = new Number(1000);              // Objects in JS : Number, String, Boolean, Date, Array, Function, Object            Number is a constructor function => Number()
console.log(balance)                           // [Number: 1000]        specically defined as a number type

// Prototype/Functions/Methods of Number object : toFixed(), toPrecision(), toString(), valueOf(), toExponential(), toLocaleString()


console.log(balance.toString())                // 1000        returns the string representation of the object
console.log(balance.length)                    // undefined
console.log(balance.toString().length)         // 4


// toFixed() method : returns the string, with the number written with a specified number of decimals
console.log(balance.toFixed(2))                // 1000.00     returns the string representation of the object with 2 decimal places         useful in currency in e-commerce websites
console.log(balance.toFixed())                 // 1000        0 decimal places


// toPrecision() method : returns the string, with a number written with a specified length, if necessary, rounded to a specified number of significant digits
// precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
const otherBalance = 1000.123456789
console.log(otherBalance.toPrecision(2))       // 1.0e+3      returns the string representation of the object with 2 significant digits

const num = 23
console.log(num.toPrecision(2))                // 23          returns the string representation of the object with 2 significant digits
const num1 = 23.4566
console.log(num1.toPrecision(2))               // 23          returns the string representation of the object with 2 significant digits
console.log(num1.toPrecision(3))               // 23.5        returns the string representation of the object with 3 significant digits
console.log(num1.toPrecision(4))               // 23.46       returns the string representation of the object with 4 significant digits

const num2 = 23.6566
console.log(num2.toPrecision(2))               // 24          returns the string representation of the object with 2 significant digits
console.log(num2.toPrecision(3))               // 23.7        returns the string representation of the object with 3 significant digits
console.log(num2.toPrecision(4))               // 23.66       returns the string representation of the object with 4 significant digits

const num3 = 123.8944
console.log(num3.toPrecision(2))               // 1.2e+2      
console.log(num3.toPrecision(3))               // 124
console.log(num3.toPrecision(4))               // 123.9

const num4 = 1123.8944
console.log(num4.toPrecision(2))               // 1.1e+3       1.1 * 10^3      1.1 is precision value, baaki exponential mai deta hu.
console.log(num4.toPrecision(3))               // 1.12e+3      1.12 * 10^3      1.12 is precision value, baaki exponential mai deta hu.



// toLocaleString() method : returns a string with a language-sensitive representation of this number
const num5 = 123456789
console.log(num5.toLocaleString())             // 123,456,789      returns the string representation of the object with commas for thousands separator,
//  by default in US format
console.log(num5.toLocaleString('en-IN'))      // 1,23,45,67,89    returns the string representation of the object with commas for thousands separator in Indian format or Indian numbering system



//***************************************************Maths***************************************************//
// Math is a built-in object that has properties and methods for mathematical constants and functions
// Maths libary come by default in JS

console.log(Math)                              // Object [Math] {}               in VS Code, it shows Math object
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}                        in browser console                                     returns the Math object

console.log(Math.PI)                           // 3.141592653589793      returns the value of PI
console.log(Math.E)                            // 2.718281828459045      returns the value of E
console.log(Math.SQRT2)                        // 1.4142135623730951     returns the square root of 2
console.log(Math.SQRT1_2)                      // 0.7071067811865476     returns the square root of 1/2

// abs()  is a function, not a property
console.log(Math.abs(-100))                    // 100        returns the absolute value of a number        turns negative number into positive only         
console.log(Math.abs(100))                     // 100        do not turn positive number into negative


// round() method : returns the value of a number rounded to the nearest integer            0.5 se upar ho to upar, niche ho to niche
// It is a method/function of Math object, not a property
console.log(Math.round(2.4))                   // 2          
console.log(Math.round(2.5))                   // 3

console.log(Math.ceil(2.4))                    // 3          returns top integer value
console.log(Math.floor(2.9))                   // 2          returns bottom integer value

console.log(Math.sqrt(16))                     // 4          returns the square root of a number
console.log(Math.pow(2, 3))                    // 8          returns 2^3


console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9))  // 2          returns the smallest number from the list
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9))  // 9          returns the largest number from the list



console.log(Math.random())                     // 0.12345678901234567      returns a random number between 0 and less than 1     (0 inclusive, 1 exclusive)
console.log(Math.random() * 10)                // returns a random number between 0 and less than 10
console.log((Math.random() * 10) + 1)            // minimum value is 1         +1 => to avoid '0' case      returns a random number between 1 and less than 11       
console.log(Math.floor((Math.random() * 10) + 1))     // returns integer value


let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Mahth.random())                                      //0 to 0.9999999999999999
// console.log(Math.random()* (max-min+1))                          //0 to 10.999999999999999 
// console.log(Math.floor(Math.random()* (max-min+1)))              //0 to 10
// console.log(Math.floor(Math.random()* (max-min+1))+min)          //10 to 20       10 inclusive, 20 inclusive
// max - min   => to find range
// +1          => to prevent 0 case and to include max value
// +min        => to start from min value
// Math.floor() => to get integer value


let min1 = 86
let max1 = 333
console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1)    // 86 to 333      86 inclusive, 333 inclusive