// Singleton object =>  object made with constructor function
// singleton means only one object is created, unique object
// Object.create()  =>  Object.create() method creates a new object, using an existing object as the prototype of the newly created object.




// Obect literal => object made with {}
// Not a singleton object




// using symbols as keys                       Symbol() => creates a unique value
Symbol() === Symbol()                          // false         because both are unique values          
const mySym1 =  Symbol("key1")
const mySym2 =  Symbol("key1")

// Question : Create a symbol and make it act as key in object and print it
// Answer :  declare symbol outside object
//           apply [] around the variable name in which symbol is stored
//           print by console.log(objectName[symbolVariableName])






// Declaring an object
const jsUser = {
    name: "Amrit",                            // key: value             // as key, name = "name" ,JS treat (key) name as string
    "full Name": "Amritpal Singh",                   
    age: 20,
    "umar": 20,   
    mySym1: "myKey1",                          //  output will be correct but wrong way to use symbol as key         it is not being used as symbol but as string(typeof)
    [mySym2]: "myKey2",                          
    isMarried: false,
    location: "Amritsar",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}



console.log()



// Accessing objects : 2 ways
console.log(jsUser.name)                      // Amrit
console.log(jsUser["name"])                   // Amrit

console.log(jsUser.umar)                       // 20
console.log(jsUser["umar"])                    // 20

// console.log(jsUser.full Name)                  // SyntaxError: missing ) after argument list            no space should be in key      
console.log(jsUser["full Name"])               // Amritpal Singh


console.log()





// Adding a symbol as key in object
console.log(jsUser.mySym1)                      // myKey1
console.log(jsUser["mySym1"])                   // myKey1
console.log(jsUser[mySym1])                     // undefined
console.log(typeof jsUser.mySym1)               // string
console.log(typeof mySym1)            

console.log()

console.log(jsUser.mySym2)                     // undefined
// console.log(jsUser.[mySym2])                   // SyntaxError: Unexpected token '['
console.log(jsUser[mySym2])                    // myKey2                               right method to use symbol as key
console.log(jsUser["mySym2"])                  // undefined

console.log(typeof jsUser.mySym2)              // undefined
console.log(typeof jsUser[mySym2])             // string      ##
console.log(typeof jsUser["mySym2"])           // undefined 
console.log(typeof mySym2)                     // symbol            



console.log()



// Changing values of object and locking the object                        syntax : objectName.key = newValue            and            Object.freeze(objectName) 
jsUser.age = 25                                 // can overwrite values                               // mutable : can change values     
console.log(jsUser.age)                         // 25
// Object.freeze(jsUser)                           // right way to lock the values of object               Object.freeze(objectName) 
jsUser.freeze                                   // wrong way to lock the values of object

jsUser.age = 30                                 // can't overwrite values
console.log(jsUser.age)                         // 25                                                  error will not be shown but value will not be changed

console.log(jsUser)                             
/*
{
  name: 'Amrit',
  'full Name': 'Amritpal Singh',
  age: 25,                                                                      value not changed after freezing (Object.freeze(objectName))
  umar: 20,
  mySym1: 'myKey1',                                                              normal key behaving as string
  isMarried: false,
  location: 'Amritsar',
  lastLoginDays: [ 'Monday', 'Tuesday', 'Wednesday' ],
  [Symbol(key1)]: 'myKey2'                                                      symbol key                                                    
}
*/



console.log()




// Adding a Function in object                      syntax : objectName.key = function(){...}

jsUser.greeting = function(){
    console.log("Hello, I am JS user")
}

console.log(jsUser.greeting)                        // undefined                        because object is frozen, unfreez it to see the function   
                                                    // [Function (anonymous)]           // after unfreezing             
                                                                                        // function is not executed but  we got the reference of function

console.log(jsUser.greeting())                      // Hello, I am JS user
                                                    // undefined         



jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)               // referencing the name from the object jsUser, for that, use string interpolation  use backticks  
                                                            // this =>  for refering the same(jsUser) object          this. => accessing the keys(properties) in that object                   
}

console.log(jsUser.greetingTwo)                      // [Function (anonymous)]
console.log(jsUser.greetingTwo())                    // Hello JS user Amrit
                                                     // undefined         





jsUser.greeting()                                    // Hello, I am JS user
jsUser.greeting ()                                   // Hello, I am JS user                      not error for space                                                                    
jsUser.greetingTwo()                                 // Hello JS user Amrit



console.log()



console.log(jsUser)                                        
/*
{
  name: 'Amrit',
  'full Name': 'Amritpal Singh',
  age: 30,
  umar: 20,
  mySym1: 'myKey1',
  isMarried: false,
  location: 'Amritsar',
  lastLoginDays: [ 'Monday', 'Tuesday', 'Wednesday' ],
  greeting: [Function (anonymous)],
  greetingTwo: [Function (anonymous)],
  [Symbol(key1)]: 'myKey2'
}
*/              

