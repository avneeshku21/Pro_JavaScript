/*
Prefer to not use Var
Because  issue of block scope and Fuctional Scope
*/

const accountId = 123;

let accountEmail = "kaviikumar010@gmail.com";
var accountPass = 2124;
accountCity = "Bareilly";
accountEmail = "avneesh021@gmail.com";

console.log(accountEmail);
// accountId=23 // not allowed
// console.log(accountId)

console.table([accountId, accountEmail, accountPass, accountCity]);
