
//{}// scope
// let a=20
// if(true)
//     {
//         let a=10
//         const b=20
//         var c=30
//         console.log("inner",a)
//     }

//console.log(a)
//console.log(b)
//console.log(c) //glovally access
//******** Nested Scope************ */ 
// function one()
// {
//     const username="avneesh"
//     function two()
//     {
//         const website='youtube'
//         console.log(username);
//     }
//     console.log(website)
//     two()
// }
// one()
if(true)
    {
        const username="Avneesh"
        if(username==="Avneesh")
            {
                const website="website"
                //console.log(username+website)
            }
            //console.log(website)
    }
   // console.log(username)
//+++++++++++++++++++++++++++++++++++INTRESTING++
function addone(num)
{
    return num+1
}
//Niche baale ko Expeession bol dete hai isko hosting bhi khte hai
 const addTwo= function (num)
 {
    return num+2
 }
 addTwo(5)