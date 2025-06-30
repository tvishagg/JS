const accountId = 144553;
let accountEmail = "ani@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState; ///declaration 

//const cant be changed in value 
// we will try changing value of account id 

//accountId = 123; //throws error - not allowed

accountEmail = "abcd@email.com";
accountPassword = "18398";
accountCity ="Pune";

// console.log(accountId);
// console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// let, var and no keyword all change values  

/* No use of var to avoid any scope
conflict  - functional and block scope 
use const for constant, use let for variable 
also dont use variable without any keyword, its possible */