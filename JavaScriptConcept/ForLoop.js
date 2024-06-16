/**
 * 
 Note--------------------
for in loop -  ka use   
object k liye
obje ki value ko access krne k liye - console.log(key,person[key])



for of loop ka use=
Array , string
















 * 
 */

const marvels=['vulcan','hulk','thor','hercules','captain marvel']
// for(let i=0; i<marvels.length; i++)
//     {
//         console.table(marvels[i])
//     }

// for of loop
// for(a of marvels)// const ya let use krna chiye
//     {
//         console.log(a)
//     }

// const user="Avneesh"

// for(let use of user)
//     {
//         console.table(use);
//     }

//**********Object ki value ko acces krne k liye loop**********
// ye loop thoda time consuming hota hai
const site = {
    name: 'Hostman',
    age: 5,
    occupation: 'cloud service provider'
    };
    
    for (const key in site) {
    console.log(key + ': ' + site[key]);
    }
// another trick
const personkey=Object.keys(site)
for(let use of personkey)
    {
        console.log(use)
    }
    

