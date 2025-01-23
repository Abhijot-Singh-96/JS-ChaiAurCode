// function : means a block of code that can be called 

// syntax :   function functionName() {}            keyword : function
 
function myfuntion() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// calling the function
myfuntion                                                  // reference
myfuntion();                                               // execution                // calling the function




// function with parameters
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers()                                            // NaN            
addTwoNumbers(10, 20);                                     // 30                        
addTwoNumbers(10);                                         // NaN                       
addTwoNumbers(10, 20, 30);                                 // 30                        // extra parameters are ignored   
addTwoNumbers(10, '20');                                   // 1020                      // string concatenation
addTwoNumbers('10' , 20);                                  // 1020                      