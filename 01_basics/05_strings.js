const name = 'Amrit'
const repoCount = 50
const isPublic = true
const repoNames = ['repo1', 'repo2', 'repo3']
console.log(name , repoCount , isPublic , repoNames)         // Amrit 50 true [ 'repo1', 'repo2', 'repo3' ]
console.log(name + repoCount + isPublic + repoNames)         // Amrit50truerepo1,repo2,repo3
console.log(name + ' has ' + repoCount + ' public repos')    // Amrit has 50 public repos
// Bad way to concatenate strings or variables

console.log()   

console.log(`My name is ${name} and my repo count is ${repoCount}`)    // My name is Amrit and my repo count is 50
// use backticks to concatenate strings or variables... more modern way
// It has string interpolation feature : make placeholders in strings and directly inject the variable in them. 
// advantage: can apply functions to the variables inside the placeholders like ${name.toUpperCase()}


console.log()   
console.log()   



// Methods of declaring strings

const singleQuote = '\'escape\'' 
const doubleQuote = "\"escape\""
const backtick = `\`escape\``
console.log(singleQuote, doubleQuote, backtick) // 'escape' "escape" `escape`


console.log()   


const gameName = new String('PUBG')
console.log(gameName)                           // [String: 'PUBG']
console.log(typeof gameName)                    // object   // not a primitive datatype
// new is used to create an object of a class or a constructor function and here String is a constructor function and gameName is an object of that constructor function 
//  constructor function is a function that is used to create objects 
console.log(gameName[0])                        // P        Accessing 0th index of the object
console.log(gameName.__proto__)                 // {} =>empty object            Accessing prototype of the object
console.log(gameName.length)                    // 4          Accessing length of the object
console.log(gameName.toUpperCase())              // PUBG      Accessing method of the object
console.log(gameName.toLowerCase())              // pubg      Accessing method of the object
console.log(gameName.indexOf('U'))               // 1         Accessing method of the object
console.log(gameName.indexOf('Z'))               // -1        Accessing method of the object : returns -1 if the character is not found
console.log(gameName.charAt(2))                  // B         Accessing method of the object  
console.log(gameName.charAt(5))                  // ''        Accessing method of the object : returns empty string if the index is not found
console.log(gameName.includes('U'))              // true      Accessing method of the object : returns true if the character is found
console.log(gameName.includes('Z'))              // false     Accessing method of the object : returns false if the character is not found

console.log(gameName.replace('PUBG', 'COD'))     // COD        Accessing method of the object : replaces PUBG with COD


console.log(gameName.substring(3,1))             // UB        swap the indexes if the start index is greater than the end index
console.log(gameName.substring(1,5))             // UBG       Accessing method of the object : returns the substring from 1 to 5
console.log(gameName.substring(-3,1))            // P         because negative indexes are treated as 0
console.log(gameName.substring(3,-1))            // PUB       because negative indexes are treated as 0
console.log(gameName.substring(-3,-1))           //           nothing is returned because negative indexes are treated as 0
// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length

console.log(gameName.slice(1,3))                 // UB        Accessing method of the object : returns the substring from 1 to 3
console.log(gameName.slice(1,5))                 // UBG       Accessing method of the object : returns the substring from 1 to 5
console.log(gameName.slice(-3,-1))               // UB        Accessing method of the object : returns the substring from -3 to -1
// difference between substring and slice is that slice can take negative indexes also
// substring excludes end index 
//  P  U  B  G 
// -4 -3 -2 -1
//  0  1  2  3

console.log(gameName.split(''))                  // [ 'P', 'U', 'B', 'G' ]        Accessing method of the object : returns the array of characters
console.log(gameName.split('U'))                 // [ 'P', 'BG' ]                 Accessing method of the object : returns the array of characters after splitting from 'U'
console.log(gameName.split('Z'))                 // [ 'PUBG' ]                    Accessing method of the object : returns the array of characters after splitting from 'Z'

const name1 = 'Akaal-Singh-Brar'
console.log(name1.split('-'))                    // [ 'Akaal', 'Singh', 'Brar' ]  Accessing method of the object : returns the array of characters after splitting from '-'
console.log(name1.split('-', 2))                 // [ 'Akaal', 'Singh' ]          Accessing method of the object : returns the array of characters after splitting from '-' and only 2 words
// splitting 3 words from a string on the basis of '-' and storing them in an array



const name0 = '      Akaal       '
console.log(name0)                               //       Akaal       : extra spaces at the start and end
console.log(name0.trim())                        // Akaal             : removes the extra spaces from the start and end of the string




// All the methods in prototype are funtions (the initial 'f' symbolizes that it is a function)



