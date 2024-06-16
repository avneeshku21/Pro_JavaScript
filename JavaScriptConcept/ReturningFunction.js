//Returning Function in Closures

// function add()
// {
//     console.log(a+b)

// }
// add()
// console.dir(add)
function parent()
{

const a=4
const b=5

    function add()
{
    console.log(a+b)

}
return add
}
const aadd1=parent()
console.log(aadd1)