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

//const marvels=['thor','hulk','spiderman',{name:'Avneesh', age: 21, city:'bareilly'}]
// console.log(marvels)
// console.table(marvels);
// console.log(marvels[3].name)

//+++++++++++new trick++++++++++++++++++
 //const oldHeros=['Shaktiman','Doga','Dhruv','Nagraj']
//  console.log(oldHeros.length)
//  oldHeros[10]='Flying Jatt'
//  console.log(oldHeros.length)

 //+++++++++Array Methods

// shift Method remove element from front side
// unshift is use for add element from start
const evenNum=[2,4,6,8,10,12,14]
console.log(evenNum.shift())
console.log(evenNum.unshift(2))

//slice(optional start parameter, optional end parameter)
// slice me jo value dete hai to whi s start krta hai aur end value dene pr usse ek kam ko leta hai
// for ex-(3,7) so... slice krta hai 3 se aur  6 value tak
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

const newCityArr = cities.slice(2,4)

// splice splice(start, optional delete count, optional items to add)
// 

const food = ['pizza', 'cake', 'salad', 'cookie'];

food.splice(1,0,"burrito")

console.log(food)