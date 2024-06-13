// singleton==>litreals k trh use krte hai toh Singleton nhi banta hai
// Constructor s banega to singleton hoga

//Object litreals
const mysymbol=Symbol("key1")
const jsuser={
    name:"Avneesh","fullname":"Avii Kumar",
    [mysymbol]:"key1",
    age:21,
    location:"Jaipur",
    email:"kaviikumar010@gmail.com",
    islogedin: false,
    lastlogin:["Monday","Saturday"]
}
//print krne  k liye
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["fullname"])
// console.log(jsuser[mysymbol])

// agr object ko lock krna hai to koi chnge nhi hoga
// Object.freeze(jsuser)

jsuser.greeting=function()
{
    console.log("Hello")
}
console.log(jsuser.greeting())

jsuser.greetingtwo=function()
{
    console.log(`hello js user ${this.fullname}`)
}
console.log(jsuser.greetingtwo())
