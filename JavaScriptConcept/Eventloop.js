
//Event loop ka kaam hota hai call back queue ko check krna
console.log("Hi-1")
console.log("Hii-2")
function hello()
{
    console.log("Hello Kaise ho")
}
for(let i=0; i<=4; i++)
    {
        console.log(i)
    }
    hello()
    setTimeout (function(){
        console.log("Hello Bharat")
    },0)
    console.log("To kaise hai ap log")