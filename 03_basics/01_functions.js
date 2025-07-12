// function : means a block of code that can be called 

// syntax :   function functionName() {}            keyword : function

function myfuntion() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// calling the function
myfuntion                                                                               // reference
myfuntion();                                                                            // execution                // calling the function




// function with parameters
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers()                                            // NaN            
addTwoNumbers(10, 20);                                     // 30                        
addTwoNumbers(10);                                         // NaN                       
addTwoNumbers(10, 20, 30);                                 // 30                        // extra parameters are ignored   
addTwoNumbers(10, '20');                                   // 1020                      // string concatenation
addTwoNumbers('10', 20);                                  // 1020                      

const yay = addTwoNumbers(10, 20);
console.log(yay);                                          // undefined                 // function does not return anything                but prints to console
// console.log means it prints to the console
// yay is undefined because the function does not return anything
// printing to console does not means that the function returning the value



function add2Numbers(num1, num2) {
    const result = num1 + num2;
    return result;                                         // return statement   now the function returns a value
}

const sum = add2Numbers(10, 20);
console.log(sum);                                          // 30
const result = add2Numbers(10, 20);
console.log(result);                                       // 30
console.log(add2Numbers(10, 20));                          // 30




function add3Numbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

const sum2 = add3Numbers(10, 20, 30);
console.log(sum2);                                         // 60
console.log(add3Numbers(10, 20, 30));                      // 60


// NOTE : nothing is executed after the 'return' is mentioned in the function
console.log();




function login(username) {
    `${username} just logged in`
    return
    // The above function does not return anything because the return statement is not followed by any value

}

console.log(login('Jangjit Singh'));                // undefined      


function login2(username) {
    return `${username} just logged in`;
}
console.log(login2('Jangjit Singh'));                // Jangjit Singh just logged in
console.log(login2());                               // undefined just logged in

console.log();




function login3(username) {
    if (!username) {
        return "Please enter a username";
    }
    return `${username} just logged in`;
    
    // if (username === undefined){
    //     return "Please enter a username";          
    // }
    // return `${username} just logged in`
}

console.log(login3());                                      // Please enter a username

console.log();



function login4(username) {
    // if (!username) {
    //     return "Please enter a username";
    // }
    // return `${username} just logged in`;
    
    if (username === undefined){
        return console.log("Please enter a username");       // Please enter a username
    }
    return `${username} just logged in`
}

console.log(login4());                                        // undefined 

console.log();






// function with default parameters 
function login5(username = "Guest") {
    return `${username} just logged in`;
}
console.log(login5());                                                                  // Guest just logged in
console.log(login5("Jangjit Singh"));                                                   // Jangjit Singh just logged in


function login6(username = "Guest", password = "1234") {
    return `${username} just logged in with password ${password}`;
}
console.log(login6());                                                                  // Guest just logged in with password 1234
console.log(login6("Jangjit Singh"));                                                   // Jangjit Singh just logged in with password 1234
console.log(login6("Jangjit Singh", "password123"));                                    // Jangjit Singh just logged in with password password123

console.log();





// OBJECT in function

const obj = {
    name: "Jangjit Singh",
    age: 21,
    state: "Panjaab"
}

function printObj(anyObj){
    return `${anyObj.name} is my friend and his age is ${anyObj.age} , he lives in ${anyObj.state}.`
}


console.log(printObj(obj));                                                             // Jangjit Singh is my friend and his age is 21 , he lives in Panjaab. 
console.log(printObj(
    {
        name: "Abhi",
        age: 20,
        state: "Delhi"
    }
));                                                                                     // Abhi is my friend and his age is 20 , he lives in Delhi.
console.log( printObj(  {name: "Abhi",age: 20,state: "Delhi"}  ) );                     // Abhi is my friend and his age is 20 , he lives in Delhi.

console.log();




// ARRAY in function
const arr = [13, 42, 53, 64, 35];

function printArr(anyArr) {
    return `The array is ${anyArr}, its length is ${anyArr.length} and its second element is ${anyArr[1]}.`;
    // return "The array is ${anyArr}, its length is ${anyArr.length} and its second element is ${anyArr[1]}."                  // this will not work because the backticks are not used
                                                                                                                                // backticks are used to create template literals, which allow for string interpolation;
                                                                                                                                // O/P : The array is ${anyArr}, its length is ${anyArr.length} and its second element is ${anyArr[1]}.
}

console.log(printArr(arr));                                                              // The array is 13,42,53,64,35, its length is 5 and its second element is 42.
console.log(printArr([0, 1, 2, 3, 4, 5, 6, 7]));                                         // The array is 0,1,2,3,4,5,6,7, its length is 8 and its second element is 1.             
