// .reduce() : 

// syntax : arrName.reduce((accumulator, currentValue) => accumulator + currentValue , initialValue);

// **** currentValue is same as parameter of callback fctn,  all values of array are passed in "currentValue" of fctn as arguments. ****

const nums = [1 ,2 ,3, 4 ,5]
const bro = nums.reduce((accumulator , curValue) => accumulator + curValue ,0);
const bro1 = nums.reduce((accumulator , curValue) => accumulator + curValue);
console.log(bro);           // 15
console.log(bro1);          // 15

const myNums = [1, 3, 5 ,7, 9]
const myTotal = myNums.reduce((acc, cv) => {
    console.log(`My accumulator is ${acc} and current value is ${cv}`);
    return acc + cv
},5.5)
console.log(myTotal);
/*
My accumulator is 5.5 and current value is 1
My accumulator is 6.5 and current value is 3
My accumulator is 9.5 and current value is 5
My accumulator is 14.5 and current value is 7
My accumulator is 21.5 and current value is 9
30.5
*/


const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Web development Course",
        price : 1999
    },
    {
        itemName : "DSA Course",
        price : 5999
    }
]

// const cartPrice = shoppingCart.forEach((item) => item.price).reduce((acc, cV) => acc + cV)          // TypeError: Cannot read properties of undefined (reading 'reduce')
// const cartPrice = shoppingCart.map((item) => item.price).reduce((acc, cV) => acc + cV)              // 11996
const cartPrice = shoppingCart.reduce( (acc, item) => acc + item.price , 0)                            // 11996
console.log(cartPrice);
