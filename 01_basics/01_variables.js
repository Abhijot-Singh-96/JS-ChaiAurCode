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
