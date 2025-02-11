// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Amrit"


// const {score} = req.body

console.log(typeof score); 
console.log(typeof (score));



let valueInNumber = Number(score)      // now, score string is converted to number  , 
//// if the string has any character other than number, it will return NaN 
//   if null is assigned to a variable, it will return 0
//   if undefined is assigned to a variable, it will return NaN

//   "33" => 33   ,   "33abc" => NaN   , null => 0 ,   undefined => NaN ,   true => 1 , false => 0 ,   "Amrit" => NaN

// NaN => Not-a-Number , but typeof NaN is number
console.log(valueInNumber);
console.log(typeof valueInNumber);


console.log(    );
console.log(    );


let isLoggedIn = 1            // true
// let isLoggedIn = 0            // false
// let isLoggedIn = ""           // false     Empty string 
// let isLoggedIn = " "          // true      not an empty string
// let isLoggedIn = "Amrit"      // true      not an empty string
// let isLoggedIn = null         // false
// let isLoggedIn = undefined    // false
// let isLoggedIn = NaN          // false

// let isLoggedIn = true         // true
// let isLoggedIn = false        // false


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)


console.log(    );
console.log(    );


let someNumber = 64                      // 64
// let someNumber = null                    // null
// let someNumber = undefined               // undefined    
//let someNumber = NaN                      // NaN 
// let someNumber = true                    // true
// let someNumber = false                   // false
// let someNumber = "Amrit"                 // Amrit
// let someNumber = "64"                    // 64
// let someNumber = "64abc"                 // 64abc
// let someNumber = " "                     //
// let someNumber = ""                      //
// let someNumber = 0                       // 0


let stringNumber = String(someNumber)      // now, someNumber number is converted to string
console.log(stringNumber);
console.log(typeof stringNumber);


console.log(    );
console.log(    );


// *************************************Operations*************************************

let value = 43
let negValue = -value
console.log(negValue);                      // -43

console.log( 2 + 3 ); // 5    // addition  
console.log( 2 - 3 ); // -1   // subtraction
console.log( 2 * 3 ); // 6    // multiplication
console.log( 2 / 3 ); // 0.6666666666666666    // division
console.log( 2 % 3 ); // 2    // modulus (remainder)
console.log( 7 % 3 ); // 1    // modulus
console.log( 2 ** 3 ); // 8   // exponentiation (power) 2^3 = 8 



console.log(    );


// ADDITION OF STRINGS
let str1 = "Amrit"
let str2 = "Singh"
let fullName = str1 + " " + str2
console.log(fullName);

//or
let str3 = "Harman"
let str4 = " Singh"
let fullName0 = str3 + str4
console.log(fullName0);

//or 
let fullName1 = `${str1} ${str2}`
console.log(fullName1);

//or
let fullName2 = str1.concat(" ", str2)
console.log(fullName2);


console.log(    );


console.log( 2 + "4" )          // 24
console.log( "2" + 4 )          // 24
console.log( "2" + 4 + 5 )      // 245      // if string is present in the beginning, it will concatenate all the numbers as string
console.log( 2 + 4 + "5" )      // 65       // if string is present in the end, beggining conversion will happen and then concatenation will happen with string

console.log(    );

console.log(true)               // true
console.log(+true)              // 1     
// console.log(true+)           // SyntaxError: Unexpected token '+'
console.log(+"")                // 0

let num1 , num2 , num3
num1 = num2 = num3 = 2+3


// INCREMENT AND DECREMENT OPERATORS
// Prefix and Postfix Operators    ++a  and  a++       
let gameCounter = 100
gameCounter++
console.log(gameCounter);       // 101 

let gameCounter1 = 200
++gameCounter1
console.log(gameCounter1);      // 201

let x = 100
const y = x++
console.log(`x:${x} y:${y}`)    // x:101 y:100

let a = 100
const b = ++a
console.log(`a:${a} b:${b}`)    // a:101 b:101