const obj = {
    username: "Jangjit Singh",
    age: 25,
    city: "Delhi",

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website!`);                              // Jangjit Singh , welcome to the website!
        console.log(this);                                                                      // { username: 'Jangjit Singh', age: 25, city: 'Delhi', welcomeMessage: [Function: welcomeMessage] }


    }
}

obj.welcomeMessage();               // Jangjit Singh , welcome to the website!
obj.username = "Abhijot Singh";
obj.welcomeMessage();               // Abhijot Singh , welcome to the website!                


console.log(this);                  // {}
// 'this' keyword refers to the global object ,   in browser it refers to the window object, in node environment it is an empty object




function chai() {
    let username = "Amrit Singh"
    console.log(this.username);                             // undefined                only useable in object
    console.log(this);                                      //.. a lot of values
    /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/ 
    
}
chai()                               



// syntax 2 :       O/P SAME AS ABOVE
const chai2 = function(){
    username: "Abhi",
    console.log(this.username);                              // undefined       // same as above syntax
    console.log(this);                                       // a lot of values
}
chai2()


// syntax 3 : ARROW FCTN
const chai3 = () => {
    username: "Abhi",
    console.log(this.username);                              // undefined        // same as above
    console.log(this);                                       // {}               // empty object
}
chai3()

// difference in Arrow and regular fctn 'this' is that       regular returns a lot of values     where Arrow fctn returns empty object '{}'


// in Node environment : {} is the global object
// in browser environment : window object is the global object

// Arrow functions are a more concise syntax for writing function expressions. They do not have their own 'this' context, which means they inherit 'this' from the parent scope. 



// ARROW FUNCTION SYNTAX :     () => {}


// explicit return : when we write return explicitly, to return the value.
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5,3))                                // 8




// Implicit return : no need to write 'return' for returning the value

const addThree = (num1, num2, num3) => num1 + num2 + num3;                      // concise body syntax  :  no return + no curly braces.
console.log(addThree(1, 2, 3))                                                  // 6


const square = num => num * num;                                                // single parameter does not need parentheses
console.log(square(4))                                                          // 16  



const arrInFctn = arr =>  `${arr[1]} and my array is ${arr}`  
console.log(arrInFctn([5, 10]))                                                 // 10

const arrInFctn2 = () =>   [2,4,63,3,3]  
console.log(arrInFctn2())                                                      // [ 2, 4, 63, 3, 3 ];



const objInFctn = obj =>  `Name: ${obj.name}, Age: ${obj.age}` ;              
console.log(objInFctn({ name: "Akaal", age: 30 }))

const objInFctn2 = ({ name, age }) => `Name: ${name}, Age: ${age}`;                    // destructuring in arrow function
console.log(objInFctn2({ name: "Akaal", age: 30 }))                                    // Name: Akaal, Age: 30

// const objInFctn3 = () => { website: "youtube.com" , user: "abc@gmail.com"}          // SyntaxError: Unexpected token ':' this will not return the object because of the curly braces.          
const objInFctn3 = () => ({ website: "youtube.com" , user: "abc@gmail.com"})           // PARANTHESES ARE NECESSARY TO RETURN AN OBJECT IN ARROW FUNCTION
console.log(objInFctn3());                                                             // { website: 'youtube.com', user: 'abc@gmail.com' }



const myArr = [1, 2, 3, 4, 5];
myArr.forEach( function () {})
myArr.forEach( () => {} ) 
// myArr.forEach( () => () )