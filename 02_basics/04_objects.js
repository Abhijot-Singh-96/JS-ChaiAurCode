// declare with the help of constructor
// Singleton object

const pcUser = new Object()                     // Object() => constructor function         // new => creates a new object      singleton object
console.log(pcUser)                             // {}        // empty object

const pcUser2 = {}                             
console.log(pcUser2)                            // {}        // empty object




console.log()



// 2 ways to declare object 
const user = new Object()
user.id = "123abc"
user.name = "Ranjit Singh"
user.isLoggedIn = false
console.log(user)                               // { id: '123abc', name: 'Ranjit Singh', isLoggedIn: false }

const user2 = {}
user2.id = "456def"
user2.name = "Karan Singh"
user2.isLoggedIn = true
console.log(user2)                              // { id: '456def', name: 'Karan Singh', isLoggedIn: true }




console.log()




// Adding object inside object

const tgUser = {
    email: "abhijot@google.com",
    fullname: {
        userfullname: {
            firstName: "Abhijot",
            lastName: "Singh"
        }
    }
}
console.log(tgUser)                             // {email: 'abhijot@google.com',fullname: { userfullname: { firstName: 'Abhijot', lastName: 'Singh' }   }   }
console.log(tgUser.fullname)                    // { userfullname: { firstName: 'Abhijot', lastName: 'Singh' } }
console.log(tgUser.fullname.userfullname)       // { firstName: 'Abhijot', lastName: 'Singh' }
console.log(tgUser.fullname.userfullname.firstName)  // Abhijot
console.log(tgUser.fullname?.userfullname.firstName)  // Abhijot         ? => optional chaining operator : if the value is undefined or null, the expression will short-circuit and return undefined                protection : if fullname does NOT exist




console.log()




// MERGING 2 OR MORE OBJECTS

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const obj = {target, source}                    // { target: { a: 1, b: 2 }, source: { b: 4, c: 5 } }          wrong way of merging objects         object inside object
const returnedTarget = Object.assign(target,source)
console.log(target)                             // { a: 1, b: 4, c: 5 }                           // changes the original object
console.log(source)                             // { b: 4, c: 5 }
console.log(returnedTarget)                     // { a: 1, b: 4, c: 5 }

console.log(returnedTarget == target)           // true

// Object.assign() method : copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// Object.assign() does NOT create a new object, it modifies the target object. (changes the original object)
// target de ander saare source nu merge kar ditta a


// If we want that the original object should NOT be changed, then we can pass an empty object as the first argument to Object.assign() method.
const target1 = { j: 5, k: 6 }
const source1 = { k: 8, l: 9 }
const returnedTarget1 = Object.assign({}, target1, source1)
console.log(target1)                            // { j: 5, k: 6 }                                // does NOT change the original object
console.log(source1)                            // { k: 8, l: 9 }
console.log(returnedTarget1)                    // { j: 5, k: 8, l: 9 }



//##    spread operator : ...     : like Array, we can also use spread operator to merge objects
const spreadObj = { ...target1, ...source1, ...source }
console.log(spreadObj)                          // { j: 5, k: 8, l: 9, b: 4, c: 5 }           // does NOT change the original object





// values coming from database 
// mostly comes in the form of => array of objects :         [{}, {}, {}] :      lots of objects in an array

const dbUser = [
    {
        id: 1,
        email : "abc@gmail.com"
    },
    {
        id: 2,
        email : "def@gmail.com"
    },
    {
        id: 2,
        email : "def@gmail.com"
    },
    {
        id: 2,
        email : "def@gmail.com"
    },
]

// how to access the values of objects in an array
dbUser[1].email                                        // accessing email of 2nd object        






// ##   Object.keys()        and        Object.values()      and        Object.entries() methods

const user0 = {
    name: "Ranjit Singh",
    age: 25,
    email: "ranjitsingh@gmail.com",
    isMarried: false
}

console.log(Object.keys(user0))                         // [ 'name', 'age', 'email', 'isMarried' ]                 syntax : Object.keys(objectName) 
                                                        // takes the keys of Object and returns in an array
                                                        //  output values : data type : array                       now can apply loop on it during working with dababase

console.log(Object.values(user0));                      // [ 'Ranjit Singh', 25, 'ranjitsingh@gmail.com', false ]
                                                        // returns the array from the values of object

console.log(Object.entries(user0))                      // less used               // Array in array        [   [ key , value ]  , [ key , value ]   ]
/*
[
  [ 'name', 'Ranjit Singh' ],
  [ 'age', 25 ],
  [ 'email', 'ranjitsingh@gmail.com' ],
  [ 'isMarried', false ]
]
*/






// doing loop-through in the object , and returning the values and sometimes that value does NOT exist , chances of crashing

console.log(user0.hasOwnProperty("isMarried"))           // true
console.log(user0.hasOwnProperty("isLoggedIn"))          // false

// hasOwnProperty() method : returns a boolean indicating whether the object has the specified property as its own property (not inherited from the prototype chain).






// Object desctructuring and JSON API
// Object destructuring : allows you to extract multiple properties from an object and assign them to variables in a single statement.

// both array and object destructuring is used in React              but array destructuring is rare


const course = {
    courseName: "JavaScript",
    duration: "3 months",
    price: 999,
    courseInstructor: "Ranjit Singh"
}

course.courseName


// const {which object value} = object from where
const {courseInstructor} = course

console.log(courseInstructor)                           // Ranjit Singh
console.log(course.courseInstructor)                    // Ranjit Singh              no need to write course again and again                    

const {courseInstructor : instructor} = course                                    // renaming the variable
console.log(instructor);                                // Ranjit Singh


// const navbar = (props.companyName) => {}
const navbar = ({companyName}) => {}

navbar(companyName = "Google")




/*

JSON API : JavaScript Object Notation


{
    "name": "Ranjit Singh",                             // keys are always in double quotes in JSON unlike objects
    "course": "JavaScript",
    "price": "free"
}


sometimes, API  can return an array of objects
[
    {},
    {},
    {}
]


famous APIs : randomuserme.me
tools to beautify JSON : JSONLint.com, json formatter

fetch() method : used to fetch the data from the API
*/
