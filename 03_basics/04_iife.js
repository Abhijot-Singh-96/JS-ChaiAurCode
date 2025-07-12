/*
IIFE : immediately invoked function expression

syntax :   ()()              , where (function declaration)(execution call)

1. Jo function immediatley invoke ho jaye
2. (imp point)  Global scope ke pollution se problem hoti hai kai baar, us global scope ke variable/pollution ko hatane ke liye hum IIFE ka use karte hai

2 types of IIFE :  named and simple IIFE
*/



(function iife() {
    // Named IIFE
    console.log(`DB connected`);                                    // DB connected
} )();


// NOTE :  for two IIFE to work ,  ";" must be applied at end of 1st IIFE       becz once iife is invoked , it doesn't know where to end its context


/*
(const iife2 = function(){                                          // SyntaxError: Unexpected token 'const'
    console.log('2nd DB connected');                                // function is working , but this fctn syntax not work with IIFE
})()
*/



// Simple IIFE
// ( () => ( console.log("3rd DB connected"); ))()                  // SyntaxError: Unexpected token ';'
( () => ( console.log("3rd DB connected") ))();                      // 3rd DB connected



// Passing args in params of Simple IIFE
(  name => console.log(`4th DB connected with the help of ${name}`) )('Amrit')