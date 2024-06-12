//A JavaScript function is a block of code designed to perform a particular task. It encapsulates a set of instructions that can be reused throughout a program. Functions can take parameters, execute statements, and return values, enabling code organization, modularity, and reusability in JavaScript programming.
//Function Defination

// function introDuceme()
// {
//     console.log('hi')
//     console.log("GOod Morning");
//     console.log("Kaise ho");
// }

// Function call
//const returnValue=introDuceme()
// introDuceme()
// introDuceme()
 
// function Intro(username, job)

// {
//     console.log(`Hi i am ${username} , i am ${job} `)
// }
// Intro('Avneesh','Web developer')
// Intro('Akash', 'Mechnical Engineer')

//+++++++++++++++++++ Return Fuction++++++++++

function addTwo(a,b)
{
    sum=a+b
    return sum
}
const Sum=addTwo(addTwo(4,6),addTwo(8,12))

console.log(Sum)
