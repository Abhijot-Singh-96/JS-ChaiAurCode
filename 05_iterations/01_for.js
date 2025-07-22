/*
for;
break;
continue;
*/



// for loop
// 1. initialization
// 2. condition check
// 3. execute block code  
// 4. increment/decrement
// 5. repeat until condition is false

const array = [13, 42, 53, 64, 35];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);                                               
}   
// 13
// 42
// 53
// 64
// 35




// for loop with break
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 53) {
        break; // exit the loop when element is 53
    }
    console.log(element);
}
// 13
// 42
// 53 is not printed because of break statement


// for loop with continue
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 53) {
        continue; // skip the iteration when element is 53
    }
    console.log(element);
}
// 13
// 42           // 53 is skipped
// 64
// 35



for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 53) {
        console.log(`Skipping element: ${element}`); // log the skipped element
        
        continue; // skip the iteration when element is 53
    }
    console.log(element);
}
// 13
// 42
// Skipping element: 53           // 53 is skipped
// 64
// 35