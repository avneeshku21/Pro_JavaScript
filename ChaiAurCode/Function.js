/*
Note-:
1 SayMyname ->  ye hota hai refrence
    SayMyname()-> ye hota hai function execution

2 Return k baad funtion kabhi aage ka code execute nhi krta


*/

// function sayMyName()
// {
//     console.log("hello")
//     console.log("Kaise ho");
// }
// sayMyName()

function addTwo(num1,num2)
{
// console.log(num1+num2) 
return num1+num2
} 
const result=addTwo(3,4)
console.log(result);