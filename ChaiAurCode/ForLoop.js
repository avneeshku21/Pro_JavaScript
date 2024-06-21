// for of loop

// const arr=[2,4,6,8,10,12,14,16]

// for (const num of arr) {
    
// //console.log(num)
// }

// const greetings="Hello World"
// for (const greet of greetings) {
//     console.log(`Each char ${greet}`)
// }

//*****************Maps


//Map holds Unique value

// const map=new Map()
// map.set('IN', "India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// console.log(map)

// for (const [key, value] of map) // Destructure syntax
//      {
//     console.log(key, ':-',value)
    
// }

// const myObj={ // object is not itreateable in for of
//     'game': "Nfs",
//     'game2':"Spiderman"
// }

// for (const [key,value] of myobj) {

//     console.log(key, ':-',value)
// }


//***************For In Loop************** */

// const myObject={
//     js: "JavaScript",
//     cpp:"C++",
//     swift:"swift"
// }
// for (const key in myObject) {
   
        
//         console.log(`${key} shortcut is for ${myObject[key]}`)
    
// }
// For in loop array k case m key aati hai  value P print krne k liye =====console.log(pro[key])
// const pro=[2,3,5,6,7,8]
// for (const key in pro) {
//     console.log(key)
// }


/*****For in loop in map */
// map me ye loop irritable nhi hai
// const map=new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// for(const key in map)
//     {
//         console.log(map[key])
//     }



// Most used loop for Each loop
 const lang=['js','python', 'java','c','go']
// lang.forEach((val)=>{
// console.log(val)
// })
// function printme(item)
// {
//     console.log(item)
// }
// lang.forEach(printme)

lang.forEach((item,index,array)=>{

console.log(item,index,array)
})
