//  IF ELSE

if(true){
    
}else{

}

// short hand notation ; bad way
if(true) console.log();                     // IMPLICIT 
if(true) console.log() , console.log();
;

 // Multiple conditions
 if (true) {
    
 } else if (true) {
    
 } else {
    
 }



 // Logical operator 
 // && , || , ??
 // and , or , nullish coalescing operator

 if (true && true && true) {
    
 } else {
    
 }




 // SWITCH

 const key = "value"
 switch (key) {
    case "value":
        
        break;
 
    default:
        break;
 }


// eg :
 const month = 3;
 switch (month) {
    case 1:
        console.log("Jan");
        break;
 
    case 2:
        console.log("Feb");
        break;
 
    case 3:
        console.log("Mar");
        break;
 
    case 4:
        console.log("Apr");
        break;
 
    default:
        break;
 }

//  Note : if 'break;' not written ; then all code will execute after "value" matches, EXCEPT DEFAULT



//truthy.js
/*
falsy values : 
false       0       -0      0n (Bigint)         ""(empty String)        null        undefined       NaN


truthy values :
"0"         "false"         " "         []          {}          function(){}     (( empty array , object , function))

IMP POINT :     false == 0      false == ""      0 == "" 
*/


// Way to check
// i) array is empty

const emptyArr = []
if (emptyArr.length === 0) {
    console.log("array is empty");
}


// ii) Object is empty

const emptyObj = {}
if (Object.keys(emptyArr).length === 0) {
    console.log("Object is empty");
    // Object.keys() returns an array of the object's keys, followed by length property of array
}
// iii) String is empty
const emptyStr = "";
if (emptyStr.length === 0) {
    console.log("String is empty");
}   



// Nullish coalescing operator (??) : used to surpass null , undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

console.log( null ?? 20);
console.log( undefined ?? 25);
console.log( null ?? undefined ?? 33);
console.log( null ?? undefined ?? 33 ?? 56);



// Ternary operator : shorthand for if-else
    // syntax : condition ? true : false

const age = 18;
const isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult);  // Adult

age >= 18 ? console.log("Adult") : console.log("Minor");   // Adult 
