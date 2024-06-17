
// reduce means kisi bhi array ko covert kr k kisi ek value m krna
const nums=[2,2,2,2,2,2]
const sum=nums.reduce((accumulator,current )=>{
console.log(accumulator)
return  accumulator+current
},0)

console.log("sum is: ",sum)