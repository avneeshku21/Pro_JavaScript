//Function arguments are the real values passed to (and received by) the function.
//If a function is called with missing arguments (less than declared), the missing values are undefined.
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function add(a,b)
{
    //console.log(arguments)// Sare arguments Object m chle jaate hain
    // return a+b
}
add(1,5,14,12,13)

//Important***************************
const Result=function ()
{
    let res=0
for(let i=0; i<arguments.length; i++)
    {
        res=res+arguments[i]
       
        
    }
   return res
}
console.log(Result(2,2,2,2))

