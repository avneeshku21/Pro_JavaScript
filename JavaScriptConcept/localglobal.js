// const username="avneesh"
// const age=21
// // var x=5
// // var y=8
// function add()
// {
    
//     console.log(x+y)
// }
// add()

function myFunction() {
    let firstName = "Krishna";
    // This part of code can use firstName
   }

   myFunction()


   //*****************Global Scope
   var x = '1'
   const y = '2'
   let z = '3' 
   console.log(x);    // 1 
   console.log(y);    // 2 
   console.log(z);    // 3 
     
   function getNo() { 
       console.log(x);   // x is accessible here 
       console.log(y);   // y is accessible here 
       console.log(z);   // z is accessible here 
   } 
   getNo();