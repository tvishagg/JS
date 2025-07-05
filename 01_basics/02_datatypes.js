"use strict"; //treat all JS code as the newer version 

/* - any code even written without the above statement is also
treated as the newer version, but it is a good practice to write this statement 
- once this mode is in use, you cannot make any statement in the code
to use the older version */

// alert(3+3) - doesnt work here as node js, it works on browswer

// documentation : easier - mdn docs, original - ECMA tc 39 es
//avoid semicolons in JS , readability important 

let name = "ani" //string dtype
let age = 22 //number dtype
let isLoggedIn = false //boolean
let state //undefined 
let stateNew = null //assigned null empty value 


//data types 
//primitive
// number => range 2^52
// bigInt => range higher than number 
// string => single or double quotes - prefer double 


// boolean => true/false 
// null => it is a standalone value like datatype special
// undefined => only declaration

// difference bw undefined and null - undefined is when no value is assigned only declaration has happened
// null is a representation of an empty value 

//symbol => used in react, in between alot of components to identify that some component is unique - uniqueness ke liye symbol used
// it is used to defined a single componenent 

//Objects - user defined data type 

console.log(typeof "hitesh")
console.log(typeof age)

console.log(typeof null) //output as null type - it is an object
console.log(typeof undefined) //output is undefined 


//assignment 
// ecma script read a bit for data types 


