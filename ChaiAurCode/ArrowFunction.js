//Execution Context
// JavaScript Execution Context is the environment in which JavaScript code is executed. It contains information about the variables, functions, and objects that are available to the code being executed, as well as the scope chain and the value of the 'this' keyword.

// An execution context has two phases:

// creation phase
// execution phase


//Note----------------------------------
// jab ham console.log(this ) krte hai to nodejs m empty object aata hai
//Aur browser m sbse jada  global object hai bo hai window object
/*
const user={
    username: "Avneesh",
    price:200,
    welcomsg: function()
    {
        console.log(`${this.username}, welcome to my website and price of this course is ${this.price}`)
        console.log(this)
    }
}
// user.welcomsg()
// user.username="AVii"
// user.welcomsg()

console.log(this)*/


//Arrow Function***************************

// function chai()
// {
//     let username="Avii"
//     //console.log("kadak Chai")
//     console.log(this.username)
// }
// chai()

// const chai= function()
// {
//     let usename="avneesh"
//     console.log(this.usename)
// }
// chai()

// const chai= ()=>
// {
//     let usename="avneesh"
//     console.log(this.usename)
//     // console.log(this)
// }
// chai()

const addtwo=(a,b)=>{
    return a+b
}
console.log(addtwo(2,5))
