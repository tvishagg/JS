let score = "33" 
/*usually we dont get variables as clearly specified as above, we can get values from 
front end and they can be input of numbers but dtype string */

console.log(typeof(score)); //output string

// for conversion , i think we use constructors of wrapper classes which are dtype but with first letter capital 

console.log("Changed type:")
let val = Number(score);

console.log(typeof val); //output number 

console.log("Another variable being used now/n score 2")
//assume if a variable received is not pure number but you convert it to number - it will get converted and will get Nan value 


let score2 = "33abc"
console.log(typeof(score2)); //output string

console.log("Changed type:")
let val2 = Number(score2); 

console.log(typeof val2); //output number
console.log(val2) //output nan

console.log("Another variable being used now/n score 3")
let score3 = null
console.log(typeof(score3)); //output object

console.log("Changed type:")
let val3 = Number(score3);

console.log(typeof val3); //output number
console.log(val3) //output 0







console.log("Another variable being used now/n score 4")
let score4 = undefined
console.log(typeof(score4)); //output object

console.log("Changed type:")
let val4 = Number(score4);

console.log(typeof val4); //output number
console.log(val4) //output 0
