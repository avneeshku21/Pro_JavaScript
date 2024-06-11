// ++++++++++++++++++Array
//JavaScript arrays are resizable and can contain a mix of different data types.
//javaScript array-copy operations create shallow copies.
//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1
/**
 1 Array type of is = Object
2 in array we can add element at any index

 */

const fruits = ["Apple", "banana", "grapes", "orange", "Mango"];
// console.log(fruits);
// //console.table(fruits);
// console.log(fruits.length);
// console.log(typeof fruits);
// console.log(fruits.concat("Peas"));
// fruits[3] = "watermelon";
// console.log(fruits);

const marvels=['thor','hulk','spiderman',{name:'Avneesh', age: 21, city:'bareilly'}]
// console.log(marvels)
// console.table(marvels);
// console.log(marvels[3].name)

//+++++++++++new trick++++++++++++++++++
 const oldHeros=['Shaktiman','Doga','Dhruv','Nagraj']
 console.log(oldHeros.length)
 oldHeros[10]='Flying Jatt'
 console.log(oldHeros.length)