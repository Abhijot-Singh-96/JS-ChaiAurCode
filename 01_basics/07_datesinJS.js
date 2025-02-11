// Temporal.now.instant()

// Dates
let myDate = new Date()
console.log(myDate)                             // 2025-01-10T14:31:22.267Z             same as ISO format (YYYY-MM-DDTHH:MM:SS.MMMZ) Z stands for Zulu time, which is UTC, which is the same as GMT, which is the same as London, UK,         MMM stands for milliseconds

console.log(myDate.toString())                  // Fri Jan 10 2025 20:01:22 GMT+0530 (India Standard Time)

console.log(myDate.toDateString())              // Fri Jan 10 2025
console.log(myDate.toTimeString())              //20:01:22 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString())            // 1/10/2025, 8:01:22 PM
console.log(myDate.toLocaleDateString())        // 1/10/2025
console.log(myDate.toLocaleTimeString())        // 8:01:22 PM

console.log(myDate.toISOString())               // 2025-01-10T14:31:22.267Z
console.log(myDate.toUTCString())               // Fri, 10 Jan 2025 14:31:22 GMT
console.log(myDate.toJSON())                    // 2025-01-10T14:31:22.267Z
// console.log(myDate.now())                       // TypeError: myDate.now is not a function

// cordinated universal Time (UTC) is the time standard commonly used across the world. It is the primary time standard by which the world regulates clocks and time. It is within about 1 second of mean solar time at 0° longitude, and is not adjusted for daylight saving time. It is effectively a successor to Greenwich Mean Time (GMT).
//  ISO stands for International Organization for Standardization. It is a worldwide federation of national standards bodies. ISO is a non-governmental organization that forms a bridge between the public and private sectors.

console.log(typeof myDate)                      // object



// Date() constructor : creates a new date object with the current date and time
// Date(year, month, day, hours, minutes, seconds, milliseconds) constructor : creates a new date object with a specified date and time


let myCreatedDate = new Date(2025, 0, 23)
console.log(myCreatedDate)                      // 2025-01-22T18:30:00.000Z            month starts from 0, so 0 is January         
//                                                 22nd January 2025, 6:30 PM, 0 milliseconds
console.log(myCreatedDate.toUTCString())         // Wed, 22 Jan 2025 18:30:00 GMT
console.log(myCreatedDate.toDateString())        // Fri Jan 23 2025
console.log(myCreatedDate.toString())            // Fri Jan 23 2025 00:00:00 GMT+0530 (India Standard Time)

// month starts from 0, so 0 is January
// year, days start from 1

let myCreatedDate1 = new Date(2025, 0, 23, 18, 30)
console.log(myCreatedDate1.toLocaleString())                     // 23/1/2025, 6:30:00 pm


// Date.now() method : returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Date.now())                         // 1739294980194        returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(myCreatedDate.getTime())            // 1737570600000

console.log(Math.floor(Date.now()/1000))        // 1739294980           returns the number of seconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60))     // 28988249             returns the number of minutes elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60/60))  // 483137                returns the number of hours elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60/60/24))  // 20130              returns the number of days elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60/60/24/30))  // 671            returns the number of months elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60/60/24/30/12))  // 55           returns the number of years elapsed since January 1, 1970 00:00:00 UTC
console.log(Math.floor(Date.now()/1000/60/60/24/30/12/10))  // 5           returns the number of decade elapsed since January 1, 1970 00:00:00 UTC

let newDate = new Date()
console.log(newDate.getTime())                  // 1736579705602            
console.log(newDate.getFullYear())              // 2025
console.log(newDate.getMonth())                 // 0
console.log(newDate.getMonth()+1)               // 1
console.log(newDate.getDate())                  // 12

// console.log(getTime())                          // ReferenceError: getTime is not defined
// console.log(Date.getFullYear())                 // TypeError: Date.getFullYear is not a function
console.log(Date)                                  // [Function: Date]

console.log(`${newDate.getDate()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`)       //12 and the time is 13:46:24       
// returns the current date and time of your PC : getTime(), getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()


console.log(newDate.toLocaleString('default', {         // default  : internationalization
    weekday: 'long', 
    year: 'numeric',                           // click ctrl + space to see the options                            
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    timeZoneName: 'short'
}))                                             // Sunday, 12 January 2025 at 1:52:47 pm IST
console.log(newDate.toLocaleString())           // 12/1/2025, 1:52:47 pm




// mistakes
// toString() , toLocaleString(), getTime() , getFullYear(), getMonth() are methods of Date object  and making a date object is required to use these methods
// Date.now can be used without making a date object because it is a static method of Date object and can be used directly with Date object