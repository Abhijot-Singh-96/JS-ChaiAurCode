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


let someNumber = 60


let stringNumber = String(someNumber)      // now, someNumber number is converted to string
console.log(stringNumber);
console.log(typeof stringNumber);