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

// function calculatecart(...num1)
// {
//     return num1
// }
// console.log(calculatecart(200,300,400))

const user={
    username: "Avneesh",
    price:200
}
function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobject(user)
handleobject({
    username:"Avii",
    price:399
})
