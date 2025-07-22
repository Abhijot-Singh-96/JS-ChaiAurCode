// forEach : does NOT return values in variables, even after using return manually  , so filter() introduced

const coding = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const values = coding.forEach((item) => item);                       // SyntaxError: Unexpected token 'return'
console.log(values);                                                 // undefined, as forEach does not return anything

// filter():
// filter() creates a new array with all elements that pass the test implemented by the provided function.

// Syntax: arrName.filter((element) => condition);

// returns fctn in variable
// checks condition for each element
// if condition is true, element is added to new array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNums = nums.filter((num) => num > 5);
console.log(filteredNums);                                           // [6, 7, 8, 9, 10]


// as forEach() does not return values, we can use forEach() to push values into an array
const arr = []
const newNums = nums.filter((num) => {
    if (num > 5) {
        arr.push(num);                                               
    }
});
console.log(arr);                                                    // [6, 7, 8, 9, 10]