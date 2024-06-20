//Returning Function in Closures

// It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript

// function add()
// {
//     console.log(a+b)

// }
// add()
// console.dir(add)
/***************************** */
// function parent()
// {

// const a=4
// const b=5

//     function add()
// {
//     console.log(a+b)

// }
// return add
// }

/**********************************************************/

function outter()

{
    const a=4
    function parent()
    {
    
    
    const b=5
    
        function add()
    {
        console.log(a+b)
    
    }
    return add
    }
    return parent

}
const aadd1=outter()
console.log(aadd1)
