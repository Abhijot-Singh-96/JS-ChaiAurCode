// *******************interesting point********************* \\



console.log(addOne(5))                               // 6                         

function addOne (num) {
    return num + 1;
}

// here writing before function declartion , but it works because of hoisting
// hoisting : means that function declarations are moved to the top of their scope during the compilation





console.log(addTwo(10));                              //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}

// here it will give error if we print console before function declaration
