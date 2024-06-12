//So multidimensional arrays in JavaScript is known as arrays inside another array. 
/*const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

const newArr=[['Adrash'],['Avii','Kumar'],'Anisha']
console.log(newArr)
console.table(newArr);
// const len=newArr[2].length
// console.log(len)

//Acces any element
console.log(newArr[1][0])

const ticTac=[['X',null,null],[null,null,'O'],['O',null,'X']]
console.table(ticTac);
*/


// Shallow Copy
// const fruits=["Mango","Apple","Watermelon","Grapes"]
// const myFav=fruits
// myFav.push("Litch")
// myFav.push("Dates")
// console.log(myFav)
 // console.log(fruits)

// const user={
//     Fname:"Avii",
//     age:21,
//     city:"bly"
// }
// const user2=user
// user2.Fname="avneesh"
// console.log(user2)

// const student1='avneesh'
// let student2=student1

const person1={
    Fname:"Avii",
    age:21,
    city:"bly"
}
const person2={...person1}
console.log(person2)
// const newObj=Object.assign(person2,person1)
// console.log(newObj)
//new method spread operator
//newww


