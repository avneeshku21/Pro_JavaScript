// const username="avneesh"
// const age=21
// // var x=5
// // var y=8
// function add()
// {
    
//     console.log(x+y)
// }
// add()

// function myFunction() {
//     let firstName = "Krishna";
//     // This part of code can use firstName
//    }

//    myFunction()


   //*****************Global Scope
//    var x = '1'
//    const y = '2'
//    let z = '3'
//    console.log(x);    
//    console.log(y);   
//    console.log(z); 
   
     // Lexical scope is the ability for a function scope to access variables from the parent scope.
   function getNo() { 
    var x = '1'
   const y = '2'
   let z = '3'
       console.log(x);   // x is accessible here 
       console.log(y);   // y is accessible here 
       console.log(z);  // z is accessible here 
       function child()
       {

        const childname="priya"
        console.log("Avneesh",x)
        console.log(childname)
        
       }  
       child()
       
   } 
   getNo();
  

   // lexical Scope

//    function sayHello() { 
// 	let name = "John"; // Local variable 
	
// 	console.log("Hello " + name); 
// } 

// sayHello(); // Output: "Hello John" 

// Output: Uncaught ReferenceError: name is not defined

 