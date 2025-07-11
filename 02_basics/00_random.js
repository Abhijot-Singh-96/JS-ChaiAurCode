console.log("HI");

const a = 10;
console.log(a);

const mySym = Symbol('Yay');
const mySym2 = Symbol('Yay');

const js = {
    name : 'Abhijot Singh',
    [mySym] : 'hye',
    mySym2 : "Lol"

}

console.log( js.name);
console.log( js[mySym]);
console.log( typeof js[mySym]);
console.log( typeof mySym);

console.log( js.mySym2);
console.log( js["mySym2"]);
console.log( js[mySym2]);
console.log( typeof js.mySym2);
console.log( typeof mySym2);
 
console.log(js);

console.log(js.name);



js.fctn = function(){
    console.log('yo yo');
    
}

js.fctn()
console.log(js.fctn);
console.log(js.fctn());

