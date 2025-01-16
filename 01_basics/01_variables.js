const accountId = 23232
let accountEmail = "abcd@gmail.com"
var accountPassword = "46532"
accountCity = "Lahore"
let accountState;

// accountId = 123452               'const' keyword is not allowed to change once assigned
accountEmail = "xyz@outlook.com"
accountPassword = "98730"
accountCity = "Amritsar"

/* 
    avoid using "var" keyword due to block scope and functional scope
*/

console.log(accountId , accountEmail)

console.table([accountId , accountEmail , accountPassword, accountCity , accountState])





/*

let var const difference

illegal shadowing : 
var can be changed to let in different scope but not vice versa
let canNOT be changed to var


var can be declared multiple times
let canNOT be declared multiple times , will give  SyntaxError: Identifier 'a' has already been declared
const canNOT be declared multiple times , will give  SyntaxError


intialization is necessary in const
intialization is not necessary in var, let
const a;  // SyntaxError: Missing initializer in const declaration




*/



