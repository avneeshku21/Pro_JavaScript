//Description
//map() creates a new array by calling a function for every array element.

//map() does not execute the function for empty elements.

//map() does not change the original array.

const cars = ["Saab", "Volvo", "BMW", "Nexon", "I10"];
 const realArr=cars.map((cars)=>{
    console.log(cars)
    return cars.toUpperCase()
 })
 console.log(realArr)
