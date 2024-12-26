// ## BASIC COMPARISONS
console.log( 2 > 3 )     // false    // greater than
console.log( 2 < 3 )     // true     // less than    
console.log( 2 >= 3 )    // false    // greater than or equal to 
console.log( 2 <= 3 )    // true     // less than or equal to
console.log( 2 == 3 )    // false    // equal to
console.log( 2 != 3 )    // true     // not equal to


console.log()

// ## DIFFERENT DATATYPES COMPARISONS
console.log( "2" > 1 )     // true    // JS has automatically converted string into number
console.log( "02" > 1 )    // true
// Note: Datatypes must be same while comparing because sometimes comparisons doesn't give the predictable results
// TypeScript doesn't allow comparing values with different datatypes


console.log()

// ## CONFUSING COMPARISONS
console.log( null > 0 )    // false
console.log( null == 0 )   // false
console.log( null >= 0 )   // true
console.log( null < 0 )    // false
console.log( null <= 0 )   // true
// null is converted to 0 while comparing with number
// The equality check == and comparisons > < >= <= work differently in JS
// with comparison : null is converted to a number, so null becomes 0 ;       that's why null >= 0 is true and null > 0 is false


console.log()


console.log( undefined == 0 )   // false
console.log( undefined > 0 )    // false
console.log( undefined < 0 )    // false
console.log( undefined >= 0 )   // false
console.log( undefined <= 0 )   // false
// undefined is converted to NaN while comparing with number
// The equality check == for null and undefined is true

console.log( null == undefined ) // true


console.log()


// ## STRICT EQUATILY CHECK   ===
// It doesn't do type conversion 
// It not only checks the value but also the datatype
console.log( "3" ==  3 ) // true
console.log( "3" === 3 ) // false   // because of different datatypes AND type conversion is not done

console.log( 0 == false ) // true
console.log( 0 === false ) // false