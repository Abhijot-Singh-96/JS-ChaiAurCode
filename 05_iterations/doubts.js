// symbol in array ?
const arr = new Array()
arr.push(1);
arr.push(`oye`);
arr.push("Hello");
const sym = Symbol("unique");
arr.push(sym , 2);
console.log(arr);                               // [ 1, 'oye', 'Hello', Symbol(unique), 2 ]


// can concat() join >2 arrays at a time?
const arr1 = [11,21];
const arr2 = arr1.concat(arr);
console.log(arr2);                              // [ 11, 21, 1, 'oye', 'Hello', Symbol(unique), 2 ]
const arr3 = arr2.concat(arr1,arr2)
// console.log(arr3);

const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const c = [11,12,13,14,15];

const d = a.concat(b,c);
console.log(d);                                 // [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15]


const e = a.concat(d,c,b)
console.log(e);
/*
[
   1,  2,  3,  4,  5,  1,  2,  3,  4,
   5,  6,  7,  8,  9, 10, 11, 12, 13,
   14, 15, 11, 12, 13, 14, 15,  6,  7,
   8,  9, 10
] */



// page 63, forEach() :            hot to print JS only ?

const myCoding = [
    {
        langName : "JS",
        langFileName : "One.js"
    },
    {
        langName : "Java",
        langFileName : "One.java"
    },
    {
        langName : "Python",
        langFileName : "One.py"
    }
]

myCoding.forEach( (item) => console.log(item.langName))
/*
JS
Java
Python
*/

// HOW TO PRINT "JS" ONLY ?

// myCoding.forEach( (item) => console.log(item[1].langName))          // TypeError: Cannot read properties of undefined (reading 'langName')
myCoding.forEach( (item) => {
    if(item.langName === "JS") {
        console.log(item.langName);                                    // JS
    }
});         