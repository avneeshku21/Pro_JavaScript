const h1=document.querySelector('h1')
const input=document.querySelector('input')



input.addEventListener('keypress',(e)=>{
    console.log(e.key)

})

h1.addEventListener('keypress',(e)=>{
    console.log(e.key)

})



/*******
Jo focus element nhi hote uske liye hame = tabindex dena hota hai 


*/