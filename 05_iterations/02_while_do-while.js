// while loop

// syntax : while (condition) {
    // code to be executed
// }


let i = 0;                                  //  1. initialization
while (i < 5) {                             //  2. condition check
    console.log(`value of i is: ${i}`);     //  3. execute block code
    i++;                                    //  4. increment
}                                           //  5. repeat until condition is false
/* 
value of i is: 0
value of i is: 1
value of i is: 2
value of i is: 3
value of i is: 4 
*/



// while loop with ARRAY

const arr = [10, 20, 30, 40, 50];
let j = 0;                                  //  1. initialization
while (j < arr.length) {                    //  2. condition check  
    console.log(`value of arr[${j}] is: ${arr[j]}`); //  3. execute block code
    j++;                                     //  4. increment
}                                           //  5. repeat until condition is false
/*
value of arr[0] is: 10
value of arr[1] is: 20
value of arr[2] is: 30
value of arr[3] is: 40
value of arr[4] is: 50
*/





// DO WHILE
// syntax : do {
//     code to be executed
// } while (condition);

let myArr = [11,22,33,44,55];
let index = 0;
do {
    console.log(`value of myArr is: ${myArr[index]}`); 
    index++;
} while (index < myArr.length);
/*  
value of myArr is: 11
value of myArr is: 22
value of myArr is: 33
value of myArr is: 44
value of myArr is: 55
*/
// NOTE : do while loop will execute at least once even if the condition is false

let k = 0;
do {
    console.log(`value of k is: ${k}`); 
    k++;
} while (k < 0); // condition is false, but do while will execute at least once
// value of k is: 0